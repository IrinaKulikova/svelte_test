import { gameIsOver } from '../stores/game';
import { get } from 'svelte/store';
import { addFigures, moveFigure } from './figuresCycle';

function startLoop(steps) {
    window.requestAnimationFrame(() => {
      steps.forEach(step => {
        if (typeof step === 'function') step();
      });
      if (get(gameIsOver)!==true) startLoop(steps);
    });
  }
  
  export const startGame = () => {
    gameIsOver.set(false);
    startLoop([addFigures, moveFigure]);
  };
  
  export function stopGame() {
    gameIsOver.set(true);
  }