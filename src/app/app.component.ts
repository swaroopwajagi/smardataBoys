import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartDataTest';

  constructor(private http:HttpClient){

  }
  students:any=[];

  getstudents(){
    this.http.get('http://localhost:5074/GetAllStudents').subscribe(data=>{
      this.students=data;
    })
  }

  ngOnInit(){
    this.getstudents();
  }

}
