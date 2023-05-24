import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],
  // imports: [
  //   CommonModule,
  //   ButtonModule,
  //   MenuModule,
  //   ToastModule,
  //   MessagesModule,
  //   MenubarModule,
  // ],
  exports: [
    ButtonModule,
    MenuModule,
    ToastModule,
    MessagesModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
  ],
})
export class PrimeNGModule {}
