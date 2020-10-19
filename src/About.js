import React from 'react';

class About extends React.Component{
    render(){
        const fakeimg ={
            height: "200px",
            background: "#aaa"
        }
        return(
            <div>
                <h2>About Me</h2>
                <h5>Photo of me:</h5>
                <div style={fakeimg}>Fake Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
        );
    }
}
export default About;