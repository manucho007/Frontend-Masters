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
  primaryColor = 'Red';
  projects$;
  selectedProject;
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
    // We can send an event as well as an object and a property in this case a message as well
    // console.log('Selected project', $event, project, echo);
  }

  cancel() {
    this.selectProject(null);
  }

  getProjects() {
    // this.projectsService
    //   .all()
    //   .subscribe((results: any) => (this.projects = results));
    this.projects$ = this.projectsService.all();
  }
  deleteProjects(project) {
    this.projectsService
      .delete(project.id)
      .subscribe(result => this.getProjects());
  }
}
