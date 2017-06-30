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

  // var k = document.body.innerHTML;

  if(searchTerms[0] !== "") {
    searchTerms.forEach(function(searchTerm) {
      // debugger;
      $('body').mark(searchTerm);
      // var regEx = new RegExp(searchTerm, "ig");
      // k = k.replace(regEx, function(str) { return "<em>" + str + "</em>" });
    });
  }
  // document.body.innerHTML = k;
}
