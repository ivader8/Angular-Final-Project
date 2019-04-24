import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

const CREATE_URL = 'http://localhost:5000/product/create';
const ALL_URL = 'http://localhost:5000/product/all';
const DETAILS_URL = 'http://localhost:5000/product/details/';
const USER_URL = 'http://localhost:5000/product/user';
const DELETE_URL = 'http://localhost:5000/product/delete/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  createProduct(data) {
    return this.http.post<Product>(CREATE_URL, data);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(ALL_URL);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(DETAILS_URL + id);
  }

  getUserProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(USER_URL);
  }

  deleteProduct(id: string) {
    return this.http.delete(DELETE_URL + id);
  }

}
