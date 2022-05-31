import { CurrencyInfo } from "./components/CurrencyInfo";
import { GameplayArea } from "./components/GameplayArea";
import { Generators } from "./components/Generators/Generators";
import { useState, useEffect, useRef } from "react";
import "./index.css";

const PLAYER = {
  money: 10,
  production: 0,
}



const App = () => {

  const [player, setPlayerData] = useState(PLAYER);
  const playerRef = useRef(player);

  useEffect(() => {
    setInterval( () => {
      setPlayerData({ ...playerRef.current, money: playerRef.current.money + playerRef.current.production });
    }, 1000);
  }, [])

  useEffect(() => {
     playerRef.current = player;

  }, [player])

  const updatePlayer = (generator) => {

    if (generator.cost > player.money) return false

    setPlayerData({ ...player, money: player.money - generator.cost, production: player.production + generator.prodPerSec });

    return true
  }

  return (<div className="app">
    <div className="first-block"> <CurrencyInfo player={player} /> </div>
    <div className="second-block"> <GameplayArea /> </div>
    <div className="generators-block"> <Generators updatePlayer={updatePlayer} /> </div>
  </div>
  )
}

export default App;
