console.clear();
var spu;
document.addEventListener('DOMContentLoaded', function main() {
  spu = new svg_path_utils.SVGPathUtils();
  
  var d = 'M50,300 L50,250 C50,150 75,150 100,250 C150,450 200,450 200,250 Q200,100 400,100';
  
  document.getElementById('input').value = d;
  onInput(d);
});

function onInput(d){
  var path = document.getElementById('path');
  path.setAttribute('d', d);
  
  var inverse_path = document.getElementById('inverse_path');
  var inverse_d = spu.inversePath(d);
  inverse_path.setAttribute('d', inverse_d);
  
  document.getElementById('output').innerHTML = inverse_d;
}