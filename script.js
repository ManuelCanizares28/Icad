document.addEventListener('DOMContentLoaded', function() {
    const productsButton = document.getElementById('products-button');
    const productsContent = document.getElementById('dropdown-products-content');
    const businessButton = document.getElementById('button-business');
    const businessContent = document.getElementById('dropdown-business');

    productsButton.addEventListener('click', function() {
        if(productsContent.style.display === 'none' || productsContent.style.display === '') {
        productsContent.style.display = 'block';
        productsButton.classList.add('active');
        } else {
            productsContent.style.display = 'none';
            businessContent.style.display = 'none';
            productsButton.classList.remove('active');
        }
    });

    businessButton.addEventListener('click', function() {
        if(businessContent.style.display === 'none' || businessContent.style.display === '') {
        businessContent.style.display = 'block';
        } else {
            businessContent.style.display = 'none';
        }
    });
});

