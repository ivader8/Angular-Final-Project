import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/productService/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      title:  ['', [Validators.required, Validators.minLength(4)]],
      type: ['', [Validators.required, Validators.minLength(4)]],
      year: ['', [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(1)]],
      image: ['', Validators.required]
    });
  }

  createProduct() {
    this.productService.createProduct(this.form.value).subscribe((data) => {
      this.router.navigate(['/product/all']);
    });
  }

  get f() { return this.form.controls; }

  get invalid() { return this.form.invalid; }
}
