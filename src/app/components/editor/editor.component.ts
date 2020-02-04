import { Component, OnInit } from '@angular/core';
import { faCompressArrowsAlt, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { PreviewService } from '../../services/preview.service';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-editor',
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
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  faCompressArrowsAlt = faCompressArrowsAlt;
  faExpandArrowsAlt = faExpandArrowsAlt;
  editorShowWindow: boolean;
  textToShow: string;

  constructor(public previewService: PreviewService) {
    this.previewService.editorShowWindowObs.subscribe(value=>{
      this.editorShowWindow = value;
    })
  }

  ngOnInit() {
    this.textToShow = this.previewService.initPreviewer();
    this.editorShowWindow = this.previewService.initShowWindow();
  }

  onClickEditor(){
    this.editorShowWindow = this.previewService.onEditorShowWindow(!this.editorShowWindow);
  }

  onEditorChange(value){
    this.textToShow = this.previewService.onChangeInputValue(value.target.value);
  }
}
