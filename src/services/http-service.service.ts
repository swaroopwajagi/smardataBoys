import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  getRequest(): Observable<any>{
    return this.http.get("http://localhost:5074/GetAllStudents")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  postRequest(data:any):Observable<any>{
    return this.http.post("http://localhost:5074/AddStudent", data)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  deleteRequest(stuId:any){
    return this.http.post("http://localhost:5074/StudentById", stuId)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:HttpErrorResponse){
    console.log("error msg", error);
    return throwError(error);
  }

}
