import React from 'react'
import { useAuth } from '../../Context/Auth'

export default function PrivateRoute(props) {

    const { isUserLoggedIn } = useAuth();
    if (isUserLoggedIn) {
        return (
          <div>{props.children}</div>
        )
        
    } 
    return <>404 Not Found</>
}
