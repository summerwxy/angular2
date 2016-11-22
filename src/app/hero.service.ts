import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor(private http: Http) { }
  private heroesUrl = 'app/heroes'; // URL to web api

  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);
    return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.handleError);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve => setTimeout(resolve, 1000)).then(() => this.getHeroes());
  }

  getHero(id: number): Promise<Hero> {
    return this
      .getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
