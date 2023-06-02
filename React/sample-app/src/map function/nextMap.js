export default function NextMap()
{
    let a=['siva','arun'];

    let sample=
    [
        {
        name:'arun',
        state:'tamilnadu'
        },
        {
        name:'siva',
        state:'tamilnadu'
        }
    ]

    return(
        <>
            <ol>
                {a.map((b)=>
                    <li>
                        {b}
                    </li>  
                )}
            </ol>

            <table className="table table-bordered text-center">
                <tr>
                    <th>Name</th>
                    <th>State</th>
                </tr>
                {sample.map((x)=>
                <tr>
                    <td>
                        {x.name} 
                    </td>
                    <td>
                        {x.state}
                    </td>
                </tr>
                )}
            </table>
        </>
    )
}

// map function syntax

// {arrayname.map(()=>
//     <>
//     </>)}