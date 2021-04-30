import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePage } from './game/game.page';

const routes: Routes = [
  {
    path: '',
    component: GamePage,
  },
  {
    path: 'game',
    loadChildren: () => import('./game.module').then( m => m.GamePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamePageRoutingModule {}
