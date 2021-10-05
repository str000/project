import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmogPageComponent } from './smog-page.component';

describe('SmogPageComponent', () => {
  let component: SmogPageComponent;
  let fixture: ComponentFixture<SmogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
