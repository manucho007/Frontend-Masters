import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@angular-core-workshop/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project, ProjectsService } from '@angular-core-workshop/core-data';
import { By } from '@angular/platform-browser';

describe('ProjectsComponent', async () => {
  // Create local test members
  // component to test
  let component: ProjectsComponent;
  // test fixture for the component
  let fixture: ComponentFixture<ProjectsComponent>;
  let de: DebugElement;
  let projectsService: ProjectsService;
  const mockProjectsService = {
    //Mock
  };
  const emptyProject: Project = {
    id: null,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false
  };

  // Instantiate the test bed
  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        ProjectsListComponent,
        ProjectsDetailsComponent
      ],
      providers: [{ provide: ProjectsService, useValue: mockProjectsService }],
      imports: [
        MaterialModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
      // Can be done separately if you have external resources that need to load first
      .createComponent(ProjectsComponent); //Instantiate the fixture

    // Access to the component instance
    component = fixture.componentInstance;

    // Get the debug element where the component lives on
    de = fixture.debugElement;

    // Get server instance
    projectsService = de.injector.get(ProjectsService);

    // Triggers change detection in a testing environment
    fixture.detectChanges();
  });

  // Access property in a component
  it('should have a primary color of `Red`', () => {
    expect(component.primaryColor).toBe('red');
  });

  // Access method in a component
  it('should select a project', () => {
    component.selectProject(emptyProject);
    expect(component.selectProject).toBe(emptyProject);
  });

  it('should display primaryColor', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('red');
  });

  // Make a change in a tested component and detect change to verify if changed
  it('should update h1 to new primaryColor', () => {
    const h1 = de.query(By.css('h1'));
    component.primaryColor = 'black';
    fixture.detectChanges();
    expect(h1.nativeElement.innerText).toBe('black');
  });
});
