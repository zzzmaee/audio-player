import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundListComponent } from './sound-list.component';

describe('SoundListComponent', () => {
  let component: SoundListComponent;
  let fixture: ComponentFixture<SoundListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
