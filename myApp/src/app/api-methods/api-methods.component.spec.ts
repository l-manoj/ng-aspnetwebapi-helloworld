import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMethodsComponent } from './api-methods.component';

describe('ApiMethodsComponent', () => {
  let component: ApiMethodsComponent;
  let fixture: ComponentFixture<ApiMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
