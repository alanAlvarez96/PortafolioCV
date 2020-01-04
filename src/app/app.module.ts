import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProvider } from './app.routing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BannerComponent } from './Components/banner/banner.component';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectDialogComponent } from './Components/Dialogs-Templates/project-dialog/project-dialog.component';
import { Material} from './Material';
import { TechnologiesComponent } from './Components/technologies/technologies.component';
import { FooterComponent } from './Components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectDialogComponent,
    TechnologiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    Material
  ],
  entryComponents: [
    ProjectDialogComponent
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
