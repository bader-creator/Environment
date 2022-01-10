import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QualityPage } from './quality.page';

describe('QualityPage', () => {
  let component: QualityPage;
  let fixture: ComponentFixture<QualityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QualityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
