import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {AppComponent, DialogOverviewComponent, ListaRegaloComponent} from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { ParticipantService } from './participant.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {SuccessComponent} from './success.component';


@NgModule({
  declarations: [
    AppComponent, DialogOverviewComponent, SuccessComponent, ListaRegaloComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatCardModule, MatButtonModule, MatIconModule,
    MatGridListModule, FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatListModule,
    HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([])
  ],
  exports: [RouterModule],
  providers: [ParticipantService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewComponent, SuccessComponent, ListaRegaloComponent]
})
export class AppModule { }
