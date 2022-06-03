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
      setPlayerData({ ...player, money: (player.money + player.prod/20) });
      // console.log((player.money + player.prod/5).toFixed(1)  );
    }, 50)

    return () => {
      clearInterval(intervalId);
    }
  }, [player]);

  const updatePlayerProduction = (generator) => {
    // This function needs to be changed

    if (generator.cost > player.money) return false


    
    setPlayerData({ ...player, money: player.money - generator.cost, prod: generator.prod * (generator.amount + 1) * generator.mult });
    return true
  }

  return (<div className="app">
    <div className="first-block"> <CurrencyInfo player={player} /> </div>
    <div className="second-block"> <GameplayArea /> </div>
    <div className="generators-block"> <Generators updatePlayerProduction={updatePlayerProduction} /> </div>
  </div>
  )
}

export default App;
