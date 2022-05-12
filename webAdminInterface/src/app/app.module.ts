import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToolsetComponent } from './toolset/toolset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';
import { AppViewComponent } from './app-view/app-view.component';
import { AuthComponent } from './auth/auth.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { ListeUtilisateursActifsComponent } from './liste-utilisateurs-actifs/liste-utilisateurs-actifs.component';
import { XbetRetraitComponent } from './xbet-retrait/xbet-retrait.component';
import { TarificationsComponent } from './tarifications/tarifications.component';
import { CouponsComponent } from './coupons/coupons.component';
import { GestionCompagnie } from './gestion-compagnie/gestion-compagnie.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolsetComponent,
    DashboardComponent,
    ListDemandesComponent,
    AppViewComponent,
    AuthComponent,
    GestionCompagnie,
    ListeUtilisateursComponent,
    ListeUtilisateursActifsComponent,
    XbetRetraitComponent,
    TarificationsComponent,
    CouponsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    Ng2SmartTableModule,
    NgxWebstorageModule.forRoot(),
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
