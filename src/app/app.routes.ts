import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { ErrorComponent } from './pages/error/error.component';
import { DetallesComponent } from './components/detalles/detalles.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'contactos', component: ContactosComponent},
    {path: 'detalles/:idProducto', component: DetallesComponent},
    {path: '', redirectTo: 'home',pathMatch: 'full'},
    {path: '**', component: ErrorComponent}
];
