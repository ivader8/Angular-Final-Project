import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import {ProductsService} from 'src/app/services/productService/products.service'

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.css']
})
export class ProductsAllComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    setTimeout(()=> {
      this.products$ = this.productsService.getAllProducts();
    }, 2000)
  }

}
