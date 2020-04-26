import { Project } from './../../../../../../libs/core-data/src/lib/projects/project';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'angular-core-workshop-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent {
  currentProject: Project;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  // This will fix the problem for the shared mutable object between components
  @Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  }
}
