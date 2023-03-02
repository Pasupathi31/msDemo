import { Component } from '@angular/core';
import { SocketService } from './socket.service';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private hubConnectionBuilder!: HubConnection;
  offers: any[] = [];
  title = 'Chatbot';
  messageArray = [];
  synth:any;
  voices:any;
  constructor(private socketService:SocketService) {
    this.synth = window.speechSynthesis;
    this.voices = this.synth.getVoices();
  }
  message= '';

  ngOnInit(){
    this.socketService.receivedReply().subscribe(data=> {
      this.messageArray.push({name:'bot', message: data.outputMessage});
      this.speak(data.outputMessage);
    });

    this.hubConnectionBuilder = new HubConnectionBuilder().withUrl('https://localhost:7219/offers').configureLogging(LogLevel.Information).build();
        this.hubConnectionBuilder.start().then(() => console.log('Connection started.......!')).catch(err => console.log('Error while connect with server'));
        this.hubConnectionBuilder.on('SendOffersToUser', (result: any) => {
            this.offers.push(result);
        });

  }

  sendMessage(){
    if(this.message) {
      const data = { message:this.message };
      this.socketService.sendMessage(data);
      this.messageArray.push({name:'you', message:this.message});
      this.message = '';
    }
  }

 speak(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-US";
  u.volume = 1; //0-1 interval
  u.rate = 1;
  u.pitch = 1; //0-2 interval
  this.synth.speak(u);
}

}
