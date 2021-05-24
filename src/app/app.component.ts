import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ChatServiceComponent } from './chat-service/chat-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chat-socketio-test';
  constructor(private chatService: ChatServiceComponent) { }

  ngOnInit(){
    this.chatService.listen('test event').subscribe((data) => {
      console.log(data);
    })
  }
}

