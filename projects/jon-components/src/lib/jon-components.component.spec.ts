import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JonComponentsComponent } from './jon-components.component';

describe('JonComponentsComponent', () => {
  let component: JonComponentsComponent;
  let fixture: ComponentFixture<JonComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JonComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JonComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
