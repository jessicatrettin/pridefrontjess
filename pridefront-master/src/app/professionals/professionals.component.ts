import { ProfessionalService } from './../professional.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements OnInit {

  constructor(public professionalService: ProfessionalService) { }

  ngOnInit(): void {
  }

  post(){
    debugger;
    this.professionalService.postProfessional()
  }

}
