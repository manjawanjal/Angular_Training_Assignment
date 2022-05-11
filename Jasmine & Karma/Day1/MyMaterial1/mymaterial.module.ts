import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { MatButtonModule } from '@angular/material/button';
 import {  MatFormFieldModule} from '@angular/material/form-field';
 import {  MatInputModule } from '@angular/material/input';
 import {  MatIconModule }  from '@angular/material/icon';
 import {  MatCardModule }  from '@angular/material/card';
 import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: 
    [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule,MatToolbarModule],

    exports :
     [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule,MatToolbarModule ]

  })
export class MymaterialModule { }
