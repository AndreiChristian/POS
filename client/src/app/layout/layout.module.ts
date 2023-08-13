import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule }  from '@angular/cdk/layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavigationComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
  NavigationComponent
  ]
})
export class AppLayoutModule { }
