import { GeneratorContainer } from "./Generator/GeneratorContainer"
import { GENERATORS_ARRAY } from "../../constants/generators";

export const Generators = (props) => {

    const mappedGenerators = GENERATORS_ARRAY.map(generator =>
         <GeneratorContainer
            updatePlayerProduction={props.updatePlayerProduction}
            generator={generator}
            key={generator.tier} />);

    return (<div>
        <div> Generators:  </div>
         {mappedGenerators} 
    </div >
    )
}