import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list.component';
import { ProjectDetailComponent } from './project-detail.component';
// import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProjectDetailGuard } from './project-detail.guard';
import { EditProjectComponent } from './edit-project.component';
import { EditProjectGuard } from './edit-project-guard.service';



@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent,
    EditProjectComponent,
    // ConvertToSpacesPipe - not sure if i need this, can only be declared by one module
  ],
  imports: [
    RouterModule.forChild([
      { path: 'projects', component: ProjectListComponent },
      { 
        path: 'projects/:id',
        canActivate: [ProjectDetailGuard],
        component: ProjectDetailComponent 
      },
      { 
        path: 'projects/:id/edit',
        canDeactivate: [EditProjectGuard],
        component: EditProjectComponent 
      }
    ]),
    SharedModule
  ]
})
export class ProjectModule { }
