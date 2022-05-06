import { Component, OnInit } from '@angular/core';
// import {ProductDetails} from 'src/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prod_list= [
    {pid : 1 , pname : "OnePlus Nord CE 2 Lite 5G" , price : 33000 , category : "Mobiles" , qty : 8},
    {pid : 2 , pname : "LG Refrigerator" , price : 50000 , category : "Cooling Appliances" , qty : 3},
    {pid : 3 , pname : "LoudSpeaker" , price : 10000 , category : "Sound Appliances" , qty : 20}
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
