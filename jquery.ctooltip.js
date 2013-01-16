/** CTooltip
* Version 0.1
* www.airesis.it
* Lincensed under GPL 
* @author Rodi Alessandro
*/
(function($) {
	  
 $.fn.extend({
		      
 ctooltip: function( options ) {
	       
  // # Definisco le impostazioni base
  var defaults = {
   content: 'Tooltip'
   image: 
  };
	
  options = typeof options == "string" ? {content : options} : options	            
  // # Utilizzo la funzione $.extend per "mergiare" gli oggetti
  options = $.extend( defaults, options );
  $(this).wrap('<span class="tooltip" />');
  $(this).after('<span><img src="images/callout.gif" class="callout"></img>'+options.content+'</span>');	
 }  
  
 });
		    
}) ( jQuery );
