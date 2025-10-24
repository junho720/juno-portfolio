		$(document).ready(function(){

			$('#fullpage').fullpage({
			sectionSelector: '.section',
			scrolloverflow:true,
        	anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
			navigation:true, 
			navigationTooltips: ['Intro', 'About', 'Portfolio01', 'Portfolio02', 'Portfolio03', 'Contact'],
        	slidesNavigation: true,
			})
	
}); //전체 닫기

