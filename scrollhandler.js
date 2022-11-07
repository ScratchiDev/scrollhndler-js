var panels = document.querySelectorAll(".panels");
//console.log(panels);

var the_link;// a chaque scroll cette variable globale sera mise a jour: elle ferta alors reference au dernier
//  lien ayant pris la couleur orange





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
      // var link_to_deactivate = document.querySelector("a[href='#" + the_panels.id + 
      // "']");  
      // link_to_deactivate.style.color = "";

      //Solution 2 (a condition d'avoir declaré the_link de manière globale)
      //(et d'éviter un bug), ce qui sera le cas lors du tout premier scroll 
      //car une valeur n'est donné que plus bas dans cette fonction.
if (the_link) {

   the_link.style.color = "";
}
      
   });

   // Aprés le forEach, la variable panels_on_screen fait référence au bon
   // élément : le dernier qui a pu valider le test dans le forEach.

   var panels_id = panels_on_screen.id;
   
   console.log("Le .panel d'identifiant" + panels_id + "est à l'écran");

  the_link = document.querySelector("a[href='#" + panels_id + "']");

   the_link.style.color = "orange"; // a modifier : il y a plus élégant...
   // a compléter: il faut aussi que les liens puissent revenir à la normal.

}



window.onscroll = scroll_handler;




