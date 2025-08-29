import style from './presentation.scss'
import Home from './home'
 import { FaReact} from "react-icons/fa";
import { DiCss3, DiJsBadge, DiHtml5, DiSass, DiGithubBadge } from "react-icons/di";
import { FiMail } from "react-icons/fi";
import { AiFillFile } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { GrAppsRounded} from "react-icons/gr";
import { SiRedux } from  "react-icons/si";
import Services from '../components/Services/services'
import Profile from '../components/Profil/profil'



function Presentation() {
    
  
  return (
    
    <div className='intro'>
      <div class="container">
       <p>Bonjour 👋 Je fais des</p>
        <section class="animation">
          <div class="first"><div>Sites vitrines</div></div>
          <div class="second"><div>Sites ecommerce</div></div>
          <div class="third"><div>référencements SEO </div></div>
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
            <p class="title">Profil</p>
            <p class="text">Voir mon profil</p>
        </a>
      </div>
   
      <div class="card">
         <a href="#skills">
          <div class="icon"><i class="material-icons md-36"><GrAppsRounded/></i></div>
            <p class="title">Projets</p>
            <p class="text">Voir mes projets.</p>
         </a>
      </div>
     
      <div class="card">
         <a href="#contact">
            <div class="icon"><i class="material-icons md-36"><FiMail/></i></div>
            <p class="title">Contact</p>
            <p class="text">Contactez moi.</p>
          </a>
      </div>
   </div>
   
  

        
         </div>

        <Services/>
        <div className='cardme'>
        <h2 className='technos'>Technologies maitrisées :</h2>
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
        
        
        <Home/>
       
        <div className='parcours'>
                <h3>Profil</h3>
                
              </div> 
        <div className='cardcv' id="parcours">
       
         
        
          <div className='year'>
          
            <div className='txt'>
                
           <p>Bonjour, je m'appelle Dimitri, je suis développeur web freelance, spécialisé dans la création de sites modernes, rapides et optimisés pour les besoins réels des entreprises.

J’accompagne des indépendants, des petites entreprises ou des projets en démarrage qui veulent gagner en visibilité, automatiser certaines tâches, ou améliorer l’expérience utilisateur de leur site.

Grâce à mes compétences en HTML, CSS, JavaScript, React, Wordpress , je construis des solutions claires, bien structurées et faciles à faire évoluer.

Je travaille toujours en transparence, avec une vraie écoute du besoin, des livrables propres, et le souci de respecter les délais.

Si vous cherchez quelqu’un de fiable, réactif, et impliqué, je serais ravi d’échanger pour voir comment je peux vous aider.</p>
           
           </div>
          </div>
         
        
        </div>
    </div>
    
    
    
      
    
      
   
    
   
   
  )
}

export default Presentation;