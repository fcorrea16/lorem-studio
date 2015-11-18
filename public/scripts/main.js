
  // other functions when document is ready


$(document).ready( function(){

		if ($(window).width() < 767) {
  	$('.padding-top-30').addClass('none');
	   $('.padding-top-30').removeClass('padding-top-30');

		} else {
			$('.none').addClass('padding-top-30');
	  	$('.padding-top-30').removeClass('none');
		}

			$('.button').on('click', function(e){
			e.preventDefault();
	})

	$('.btn').on('click', function(e){
			e.preventDefault();
	})

		$('.filter').on('click', filtros);

})



var filtros = function(e){
	e.preventDefault();
	
	var clickedFilter = $(this).text();

	var initialCount = $('.images-projects').children().length;
	var projectsShown = $('.images-projects .showProjectLorem').length;
	var projectsHidden = $('.images-projects .hideProjectLorem').length;

	var hideProjects = function(){
		$(".project[data!='" + clickedFilter + "']").addClass('	hideProjectLorem');
		}



	if ( projectsShown === 10){
		console.log("hello1 " + clickedFilter);
		$(".project[data!='" + clickedFilter + "']").removeClass('showProjectLorem').addClass('hideProjectLorem');

	} else if ( clickedFilter === "All Works") {
		console.log("hello2 ")
		$('.hideProjectLorem').removeClass('hideProjectLorem');
		$('.project').addClass('showProjectLorem');

	} else {
		console.log("hello3 ")
		$('.hideProjectLorem').removeClass('hideProjectLorem');

		$('.images-projects').children().addClass('showProjectLorem');
		hideProjects();
	}
	


	// addicionando css para botões filtros
	$('.selected-filter').removeClass('selected-filter');
	$(this).addClass('selected-filter');
}





  // $(window).resize(function () { /* do something */ });