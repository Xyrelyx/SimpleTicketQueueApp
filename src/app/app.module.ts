import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './pages/home/home.component';
import { ManagementComponent } from './pages/management/management.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    HomeComponent,
    ManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    FlexLayoutModule,
    LayoutModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
