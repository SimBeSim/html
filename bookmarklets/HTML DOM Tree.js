function getChildren(obj, lvl) {
  var ind = '';
  for (var j = 0; j < lvl; j++) ind += '  ';
  var s = '';
  for (var i = 0; i < obj.childNodes.length; i++) {
    var subobj = obj.childNodes[i];
    if (subobj.nodeName.indexOf('#') == 0) s += '\n  ' + ind + subobj.nodeName;
    else if (subobj.nodeName.indexOf('!') == 0) {
      s += '\n  ' + ind + '</!-- (comment) -->';
    } else {
      s += '\n  ' + ind + '<' + subobj.nodeName + '>';
      if (subobj.name) s += ' (' + subobj.name + ')';
      s += getChildren(subobj, lvl + 1);
      s += '\n  ' + ind + '</' + subobj.nodeName + '>';
    }
  }
  return s;
}
var msg = '<HTML>' + getChildren(document.documentElement, 0) + '\n</HTML>';
W = open('', '', 'resizable,scrollbars=1');
with(W.document) {
  writeln('<h3>' + document.location.href + '</h3>');
  writeln('<xmp>' + msg + '</xmp>');
  close();
}
void(0);
