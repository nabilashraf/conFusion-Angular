import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatListModule, MatGridListModule, MatCardModule, MatButtonModule , MatInputModule, 
     MatCheckboxModule, MatDialogModule, MatSlideToggleModule, MatSelectModule, MatProgressSpinnerModule, MatSliderModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatListModule, 
    MatGridListModule, 
    MatCardModule, 
    MatButtonModule, 
    MatInputModule, 
    MatCheckboxModule, 
    MatDialogModule, 
    MatSlideToggleModule, 
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSliderModule
  ],
  exports: [
  	MatToolbarModule, 
    MatListModule, 
    MatGridListModule, 
    MatCardModule, 
    MatButtonModule, 
    MatInputModule, 
    MatCheckboxModule, 
    MatDialogModule, 
    MatSlideToggleModule, 
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSliderModule
  ],
  declarations: []
})
export class AppMaterialModule { }
