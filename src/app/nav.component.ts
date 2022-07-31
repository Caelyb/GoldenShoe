import { Component } from '@angular/core';

@Component({
    selector: 'app-root',

    // this would be prettier in its own html but leads to issues
    template: `

    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item active">
            <a class="nav-link" routerLink="">Home<span class="sr-only">(current)</span></a>
          </li>

          <li class="nav-item">
            <a class="nav-link" routerLink="enquiry">Contact Us</a>
          </li> 

          <li class="nav-item">
            <a class="nav-link" routerLink="checkout">Checkout</a>
          </li>

        </ul>    
      </div>
    </nav>
  <div style="display:block ;">
    <router-outlet></router-outlet>   

    <!-- Footer -->
    <footer class="page-footer font-small red pt-4 mt-auto ">
    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">
    <!-- Grid row -->
    <div class="row">
    <!-- Grid column -->
    <div class="col-md-6 mt-md-0 mt-3">
      <!-- Content -->
      <h5 class="text">Golden Shoe</h5>
      <p class="text">Founded 1910</p>
    </div>
    <!-- Grid column -->
    <hr class="clearfix w-100 d-md-none pb-3">
    <!-- Grid column -->
    <div class="col-md-3 mb-md-0 mb-3">
      <!-- Links -->
      <ul class="list-unstyled">
        <li>
          <a href="enquiry">Returns Policy</a>
        </li>
      </ul>
    </div>
    <!-- Grid column -->
    <div class="col-md-3 mb-md-0 mb-3">
      <!-- Links -->
      <ul class="list-unstyled">
        <li>
          <a href="enquiry">Contact Us</a>
        </li>
      </ul>
    </div>
    <!-- Grid column -->
  </div>
  <!-- Grid row -->
  </div>
  <!-- Footer Links -->
  <!-- Copyright -->
  <div class="text text-center  py-3">© 2022 Copyright:
    <a href="/"> About the company</a>
  </div>
  <!-- Copyright -->

  </footer>
  <!-- Footer -->
</div>
  `
  ,
    providers: [],
    styles: [`
    .navbar-custom {background-color: maroon;}

    .page-footer {;
    bottom:0;
    width:100%;
    height: auto;
    background-color:maroon;
    }

    .text {;
      color: white
    }
    `
    ]
})

export class NavComponent{ 
    constructor(){
    }
}
