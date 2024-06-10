import '../scss/menu.scss'

interface propsValidation {
    toggleLog: () => void,
    isLogedIn: boolean
}

const Menu = function ({toggleLog, isLogedIn}: propsValidation) {
    const buttonClass = "font-bold text-xl  hover:shadow-xl";
    return (
        <div className='menu'>
            <h2 onClick={toggleLog} className='font-extrabold text-3xl rounded-full'>Expenses tracker</h2>
            {isLogedIn ? <button className={buttonClass + ' out'}>Sign out</button> :
                <button className={buttonClass + ' in'}>Sign in</button>}
        </div>
    )
}
export default Menu;