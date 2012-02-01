$(document).ready(function() {

	//Attach the getRelated function to run when you submit the form on index.
	$('#myform').submit(function(e) {
		e.preventDefault(); //stop the form doing default actions (stops it changing page).
		var url = $('#url_field').val(); //the text in the <input>
		getRelated(url); //gogo!
	});
    
 
});

function getRelated(url){
	$.ajax({
		url: "http://gdata.youtube.com/feeds/api/videos/"+url+"/related?v=2&alt=jsonc",
		type: "GET",
		success: function(json) {
			makeArray(json);
		},
		error: function(error) {
			console.log("Failure! Did you enter a full url instead of just the id?");
			console.log("Request.php returned: "+error.responseText);
		}
	});
}


function makeArray(json) {
	var relatedSongs = [];
	// grab items
	for (var key in json.data.items){

		var song = [];

		// grab title
		song.push(json.data.items[key].title);

		for (var tn in json.data.items[key].thumbnail){
		// grab thumbnail
		song.push(json.data.items[key].thumbnail[tn]);
		}

		for (var player in json.data.items[key].player){
		//grab url
		song.push(json.data.items[key].player[player]);
		}

		relatedSongs.push(song);

	}

	for (var i = 0; i < relatedSongs.length; i++){
		console.log(relatedSongs[i]);
	}
}