import { Routes } from '@angular/router';
import {WorkspaceListComponent} from "./list/workspace-list.component";

export const workspaceRoute: Routes = [
  {
    path: '',
    component: WorkspaceListComponent
  }
];
