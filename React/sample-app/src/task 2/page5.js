function Page5(){
    let a=['arun',1,123]
    let b=['siva','satff',2345,"bad"]
    let c=a.concat(b);

    let d=b.reverse();
    let e=a.push("i am a good boy")
    let f=a.reverse()

    return(
        <>
        <h2>page5</h2>
        {a}<br/>
        {b}<br/>
        {c}<br/>
        {d}<br/>
        {e}<br/><br/><br/><br/>
        {f}<br/><br/><br/><br/>
        </>
    );
}
export default Page5;

