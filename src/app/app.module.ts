import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocketService } from './socket.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ChatService } from './chat.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  { path: "chat", component: ChatComponent }
//   { path: "contactus", component: ContactUsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SocketService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
