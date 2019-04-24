import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/productService/products.service';

@Component({
  selector: 'app-products-user',
  templateUrl: './products-user.component.html',
  styleUrls: ['./products-user.component.css']
})
export class ProductsUserComponent implements OnInit {
  userProducts$: Observable<Product[]>;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.userProducts$ = this.productService.getUserProduct();
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe((data) => {
      this.userProducts$ = this.productService.getUserProduct();
    });
  }

}
