function One(){
    let a=Math.random()*100;
  let b=Math.round(2.5);
  let c=Math.floor(Math.random()*1000);
  let d=Math.min(12,14,20)
  let e=Math.max(100,150,200)

    return(
        <>
        <h1>Hello</h1>
        <h2>{a}</h2>
        <h3>{b}</h3>
        <h1>{c}</h1>
        <i className='display-3'>{d}</i>
        <h4>{e}</h4>
        </>
    );
}
export default One;