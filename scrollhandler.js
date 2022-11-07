var panels = document.querySelectorAll(".panels");
//console.log(panels);






function scroll_handler() // handler = getionnaire
{
   // on s'assure de connaitre la distance scrollée dans 
   // la fenetre (ouvrir la
   // la console pour voir)
   console.log(window.scrollY);

   //test a t on scrollé une hauteur de fenétre ou plus?
   if (window.scrollY >= window.innerHeight) {
      document.body.classList.add("scrolled"); /*ajout de
    la classe "scrolled" sur le body.*/




   }

   // else {

   //    document.body.classList.remove("scrolled");
   //    //on enlève cette classe si on est remonté au-dessus du seuil

   // }

   var panels_on_screen;

   
   panels.forEach(function (the_panels) {
      // forEach a besoin comme paramétre,d'une fonction. Celle-ci
      // s'executera à chaque itérattion (passage) de la boucle.Si on donne à
      // cette fonction au moins un paramétre, celui-ci 
      // deviendra, dans la fonction, une matiere d'acceder à l'élément concerné parentlitération.

      //console.log(the_panel.offsetTop)
      if (window.scrollY >= the_panels.offsetTop) {
         // a t'on scrollé au moin jusqu'à avoir the_panel calé en haut de 
         //la fenétre (ou jusqu'a  ce qu'il à depassé le haut de la fenétre)

         panels_on_screen = the_panels;


      }


   });

   // Aprés le forEach, la variable panels_on_screen fait référence au bon
   // élément : le dernier qui a pu valider le test dans le forEach.

   var panels_id = panels_on_screen.id
   console.log("Le .panel d'identifiant" + panels_id + "est à l'écran");

   var the_link = document.querySelector("a[href='#" + panels_id + "']");

   the_link.style.color = "orange"; // a modifier : il y a plus élégant...
   // a compléter: il faut aussi que les liens puissent revenir à la normal.


}



window.onscroll = scroll_handler;




