import { Component, ViewChild } from '@angular/core';
import { EsacToMidiService } from '../services/esac-to-midi.service';

@Component({
  selector: 'upload-esac-file',
  templateUrl: './upload-esac-file.component.html',
  styleUrls: ['./upload-esac-file.component.scss']
})
export class UploadEsacFileComponent {

  @ViewChild('fileInput') fileInput;

  constructor(
    private esacToMidiService: EsacToMidiService
  ) { }

  private addFile(): void {
    let files = this.fileInput.nativeElement.files;
    if (files && files[0]) {
      let fileToUpload = files[0];
      this.esacToMidiService.uploadFile(fileToUpload)
        .subscribe(response => {
          console.log(response);
        });
    }
  }

  private onChange(): void {
    console.log(this.fileInput.nativeElement.files);
  }
}
