//import { NgModule } from '@angular/router';
import { Routes, RouterModule  } from '@angular/router';

import { HomeComponent } from './home.component';
import { ContactComponent } from './Enquires/enquiry.component';
import { NotFoundComponent } from './notfound.component';
import { CheckoutComponent } from './checkout.component';
import { ItemComponent } from './Products/item.component';
import { ItembComponent } from './Products/itemb.component';
import { OutOfStockComponent } from './outofstock.component';

import { AuthGuard } from './Auth/auth-guard.service';
import { LoginComponent } from './Auth/login.component';
import { PreventUnsavedChangesGuard } from './Auth/prevent-unsaved-changes-guard.service';


export const routing = RouterModule.forRoot([
    
    {path: 'login', 
        component: LoginComponent,
        canDeactivate: [PreventUnsavedChangesGuard]
    },
    
    {path: '', 
        component: HomeComponent,
        //canActivate: [AuthGuard]
    },

    {path: 'enquiry', 
        component: ContactComponent,
        //canActivate: [AuthGuard]
    },

    {path: 'item/1', 
        component: ItemComponent,
        //canActivate: [AuthGuard]
    },

    {path: 'item/1black', 
    component: ItembComponent,
    //canActivate: [AuthGuard]
},

    {path: 'item/2', 
    component: OutOfStockComponent,
    //canActivate: [AuthGuard]
    },

    {path: 'item/3', 
    component: OutOfStockComponent,
    //canActivate: [AuthGuard]
    },

    {path: 'checkout', 
        component: CheckoutComponent, // need to flesh out component 
        canActivate: [AuthGuard]   // need to be signed in to use checkout
    },  // need to be signed in to use checkout

    {path: '**',                      // any other path is "page not found"
        component: NotFoundComponent},

]);

