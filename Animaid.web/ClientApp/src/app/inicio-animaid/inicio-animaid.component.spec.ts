import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAnimaidComponent } from './inicio-animaid.component';

describe('InicioAnimaidComponent', () => {
  let component: InicioAnimaidComponent;
  let fixture: ComponentFixture<InicioAnimaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioAnimaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioAnimaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
