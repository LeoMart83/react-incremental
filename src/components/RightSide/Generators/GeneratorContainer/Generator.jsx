export const Generator = ({ generator, buyGenerator, showDescription, setShowDescription }) => {
    return (<>
        <div className="generator-content"
            onClick={() => buyGenerator()}
            onMouseOver={() => { setShowDescription(generator.name) }}
            onMouseLeave={() => { setShowDescription(false) }}>
                
            <div className="generator-name-amount"><span>{generator.name} <img src={generator.img}/></span>  <span>{generator.amount}</span></div>
            <div className="generator-cost">
                <b>{generator.cost}$</b>
            </div>
            {(showDescription === generator.name) ? <div className="hint">
                <div className="inner-row">Each produces {generator.prodOfOne * generator.mult} $/sec</div>
                <div className="inner-row">{generator.amount} of "{generator.name}" produce {generator.amount ? generator.prod : 0} $/sec</div>
                </div> : null}
        </div>
    </>)
}