import { CurrencyInfo } from "./components/CurrencyInfo";
import { GameplayArea } from "./components/GameplayArea";
import { Generators } from "./components/GeneratorContainer/Generators";
import { useState, useEffect } from "react";
import "./index.css";

const PLAYER = {
  money: 10,
  prod: 0,
  mult: 1,
}

const PLAYER_GENERATORS = [{
  name: "Gen I", prod: 0
}, {
  name: "Gen II", prod: 0
}, {
  name: "Gen III", prod: 0
}];


const App = () => {

  const [player, setPlayerData] = useState(PLAYER);
  const [playerGenerators, setPlayerGenerators] = useState(PLAYER_GENERATORS);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlayerData({ ...player, money: (player.money + player.prod / 20) });
    }, 50)

    return () => {
      clearInterval(intervalId);
    }
  }, [player]);

  useEffect(() => {
    setPlayerData({ ...player, prod: calcProd() });
  }, [playerGenerators]);


  const canBuyGenerator = (generatorCost) => {
    if (generatorCost > player.money) return false
    else return true;
  }



  const calcProd = () => playerGenerators.reduce((totalProduction, element) => totalProduction + element.prod, 0);

  const updateGameData = (generator) => {

    const previousGeneratorCost = generator.cost / 1.2;

    setPlayerData({ ...player, money: player.money - previousGeneratorCost, });
    setPlayerGenerators(recalculateGenerators(generator));
  }

  const recalculateGenerators = (generator) => {
    const newGenerators = playerGenerators.map((el) => 
    ({...el, prod: (el.name === generator.name) ? generator.prod : el.prod }));

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
