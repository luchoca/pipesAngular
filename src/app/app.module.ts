import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './modules/prime-ng/prime-ng.module';
import { SharedModule } from './modules/shared/shared.module';
import { ProductsModule } from './modules/products/products.module';
import localeEsUY from '@angular/common/locales/es-UY';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsUY);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNGModule,
    SharedModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
