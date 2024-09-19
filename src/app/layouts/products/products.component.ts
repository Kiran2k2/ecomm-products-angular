import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from '../../Services/api-products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
   public productList:any;
   constructor(private apiProds:ApiProductsService){}
  ngOnInit(): void {

    this.allProductsList()
    
  }

  allProductsList(){
    this.apiProds.getAllProduct().subscribe(res=>{
      this.productList=res
      console.log(res)
    })
  }
}
