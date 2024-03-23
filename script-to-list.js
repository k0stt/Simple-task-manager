$(function(){

	function addNewTask(a, b){
		$('#left-column h4').remove();
		$('.task-blog').prepend('<div class=new-task><div class=top><h3>'+a+'</h3><button class=cross-button></button></div><h6>'+b+'</h6></div>');
		$('#name').val('');
		$('#info').val('');
		$('.new-task').css({
			'background-color': 'white',
			'width': '470px',
			'height':'130px',
			'margin-bottom': '20px'
		});
		$('.top').css({
			'width': '470px',
			'height':'50px',
			'border-bottom': '1px solid #e5e5e5'
		});
		$('h3').css({
			'padding-left': '20px',
			'margin-right':'10px',
			'float': 'left'
		});

		$('h6').css({
			'padding-left': '20px',
			'color': 'grey'
		});
		$('.cross-button').css({
			'padding': '0',
			'border': 'none',
			'margin-top': '22px',
			'float': 'left',
			'background-image': 'url(img/cross.png)',
			'width': '17px',
			'height': '17px'
		});
	}

	$('.task-blog').on('click', '.cross-button', function(){
		$(this).closest('.new-task').remove();
	});

	$('#submit-button').on('click', function(){
		addNewTask($('#name').val(), $('#info').val());
		return false;
	});
});
