import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-viw-vegitables',
  templateUrl: './viw-vegitables.component.html',
  styleUrls: ['./viw-vegitables.component.css']
})
export class ViwVegitablesComponent {

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
