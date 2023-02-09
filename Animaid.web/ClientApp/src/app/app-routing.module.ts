import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioAnimaidComponent } from './inicio-animaid/inicio-animaid.component';

const routes: Routes = [   { path: '', component: InicioAnimaidComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
