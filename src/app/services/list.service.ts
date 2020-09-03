import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from '../classes/product';

@Injectable() 
export class ListService {

  constructor(private http: HttpClient) {

   }

      getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014`);
      }


   
    }
