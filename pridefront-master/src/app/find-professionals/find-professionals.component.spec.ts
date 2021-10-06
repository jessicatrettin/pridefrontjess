import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindProfessionalsComponent } from './find-professionals.component';

describe('FindProfessionalsComponent', () => {
  let component: FindProfessionalsComponent;
  let fixture: ComponentFixture<FindProfessionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindProfessionalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindProfessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
