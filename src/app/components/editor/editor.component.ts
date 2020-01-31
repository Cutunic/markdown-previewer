import { Component, OnInit } from '@angular/core';
import { faCompressArrowsAlt, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  faCompressArrowsAlt = faCompressArrowsAlt;
  faExpandArrowsAlt = faExpandArrowsAlt;
  showWindow: boolean = true;
  constructor() { }

  ngOnInit() {
    
  }

  onClickEditor(){
    this.showWindow = !this.showWindow;
  }
}
