import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;


@Injectable({
  providedIn: "root"
})
export class IconService {

  private icons = [
    {name: 'layers', url: '/assets/icons/svg/layers.svg'},
    {name: 'speaker', url: '/assets/icons/svg/speaker.svg'},
    {name: 'bell', url: '/assets/icons/svg/bell2.svg'},
    {name: 'arrow-right', url: '/assets/icons/svg/arrow-right.svg'},
    {name: 'search', url: '/assets/icons/svg/search.svg'},
    {name: 'close', url: '/assets/icons/svg/close.svg'},
    {name: 'settings', url: '/assets/icons/svg/settings.svg'},
    {name: 'user', url: '/assets/icons/svg/user.svg'},
    {name: 'filter', url: '/assets/icons/svg/filter.svg'},
    {name: 'home', url: '/assets/icons/svg/home.svg'},
    {name: 'notes', url: '/assets/icons/svg/notes.svg'},
    {name: 'fruit', url: '/assets/icons/svg/fruite.svg'},
    {name: 'chef', url: '/assets/icons/svg/chef.svg'},
  ];

 constructor(private matIconRegistry: MatIconRegistry,  private sanitizer: DomSanitizer){
     this.matIconRegistry.addSvgIconLiteral('thumbs-up', this.sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
     this.icons.forEach((ele) => {
      this.matIconRegistry.addSvgIcon(ele.name, this.sanitizer.bypassSecurityTrustResourceUrl(ele.url));
     });
    
   }
}
