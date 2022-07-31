import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactComponent } from './enquiry.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent} from './user-form.component';

@NgModule({
  declarations: [
    ContactComponent, UserFormComponent
  ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [ContactComponent]
})
export class EnquiryModule { }
