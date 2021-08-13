import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { ProjectDetailComponent } from './project-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProjectDetailGuard } from './project-detail.guard';



@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: 'projects', component: ProjectListComponent },
      { path: 'projects/:id',
        canActivate: [ProjectDetailGuard],
        component: ProjectDetailComponent }
    ]),
    SharedModule
  ]
})
export class ProjectModule { }
