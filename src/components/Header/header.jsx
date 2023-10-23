import style from './header.scss'
import {useNavigate} from "react-router-dom";
import { FaDev } from "react-icons/fa";




function Header() {
     const navigate = useNavigate();
  
  return (
    
    <div className='header'>
      <nav className='liens'>
        <img className="logo" src='logo.png'/>
         <span className='styledlink' ><a href="#parcours">Parcours</a></span>
        <span  ><a href="#skills">skills</a></span>
        <span><a href='#contact'>Contact</a></span>
    </nav>
    
          <h1 ><FaDev className='fadev'/>My Portfolio</h1>
       
   
           
        
    
    </div>
    
    
    
      
    
      
   
    
   
   
  )
}

export default Header;