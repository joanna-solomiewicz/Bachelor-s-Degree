import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MidiToEsacComponent } from './midi-to-esac.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'miditoesac', component: MidiToEsacComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    MidiToEsacComponent
  ]
})
export class MidiToEsacModule { }
