import { Injectable } from '@angular/core';

@Injectable()
export class MidiPlayerService {

    private player = MIDI.Player;

    private midiSong = {};

    private isMidiLoaded;
    private isPlaying = false;
    private midiSpeedValue: number = 1;
    private midiSpeedMax: number = 0.5;
    private midiSpeedMin: number = 1.5;
    private midiSpeedStep: number = 0.1;

    constructor() {
        this.isMidiLoaded = false;

        MIDI.loadPlugin({
            soundfontUrl: '../../../assets/soundfont/',
            onsuccess: () => {
                this.isMidiLoaded = true;
            }
        });
    }

    public setMidiSong(midiFile): void {
        this.midiSong = midiFile;
    }

    public getMidiSong(): any {
        return this.midiSong;
    }

    public isMidiPlaying(): boolean {
        return this.isPlaying;
    }

    public playMidi(): void {
        if (this.isMidiLoaded) {
            const midi = this.getMidiSong();

            // MOCK REMOVE THIS LATER
            midi.midi64 = "data:audio/midi;base64,TVRoZAAAAAYAAAABAGBNVHJrAAABDQD/UQMKLCoAkEUoYIBFKACQSCgwgEgoAJBHKDCARygAkEUoMIBFKACQRCgwgEQoAJBFKGCARSgAkEgoMIBIKACQRygwgEcoAJBFKDCARSgAkEQoMIBEKACQRSgwgEUoAJBHKDCARygAkEgoYIBIKACQSihggEooAJBMKIFAgEwoAJBMKDCATCgAkEwoMIBMKACQTSgwgE0oAJBMKDCATCgAkEooMIBKKACQSCgwgEgoAJBHKDCARygAkEcoMIBHKACQTCgwgEwoAJBKKDCASigAkEgoMIBIKACQRygwgEcoAJBFKDCARSgAkEgoMIBIKACQTChggEwoAJBEKGCARCgAkEUogViARSgA/y8A";

            this.player.loadFile(midi.midi64, this.player.start);
            this.isPlaying = true;
        }
    }

    public stopMidi(): void {
        this.player.stop();
        this.isPlaying = false;
    }

    public speedUpMidi(): void {
        if (this.midiSpeedValue > this.midiSpeedMax) {
            this.stopMidi();
            this.player.timeWarp -= 0.1;
            this.midiSpeedValue -= 0.1;
            this.playMidi();
        }
    }

    public slowDownMidi(): void {
        if (this.midiSpeedValue < this.midiSpeedMin) {
            this.stopMidi();
            this.player.timeWarp += 0.1;
            this.midiSpeedValue += 0.1;
            this.playMidi();
        }
    }
}
