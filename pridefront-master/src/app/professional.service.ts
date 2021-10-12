import { Professional } from './professional';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(private http: HttpClient) { }

  public professional: Professional = new Professional();
  private BASE_URL = "https://localhost:44328/api/Professionals"
  

  getProfessionals(){
    this.http.get(this.BASE_URL).subscribe(data => {
      debugger;
      console.log(data);
    });
  }

  getProfessional(email:string)
  {
    this.http.get(this.BASE_URL + "/Medico/Ginecologista").subscribe(data => {
      debugger;
      console.log(data);
    });
  }

  postProfessional(){
    debugger;
    this.http.post(this.BASE_URL, this.professional ).subscribe(data => {
      debugger;
      console.log(data);
    });
  }
}
