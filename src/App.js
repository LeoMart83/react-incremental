import { CurrencyInfo } from "./components/CurrencyInfo";
import { GameplayArea } from "./components/GameplayArea";
import { Generators } from "./components/GeneratorContainer/Generators";
import { useState, useEffect } from "react";
import "./index.css";

const PLAYER = {
  money: 10,
  prod: 0,
  mult: 1,
  // generators: [0, 0, 0,],
  generators: {
    "Gen I": 0,
    "Gen II": 0,
    "Gen III": 0,
  }
}



const App = () => {

  const [player, setPlayerData] = useState(PLAYER);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlayerData({ ...player, money: (player.money + player.prod / 20) });
      // console.log((player.money + player.prod/20).toFixed(1)  );
    }, 50)

    return () => {
      clearInterval(intervalId);
    }
  }, [player]);

useEffect( () => {
  setPlayerData( {...player, prod: calcProd()});
}, [player.generators])


  const canBuyGenerator = (generator) => {
    if (generator.cost > player.money) return false
    else return true;
  }

  const calcGenerators = (generator) => {
    return { ...player.generators, [generator.name]: generator.prod }
  }

  const calcProd = () => {
    let totalProduction = 0;
    for ( let prop in player.generators) {
      totalProduction = totalProduction + player.generators[prop];
    }
    return totalProduction;
  }

  const updateGeneratos = (generator) => {
    setPlayerData({ ...player, 
      money: player.money - (generator.cost / 1.2), 
      generators: calcGenerators(generator) });
  }

  return (<div className="app">
    <div className="first-block"> <CurrencyInfo player={player} /> </div>
    <div className="second-block"> <GameplayArea /> </div>
    <div className="generators-block"> <Generators updateGeneratos={updateGeneratos} canBuyGenerator={canBuyGenerator} /> </div>
  </div>
  )
}

export default App;
