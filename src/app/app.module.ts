import { CheckboxComponent } from './../../projects/mdb-demo/src/app/components/forms/checkbox/checkbox.component';
/**este import es para environment de la base de datos mongo
import { environment } from './../environments/environment';
*  */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavegadorComponent } from './navegador/navegador.component';
import { PortadaComponent } from './portada/portada.component';
import { ConoceproductosComponent } from './conoceproductos/conoceproductos.component';
import { Routes, RouterModule} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { FoterComponent } from './foter/foter.component';
import { UltimasnoticiasComponent } from './ultimasnoticias/ultimasnoticias.component';
import { LomasvendidoComponent } from './lomasvendido/lomasvendido.component';
import { VideoportadaComponent } from './videoportada/videoportada.component';
import { IntroComponent } from './intro/intro.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

/**Estos imports son para registrar usuarios con mongo database*/
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadosComponent } from './empleados/empleados.component';

/**Estos imports son para usar la base de datos firebase*/
import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { HeroComponent } from './components/hero/hero.component';
import { ModalComponent } from './components/modal/modal.component';
import { OffersComponent } from './components/offers/offers.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthGuard } from './guards/auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { ElementsComponent } from './elements/elements.component';
import { ListClientesComponent } from './components/admin/list-clientes/list-clientes.component';
import { ModalClientesComponent } from './components/modal-clientes/modal-clientes.component';
import { ListProveedoresComponent } from './components/admin/list-proveedores/list-proveedores.component';
import { ModalProveedoresComponent } from './components/modal-proveedores/modal-proveedores.component';
import { ListEmpleadosComponent } from './components/admin/list-empleados/list-empleados.component';
import { ModalEmpleadosComponent } from './components/modal-empleados/modal-empleados.component';




const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'offers', component: OffersComponent, canActivate: [AuthGuard]}, // TODO: only users auth
  { path: 'book/:id', component: DetailsBookComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'admin/list-books', component: ListBooksComponent, canActivate: [AuthGuard]}, // TODO: only users auth
  { path: 'admin/list-clientes', component: ListClientesComponent, canActivate: [AuthGuard]}, // TODO: only users auth
  { path: 'admin/list-proveedores', component: ListProveedoresComponent, canActivate: [AuthGuard]}, // TODO: only users auth
  { path: 'admin/list-empleados', component: ListEmpleadosComponent, canActivate: [AuthGuard]}, // TODO: only users auth
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: '**', component: InicioComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    PortadaComponent,
    ConoceproductosComponent,
    InicioComponent,
    ProductosComponent,
    FoterComponent,
    UltimasnoticiasComponent,
    LomasvendidoComponent,
    VideoportadaComponent,
    IntroComponent,
    UserComponent,
    SignUpComponent,
    EmpleadosComponent,
    ListBooksComponent,
    DetailsBookComponent,
    HeroComponent,
    ModalComponent,
    OffersComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    Page404Component,
    CheckoutComponent,
    ElementsComponent,
    ListClientesComponent,
    ModalClientesComponent,
    ListProveedoresComponent,
    ModalProveedoresComponent,
    ListEmpleadosComponent,
    CheckboxComponent,
    ModalEmpleadosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes),ReactiveFormsModule , HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
