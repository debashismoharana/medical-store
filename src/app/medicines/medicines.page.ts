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
  public items: Array<{ id: string; name: string; price: number }> = [];
  constructor(public modalController: ModalController, public db: AngularFirestore) { }

  getMedicines() {
    this.items = [];
    this.db.collection('medicines').get().subscribe((querySnapshot) => {
      querySnapshot.forEach((medicine) => {
          console.log(medicine.id, ' => ', medicine.data());
          this.items.push({
              id: medicine.id,
              name: medicine.data().name,
              price: medicine.data().price
            });
      });
    });
  }

  doRefresh(event) {
    this.getMedicines();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  deleteMedicine(item) {
    this.db.collection('medicines').doc(item.id).delete().then(() => {
      console.log('Document successfully deleted!');
      const index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
  }).catch((error) => {
      console.error('Error removing document: ', error);
  });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddMedicineComponent
    });
    return await modal.present();
  }

  ngOnInit() {
    this.getMedicines();
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/medicines', JSON.stringify(item)]);
  // }
}
