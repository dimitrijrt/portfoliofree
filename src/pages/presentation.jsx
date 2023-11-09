import style from './presentation.scss'
import Home from './home'
 import { FaReact} from "react-icons/fa";
import { DiCss3, DiJsBadge, DiHtml5, DiSass, DiGithubBadge } from "react-icons/di";
import { FiMail } from "react-icons/fi";
import { AiFillFile } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { GrAppsRounded} from "react-icons/gr";
import { SiRedux } from  "react-icons/si";



function Presentation() {
    
  
  return (
    
    <div className='intro'>
      <div class="container">
       <p>Hello 👋 I'm</p>
        <section class="animation">
          <div class="first"><div>Dimitri</div></div>
          <div class="second"><div>Web Dev</div></div>
          <div class="third"><div>Front-end Dev </div></div>
        </section>
      </div>
    
<div className='maincard'>


<div class="about">
   <a class="bg_links social portfolio" href="#parcours" >
      <span class="icon"></span>
   </a>
   <a class="bg_links social dribbble" href="#skills" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social linkedin" href="#contact" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links logo"></a>
</div>

   
   <div class="content">
      <div class="card">
        <a href="#parcours">
           <div class="icon"><i class="material-icons md-36"></i><MdAccountCircle/></div>
            <p class="title">Profile</p>
            <p class="text">Click to see or edit your profile page.</p>
        </a>
      </div>
   
      <div class="card">
         <a href="#skills">
          <div class="icon"><i class="material-icons md-36"><GrAppsRounded/></i></div>
            <p class="title">Projets</p>
            <p class="text">Check all my projects.</p>
         </a>
      </div>
     
      <div class="card">
         <a href="#contact">
            <div class="icon"><i class="material-icons md-36"><FiMail/></i></div>
            <p class="title">Contacts</p>
            <p class="text">Contact me.</p>
          </a>
      </div>
   </div>
  

        <div className='cardme'>
            <div className='all'>
               <ul className='lang'>
              <div>
                <li><DiHtml5 />Html</li>
                <li><DiCss3 />css</li>
                <li><DiSass/>Sass</li>
              </div>
              <div className='right'>
                <li><DiJsBadge/>Js</li>
                <li><FaReact  className='react'/>React</li>
                <li>
                   <SiRedux className='redux'/>
                  Redux
                </li>
              </div>   
            </ul>
           
            </div>
           
        </div>
         </div>
        
        <Home/>
        <div className='parcours'>
                <h3>Parcours</h3>
              </div> 
        <div className='cardcv' id="parcours">
        
         
          <div className='year'>
            
            <h4>2022-2023</h4>
            <div className='txt'>
               <p>- Formation Développeur front-end Openclassroom</p>
               <p>-Hack the box certification pentester junior</p>
            </div>
          </div>
          <div className='year'>
             <h4>2021-2022</h4>
            <div className='txt'>
                
           <p>- BTS SIO 2ème année</p>
           <p>- Stage analyse réseau</p>
           </div>
          </div>
          <div className='year'>
            
            <h4>2020-2021</h4>
            <div className='txt'>
             <p>- BTS SIO 1ère année </p>
             <p>- Stage développement web</p>
             <p>- Service civique</p>
             </div>
          </div>
          <div className='year'>
           
              <h4>2019-2020</h4>
             <div className='txt'>
              <p>- Bac s / sportif de haut niveau</p>
            </div>
          </div>
        
        </div>
    </div>
    
    
    
      
    
      
   
    
   
   
  )
}

export default Presentation;