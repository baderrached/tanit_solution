import React from 'react'
import { Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
export const NoAuthRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem("token")

    console.log("isAuth",isAuthenticated)
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated) {
                    return <Component {...props} />
                } else {
                    return <Navigate to={
                        {
                            pathname: "/login",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }}
        />
    )
}