import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  
// import { SupplierSampleComponent } from './supplylink/components/suppliersample/suppliersample.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    // SupplierSampleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
