$(document).ready(function(){
    $('#p1btn').click(function(){
        $('#p1Modal').modal('show');
    });
    $('#p2btn').click(function(){
        $('#p2Modal').modal('show');
    });
    $('#p3btn').click(function(){
        $('#p3Modal').modal('show');
    });
    $('#p4btn').click(function(){
        $('#p4Modal').modal('show');
    });
    $('#p5btn').click(function(){
        $('#p5Modal').modal('show');
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
