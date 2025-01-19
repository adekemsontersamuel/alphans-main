// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

    // Show the modal when the page loads
    modal.style.display = 'block';

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Add event listener to the modal button (optional)
    var modalButton = document.getElementById('modalButton');
    modalButton.addEventListener('click', function() {
        window.location.href = '/academy.html';
        //alert('Button inside modal clicked!');
        // You can add more actions here
    });
});
