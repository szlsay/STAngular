import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STDetailComponent } from './stdetail.component';

describe('STDetailComponent', () => {
  let component: STDetailComponent;
  let fixture: ComponentFixture<STDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
