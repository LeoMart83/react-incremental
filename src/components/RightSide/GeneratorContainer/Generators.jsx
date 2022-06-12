import { GeneratorContainer } from "./GeneratorContainer"
import { GENERATORS_ARRAY } from "../../../constants/generators";

export const Generators = (props) => {

    const mappedGenerators = GENERATORS_ARRAY.map(generator =>
        <GeneratorContainer
            canBuyGenerator={props.canBuyGenerator}
            updateGameData={props.updateGameData}
            generator={generator}
            key={generator.tier} />);

    return (<>
        <div>{mappedGenerators}</div>
    </>
    )
}