import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatListModule, MatGridListModule, MatCardModule, MatButtonModule , MatInputModule, MatCheckboxModule, MatDialogModule, MatSlideToggleModule, MatSelectModule} from '@angular/material';

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
    MatSelectModule
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
    MatSelectModule
  ],
  declarations: []
})
export class AppMaterialModule { }
