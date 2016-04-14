
// Replaces jquery .hasclass(); from youmightnotneedjquery.com
function hasClass(el, className){
  var classes = el.classList;
    
	if (classes) {
	  return classes.contains(className);
	}
	else {
	  return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}
}
/*
Use :

var el = document.querySelector(".myel");
if(hasClass(el, "anotherclass"))

*/


// Replaces $(document).ready(function); from youmightnotneedjquery.com
function domisready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
/*
Use :

domisready(function() {
  // do stuff;
});

*/


// Replaces $(el).offset();
function offset(elt) {
    var rect = elt.getBoundingClientRect(), bodyElt = document.body;
    return {
        top: rect.top + bodyElt .scrollTop,
        left: rect.left + bodyElt .scrollLeft
    }
}
/*
Use :

var el = document.querySelector(".myel");
var el_offset = offset(el);
console.log(el_offset.top, el_offset.left);

*/
