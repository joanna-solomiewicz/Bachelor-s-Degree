import { Injectable } from '@angular/core';

@Injectable()
export class MidiPlayerService {

    private player = MIDI.Player;

    private midiSong = {};
    private currentEsacId;

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

    public setMidiSong(midiFile, midiId): void {
        this.midiSong = midiFile;
        this.currentEsacId = midiId;
    }

    public getMidiSong(): any {
        return this.midiSong;
    }

    public getEsacId(): any {
        return this.currentEsacId;
    }

    public isMidiPlaying(): boolean {
        return this.isPlaying;
    }

    public playMidi(): void {
        if (this.isMidiPlaying) {
            this.stopMidi();
        }
        if (this.isMidiLoaded) {
            const midi = this.getMidiSong();

            this.player.loadFile(midi.midi64, this.player.start);
            this.isPlaying = true;

            this.player.removeListener();
            this.player.addListener((currentSong) => {
                if (currentSong.now === currentSong.end) {
                    this.isPlaying = false;
                }
            });
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

    public getSpeedData(): any {
        return {
            midiSpeedValue: this.midiSpeedValue,
            midiSpeedMax: this.midiSpeedMax,
            midiSpeedMin: this.midiSpeedMin,
            midiSpeedStep: this.midiSpeedStep,
        };
    }
}
