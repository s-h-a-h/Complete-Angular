import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBComponent } from './item-b.component';

describe('ItemBComponent', () => {
  let component: ItemBComponent;
  let fixture: ComponentFixture<ItemBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
