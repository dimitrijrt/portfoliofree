import style from './header.scss'
import {useNavigate} from "react-router-dom";
import { FaDev } from "react-icons/fa";




function Header() {
     const navigate = useNavigate();
  
  return (
    
     <div className='header'>
      <nav className='liens'>
        <h1 className='title' ><FaDev />My Portfolio</h1>

    </nav>
    
    
    </div>
    
    
    
      
    
      
   
    
   
   
  )
}

export default Header;