import { Generator } from "./Generator/Generator"

const GENERATORS_ARRAY = [
    {
        name: 'First Generator',
        cost: 10,
        prodPerSec: 1,
        bought: 0,
        amount: 0,
    },
    { name: 'Second Generator', cost: 30, },
    { name: 'Third Generator', cost: 50, },
]



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