import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {
  inputValue: string = `# Welcome to my Angular Markdown Previewer!
  
## a sub header (H2 size)
> "a blockquote" \n
[visit google](http://www.google.com) \n
![](http://source.unsplash.com/random/50x50) \n
\`alert(s);\`  
 
**This should be bold**
* a list item
* list item
* list imek
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.
  
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |`
startValue: boolean = false;
editorShow: boolean = false;
previewerShow: boolean = false;
private _editorText: Subject<string> = new Subject<string>();  
public editorTextObs = this._editorText.asObservable();  

private _editorShowWindow: Subject<boolean> = new Subject<boolean>();
public editorShowWindowObs = this._editorShowWindow.asObservable();

private _previewerShowWindow: Subject<boolean> = new Subject<boolean>();
public previewerShowWindowObs = this._previewerShowWindow.asObservable();

  constructor() { }
  
  onChangeInputValue(value: string){
    this.inputValue = value;
    this._editorText.next(this.inputValue);
    return this.inputValue;
  }
  initPreviewer(){
    return this.inputValue;
  }
  initEditor(){
    return this.inputValue;
  }
  initShowWindow(){
    return this.startValue;
  }
  onPreviewerShowWindow(value:boolean){
    this.previewerShow = value;
    this._previewerShowWindow.next(this.previewerShow);
    return this.previewerShow;
  }
  onEditorShowWindow(value:boolean){
    this.editorShow = value;
    this._editorShowWindow.next(this.editorShow);
    return this.editorShow;
  }
  getEditorShow(){
    return this.editorShow;
  }
  getPreviewerShow(){
    return this.previewerShow;
  }
}
