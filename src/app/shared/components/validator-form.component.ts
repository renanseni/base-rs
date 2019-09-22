import { Component, Input, ElementRef, ViewChild } from '@angular/core';
declare var $: any;

@Component({

    selector: '[app-validator-form]',
    template: `
            <form #formDados [saUiValidate]="validators" novalidate="novalidate">
                        <ng-content></ng-content>
            <section class="row">
                <fieldset>
                    <div class="col-md-12 text-right" *ngIf="showButtons">
                        <button class="btn btn-xs btn-sm btn-info" type="submit" (click)="save()">
                            Salvar
                        </button>
                        <button class="btn btn-xs btn-sm btn-default" (click)="close()">
                            Fechar
                        </button>
                    </div>
                </fieldset>
            </section>
            </form>`
})

export class ModalFormGroup {

    @Input() public saveEvent: Function;
    @Input() public modalClose: Function;
    @Input() public validators: any;
    @Input() public showButtons: boolean = true;
    @ViewChild('formDados', { static: true }) el: ElementRef;

    constructor() { }

    public close() {
        this.modalClose();
    }

    public save() {
        if (!$(this.el.nativeElement).valid()) {
            return;
        }
        this.saveEvent();
    }
}
