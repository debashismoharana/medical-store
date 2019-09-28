import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss'],
})
export class AddMedicineComponent implements OnInit {
  addMedicine: FormGroup;
  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private db: AngularFirestore) {
    this.addMedicine = formBuilder.group({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required)
    });
  }
  ngOnInit() { }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  addMedicines() {
    this.db.collection('medicines').add({
      name: this.addMedicine.value.name,
      price: this.addMedicine.value.price,
      stock: this.addMedicine.value.stock
  })
  .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      this.dismiss();
  })
  .catch((error) => {
      console.error('Error adding document: ', error);
  });
  }
}
