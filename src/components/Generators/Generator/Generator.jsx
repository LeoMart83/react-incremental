import "./index.css";
import { useState } from "react";


export const Generator = (props) => {

    const [generator, setGenerator] = useState(props.generator)

    const buyGenerator = () => {

        const canBuy = props.updatePlayer(generator);

        if ( !canBuy ) return

        setGenerator({ ...generator, amount: generator.amount + 1 });

    }

    return (<div className="generator-block" onClick={() => buyGenerator()}>
        <div> {generator.name} x {generator.amount ? generator.amount : 0} </div>
        <div> Costs: {generator.cost} </div>
        <div> Produces: {generator.prodPerSec ? generator.prodPerSec : "?"} per second </div>
    </div>)
}