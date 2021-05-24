import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import * as io from 'socket.io-client';
import {io} from 'socket.io-client';

@Component({
  selector: 'app-chat-service',
  templateUrl: './chat-service.component.html',
  styleUrls: ['./chat-service.component.css']
})
export class ChatServiceComponent implements OnInit {
  // private url = 'ws://localhost:3000';
  private url = location.origin.replace(/^http/, 'ws') + ':3000';
  socket: any; 
  
  constructor() {
    // this.socket = io(this.url);
    this.socket = io(this.url, { transports: ['websocket', 'polling', 'flashsocket'] });
  }

  ngOnInit(): void {
  }

  listen(event: string){
    return new Observable((subscriber) => {
      this.socket.on(event, (data) => {
        subscriber.next(data);
      })
    });
  }

  emit(event: string, data: any){
    this.socket.emit(event, data);
  }

}
