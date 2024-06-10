import {useState} from "react";
import Menu from "./components/Menu.tsx";
import './scss/app_styles.scss';
import Operations from "./components/Operations.tsx";
import Statistics from "./components/Statistics.tsx";

const App = () => {
    const [isLoggedIn, toggleLogIn] = useState(false);
    const changeLogIn = () => toggleLogIn((val) => val = !val);
    return (
        <div>
            <Menu isLogedIn={isLoggedIn} toggleLog={changeLogIn}/>
            <div className="content">
                <Operations isLogedIn={isLoggedIn}/>
                <Statistics isLogedIn={isLoggedIn}/>
            </div>
        </div>
    )
}


export default App;