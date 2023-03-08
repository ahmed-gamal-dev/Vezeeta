import { IDoctor } from './../../models/IDoctor';
import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  Doctor: IDoctor[] = [];
  doctorName: string = "";

  constructor(private DS: DoctorsService) {

  }

  SearchDoctor() {
    this.DS.getDoctor("Ahmed")
    // console.log(this.DS.doctors);
    this.Doctor = this.DS.doctors;
    console.log("this.Doctor");
  }
}
