import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedcodeComponent } from './generatedcode.component';

describe('GeneratedcodeComponent', () => {
  let component: GeneratedcodeComponent;
  let fixture: ComponentFixture<GeneratedcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
