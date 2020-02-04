import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular-core-workshop/material';
import { HomeModule } from './home/home.module';
import { CustomersModule } from './customers/customers.module';
import { ProjectsModule } from './projects/projects.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    CustomersModule,
    ProjectsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
