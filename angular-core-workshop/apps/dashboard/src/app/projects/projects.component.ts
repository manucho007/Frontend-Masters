import { ProjectsService } from './../../../../../libs/core-data/src/lib/projects/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'libs/core-data/src/lib/projects/project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // It's possible to bind to properties as well like red will be passed to style.color in Html
  // Events are ()
  // Properties are []
  primaryColor = 'red';
  projects$;
  selectedProject: Project;
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
    this.resetProject();
  }

  selectProject(project) {
    // We can send an event as well as an object and a property in this case a message as well
    // console.log('Selected project', $event, project, echo);
    this.selectedProject = project;
    console.log('Selected', project);
  }

  cancel() {
    this.resetProject();
  }

  getProjects() {
    // this.projectsService
    //   .all()
    //   .subscribe((results: any) => (this.projects = results));
    this.projects$ = this.projectsService.all();
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
    console.log('Savin Project', project);
  }

  createProject(project) {
    this.projectsService.create(project).subscribe(result => {
      this.getProjects();
      this.resetProject();
    });
  }

  updateProject(project) {
    this.projectsService.update(project).subscribe(result => {
      this.getProjects();
      this.resetProject();
    });
  }

  deleteProject(project) {
    this.projectsService
      .delete(project.id)
      .subscribe(result => this.getProjects());
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };
    this.selectProject(emptyProject);
  }
}
