import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLogicComponent } from './template-logic.component';

describe('TemplateLogicComponent', () => {
  let component: TemplateLogicComponent;
  let fixture: ComponentFixture<TemplateLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateLogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
