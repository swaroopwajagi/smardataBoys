import { Component } from '@angular/core';
import { ProductServiceService } from 'src/services/product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  constructor(private product:ProductServiceService, private route:Router){}
  userList:any[]=[];
  userInfo:any= {
    username:'',
    password:'',
    role:''
  }

  addUserData(){
    this.userList.push(this.userInfo);
    this.product.addToLocalStorage(this.userInfo);
    console.log(this.userList);
    this.userInfo= {
      username:'',
      password:'',
      role:''
    }
    this.route.navigate(['/login'])
  }
}
