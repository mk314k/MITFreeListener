import { useState, useEffect } from 'react';

import { NavLink } from '.';
import { userService } from 'services';

export { Nav };

function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    //Nav Bar to Show to Guest Users
    if (!user){
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
                <NavLink href="/about" exact className="nav-item nav-link">About</NavLink>

            </div>
        </nav>
    );  
    }

    //Nav Bar to Show to Logged in Users
    else{
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
               
                <a onClick={logout} className="nav-item nav-link">Logout</a>
            </div>
        </nav>
    );
    }
}
