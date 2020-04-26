import { Project } from './../../../../../../libs/core-data/src/lib/projects/project';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'angular-core-workshop-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
// The component is basically a presentation component, doesn't have any logic on it
// Tests might be avoided since it's simple to examine and only requires to satisfy the correct inputs
export class ProjectsListComponent {
  @Input() projects: Project[];
  @Input() readonly: false;
  // Events are directly interacting in the parent component
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
