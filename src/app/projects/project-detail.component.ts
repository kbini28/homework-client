import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'pm-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  pageTitle = 'Project Details';
  errorMessage = '';
  project: IProject | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectService: ProjectService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProject(id);
    }
  }

  getProject(id: number): void {
    this.projectService.getProject(id).subscribe({
      next: project => this.project = project,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/projects']);
  }

}
