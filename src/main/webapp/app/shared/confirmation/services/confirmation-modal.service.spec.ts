import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { ConfirmationModalService } from './confirmation-modal.service';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { fakeAsync, TestBed } from '@angular/core/testing';

describe('ConfirmationModalService unit tests', () => {
  let spectator: SpectatorService<ConfirmationModalService>;
  let modalService: NgbModal;

  const createService = createServiceFactory({
    service: ConfirmationModalService,
    providers: [NgbModal],
    mocks: [NgbModal],
    imports: [NgbModalModule]
  });

  beforeEach(() => {
    spectator = createService();
    modalService = TestBed.inject(NgbModal);
  });

  it('confirmation modal can be validated', fakeAsync(() => {
    jest.spyOn(modalService, 'open').mockReturnValue(
      // @ts-ignore
      {
        result: Promise.resolve(true),
        componentInstance: {},
        close: () => null,
        dismiss: (reason?: any) => null
      }
    );

    spectator.service.confirm('', '', '', '', '').subscribe((result) => {
      expect(result).toBeTruthy();
    });
  }));

  it('confirmation modal can be dismissed', fakeAsync(() => {
    jest.spyOn(modalService, 'open').mockReturnValue(
      // @ts-ignore
      {
        result: Promise.resolve(false),
        componentInstance: {},
        close: () => null,
        dismiss: (reason?: any) => null
      }
    );

    spectator.service.confirm('', '', '', '', '').subscribe((result) => {
      expect(result).toBeFalsy();
    });
  }));
});
