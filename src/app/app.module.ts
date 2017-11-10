import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EsacToMidiModule } from './esac-to-midi/esac-to-midi.module';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/esactomidi', pathMatch: 'full' },
  { path: '**', redirectTo: '/esactomidi', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EsacToMidiModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
