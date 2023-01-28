import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        data: { pageTitle: 'Movinsafe - Workspace' },
        loadChildren: () => import('./workspace/workspace.module').then(m => m.WorkspaceModule),
      },
    ]),
  ],
})
export class EntityRoutingModule {}
