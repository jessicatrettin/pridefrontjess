import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(private http: HttpClient) { }

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
}
