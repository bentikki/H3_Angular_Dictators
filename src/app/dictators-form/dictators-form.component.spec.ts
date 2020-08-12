import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictatorsFormComponent } from './dictators-form.component';

describe('DictatorsFormComponent', () => {
  let component: DictatorsFormComponent;
  let fixture: ComponentFixture<DictatorsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictatorsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictatorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
