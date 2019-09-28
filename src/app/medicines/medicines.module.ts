import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MedicinesPage } from './medicines.page';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MedicinesPage
      }
    ])
  ],
  declarations: [MedicinesPage, AddMedicineComponent],
  entryComponents: [AddMedicineComponent]
})
export class MedicinesPageModule {}
