import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-medicines',
  templateUrl: 'medicines.page.html',
  styleUrls: ['medicines.page.scss']
})
export class MedicinesPage implements OnInit {
  private selectedItem: any;
  public items: Array<{ name: string; price: number }> = [];
  constructor(public modalController: ModalController, public db: AngularFirestore) { }

  getMedicines() {
    this.db.collection('medicines').get().subscribe((querySnapshot) => {
      querySnapshot.forEach((medicine) => {
          console.log(medicine.id, ' => ', medicine.data());
          this.items.push({
              name: medicine.data().name,
              price: medicine.data().price
            });
      });
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddMedicineComponent
    });
    return await modal.present();
  }

  ngOnInit() { }
  ionViewWillEnter() {
  }
  ionViewDidEnter() {
    this.getMedicines();
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/medicines', JSON.stringify(item)]);
  // }
}
