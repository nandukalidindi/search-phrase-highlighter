if(decodeURI(window.location.href).indexOf("highlighter=") !== -1) {

  var css = 'mark { background: orange; font-style: italic }',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

  style.type = 'text/css';
  style.styleSheet ? style.styleSheet.cssText = css
                     :
                     style.appendChild(document.createTextNode(css))

  head.appendChild(style);

  var searchTerms = (decodeURI(window.location.href).split("highlighter=")[1]).split(",");

  if(searchTerms[0] !== "") {
    searchTerms.forEach(function(searchTerm) {
      $('body').mark(searchTerm);
    });
  }
}
