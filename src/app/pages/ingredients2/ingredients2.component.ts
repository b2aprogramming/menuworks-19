import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StandardComponent } from './ingredients2-search/standard/standard.component';

@Component({
  selector: 'app-ingredients2',
  templateUrl: './ingredients2.component.html',
  styleUrls: ['./ingredients2.component.scss'],
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    CommonModule
  ],
})
export class Ingredients2Component implements OnInit{
  public subMenus = [
    {name: 'Search', id: 1, link: './search'},
    // {name: 'Search3', id: 1, link: './search3'},
  ];
  constructor(public activatedRoute: ActivatedRoute, public router: Router){
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log('@@@ rres', res);
    })
  }
  public ngOnInit(): void {
    this.router.navigate(['ingredients/search'], {
      queryParams: {view: 'Standard'}
    })
    // // setTimeout( () => {
    //   const url = new URL(location.href);
    //   url.searchParams.set('view', 'Standard'); // add or update param
    
    //   // update URL without reload
    //   window.history.pushState({view: 'Standard'}, '', url);
    // // }, 300);
   
  }
}
