import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultigridComponent } from './multigrid.component';

describe('MultigridComponent', () => {
  let component: MultigridComponent;
  let fixture: ComponentFixture<MultigridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultigridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultigridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
