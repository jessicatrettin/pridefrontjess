import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  private BASE_URL = "https://localhost:44328/api/Patients" 

  getPatients(){
    this.http.get(this.BASE_URL).subscribe(data => {
      debugger;
      console.log(data);
    });
  }

  getPatient(email:string)
  {
    this.http.get(this.BASE_URL + "/Medico/Ginecologista").subscribe(data => {
      debugger;
      console.log(data);
    });
  }
}
