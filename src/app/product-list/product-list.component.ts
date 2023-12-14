import { Component } from '@angular/core';
import { ProductServiceService } from 'src/services/product-service.service';
import { HttpServiceService } from 'src/services/http-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  student:any={
    studentId:""
  };
  getdata:any;
  flag:any;
  productData:any;
  productInfo:any={};
  constructor(private product:ProductServiceService, private methods:HttpServiceService){}
  ngOnInit(){
    this.productData = this.product.productList();
    console.log(this.productData);
    this.flag=false;
    

  }
 
  clickfunc(){
    this.methods.getRequest().subscribe((data:any)=>{
      console.log("data from request", data);
        this.postRequest(data);
    })
   
  }
  
 postRequest(requestData:any){
  this.getdata = requestData;
 }

toDelete(id:any){
  console.log("id is",id);
  this.student.studentId = id;
  console.log(this.student);
  this.methods.deleteRequest(this.student).subscribe((msg)=>{
    console.log("data deleted successfully");
  })
}

 dataToPost(postData:any){
  console.log(postData);
  this.methods.postRequest(postData).subscribe((msg)=>{
    console.log("data posted successfully", msg);
  })
 }
  getDetails(productDetails:any):any{
   
    this.flag=true;
    this.productInfo.id = productDetails.id;
    this.productInfo.title = productDetails.title;
    this.productInfo.price = productDetails.price;
    this.productInfo.stocks = productDetails.stocks;
  }
}
