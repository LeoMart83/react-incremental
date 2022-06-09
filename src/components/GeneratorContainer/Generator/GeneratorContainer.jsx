import "./index.css";
import { useEffect, useState } from "react";
import { Generator } from "./Generator";


export const GeneratorContainer = (props) => {

    const [generator, setGenerator] = useState(props.generator);

    useEffect(() => {
        setGenerator({ ...generator, prodOfOne: Math.round(generator.cost / 20 + generator.tier) });
    }, []);

    useEffect(() => {
        if (generator.amount) {
            props.updateGameData(generator);
        }
    }, [generator.amount]);

    const buyGenerator = () => {
        const canBuy = props.canBuyGenerator(generator.cost);
        if (!canBuy) return;

        const nextGeneratorMult = generator.mult * 2;
        const nextGeneratorAmount = generator.amount + 1;
        const nextGeneratorCost = Math.round(generator.cost * 1.2);

        if (( generator.amount ) && ( nextGeneratorAmount % 10 === 0 )) {
            setGenerator({
                ...generator,
                mult: nextGeneratorMult,
                prod: generator.prodOfOne * nextGeneratorAmount * nextGeneratorMult,
                cost: nextGeneratorCost,
                amount: nextGeneratorAmount,
            });
        } else {
            setGenerator({
                ...generator,
                prod: generator.prodOfOne * nextGeneratorAmount * generator.mult,
                cost: nextGeneratorCost,
                amount: nextGeneratorAmount,
            });
        }
    }

    return (<Generator buyGenerator={buyGenerator} generator={generator} />)
}