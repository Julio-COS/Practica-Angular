import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {
  @Input() title?:string;
  @Output() titleChange = new EventEmitter<string>();
  
  eventTitleChange(){
    this.titleChange.emit(this.title);
  }
}
