import { Component } from '@angular/core';
import { MediaCapture,CaptureImageOptions} from '@awesome-cordova-plugins/media-capture/ngx';
// import { MediaCapture } from 'media-capture';
import { File } from '@awesome-cordova-plugins/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  video:any;
  constructor(private mediaCapture:MediaCapture, private file: File){

  }
  async captureVideo() {
    try {
      let options: CaptureImageOptions = { limit: 1 }
      const data:any = await this.mediaCapture.captureVideo(options);
      this.video = data[0];
      console.log(this.video);
      let dir = this.video.localURL.split('/');
      dir.pop();
      let fromDir = dir.join('/');
      let toDir = this.file.dataDirectory;
      const response = await this.file.copyFile(fromDir, this.video.name, toDir, this.video.name);
      console.log(response);
    } catch (error) {
      console.log(error);
      
    }
    // try {
    //   const result = await MediaCapture['captureVideo']({
    //     duration: 300,
    //     quality: 'hd',
    //     sizeLimit: 0
    //   });

    //   console.log('Vídeo capturado:', result.file);
    // } catch (error) {
    //   console.error('Erro ao capturar vídeo:', error);
    // }
  }
  

}
