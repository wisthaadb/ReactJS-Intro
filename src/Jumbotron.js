import React from 'react';
class Jumbotron extends React.Component{
    render(){
        const mystyle = {
            marginBottom:0
          };
        return(
            <div class="jumbotron text-center" style={mystyle}>
                <h1>My First Bootstrap 4 Page</h1>
                <p>Resize this responsive page to see the effect!</p> 
            </div>
        );
    }
}
export default Jumbotron;