import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationBloc } from './qualification-bloc';

describe('QualificationBloc', () => {
  let component: QualificationBloc;
  let fixture: ComponentFixture<QualificationBloc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualificationBloc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationBloc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
