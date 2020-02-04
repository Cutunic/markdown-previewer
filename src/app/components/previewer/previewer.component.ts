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
          style({ opacity: 0, transform: 'translateY(-30px)'}),
          animate('500ms ease-in-out',
              style({opacity: '*', transform: 'translateY(0)'}))
      ]),
        transition(':leave',[
          style({ opacity: '*', transform: 'translateY(0)'}),
          animate('500ms ease-in-out',
              style({opacity: 0, transform: 'translateY(-30px)'}))
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

  }
  onClickPreviewer(){
    this.previewerShowWindow = this.previewService.onPreviewerShowWindow(!this.previewerShowWindow);
  }
}
