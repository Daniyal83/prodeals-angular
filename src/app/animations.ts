import { transition, animate, trigger, style, state, query } from "@angular/animations";

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0,
                    width: '100%',
                    transform: 'translateY(20%) scale(0.8)'
                })
            ], {optional: true}),
            query(':leave', [
                animate('100ms ease-out', style({ opacity: 0, transform: 'translateY(20%) scale(0.8)'}))
                ], {optional: true}),
            query(':enter', [
                animate('100ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)'}))
            ], {optional: true})
        ])
    ]);

export const offersAnimation = 
    trigger('fadeIn', [
        state('hide', style({
            opacity: 0,
        })),
        state('show', style({
            opacity: 1,
        })),
        transition('hide => show', [
            animate('0.2s')
        ]),
        transition('show => hide', [
            animate('0.2s')
    ])
])