import OperationsList from "./OperationsList.tsx";
import CreateOperation from "./CreateOperation.tsx";
import '../scss/operations.scss';
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

const Operations = function ({isLogedIn}: { isLogedIn: boolean }) {
    const [createButtonPressed, toggleCreateForm] = useState(false);
    const toggleFormFunc = () => {
        toggleCreateForm(!createButtonPressed)
    }
    return (
        <div className='operations'>
            <OperationsList isLogedIn={isLogedIn}/>
            {isLogedIn &&
                <button className='create-operation' onClick={toggleFormFunc}>Створити запис {createButtonPressed ?
                    <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/>}</button>}
            {(isLogedIn && createButtonPressed) && <CreateOperation/>}
        </div>
    )
}
export default Operations;