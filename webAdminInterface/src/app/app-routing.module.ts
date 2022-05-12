import { CouponsComponent } from './coupons/coupons.component';
import { TarificationsComponent } from './tarifications/tarifications.component';
import { ListeUtilisateursActifsComponent } from './liste-utilisateurs-actifs/liste-utilisateurs-actifs.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { AuthGuard } from './auth.guard';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';
import { AuthComponent } from './auth/auth.component';
import { AppViewComponent } from './app-view/app-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionCompagnie } from './gestion-compagnie/gestion-compagnie.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
    path:'auth',
    component:AuthComponent
  },
  {
    path:'home',
    component:AppViewComponent,
    //canActivate:[AuthGuard],
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard',
    //canActivate:[AuthGuard],
        component: DashboardComponent
      },
      {
        path:'liste-demandes',
    //canActivate:[AuthGuard],
        component: ListDemandesComponent
      },
      {
        path:'gestion-compagnie',
    //canActivate:[AuthGuard],
        component: GestionCompagnie
      },
      // {
      //   path:'liste-1xbet-retrait',
      //   canActivate:[AuthGuard],
      //   component: XbetRetraitComponent
      // },
      {
        path:'liste-utilisateurs-non-actifs',
      //canActivate:[AuthGuard],
        component: ListeUtilisateursComponent
      },
      {
        path:'liste-utilisateurs-actifs',
      //canActivate:[AuthGuard],
        component: ListeUtilisateursActifsComponent
      },
      {
        path:'tarifications',
      //canActivate:[AuthGuard],
        component: TarificationsComponent
      },
      {
        path:'coupons',
      //canActivate:[AuthGuard],
        component: CouponsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
