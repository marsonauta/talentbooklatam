// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.latamer',
  sortBy : 'random'
});

// Almacena filtro de cada grupo
var filters = {};

$('.filters').on( 'change', function( event ) {
  var $select = $( event.target );
  // get group key
  var filterGroup = $select.attr('value-group');
  // set filter for group
  filters[ filterGroup ] = event.target.value;
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// Megamix de valores
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}
// Oda a don Dimi
$(function(){
  $(window).jKonamicode(function(){
    $('body').addClass('dimi-show');
    setTimeout(function(){ $('body').removeClass('dimi-show');
  }, 3500);
  });
});