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
            props.updateGeneratos(generator);
        }
    }, [generator.amount]);

    const buyGenerator = () => {
        const canBuy = props.canBuyGenerator(generator);
        if (!canBuy) return;

        if (generator.amount > 0 && (generator.amount + 1) % 10 === 0) {
            setGenerator({
                // These +1 suuuck
                ...generator,
                mult: generator.mult + 1,
                prod: generator.prodOfOne * (generator.amount + 1) * ( generator.mult + 1 ),
                cost: Math.round(generator.cost * 1.2),
                amount: generator.amount + 1,

            });
        } else {
            setGenerator({
                ...generator,
                prod: generator.prodOfOne * (generator.amount + 1) * generator.mult,
                cost: Math.round(generator.cost * 1.2),
                amount: generator.amount + 1,
            });
        }
    }

    return (<Generator buyGenerator={buyGenerator} generator={generator} />)
}