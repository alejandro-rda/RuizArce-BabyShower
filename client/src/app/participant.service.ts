import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SuccessComponent} from './success.component';
import {MatDialog} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  uri = 'https://backend-ruizarce.herokuapp.com/participant';

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  addParticipant(personName) {
    const obj = {
      person_name: personName.name,
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe();

    this.dialog.open(SuccessComponent, {
      width: '500px',
      panelClass: 'custom-dialog-success',
    });  }
}
