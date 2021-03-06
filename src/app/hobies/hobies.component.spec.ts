import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobiesComponent } from './hobies.component';

describe('HobiesComponent', () => {
  let component: HobiesComponent;
  let fixture: ComponentFixture<HobiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
