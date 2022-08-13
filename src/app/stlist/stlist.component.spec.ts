import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STListComponent } from './stlist.component';

describe('STListComponent', () => {
  let component: STListComponent;
  let fixture: ComponentFixture<STListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
