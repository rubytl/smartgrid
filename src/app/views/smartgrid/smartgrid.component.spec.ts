import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartgridComponent } from './smartgrid.component';

describe('SmartgridComponent', () => {
  let component: SmartgridComponent;
  let fixture: ComponentFixture<SmartgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
