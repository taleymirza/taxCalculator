import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { PakistanComponent } from './pakistan/pakistan.component';
import { UsaComponent } from './usa/usa.component';
import { UkComponent } from './uk/uk.component';
import { UaeComponent } from './uae/uae.component';
import { CanadaComponent } from './canada/canada.component';
import { AustraliaComponent } from './australia/australia.component';

import { TaxCalService } from './tax-cal.service';
import { AdminComponent } from './admin/admin.component';
import { UserFormComponent } from './pakistan/user-form/user-form.component';
import { CalcComponent } from './pakistan/calc/calc.component';

const appRoutes = [
  {path: '', component: PakistanComponent},
  {path: 'pakistan', component: PakistanComponent},
  {path: 'usa', component: UsaComponent},
  {path: 'uk', component: UkComponent},
  {path: 'uae', component: UaeComponent},
  {path: 'canada', component: CanadaComponent},
  {path: 'australia', component: AustraliaComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PakistanComponent,
    UaeComponent,
    UsaComponent,
    UkComponent,
    CanadaComponent,
    AustraliaComponent,
    AdminComponent,
    UserFormComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [TaxCalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
