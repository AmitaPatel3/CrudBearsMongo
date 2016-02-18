$('.deleteBear').on('click',function() {
	
});


var deleteBear = function() {

	var id = $(event.target).closest('tr').attr('id');  
	var bear = $(event.target).closest('tr');

//event.target = when you click on this button, find the closest row, get the value of the attribute which id id

	// alert('The id of this bear is:' + id);

	//ajax will do what we define in the method--a method that allows us to communicate with our database//voice of the browser is ajax
//remove from html 
		if(confirm("sure you wanna delete a bear?")) {
			$.ajax({
				url: '/api/bears/' + id,
				method: 'DELETE',
			}).done(function () {
				console.log('bear deleted!');
				bear.remove();
		})
	}
}


$('.deleteBear').on('click', deleteBear);



//to add the bears to the form without refreshing//give the fields the id and then 
//delete action and method in the form since we are telling the form what to do and it's not doing it by itself


var addBear = function (event) {
	event.preventDefault();

	var name = $('#name').val();
	var age = $('#age').val();
	var gender = $('#gender').val();
	var $table = $('#bearTable');

	var bear = {};			//created an object called bear and then we are putting info about the bear

	bear.name = name;
	bear.age = age;
	bear.gender = gender;


	$.ajax({
		url: '/api/bears/',
		method: 'POST',
		data: bear
	}).done(function(data) {
		console.log('I posted a bear!', data);

		$table.append('<tr id=' + data._id + '> \
                    <td>' + data.name + '</td> \
                    <td>' + data.age + '</td> \
                    <td>' + data.gender + '</td>\
                    <td><button type="button" class="btn btn-warning deleteBear">Delete</button></td>'
                );

		$('.deleteBear').on('click', deleteBear);

	})
	
};

$('#addBear').on('click', addBear);


