import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { CommentPage } from '../comment/comment';

/*
  Generated class for the SinglePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-single',
  templateUrl: 'single.html'
})
export class SinglePage {
  datas:any = [];
  comments:any;
  constructor(private navCtrl: NavController, params: NavParams, private http: Http, private modalCtrl: ModalController, private viewCtrl: ViewController) {
    this.navCtrl = navCtrl;
    this.http.get(params.data.url+"/?_embed").subscribe(data=>{
      this.datas.push(data.json());

      this.http.get(data.json()._links.replies[0].href).subscribe(comment=>{
        this.comments = comment.json()
      });

    });
  }

  ionViewWillEnter() {
      this.viewCtrl.setBackButtonText('');
  }

  openCommentPage(url){
    let modal = this.modalCtrl.create(CommentPage,{
      url:url
    });
    modal.present()
  }

}
