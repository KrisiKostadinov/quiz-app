import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  get isAdmin() {
    return localStorage.getItem("user");
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);

    await this.afs.collection<User>("users").doc(credential.user.uid).valueChanges().subscribe(data => {
      localStorage.setItem("user", JSON.stringify(data));
    });

    return this.updateUserData(credential.user);
  }

  async signOut() {
    return await this.afAuth.auth.signOut();
  }

  updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    } as User;

    return userRef.set(data, { merge: true });
  }
}
