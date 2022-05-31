export const CurrencyInfo = (props) => {
    return (<div> 
        <div>You have {props.player.money} $</div>
        <div>Your production/second is {props.player.production}</div>
        </div>
    )
}