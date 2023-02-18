import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ms-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  titleKey = '';
  guideKey = '';
  expectedConfirmationValue = '';
  confirmationValue = '';
  buttonKey = '';
  revertKey = '';

  constructor(public activeModal: NgbActiveModal) {}
}
