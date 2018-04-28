import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfosComponent } from './team-infos.component';

describe('TeamInfosComponent', () => {
  let component: TeamInfosComponent;
  let fixture: ComponentFixture<TeamInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
