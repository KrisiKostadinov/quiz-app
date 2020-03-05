import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: AngularFirestoreCollection<Question>;

  constructor(private fs: AngularFirestore) {
    this.questions = this.fs.collection<Question>("questions");
  }

  add(question: Question) {
    return this.questions.add(question);
  }

  all() {
    return this.questions.valueChanges({ idField: "id" });
  }

}
