import { Component, OnInit } from '@angular/core';
import { AuthService } from '../test/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Викторина';

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
}
