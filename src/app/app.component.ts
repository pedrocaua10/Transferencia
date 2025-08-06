import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-component-money *ngIf="etapa === 1"></app-component-money>
    <app-component-modal *ngIf="etapa === 2"></app-component-modal>
    <app-component-modal-confirm *ngIf="etapa === 3"></app-component-modal-confirm>
    <app-component-modal-success *ngIf="etapa === 4"></app-component-modal-success>
    
    <button *ngIf="etapa < 4" (click)="avancarEtapa()">Próximo</button>
  `,
  styles: []
})
export class AppComponent {
  etapa = 1;
  
  avancarEtapa() {
    this.etapa++;
  }
}