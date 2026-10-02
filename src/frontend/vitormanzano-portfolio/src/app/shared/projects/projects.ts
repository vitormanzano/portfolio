import { Component } from '@angular/core';
import { Project } from './project/project';

@Component({
  imports: [Project],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {}
