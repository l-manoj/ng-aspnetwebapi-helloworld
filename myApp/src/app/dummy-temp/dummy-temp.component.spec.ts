import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTempComponent } from './dummy-temp.component';

describe('DummyTempComponent', () => {
  let component: DummyTempComponent;
  let fixture: ComponentFixture<DummyTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
