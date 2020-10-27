import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { ActivatedRoute, Params } from '@angular/router';

declare let paypal: any;

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.scss']
})
export class DetailsBookComponent implements OnInit, AfterViewChecked {
  
  addScript: boolean = false;
  paypalLoad: boolean = true;

  finalAmount: number = 1;
  
 
  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public book: BookInterface = {};

  ngOnInit() {
    const idBook = this.route.snapshot.params['id'];
    this.getDetails(idBook);
    
  }

  getDetails(idBook: string): void {
    this.dataApi.getOneBook(idBook).subscribe(book => {
      this.book = book;
    });
  }
  
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AfFK8RajsxjlF5V-9Fl-EBIqFJ8d-cAJNk1iKlVAOPKEhmL3eZCCeu4v1Sgs7hha9EOUF5TQITBcA8mP',
      production: '<your-production-key-here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.book.precio, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

 
  
}