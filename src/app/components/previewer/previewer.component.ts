import { Component, OnInit } from '@angular/core';
import { faCompressArrowsAlt, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { PreviewService } from '../../services/preview.service';
import * as marked from 'marked';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-previewer',
  animations: [
    trigger(
      'showAnimation', [
        transition(':enter', [
          style({ opacity: 0, height: 0 }),
          animate('500ms ease-in-out',
              style({opacity: '*', height: '*'}))
      ]),
        transition(':leave',[
          style({ opacity: '*', height:'*'}),
          animate('500ms ease-in-out',
              style({opacity: 0, height: 0}))
      ])
      ]
    )
  ],
  templateUrl: './previewer.component.html',
  styleUrls: ['./previewer.component.css']
})
export class PreviewerComponent implements OnInit {
  faCompressArrowsAlt = faCompressArrowsAlt;
  faExpandArrowsAlt = faExpandArrowsAlt;
  previewerShowWindow: boolean;
  textToShow: string;
  editorShowOutside: boolean;

  constructor(public previewService: PreviewService) { 
    this.previewService.editorTextObs.subscribe((value) => {
      this.textToShow = marked(value);
    })

    this.previewService.previewerShowWindowObs.subscribe((value) => {
      this.previewerShowWindow = value;
    })
  }

  ngOnInit() {
    this.textToShow = marked(this.previewService.initEditor());
    this.previewerShowWindow = this.previewService.initShowWindow();
    this.editorShowOutside = this.previewService.getEditorShow();
  }
  onClickPreviewer(){
    this.previewerShowWindow = this.previewService.onPreviewerShowWindow(!this.previewerShowWindow);
    this.editorShowOutside = this.previewService.getEditorShow();
  }
}
