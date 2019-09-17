import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import { ParticipantService } from './participant.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { HostListener } from '@angular/core';
import {RequireMatch} from './requireMatch';
import {Participant} from './participant';


export interface DialogData {
  animal: string;
  name: string;
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

  form: FormGroup;
  participants: Participant[];
  scrHeight: any;
  scrWidth: any;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private bs: ParticipantService,
    private fb: FormBuilder) {
    this.participants = [
      new Participant('Alejandro Ruiz'),
      new Participant('Alvaro Leiva'),
      new Participant('Ronald Canchanya'),
      new Participant('Fernando Gordillo')
    ];
  }

  createForm() {
    this.form = new FormGroup({
      participant: new FormControl('', [Validators.required, RequireMatch]),
    });
  }

  displayWith(obj?: any): string | undefined {
    return obj ? obj.name : undefined;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addBusiness(personName) {
    this.bs.addParticipant(personName);
  }

  ngOnInit(): void {
    this.createForm();
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


