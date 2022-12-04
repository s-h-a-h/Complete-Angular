import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAComponent } from './item-a.component';

describe('ItemAComponent', () => {
  let component: ItemAComponent;
  let fixture: ComponentFixture<ItemAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
