import { Injectable } from "@angular/core";

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    if (confirm("Do you really want to clear?")) {
      if (this.messages.length > 5) {
        this.messages.splice(0, 5);
      } else {
        this.messages = [];
      }
    }
  }
}
