import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicinesPage } from './medicines.page';

describe('MedicinesPage', () => {
  let component: MedicinesPage;
  let fixture: ComponentFixture<MedicinesPage>;
  let medicinesPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    medicinesPage = fixture.nativeElement;
    const items = medicinesPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
