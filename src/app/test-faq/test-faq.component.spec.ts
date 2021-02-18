import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFaqComponent } from './test-faq.component';

describe('TestFaqComponent', () => {
  let component: TestFaqComponent;
  let fixture: ComponentFixture<TestFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
