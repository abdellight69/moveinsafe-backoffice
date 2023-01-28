import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import {workspaceRoute} from "./workspace.route";
import {WorkspaceFormComponent} from "./form/workspace-form.component";
import {WorkspaceListComponent} from "./list/workspace-list.component";
import {UserFormComponent} from "./user-form/user-form.component";


@NgModule({
  imports: [SharedModule, RouterModule.forChild(workspaceRoute)],
  declarations: [WorkspaceFormComponent, WorkspaceListComponent, UserFormComponent],
})
export class WorkspaceModule {}
