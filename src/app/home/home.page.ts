import { Component } from '@angular/core';
import { MediaCapture } from 'media-capture';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  async captureVideo() {
    try {
      const result = await MediaCapture['captureVideo']({
        duration: 300,
        quality: 'hd',
        sizeLimit: 0
      });

      console.log('Vídeo capturado:', result.file);
    } catch (error) {
      console.error('Erro ao capturar vídeo:', error);
    }
  }
  

}
