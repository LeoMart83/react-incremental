export const Generator = ({buyGenerator, generator}) => {
    return (
        <div className="generator-block" onClick={() => buyGenerator()}>
            <div> {generator.name} x {generator.amount ? generator.amount : 0} </div>
            <div> Costs: {generator.cost} </div>
            <div> Produces: {generator.prodOfOne * generator.mult} per second </div>
        </div>
    )
}