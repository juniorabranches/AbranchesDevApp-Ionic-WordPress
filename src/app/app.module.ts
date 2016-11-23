import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SinglePage } from '../pages/single/single';
import { CommentPage } from '../pages/comment/comment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SinglePage,
    CommentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SinglePage,
    CommentPage
  ],
  providers: []
})
export class AppModule {}
