export const CurrencyInfo = ({player}) => {
    return (<div> 
        <div>You have {(player.money).toFixed(1)} $</div>
        <div>Your production/second is {player.prod}</div>
        </div>
    )
}