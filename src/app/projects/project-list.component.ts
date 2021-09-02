import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProject } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'pm-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  pageTitle = 'Project List';
  // imageWidth = 50;
  // imageMargin = 2;
  // showImage = false;
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProjects = this.performFilter(value);
  }

  filteredProjects: IProject[] = [];
  projects: IProject[] = [];

  constructor(private projectService: ProjectService) { }

  performFilter(filterBy: string): IProject[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.projects.filter((project: IProject) =>
      project.projectName.toLocaleLowerCase().includes(filterBy));
  }

  // site does not have images (or anything to toggle) yet
  // toggleImage(): void {
  //   this.showImage = !this.showImage;
  // }

  ngOnInit(): void {
    this.sub = this.projectService.getProjects().subscribe({
      next: projects => {
        this.projects = projects;
        this.filteredProjects = this.projects;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // site does not have anything to do with ratings yet...
  // onRatingClicked(message: string): void {
  //   this.pageTitle = 'Product List: ' + message;
  // }
}
