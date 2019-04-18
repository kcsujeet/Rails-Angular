import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAdComponent } from './item-ad.component';

describe('ItemAdComponent', () => {
  let component: ItemAdComponent;
  let fixture: ComponentFixture<ItemAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
