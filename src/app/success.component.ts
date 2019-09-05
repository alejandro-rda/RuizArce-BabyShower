import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from './app.component';

@Component({
  selector: 'app-success',
  templateUrl: 'success.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
