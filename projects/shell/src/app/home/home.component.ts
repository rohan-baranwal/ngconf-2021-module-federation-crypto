import { Component, OnInit } from '@angular/core';
import { WalletLibService } from 'wallet-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  balance = 0;

  constructor(
    private walletService: WalletLibService
  ) {
    this.balance = this.walletService.balance;
   }

  ngOnInit() {
  }

}
