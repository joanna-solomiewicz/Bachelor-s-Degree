import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { ConverterService } from '../services/converter.service';
import { MessageDialogService } from '../../shared/services/message-dialog.service';

@Component({
  selector: 'app-esac-convert-file',
  templateUrl: './esac-convert-file.component.html',
  styleUrls: ['./esac-convert-file.component.scss']
})
export class EsacConvertFileComponent implements OnInit {

  @ViewChild('file') file;
  private files = [];
  public converting = false;
  @Output() converted = new EventEmitter();

  constructor(
    private converterService: ConverterService,
    private messageDialogService: MessageDialogService
  ) { }

  ngOnInit() {
  }

  private onChooseFiles(): void {
    if (this.file) {
      for (const file of this.file.nativeElement.files) {
        this.files.push(file);
      }
    }
  }

  private onDeleteFiles(index?: number): void {
    if (index) this.files.splice(index, 1);
    else this.files = [];
  }

  private isFilesChosen(): boolean {
    return this.files.length ? true : false;
  }


  private submit(): void {
    this.converting = true;
    const file = this.files[0];
    this.converterService.esacFileToEsacObject(file)
      .subscribe(data => {
        this.converted.emit(data);
        this.converting = false;
      },
      error => {
        this.messageDialogService.displayMessageDialog('Invalid file');
        this.converting = false;
      });
  }

}
