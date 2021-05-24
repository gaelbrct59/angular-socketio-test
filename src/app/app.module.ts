import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatServiceComponent } from './chat-service/chat-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
