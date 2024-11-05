document.querySelectorAll("input[type='text'], input[type='tel'], input[type='email'], textarea").forEach(field => {
    field.addEventListener('focus', function() {
        if (this.value === this.placeholder) {
            this.value = '';
        }
    });
});

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const products = document.getElementById("products").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !email || !address || !products || !message) {
        alert("Please fill out all required fields.");
        return false;
    }
    
    return true;
}