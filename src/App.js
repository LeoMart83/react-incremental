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

  const canBuyGenerator = (generator) => {
    if (generator.cost > player.money) return false
    else return true;
  }


  const updatePlayerProduction = (generator) => {
    setPlayerData({ ...player, money: player.money - ( generator.cost / 1.2 ), prod: generator.prod * generator.mult });
  }


  return (<div className="app">
    <div className="first-block"> <CurrencyInfo player={player} /> </div>
    <div className="second-block"> <GameplayArea /> </div>
    <div className="generators-block"> <Generators updatePlayerProduction={updatePlayerProduction} canBuyGenerator={canBuyGenerator} /> </div>
  </div>
  )
}

export default App;
