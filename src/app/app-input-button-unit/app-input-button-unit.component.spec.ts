import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputButtonUnitComponent } from './app-input-button-unit.component';

describe('AppInputButtonUnitComponent', () => {
  let component: AppInputButtonUnitComponent;
  let fixture: ComponentFixture<AppInputButtonUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInputButtonUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInputButtonUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
