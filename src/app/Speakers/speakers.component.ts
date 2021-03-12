import { Component } from '@angular/core';
import {data, speaker} from './shared/speaker';
import {session} from './shared/speaker';
import {SpeakersService} from './shared/speakers.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent {
  myclass = 'my1';
  showingSpeakerHref: string;
  title = 'speakers';
  public speakers: speaker[];
  public sessions: session[];
  public speakerToolTip: string;

  constructor(private speakersService: SpeakersService){
    this.speakersService.GetSpeakers().subscribe((res) => {
      console.log(res.collection.items);
      this.speakers = res.collection.items as speaker[];
      });
    }
    getValue( data: data[],name: string):string{
    return data.find(x => x.name==name).value;


    }
    show(href: string): void {
    debugger;
    if(this.showingSpeakerHref === href)
    {
      this.showingSpeakerHref = '';
      return;
   }
    this.showingSpeakerHref = href;
    debugger;
    this.speakersService.getSessions(href).subscribe((res)=>{
      debugger;
      this.sessions = res.collection.items as session[];

    });
    }

    GetToolTip(href: string): any{
    this.speakersService.GetToolTip(href).subscribe((res) => {
  this.speakerToolTip = res;
});
    }
}
// tslint:disable-next-line:class-name
// noinspection ES6ClassMemberInitializationOrder

