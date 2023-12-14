import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from 'src/services/product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-active-page',
  templateUrl: './active-page.component.html',
  styleUrls: ['./active-page.component.css']
})
export class ActivePageComponent {
  constructor(private product:ProductServiceService, private route:Router){}
  productinfo:any={
    id:'',
    title:'',
    price:''
  }
  productData(data:any):any{
    console.log(data);
    this.product.addProduct(data);
    this.route.navigate(['/productList'])
  }
}
