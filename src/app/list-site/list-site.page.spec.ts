import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListSitePage } from './list-site.page';

describe('ListSitePage', () => {
  let component: ListSitePage;
  let fixture: ComponentFixture<ListSitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListSitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
