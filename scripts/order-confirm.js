document.getElementById('confirm-button').addEventListener('click', function (event) {
    event.preventDefault();
    var form = document.getElementById('order-form');
    if (form.checkValidity()) {
        document.getElementById('popup').style.display = 'block';
        setTimeout(function() {
            document.getElementById('popup-content').style.top = '50%';
        }, 0);
    } else {
        alert('Please fill out the form correctly.');
    }
});

document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});


var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    input.addEventListener('input', function () {
        if (!input.checkValidity()) {
            input.style.border = '3px solid red';
        } else {
            input.style.border = '';
        }
    });
});


