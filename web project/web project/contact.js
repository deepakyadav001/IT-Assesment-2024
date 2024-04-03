document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // You can perform additional validation here if needed
    // For example, check if the email is valid, etc.

    // Now you can use the formDataObject to send the data to your backend or perform any other action
    console.log(formDataObject);

    // Clear the form after submission
    event.target.reset();
});
