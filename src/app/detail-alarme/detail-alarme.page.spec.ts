import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailAlarmePage } from './detail-alarme.page';

describe('DetailAlarmePage', () => {
  let component: DetailAlarmePage;
  let fixture: ComponentFixture<DetailAlarmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAlarmePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailAlarmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
