// style
import './Header.css'

function Header(carsLength) {
    return (
        <div className='header'>
            <div className='header-container container'>
                <h1 className='header-logo'>Cars</h1>
                <h3 className='header-counter'>
                    {carsLength.className > 0 ?"You have: " + carsLength.className + " cars": "No Cars :("}
                    
                </h3>
            </div>
        </div>
    )
}

export default Header