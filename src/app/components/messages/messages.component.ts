import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  messages: Array<string> = [];

  constructor(private messageService: MessagesService) {}

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    console.log(this.messageService.message)
    this.messages = this.messageService.message;
  }

  clear() {
    this.messages = this.messageService.clear();
  }
}
