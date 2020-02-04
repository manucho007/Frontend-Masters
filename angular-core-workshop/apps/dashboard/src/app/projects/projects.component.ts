import { Component, OnInit } from '@angular/core';

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
  projects = [
    {
      id: '1',
      title: 'Project One',
      details: 'This is a sample project',
      percentComplete: 20,
      approved: false
    },
    {
      id: '2',
      title: 'Project Two',
      details: 'This is a sample project',
      percentComplete: 40,
      approved: false
    },
    {
      id: '3',
      title: 'Project Three',
      details: 'This is a sample project',
      percentComplete: 100,
      approved: true
    }
  ];
  selectedProject;
  constructor() {}

  ngOnInit() {}

  selectProject(project) {
    this.selectedProject = project;
    // We can send an event as well as an object and a property in this case a message as well
    // console.log('Selected project', $event, project, echo);
  }

  cancel() {
    this.selectProject(null);
  }
}
