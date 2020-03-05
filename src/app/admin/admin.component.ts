import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddQuestionComponent } from '../question/add-question/add-question.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

  addQuestion() {
    this.dialog.open(AddQuestionComponent, {
      width: '700px'
    });
  }

  cancel() {
    this.dialogRef.close();
  }

}
