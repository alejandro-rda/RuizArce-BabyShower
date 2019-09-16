import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import { ParticipantService } from './participant.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HostListener } from '@angular/core';


export interface DialogData {
  animal: string;
  name: string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BabyShower Ruiz & Arce';
  flipped: boolean;

  animal: string;
  name: string;
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      panelClass: 'custom-dialog-container',
      data: {name: this.name, animal: this.animal}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });

  }
    openListaRegalos(): void {
      const dialogRef = this.dialog.open(ListaRegaloComponent, {
        panelClass: 'custom-dialog-container',
        data: {name: this.name, animal: this.animal}
      });

      dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });

  }

}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogOverviewComponent implements OnInit {

  angForm: FormGroup;
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
  ];
  // Declare height and width variables
  scrHeight: any;
  scrWidth: any;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrWidth);
  }

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private bs: ParticipantService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      personName: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ]+')]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addBusiness(personName) {
    this.bs.addParticipant(personName);
  }

  ngOnInit(): void {
    this.getScreenSize();
  }
}

@Component({
  selector: 'app-regalo-component',
  templateUrl: 'regalo.component.html',
  styleUrls: ['./dialog.component.css']
})
export class ListaRegaloComponent implements OnInit {

  angForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private bs: ParticipantService,
    private fb: FormBuilder) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}


