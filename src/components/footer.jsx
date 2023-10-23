import style from './footer.scss'
import {useNavigate} from "react-router-dom";
import { FaDev } from "react-icons/fa";
import { FiMail } from "react-icons/fi";




function Footer() {
     const navigate = useNavigate();
  
  return (
    
    <div className='Footer'>
       <span className='cv' id="contact"><FiMail className='icon'/> dimitrijacquart@gmail.com</span>
    
    </div>
    
    
    
      
    
      
   
    
   
   
  )
}

export default Footer;