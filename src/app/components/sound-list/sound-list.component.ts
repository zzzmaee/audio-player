import {Component} from '@angular/core';

export interface AudioElement {
  id: number;
  title: string;
  fileName: string;
  fileUrl: string;
}

const AUDIO_DATA: AudioElement[] = [
  {
    id: 1,
    title: 'Zivert',
    fileName: 'Life.mp3',
    fileUrl: 'assets/zivert-life.mp3'},
  {
    id: 2,
    title: 'Sting',
    fileName: 'Shape-of-my-heart.mp3',
    fileUrl: 'assets/sting-shape-of-my-heart.mp3'},
  {
    id: 3,
    title: 'ABBA',
    fileName: 'Dancing-queen.mp3',
    fileUrl: 'assets/abba-dancing-queen.mp3'
  }
];

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.scss']
})
export class SoundListComponent {
  displayedColumns: string[] = ['id', 'title', 'fileName'];
  dataSource = AUDIO_DATA;
  selectedAudio: AudioElement | null = null;

  selectAudio(audio: AudioElement) {
    this.selectedAudio = this.selectedAudio === audio ? null : audio;
  }
}
