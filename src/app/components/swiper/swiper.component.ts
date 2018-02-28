import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    console.log('after view init....')
    let swiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      keyboard: {
        enabled: true,
      },
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}