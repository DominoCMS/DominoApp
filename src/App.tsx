import './App.scss';

import { Component, createSignal } from 'solid-js';
import DominoUkraineRibbon from "./components/Domino/UkraineRibbon/DominoUkraineRibbon";
import MajHero from "./components/Maj/Hero/MajHero";

const App: Component = () => {
  const [counter, setCounter] = createSignal(0);
  setInterval(setCounter, 1000, (c: number) => c + 1);

  return (
    <>
        <MajHero header="Domino Testing Ground"/>
        <DominoUkraineRibbon />
    </>
  );
};

export default App;
