export default function Array(){

    let a=['123','erode']
    let main=[{name:'arun',
    skills:[{program:'javascript',frontend:'html',backend:'nodejs'}]}]
    return(

        <>
        {a.map((z)=>
            <b>
            {z}
            </b>    
        )}
 
       {main.map((e)=>
            <table>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Skills
                    </th>
                </tr>
                <tr>
                    <td>
                        {e.name}
                    </td>
                    {e.skills.map((y)=>
                    <td>{y.frontend} and {y.backend}</td>
                    )}
                </tr>
            </table>
       )}
        </>

    )
}