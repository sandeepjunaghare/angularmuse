import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyleviewComponent } from './lifecyleview.component';

describe('LifecyleviewComponent', () => {
  let component: LifecyleviewComponent;
  let fixture: ComponentFixture<LifecyleviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyleviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
