import "./index.css";
import { useEffect, useState } from "react";
import { Generator } from "./Generator";


export const GeneratorContainer = (props) => {

    const [generator, setGenerator] = useState(props.generator);

    useEffect(() => {
        setGenerator({ ...generator, prod: Math.round(generator.cost / 20 + generator.tier) });
    }, []);

    const buyGenerator = async () => {
        const canBuy = props.updatePlayerProduction(generator);
        if (!canBuy) return;

        if (generator.amount > 0 && (generator.amount + 1) % 10 === 0) {
            setGenerator({ ...generator, cost: Math.round(generator.cost * 1.2), amount: generator.amount + 1, mult: generator.mult + 1 });
        } else {
            setGenerator({ ...generator, cost: Math.round(generator.cost * 1.2), amount: generator.amount + 1, });
        }
    }

    return (<Generator buyGenerator={buyGenerator} generator={generator} />)
}