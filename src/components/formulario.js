import React, { useState, useEffect } from "react";

function Formulario() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    
    useEffect(() => {
        if (email != ""){
            console.log(`${email}`)
        } 
    }, [email]);

    useEffect(() => {
        if (pass != ""){
            console.log(pass);
        } 
    }, [pass]);


    const enviar = () => {
        console.log({email})
        console.log({pass})

    }

    return (
        <div>
            <p>Formulario de Login</p>
            <input type="text" className="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" className="pass" placeholder="Pass" onChange={(e) => setPass(e.target.value)} />
            <input type="button" value="Enviar" className="boton" onClick={() => enviar()} />
        </div>
    )
    

}


export default Formulario;