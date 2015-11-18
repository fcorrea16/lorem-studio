
$(document).ready(function() {

  if ($(window).width() < 767) {
    $('.padding-top-30').addClass('none');
    $('.padding-top-30').removeClass('padding-top-30');
  } else {
      $('.none').addClass('padding-top-30');
      $('.padding-top-30').removeClass('none');
  };


  $('.button').on('click', function(e) {
    e.preventDefault();
  })

  $('.btn').on('click', function(e) {
    e.preventDefault();
  })

  $('.filter').on('click', filtros);

  $('.all-works').on('click', mostrarTodosProjetos);

})


// função todos os botões do filtro menos "all works"
var filtros = function(e) {
  e.preventDefault();
  var clickedFilter = $(this).text();
  $('.project').removeClass('showProjectLorem');
  $('.project').addClass('hideProjectLorem');

  var mostrarProjetoCorreto = function() {
	  $(".project[data='" + clickedFilter + "']").removeClass('hideProjectLorem').addClass('showProjectLorem');
	  filtroSelecionado();
  }

  mostrarProjetoCorreto();

}


// função botão "all works"
var mostrarTodosProjetos = function(e) {
  (console.log('hi'))
  e.preventDefault();
  $('.project').removeClass('hideProjectLorem');
  $('.project').addClass('showProjectLorem');
  filtroSelecionado();
}

// addicionando css para botões filtros
var filtroSelecionado = function() {
  $('.selected-filter').removeClass('selected-filter');
  $(this).addClass('selected-filter');
}