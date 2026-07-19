import { Product } from './../product';
import { Component, signal } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard, MatIcon],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  protected readonly products = signal<Product[]>([
  //   {id: 1,
  //   name: "Gaming Mouse RGB",
  //   description: "Ergonomic gaming mouse with customizable RGB lighting and 7200 DPI sensor.",
  //   price: 149.90,
  //   originalPrice: 199.90,
  // },
  // {
  //   id: 2,
  //   name: "Mechanical Keyboard",
  //   description: "Compact mechanical keyboard with red switches and white LED backlighting.",
  //   price: 289.90,
  //   originalPrice: 349.90,
  // },
  // {
  //   id: 3,
  //   name: "Wireless Headset",
  //   description: "Wireless headset with noise-canceling microphone and up to 30 hours of battery life.",
  //   price: 399.90,
  // },

  ]);
}
