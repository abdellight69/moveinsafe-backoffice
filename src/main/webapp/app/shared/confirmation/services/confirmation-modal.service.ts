import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ConfirmationComponent } from '../confirmation.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ConfirmationModalService {
  constructor(private modalService: NgbModal) {}

  confirm(
    titleKey: string,
    guideKey: string,
    refValue: string,
    buttonKey: string,
    revertKey: string
  ): Observable<any> {
    const modalRef = this.modalService.open(ConfirmationComponent, { size: 'lg' });
    modalRef.componentInstance.titleKey = titleKey;
    modalRef.componentInstance.guideKey = guideKey;
    modalRef.componentInstance.buttonKey = buttonKey;
    modalRef.componentInstance.revertKey = revertKey;
    modalRef.componentInstance.expectedConfirmationValue = refValue;
    return from(modalRef.result);
  }
}
