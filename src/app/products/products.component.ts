import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products:any=[]
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.getAllProducts()
    .subscribe((result:any)=>{
      this.products = result.products
      console.log(this.products);
    })
  }

}
