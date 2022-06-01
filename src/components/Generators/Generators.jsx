import { Generator } from "./Generator/Generator"
import { GENERATORS_ARRAY } from "../../constants/generators";

export const Generators = (props) => {

    const generators = GENERATORS_ARRAY.map(generator => <div> <Generator
        updatePlayer={props.updatePlayer}
        generator={generator}  /> </div>);

    return (<div>
        <div> Generators:  </div>
        <div> {generators} </div>
    </div >
    )
}