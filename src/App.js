import { CurrencyInfo } from "./components/CurrencyInfo";
import { GameplayArea } from "./components/GameplayArea";
import { Generators } from "./components/GeneratorContainer/Generators";
import { useState, useEffect } from "react";
import "./index.css";

const PLAYER = {
  money: 10,
  prod: 0,
  mult: 1,
  generators: [{
    name: "Gen I", prod: 0
  }, {
    name: "Gen II", prod: 0
  }, {
    name: "Gen III", prod: 0
  }],
}


const App = () => {

  const [player, setPlayerData] = useState(PLAYER);

  useEffect(() => {

    const intervalId = setInterval(() => {
      setPlayerData(prevState => {
        return { ...prevState, money: (player.money + player.prod / 20) }
      });
    }, 50);

    return () => {
      clearInterval(intervalId);
    }
  }, [player]);

  useEffect(() => {
    setPlayerData({ ...player, prod: calcProd() });
  }, [player.generators]);


  const canBuyGenerator = (generatorCost) => {
    if (generatorCost > player.money) return false
    else return true;
  }

  const calcProd = () => player.generators.reduce((totalProduction, element) => totalProduction + element.prod, 0);

  const updateGameData = (generator) => {
    const previousGeneratorCost = generator.cost / 1.2;
    setPlayerData({ ...player, money: player.money - previousGeneratorCost, generators: recalculateGenerators(generator) });
  }

  const recalculateGenerators = (generator) => {
    const newGenerators = player.generators.map((el) =>
      ({ ...el, prod: (el.name === generator.name) ? generator.prod : el.prod }));
    return newGenerators;
  }


  return (<div className="app">
    <div className="first-block"> <CurrencyInfo player={player} /> </div>
    <div className="second-block"> <GameplayArea /> </div>
    <div className="generators-block"> <Generators updateGameData={updateGameData} canBuyGenerator={canBuyGenerator} /> </div>
  </div>
  )
}

export default App;
