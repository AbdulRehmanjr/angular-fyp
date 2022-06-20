import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DevExtremeModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



import { AppComponent } from './app.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { OrganizationsComponent } from './Modules/organizations/organizations.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    OrganizationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    FormsModule,
    NgbModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
