// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {useAuth} from "@clerk/clerk-react";
import "./dashboardLayout.css";

const DashboardLayout = () => {
    const {userId, isLoaded} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        if (isLoaded && !userId) {
            navigate('/sign-in');
        }
    }, [isLoaded, navigate, userId]);

    if (!isLoaded) return <div>loading....</div>;
    
    return (
        <div className={'dashboardLayout'}>
            <div className="menu">MENU</div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
}

export default DashboardLayout;