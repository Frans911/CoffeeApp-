import { Component } from '@angular/core';
import { NavController ,AlertController } from 'ionic-angular';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  quantity:any;
  WCream:Boolean;
  Chocolate:Boolean;
  name:string;
  order:Boolean;
  WC:any;
  C:any;
  price:number;
  constructor(public navCtrl: NavController,private alrtCntrl:AlertController) {
    this.quantity = 0;
    this.WCream = false;
    this.Chocolate = false;
    this.price = 5;
  }
  Order(){
    if(this.name == null || this.quantity == 0){
      let alert = this.alrtCntrl.create(
       {title:'Incomplete',
      message:'Please fill your name and quantiy'}
      )
      alert.present();
    }else{
      this.order = true;
      this.price = this.price * this.quantity;
     if(this.WCream == true){
      this.WC = '+Whipped Cream';
      this.price += 2;
     }
     if(this.Chocolate == true){
      this.C = '+Chocolate';
      this.price += 3;
     }
    }
  }
  adjust(item:string){
    if(item == '+'){
      this.quantity++;
    }else  if(item == '-' && this.quantity > 0){
      this.quantity--;
    }
  }
  reset(){
    this.WCream = false;
    this.Chocolate = false;
    this.quantity = 0;
    this.name = '';
    this.order = false;
  }

}
