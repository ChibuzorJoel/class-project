import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()


product :
 {
  id: number,
  name: string,
  description: string,
  brand: string,
  gender: string,
  discount?: number,
  category: string,
  size: string,
  color: string[],
  price: number,
  is_in_inventory: boolean,
  items_left: number,
  imageURL: string,
  slug: string,
};
  constructor() { }

  ngOnInit(): void {
  }

}
