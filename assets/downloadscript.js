// download.js

document.addEventListener('DOMContentLoaded', function () {
    var downloadLink = document.getElementById('downloadResume');

    downloadLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior (navigating away)
        
        var url = this.getAttribute('href');
        var filename = url.substring(url.lastIndexOf('/') + 1);

        // Create a temporary link element
        var tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = url;
        tempLink.setAttribute('download', filename);

        // Append the link to the body and click it programmatically
        document.body.appendChild(tempLink);
        tempLink.click();

        // Clean up
        document.body.removeChild(tempLink);
    });
});
