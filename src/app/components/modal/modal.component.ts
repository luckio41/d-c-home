import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/components/modal';

@Component({
  selector: 'modal-demo',
  templateUrl: 'modal.component.html'
})

export class ModalComponent {
  public singleModel:number = 1;
  @ViewChild('childModal') public childModal:ModalDirective;
}