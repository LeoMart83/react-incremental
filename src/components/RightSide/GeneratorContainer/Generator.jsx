export const Generator = ({buyGenerator, generator}) => {
    return (
        <div className="generator-block" onClick={() => buyGenerator()}>
            <div className="generator-name"> {generator.name} x {generator.amount ? generator.amount : 0} </div>
            <div className="generator-cost-prod">
            <span> Cost: {generator.cost} </span>
            <span> Produces: {generator.prodOfOne * generator.mult}/sec </span>
            </div>
        </div>
    )
}