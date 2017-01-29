import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { NotFoundComponentComponent } from './newfeature/not-found-component/not-found-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ChildComponent1Component } from './child-component1/child-component1.component';
import { ChildComponent2Component } from './child-component2/child-component2.component';
import { ChildComponent3Component } from './child-component3/child-component3.component';
import { ChildComponent4Component } from './child-component4/child-component4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    NotFoundComponentComponent,
    HeaderComponentComponent,
    ChildComponent1Component,
    ChildComponent2Component,
    ChildComponent3Component,
    ChildComponent4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
