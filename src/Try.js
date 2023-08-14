const Try = () => {
    const greatShoot = () =>{
        alert("Great shoot!");
    }
    const shoot = (a) =>{
        alert(a);
    }
    const shootevent = (a,b) =>{
        alert(b.type);
    }
    return(
        <>
        <button onClick={greatShoot}>Take the shot!</button>
        <br></br>
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
        <br></br>
        <button onClick={(event) => shootevent("Goal",event)}>Take the shot!</button>
        </>
    );
}

export default Try;