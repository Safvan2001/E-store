import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-meats',
  templateUrl: './meats.component.html',
  styleUrls: ['./meats.component.css']
})
export class MeatsComponent {
  constructor(private ds:DataService,private fb:FormBuilder){

  }

  cartForm=this.fb.group({
    quantity:['']
  })


  addtocart(productName:any,price:any){
    // var uname=this.registerForm.value.uname
    var qtity=this.cartForm.value.quantity
    this.ds.addtocart(productName,price,qtity).subscribe((result:any)=>{
      alert(result.message)
    },
    (result:any)=>{alert(result.error.message)})
    console.log(qtity,productName,price);
    



  }

}
