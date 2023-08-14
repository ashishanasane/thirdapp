const Try = () => {
    const greatShoot = () =>{
        alert("Great shoot!");
    }
    const shoot = (a) =>{
        alert(a);
    }
    return(
        <>
        <button onClick={greatShoot}>Take the shot!</button>
        <br></br>
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
        </>
    );
}

export default Try;