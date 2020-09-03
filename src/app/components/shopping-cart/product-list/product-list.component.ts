import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

import { Product } from 'src/app/classes/product'; 


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: Product[];


  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getProducts().subscribe(product => {
      console.log(product);
      this.product = product;
    });


  }


}
