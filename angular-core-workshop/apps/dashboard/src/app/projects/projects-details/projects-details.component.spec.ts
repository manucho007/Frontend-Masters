import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular-core-workshop/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDetailsComponent } from './projects-details.component';
import { FormsModule } from '@angular/forms';
import { Project } from '@angular-core-workshop/core-data';

describe('ProjectsDetailsComponent', () => {
  let component: ProjectsDetailsComponent;
  let fixture: ComponentFixture<ProjectsDetailsComponent>;
  const emptyProject: Project = {
    id: null,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsDetailsComponent],
      imports: [MaterialModule, BrowserAnimationsModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDetailsComponent);
    component = fixture.componentInstance;
    component.currentProject = emptyProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
