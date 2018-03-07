import { Component } from '@angular/core';
import { ElectronManagerService } from '../../services';
import { HymnalService, Hymnal, MusicLetter, Strophe } from '../../modules/hymnal';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private electronManagerService: ElectronManagerService, private hymnalService: HymnalService) {}

  openSwiperExample() {
    this.electronManagerService.createWindow('swiper');
  }

  ngOnInit() {
    // let hymnal = new Hymnal("Harpa Cristã");
    // this.hymnalService.createHymnal(hymnal);

    let music: MusicLetter = new MusicLetter();
    music.title = 'Chuvas de Graça';
    music.author = 'J.R. (J.McGranahan)';
    music.musicNumber = 1;
    music.chorus = new Strophe(0, [
      'Chuvas de graça,',
      'Chuvas pedimos, Senhor;',
      'Manda-nos chuvas constantes,',
      'Chuvas do Consolador.',
    ]);
    music.strophes = [
      new Strophe(1, [
        'Deus prometeu com certeza',
        'Chuvas de graça mandar;',
        'Ele nos dá fortaleza,',
        'E ricas bênçãos sem par',
      ]),
      new Strophe(2, [
        'Cristo nos tem concedido',
        'O santo Consolador,',
        'De plena paz nos enchido,',
        'Para o reinado do amor.',
      ]),
      new Strophe(3, [
        'Dá-nos, Senhor, amplamente,',
        'Teu grande gozo e poder;',
        'Fonte de amor permanente,',
        'Põe dentro de nosso ser.',
      ]),
      new Strophe(4, [
        'Faze os teus servos piedosos,',
        'Dá-lhes virtude e valor,',
        'Dando os teus dons preciosos,',
        'Do santo Preceptor.',
      ]),
    ];

    console.log(JSON.stringify(music));
  }
}
