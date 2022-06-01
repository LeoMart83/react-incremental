export const CurrencyInfo = ({player}) => {
    return (<div> 
        <div>You have {player.money} $</div>
        <div>Your production/second is {player.prod}</div>
        </div>
    )
}