import style from './services.scss'





function Services() {
     
  
  return (

    <section>
     <h3 className='txtserv'>Mes Services</h3>
      <div class="grid-container">
       <div class="services">
         <div class="titleser">Site ecommerce</div>
         <div class="iconser"><i class="fa-thin fa-laptop-code"></i></div>
         <div class="contentser">
           <p>Créez votre site e-commerce de A à Z, performant, sécurisé et 100 % responsive. Offrez une expérience d’achat fluide grâce à des fonctionnalités clés : fiches produits, paiement sécurisé, gestion des stocks, livraisons personnalisées, avis clients et suivi de commande. Optimisé pour la rapidité et l’efficacité, votre boutique en ligne maximise les conversions et simplifie votre gestion au quotidien.</p>
         </div>
       </div>
       
       <div class="services">
         <div class="titleser">Site vitrine</div>
         <div class="iconser"><i class="fa-thin fa-shield-check"></i></div>
         <div class="contentser">
           <p>Obtenez un site vitrine moderne et responsive qui offre une expérience utilisateur optimale sur tous les appareils. Bénéficiez d’un design soigné, d’une navigation fluide et de performances techniques optimisées, pour garantir une présence en ligne professionnelle, attractive et parfaitement adaptée aux besoins actuels de vos visiteurs.</p>
         </div>
       </div>
       
       
       <div class="services">
         <div class="titleser">Référencement SEO</div>
         <div class="iconser"><i class="fa-thin fa-wrench-simple"></i></div>
         <div class="contentser">
           <p>Réalisation d'audits SEO complets  pour identifier les points d’amélioration du site. Le référencement est ensuite optimisé en travaillant sur la structure, les contenus et les mots-clés, tout en améliorant la performance technique, comme la vitesse de chargement et l’expérience utilisateur, afin de maximiser la visibilité et l’efficacité de la présence en ligne.</p>
         </div>
       </div>
       
     </div>
    </section>
    
    
      
    
      
   
    
   
   
  )
}

export default Services;