import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-capture-dashboard',
  templateUrl: './capture-dashboard.component.html',
  styleUrls: ['./capture-dashboard.component.scss']
})
export class CaptureFailedSlabComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: 'https://evening-anchorage-315.herokuapp.com/api/' });
  public hasBaseDropZoneOver: boolean = false;
  console = console;
  constructor() { }

  ngOnInit() {
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
