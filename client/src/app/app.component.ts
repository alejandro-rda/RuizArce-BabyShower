import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import { ParticipantService } from './participant.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { HostListener } from '@angular/core';
import {RequireMatch} from './requireMatch';
import {Participant} from './participant';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


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
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private bs: ParticipantService,
    private fb: FormBuilder) {
  }

  form: FormGroup;
  filteredOptions: Observable<Participant[]>;
  myControl = new FormControl('', [Validators.required, RequireMatch]);

  createForm() {
    this.form = new FormGroup({
      participant: this.myControl,
    });
  }

  displayFn(user?: Participant): string | undefined {
    return user ? user.name : undefined;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private _filter(name: string): Participant[] {
    const filterValue = name.toLowerCase();
    return Participant.participants.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  addBusiness(personName) {
    if (typeof personName  === 'string') {
      personName = new Participant(personName);
    }
    this.bs.addParticipant(personName);
  }

  ngOnInit(): void {
    this.createForm();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => {
          return typeof value === 'string' ? value : value.name;
        }),
        map(val => val.length >= 1 ? this._filter(val) : [])
      );
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


