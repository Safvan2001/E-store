import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  addtocart(productName:any,price:any,quantity:any){
    const data={
      productName,price,quantity
    }
    return this.http.post('http://localhost:3000/addtocart',data)

  }


  getCart(){
    const body={}
    return this.http.post('http://localhost:3000/getCart',body)
  }

  deleteCartitems(){
    const body={}
    return this.http.delete('http://localhost:3000/deleteCartitems',body)
  }
 


}
