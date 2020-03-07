import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeIngPage } from './recipe-ing.page';

describe('RecipeIngPage', () => {
  let component: RecipeIngPage;
  let fixture: ComponentFixture<RecipeIngPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIngPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeIngPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
