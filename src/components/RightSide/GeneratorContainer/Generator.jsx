export const Generator = ({ buyGenerator, generator, setShowHint, showHint }) => {
    return (<>
        <div className="generator-content"
            onClick={() => buyGenerator()}
            onMouseOver={() => { setShowHint(generator.name) }}
            onMouseLeave={() => { setShowHint(false) }}>
                
            <div className="generator-name-amount"><span>{generator.name}</span> <span>{generator.amount}</span></div>
            <div className="generator-cost-prod">
                <span> {generator.cost}$ </span>
                <span> Produces: {generator.prodOfOne * generator.mult}/sec </span>
            </div>
            {(showHint === generator.name) ? <div >
                {generator.amount} of "{generator.name}" produce {generator.prodOfOne * generator.mult * generator.amount} $/sec
                </div> : null}
        </div>
    </>)
}