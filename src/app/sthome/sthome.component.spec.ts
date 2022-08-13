import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STHomeComponent } from './sthome.component';

describe('STHomeComponent', () => {
  let component: STHomeComponent;
  let fixture: ComponentFixture<STHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
