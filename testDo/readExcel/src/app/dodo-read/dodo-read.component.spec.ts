import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodoReadComponent } from './dodo-read.component';

describe('DodoReadComponent', () => {
  let component: DodoReadComponent;
  let fixture: ComponentFixture<DodoReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodoReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
