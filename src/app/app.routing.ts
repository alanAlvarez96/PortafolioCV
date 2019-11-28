import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// importar componentes
import {SkillsComponent} from './Components/skills/skills.component';
import {AboutComponent} from './Components/about/about.component';
import {ProjectsComponent} from './Components/projects/projects.component';
// arreglo de las rutas
const appRoutes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'skill', component: SkillsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '**', component: AboutComponent}
];
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
