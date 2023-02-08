import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
viewcartdeatails:any=[]
Total:any=0
constructor(private ds:DataService,private router:Router){
 
}

ngOnInit(): void{
  this.ds.getCart().subscribe((result:any)=>{
    this.viewcartdeatails=result.message
    for (let i of this.viewcartdeatails){
      this.Total+=i.totalPrice
    }
  })
  
}
deleteCartitems(){
  this.ds.deleteCartitems().subscribe((result:any)=>{
    alert('Thank you for purchase')
    this.router.navigateByUrl('')
  },(result:any)=>{
    alert('Not Items in cart')
    this.router.navigateByUrl('')

  })
}

}
