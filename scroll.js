/* window.onscroll = function (e) {
    var vertical_position = 0;
    if (scrollY)//usual
      vertical_position = scrollY;
    else if (document.documentElement.clientHeight)//ie
      vertical_position = document.documentElement.scrollTop;
    else if (document.body)//ie quirks
      vertical_position = document.body.scrollTop;
  

    
    var pinnedDiv = document.getElementById('styles');
    var targetDiv = document.getElementsByClassName('profile')[0];
    var calculated = convertRange(vertical_position, [0, 2678], [446, 470])

    if (calculated > 520){
      calculated = 540;
    }

    targetDiv.style.top = calculated + 'px';
    pinnedDiv.style.top = calculated + 274 + 'px'
  }

  // 0 to 900
function convertRange( value, r1, r2 ) { 
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}
   */

/* window.onscroll = function(e){
  var vertical_position = 0;
  if (scrollY)//usual
    vertical_position = scrollY;
  else if (document.documentElement.clientHeight)//ie
    vertical_position = document.documentElement.scrollTop;
  else if (document.body)//ie quirks
    vertical_position = document.body.scrollTop;

  var targetDiv = document.getElementsByClassName('profile')[0];

  console.log(targetDiv.getBoundingClientRect().top);
  /* if (vertical_position >= 1600) {
    targetDiv.style.position = 'fixed';
  }
  else {
    targetDiv.style.position = 'sticky';
  } 
};
*/