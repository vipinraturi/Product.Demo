import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'test2',
    template: `Hello World 2`
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}