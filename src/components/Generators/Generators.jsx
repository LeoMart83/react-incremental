import { Generator } from "./Generator/Generator"

const GENERATORS_ARRAY = [
    {
        name: 'Gen I',
        tier: 0,
        cost: 10,
        prod: 1,
        amount: 0,
    },
    { 
        name: 'Gen II', 
        tier: 1,
        cost: 40, 
        prod: 3,
        amount: 0,
    },
    {
        name: 'Gen III', 
        tier: 2,
        cost: 80, 
        prod: 5,
        amount: 0,
    }
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