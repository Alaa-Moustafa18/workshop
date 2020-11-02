import { animate, state, style, transition, trigger } from '@angular/animations';

export const toggleFade = trigger('fade', [
    state('void', style({opacity: 0})),
    transition('void <=> *', animate('0.2s 0.1s ease-in-out')), 
])