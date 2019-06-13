import React from 'react';
import axios from 'axios';

//function that takes in a component and return a component (HOC)

export default function(Component) { //passing in Users component
    return class Authenticated extends React.Component { //rendering this authenticated component inside
        render() {
            //can i conditionally render this(Users) component based on whether i have a token or not?
            const token = localStorage.getItem('jwt');
            const notLoggedIn = <h3> Please login to see the users </h3>

            return <>{ token ? <Component {...this.props} /> : notLoggedIn}</>; 
            //HOC is making the decision of whether i want to display or not
        }
    };
}