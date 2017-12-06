import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatListModule, MatGridListModule, MatCardModule, MatButtonModule , MatInputModule, 
     MatCheckboxModule, MatDialogModule, MatSlideToggleModule, MatSelectModule, MatProgressSpinnerModule } from '@angular/material';

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
    MatProgressSpinnerModule
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
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class AppMaterialModule { }
