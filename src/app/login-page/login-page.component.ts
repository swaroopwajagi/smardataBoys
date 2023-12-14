import { Component } from '@angular/core';
import { ProductServiceService } from 'src/services/product-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private product:ProductServiceService, private route:Router){}
  registerList:any[]=[];
  loginData:any={
    username:'',
    password:''
  }
  count:any = 0;
  verifyUser(){
    this.registerList= this.product.getData();
    console.log("data from service",this.registerList);
    this.registerList.forEach((user:any)=>{
      if(user.username == this.loginData.username && user.password == this.loginData.password){
        this.product.authGuard(user);
        alert("login successfully");
        this.count = 1;
        this.route.navigate(["/dashBoard"])
      }
      else{
        this.count =0;
      }
    })

    if(this.count == 0){
      alert("invalid credentials")
    }
  }
}
