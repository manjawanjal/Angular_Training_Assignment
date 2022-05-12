import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
  public productArr : any[
    {pno :1, pname:"Mobile",price :1000,categoey:"category1",qty :2 },
    {pno :2, pname:"Camera", price :2000,categoey:"category1",qty :4 },
    {pno :3, pname:"Bluetooth",price :3000,categoey:"category2",qty :6 },
    {pno :4, pname:"Headphones",price :4000,categoey:"category2",qty :8 },

  ];

  constructor(){}
  
  ngOnInit():void{

  }

  public removeProduct(pno :number)
   {
    var index =this.productArr.findIndex((x:any)=> x.pno ==pno);
    this.productArr.splice(index, 1);    
   }

  
  }
}

