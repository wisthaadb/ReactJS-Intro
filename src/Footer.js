import React from 'react';
class Footer extends React.Component{
    render(){
        const mystyle={
            marginBottom:0
        }
        return(
            <div class="jumbotron text-center" style={mystyle}>
                <p>Footer</p>
            </div>
        );
    }
}
export default Footer;