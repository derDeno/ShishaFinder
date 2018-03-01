var $$ = Dom7;
var app = new Framework7({
  root: '#app',
  name: 'Shisha Finder',
  id: 'com.pixelartdev.shishafinder',
  pushState: true,
  theme: 'ios',
  init: false,
  panel: {
    swipe: 'left',
  },
  routes: [{
      path: '/index/',
      url: 'index.html',
    },{
      path: '/tabak/',
      url: 'tabak.html',
    },{
      path: '/hersteller/',
      url: 'hersteller.html',
    },{
      path: '/counter/',
      url: 'counter.html',
    },{
      path: '/info/',
      url: 'info.html',
    },
  ],
});



var mainView = app.views.create('.view-main');


$$(document).on('deviceready', function() {
  console.log("Device is ready!");
  app.init();
});



$$(document).on('page:init', '.page[data-name="index"]', function (e) {

  $.getJSON( "http://beta.pixelartdev.com/shisha/api.php?tabak-liste", function(data) {
    var out = '<ul>';
    $.each(data, function(i, v) {
      out += '<li>';
      out += '  <a href="/tabak/" data-id="'+ data[i].id +'" class="item-link item-content">';
      out += '    <div class="item-media"><img src="img/tabak/'+ data[i].hersteller.replace(' ', '_') +'-'+ data[i].name.replace(' ', '_') +'.jpg" width="44"/></div>';
      out += '    <div class="item-inner">';
      out += '      <div class="item-title-row">';
      out += '        <div class="item-title">' + data[i].name + '</div>';
      out += '      </div>';
      out += '      <div class="item-subtitle">Hersteller: ' + data[i].hersteller + '</div>';
      out += '    </div>';
      out += '  </a>';
      out += '</li>';
    });

    out += '</ul>';

    $('#list-tabak').html(out);
  });

});

$$(document).on('page:init', '.page[data-name="hersteller"]', function (e) {

  $.getJSON( "http://beta.pixelartdev.com/shisha/api.php?hersteller", function(data) {
    var out = '<ul>';
    $.each(data, function(i, v) {
      out += '<li>';
      out += '  <a href="/hersteller-tabak/" data-id="'+ data[i] +'" class="item-link item-content">';
      out +=      data[i];
      out += '  </a>';
      out += '</li>';
    });

    out += '</ul>';

    $('#list-hersteller').html(out);
  });

});


$$(document).on('page:init', '.page[data-name="info"]', function (e) {

});
