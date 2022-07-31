import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EnquiryModule } from './Enquires/Enquiry.module';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

// main Nav bar components
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { routing } from './app.routing';
import { NavComponent } from './nav.component';
import { CheckoutComponent } from './checkout.component';

// Auth folder
import { LoginService } from './Auth/login.service';
import { AuthGuard } from './Auth/auth-guard.service';
import { LoginComponent } from './Auth/login.component';
import { PreventUnsavedChangesGuard } from './Auth/prevent-unsaved-changes-guard.service';

// Products folder
import { StarComponent }   from './Products/star.component';
import { StarFillComponent }   from './Products/starfill.component';
import { RatingComponent }   from './Products/rating.component';
import { ProductComponent } from './Products/product.component';
import { ProductsComponent } from './Products/products.component';
import { TruncatePipe } from './Products/truncate.pipe';
import { JumboTronComponent } from './Products/jumbotron.component';
import { ItemComponent } from './Products/item.component';
import { ItembComponent } from './Products/itemb.component';

// Contact form
import { ContactComponent } from './Enquires/enquiry.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './Enquires/user-form.component';


@NgModule({
  declarations: [
    NavComponent,
    CheckoutComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    StarComponent,
    StarFillComponent,
    RatingComponent,
    ProductComponent,
    ProductsComponent, 
    TruncatePipe, 
    JumboTronComponent,
    ItemComponent,
    ItembComponent
    //ContactComponent,
    //UserFormComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EnquiryModule,
    routing    
  ],
  providers: [
    LoginService,
    AuthGuard,
    PreventUnsavedChangesGuard
  ],
  bootstrap: [ NavComponent]
})
export class AppModule { }