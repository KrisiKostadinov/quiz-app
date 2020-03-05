import { Component, OnInit } from '@angular/core';
import { AuthService } from '../test/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Викторина';

  constructor(
    public auth: AuthService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  adminWindow(): void {
    this.dialog.open(AdminComponent, {
      width: '400px'
    });
  }

}
