export default function FCResult(props)
{
    let resultSTR=props.values.map(
        (val,index)=>{
            return <li
            key={index}>{val!=NaN?val:0}
            </li>
        }
    )
    return(
        <div>
            <h3>FCResults</h3>
            {resultSTR}
        </div>
    )
}