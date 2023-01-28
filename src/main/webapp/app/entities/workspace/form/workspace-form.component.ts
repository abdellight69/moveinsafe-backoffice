import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {WorkspaceService} from "../service/workspace.service";
import {Workspace} from "../../../../../../app/shared/api";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'ms-workspace-form',
  templateUrl: './workspace-form.component.html',
  styleUrls: ['./workspace-form.component.scss']
})
export class WorkspaceFormComponent{

  @Input() workspaceParent: Workspace | null = null;
  error = false;
  success = false;

  addForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ],
    }),
    configurations: this.fb.array([])
  });

  constructor(private translateService: TranslateService, private workspaceService: WorkspaceService, private fb:FormBuilder) {}

  protected save(): void {
    const workspace: Workspace = this.addForm.getRawValue();
    this.error = false;

    if (this.workspaceParent?.id) {
      this.workspaceService
        .saveWorkspace(workspace, this.workspaceParent.id)
        .subscribe({next: () => (this.success = true), error: response => this.processError(response)});
    } else {
      this.error = true;
    }
  }

  protected addConfiguration(): void {
    const configurationForm = this.fb.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required]
    });
  }

  protected deleteConfiguration(configurationIndex: number): void {
    // TODO
  }

  private processError(response: HttpErrorResponse): void {
    this.error = true;
  }
}
