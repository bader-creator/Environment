import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlarmePage } from './alarme.page';

describe('AlarmePage', () => {
  let component: AlarmePage;
  let fixture: ComponentFixture<AlarmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlarmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
