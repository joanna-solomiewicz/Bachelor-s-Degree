import { Component, ViewChild } from '@angular/core';
import { EsacToMidiService } from '../services/esac-to-midi.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'upload-esac-file',
  templateUrl: './upload-esac-file.component.html',
  styleUrls: ['./upload-esac-file.component.scss']
})
export class UploadEsacFileComponent {

  @ViewChild('file') file;
  @ViewChild('fileName') fileName;

  private form: FormGroup = new FormGroup({
    fileName: new FormControl()
  });

  constructor(
    private esacToMidiService: EsacToMidiService
  ) { }

  private onChangeFile(): void {
    this.showFileName(this.file.nativeElement.files);
  }

  private showFileName(files: Object): void {
    if (files && files[0]) {
      this.fileName.nativeElement.value = files[0].name;
    } else {
      this.fileName.nativeElement.value = null;
    }
  }

  private uploadFile(): void {
    let files = this.file.nativeElement.files;
    if (files && files[0]) {
      let fileToUpload = files[0];
      this.esacToMidiService.uploadFile(fileToUpload)
        .subscribe(response => {
          console.log(response);
        });
    }
  }
}
