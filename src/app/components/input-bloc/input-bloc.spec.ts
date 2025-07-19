import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBloc } from './input-bloc';

describe('InputBloc', () => {
  let component: InputBloc;
  let fixture: ComponentFixture<InputBloc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBloc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBloc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
