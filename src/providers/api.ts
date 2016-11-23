import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Api {

  constructor(private http: Http) {}

  index(id){
    return this.http.get('http://abranchesdev.com.br/wp-json/wp/v2/posts/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page='+id)
  }

  search(keyword, id){
    return this.http.get(
      "http://abranchesdev.com.br/wp-json/wp/v2/posts?_embed&?filter[order]=DESC&filter[posts_per_page]=5&search=" + keyword + "&page="+id
    );
  }

}
