import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  dataArr:any[]=[];
  dataTosend:any;
  activeuser:any={}
  constructor() { }
  productData=[
    {"id": 2,"title": "iPhone 10","price": 549, "stocks":400},
    {"id": 1,"title": "iPhone 9","price": 549, "stocks":500},
    {"id": 3,"title": "iPhone 11","price": 549, "stocks":600},
    {"id": 4,"title": "iPhone 12","price": 549,"stocks":700},
    {"id": 5,"title": "iPhone 13","price": 549,"stocks":800}

  ]
   productList():any{
    

    return this.productData;

  }

  addToLocalStorage(data:any){
    this.dataArr.push(data);
    localStorage.setItem("dataItems", JSON.stringify(this.dataArr));
    
  }

  getData(){
    console.log(localStorage.getItem("dataItems"));
    this.dataTosend = localStorage.getItem("dataItems");
    return JSON.parse(this.dataTosend); 
  }

  authGuard(user:any){
    this.activeuser.username= user.username;
    this.activeuser.password = user.password;
    this.activeuser.role= user.role;
  
  }

  verifyauthGuard(){
    return this.activeuser;
  }

  addProduct(product:any){
    this.productData.push(product);
  }
}
