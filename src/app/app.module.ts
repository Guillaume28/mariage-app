import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ImageListComponent} from './image-list/image-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule, MatListModule, MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {MatGridListResponsiveModule} from '../lib/mat-grid-list-responsive.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MasonryGalleryModule} from 'ngx-masonry-gallery';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatGridListResponsiveModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MasonryGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
