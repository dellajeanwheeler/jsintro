firstnames = ["della", "justin"]
lastnames = ["wheeler", "threlkeld"]
fullname = function(i){
	return firstnames[i] +" "+ lastnames[i]
}

pagers = function(i){
	slideIndex = i + 1
	text= $('#js-slide-' +slideIndex).find('h1').text()
	return 'go to <i>'+text+'</i>'
}

$('#js--slider').bxSlider({
	buildPager: pagers
})



