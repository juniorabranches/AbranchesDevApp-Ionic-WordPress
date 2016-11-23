import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';

/*
  Generated class for the CommentPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {

  constructor(
    private navCtrl: NavController,
    private viewCtrl: ViewController,
    private params: NavParams,
    private http: Http
  ) {}

  doComment(value, event){
    this.http.post(this.params.data.url, value).subscribe( data =>{
      this.viewCtrl.dismiss();
    });
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
