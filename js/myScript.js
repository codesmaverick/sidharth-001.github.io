$(document).ready(function(){
    $('#todo-btn').click(function(){
        $('#todo-modal').modal('show');
    });
    $('#extension-btn').click(function(){
        $('#extension-modal').modal('show');
    });
    $('#article-btn').click(function(){
        $('#article-modal').modal('show');
    });
    $('#queue-btn').click(function(){
        $('#queue-modal').modal('show');
    });
    $('#mcdtu-btn').click(function(){
        $('#mcdtu-modal').modal('show');
    });
    $('#generator-btn').click(function(){
        $('#generator-modal').modal('show');
    });
    $('#cloud-btn').click(function(){
        $('#cloud-modal').modal('show');
    });
    $('#confusion-btn').click(function(){
        $('#confusion-modal').modal('show');
    });
});

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});
