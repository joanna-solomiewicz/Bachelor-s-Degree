import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { EsacToMidiModule } from './esac-to-midi/esac-to-midi.module';
import { MidiToEsacModule } from './midi-to-esac/midi-to-esac.module';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/esactomidi', pathMatch: 'full' },
  { path: '**', redirectTo: '/esactomidi' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EsacToMidiModule,
    MidiToEsacModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
