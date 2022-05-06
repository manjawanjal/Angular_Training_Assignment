import { Directive, OnInit,Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appShadowsdirective]'
})
export class ShadowsdirectiveDirective implements OnInit {

  //constructor() { }

  @Input()
  appShadowsdirective:string  = "";

  constructor(private _element: ElementRef) {

   }

   shadow:string = "text-shadow: 0 0 3px , 0 0 5px ;";


   ngOnInit()
   {
     if(this.appShadowsdirective == "")
     {
        this.appShadowsdirective = "red";
     }  
     this._element.nativeElement.style = this.shadow;
     this._element.nativeElement.style.color = this.appShadowsdirective;
   }


}

