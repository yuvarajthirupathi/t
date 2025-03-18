import './nav.css'

import imd from '../src/imgs/Logo.png'

function nav(){
    
    return(
        
        <>
            {/* code to commit after deploy  */}
            <nav>
            <img src={imd} alt="king"/>
            <ul>
                <li>About as</li>
                <li>Service</li>
                <li>Case study</li>
                <li>Blog</li>
                <li>How its work</li>
                <li>Hire</li>
            </ul>
            <button className='but1'>Contact us</button>
            </nav>
        </>
    )
}
export default nav;