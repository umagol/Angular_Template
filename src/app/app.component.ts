import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private ViewContref: ViewContainerRef,
    private ComponentFactRes: ComponentFactoryResolver
    ){}

  // Lazy Loading Component
  // async loadaboutme(){
  //   this.ViewContref.clear();
  //   const {AboutMeComponent} = await import('./layout/about-me/about-me.component')
  //   this.ViewContref.createComponent(
  //     this.ComponentFactRes.resolveComponentFactory(AboutMeComponent)
  //   )
  // }
}