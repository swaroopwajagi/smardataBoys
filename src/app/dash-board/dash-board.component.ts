import { Component } from '@angular/core';
import { ProductServiceService } from 'src/services/product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  activepage:any;
  constructor(private product:ProductServiceService, private route:Router){}
  navigate(){
 
    this.activepage = this.product.verifyauthGuard();
    console.log(this.activepage);
    if(this.activepage.role=="Provider"){
        this.route.navigate(['/activePage'])
    }
    else{
      alert("you are not authorized for this page");
    }
  }

  signout():any{
    console.log("signout");
    localStorage.clear();
    this.route.navigate(['/registerpage'])
  }
}
