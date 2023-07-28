import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen1BodyComponent } from './screen1-body/screen1-body.component';
import { Screen2BodyComponent } from './screen2-body/screen2-body.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CountryModalComponent } from './country-modal/country-modal.component';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { CloudinaryService } from './cloudinary.service';
import { NewcountryModalComponent } from './newcountry-modal/newcountry-modal.component';
import { CloudinaryModule } from '@cloudinary/ng';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryDetailsComponent,
    Screen1Component,
    Screen1BodyComponent,
    Screen2BodyComponent,
    CountryModalComponent,
    NewcountryModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule, 
    MatButtonModule,
    MatDialogModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    CloudinaryModule,
  ],
  providers: [CloudinaryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
