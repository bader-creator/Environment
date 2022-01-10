import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionneurPage } from './actionneur.page';

describe('ActionneurPage', () => {
  let component: ActionneurPage;
  let fixture: ComponentFixture<ActionneurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionneurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionneurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
