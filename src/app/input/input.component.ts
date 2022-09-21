import { Component, OnInit } from '@angular/core';
// import { BlobOptions } from 'buffer';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
delElement() {
throw new Error('Method not implemented.');
}

  todoName: any;
  todoList: any = [];
  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  newElement() {

    console.log(this.todoName, "this name");
    this.todoList.push(this.todoName);
    this.todoName = ''
    console.log(this.todoList, "this name");
  }


}


