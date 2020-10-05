import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <footer className="container-footer">
                <p>&copy; {(new Date().getFullYear())} Mi Proyecto, Inc. &middot; <a href="#">Política de privacidad</a> &middot;<a href="#">Términos y condiciones</a> </p>
           </footer>

        )

    }
}

export default Footer;