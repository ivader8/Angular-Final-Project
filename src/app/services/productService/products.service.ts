import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

const CREATE_URL = 'http://localhost:5000/furniture/create';
const ALL_URL = 'http://localhost:5000/furniture/all';
const DETAILS_URL = 'http://localhost:5000/furniture/details/';
const USER_URL = 'http://localhost:5000/furniture/user';
const DELETE_URL = 'http://localhost:5000/furniture/delete/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  createFurniture(data) {
    return this.http.post<Product>(CREATE_URL, data);
  }

  getAllFurnitures(): Observable<Product[]> {
    return this.http.get<Product[]>(ALL_URL);
  }

  getFurniture(id: string): Observable<Product> {
    return this.http.get<Product>(DETAILS_URL + id);
  }

  getUserFurniture(): Observable<Product[]> {
    return this.http.get<Product[]>(USER_URL);
  }

  deleteFurniture(id: string) {
    return this.http.delete(DELETE_URL + id);
  }

}
