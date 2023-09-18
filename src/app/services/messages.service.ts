import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor() {
    console.log(this.messages);
    
  }

  //messages: Array<string> = []
  messages: string[] = ["holaaa"]

  get message(){
    console.log(this.messages)
    return this.messages
  }

  add(message: string) {
    console.log(message)
    //this.messages = [...this.messages,message]
    this.messages.push(message)
  }

  clear() {
    this.messages = []
  }
}
