import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayTestComponent } from './play-test/play-test.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    PlayTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
})
export class TestModule { }
