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
      new Participant('Fernando Gordillo'),
      new Participant('Alvaro Leiva'),
      new Participant('Ronald Canchanya'),
      new Participant('Paul Zacarias'),
      new Participant('Daniel Erazo'),
      new Participant('Eddy Flores'),
      new Participant('Daniel Olano'),
      new Participant('Anthony Mateo'),
      new Participant('Claudia Gamarra'),
      new Participant('Carlos Araujo'),
      new Participant('Doris Arraiza'),
      new Participant('Giovanna Haro'),
      new Participant('Giancarlo Bedoya'),
      new Participant('Ronald Ramirez'),
      new Participant('Diego Cumpa'),
      new Participant('Peter Caceres'),
      new Participant('Andherson'),
      new Participant('Victor Grimaldo'),
      new Participant('Kendy Otiniano'),
      new Participant('Luis Huapaya'),
      new Participant('Paolo Ortega'),
      new Participant('Oscar Cossio'),
      new Participant('Percy Romero'),
      new Participant('Pamela Espinoza'),
      new Participant('Randy'),
      new Participant('Liliana'),
      new Participant('Jhony'),
      new Participant('Kenny Tafur'),
      new Participant('Julius Ñahuero'),
      new Participant('Rodrigo Cornejo'),
      new Participant('Bonny'),
      new Participant('Isamar'),
      new Participant('Emperatriz'),
      new Participant('Marilu'),
      new Participant('Jose Marchena'),
      new Participant('Juan Jose'),
      new Participant('Wilmer Salazar'),
      new Participant('Gerardo Camino'),
      new Participant('Braulio Vargas'),
      new Participant('Julio Ruiz'),
      new Participant('Renzo Paredes'),
      new Participant('Carlos Begazo'),
      new Participant('Javier Reategui'),
      new Participant('Carlos Villanueva'),
      new Participant('Jose Urquieta'),
      new Participant('Manuel Samanez'),
      new Participant('Jose Fernandez'),
      new Participant('Luis Millones'),
      new Participant('Richard Champoñan'),
      new Participant('Mafer'),
      new Participant('Rogger Aburto'),
      new Participant('Josh'),
      new Participant('Andre Hurtado'),
      new Participant('Raul Ortiz'),
      new Participant('Christian Sanchez'),
      new Participant('Alex Lozano'),
      new Participant('Kevin Alvarez'),
      new Participant('Daniel Andrade'),
      new Participant('Diana Vidal'),
      new Participant('Edith Menor'),
      new Participant('Katherine Medrano'),
      new Participant('Lisset Juarez'),
      new Participant('Adriana Martinez'),
      new Participant('Lester Lozano'),
      new Participant('Franklin Pajuelo'),
      new Participant('Eduardo Mendoza'),
      new Participant('Evelyn Ayala'),
      new Participant('Lisbeth Gonzales'),
      new Participant('Stephanie Flores'),
      new Participant('Nahomi Rodriguez'),
      new Participant('Felix Arenas'),
      new Participant('Michael Olaya'),
      new Participant('Michael Castillo'),
      new Participant('Lucero Vilchez'),
      new Participant('Marian Suarez'),
      new Participant('Katherine Nolazco'),
      new Participant('Yindri Bastidas'),
      new Participant('Hector Sanchez'),
      new Participant('Liliana Ibarguen'),
      new Participant('Vanessa Vilchez'),
      new Participant('Cynthia Sernaque'),
      new Participant('Eddy Peña'),
      new Participant('Marco Ravello'),
      new Participant('Luisa Flores'),
      new Participant('Claudia Ulloa'),
      new Participant('Marianella Becerra'),
      new Participant('Stephanie Meneses'),
      new Participant('Gustavo Roque'),
      new Participant('Daniela Roque'),
      new Participant('Giovanny Fonseca'),
      new Participant('Diana Vasquez'),
      new Participant('Nery Talledo'),
      new Participant('Hadit Talledo'),
      new Participant('Katesbeth Talledo'),
      new Participant('Naty Talledo'),
      new Participant('Rocio Echevarria'),
      new Participant('Freddy Candiotti'),
      new Participant('Gladys'),
      new Participant('Roger Talledo'),
      new Participant('Renan Roque'),
      new Participant('Irirs Villegas'),
      new Participant('Bernabe Roque'),
      new Participant('Edith Roque'),
      new Participant('Manuel Parinango'),
      new Participant('Luciana Parinango'),
      new Participant('Robert Cruzalegui'),
      new Participant('Sindy Cruzalegui'),
      new Participant('Margarita Huamancondor'),
      new Participant('Luis Roque'),
      new Participant('Natividad Nores'),
      new Participant('Cerapio Roque'),
      new Participant('Doris Peña'),
      new Participant('Sergio Roque'),
      new Participant('Mariella Romero'),
      new Participant('Omar Pacherrez'),
      new Participant('Leo'),
      new Participant('Lee Rosales'),
      new Participant('Teddy bautista'),
      new Participant('Jose Huerta'),
      new Participant('Juan Carlos Correa'),
      new Participant('Alex Leo'),
      new Participant('Daniela Leo'),
      new Participant('Elita Ruiz'),
      new Participant('Andrea Ruiz')
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


