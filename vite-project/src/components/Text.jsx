function Text({name}){
    var msg="";
    if(name){
        msg+= " "+name;
    }
    return(
            <div>
                <div>{msg}</div>
                <br />
            </div>
    )
}

export default Text