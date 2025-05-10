import { trigger, state, style, transition, animate } from '@angular/animations';
export const collapseAnimation = trigger('collapsed', [
  state(
    'true',
    style({
      height: '*',
      opacity: 1,
      overflow: 'visible'
    })
  ),
  state(
    'false',
    style({
      height: '0px',
      opacity: 0,
      overflow: 'hidden'
    })
  ),
  transition('false => true', animate('225ms cubic-bezier(0.4, 0, 0.2, 1)')),
  transition('true => false', animate('225ms cubic-bezier(0.4, 0, 0.2, 1)'))
]);
