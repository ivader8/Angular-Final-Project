import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/productService/products.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      const id = data['id'];

      this.productService.getProduct(id).subscribe((product) => {
        this.product = product;
      });
    });
  }

}
