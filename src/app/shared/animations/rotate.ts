import { animate, state, style, transition, trigger } from '@angular/animations';

export const rotate = trigger('rotate', [
    state('void', style({opacity: 0, transform: 'rotate(180deg)'})),
    transition('void <=> *', animate('0.2s 0.1s ease-in-out')), 
])