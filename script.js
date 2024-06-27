document.addEventListener('DOMContentLoaded', function() {
    const productsButton = document.getElementById('products-button');
    const productsContent = document.getElementById('dropdown-products-content');
    const businessButton = document.getElementById('button-business');
    const businessContent = document.getElementById('dropdown-business');
    const modelingButton = document.getElementById('modeling-button');
    const modelingContent = document.getElementById('container-modeling');
    const businessContainer = document.getElementById('container-business');
    const productionButton = document.getElementById('production-button');
    const lineaVertical = document.getElementById('linea-vertical');
    const designButton = document.getElementById('design-button');
    const designContent = document.getElementById('container-design');
    const verticalModeling = document.getElementById('vertical-modeling');
    const verticalDesign = document.getElementById('vertical-design');

    productsButton.addEventListener('click', function() {
        if(productsContent.style.display === 'none' || productsContent.style.display === '') {
        productsContent.style.display = 'block';
        lineaVertical.style.display = 'block';
        productsButton.classList.add('active');
        } else {
            productsContent.style.display = 'none';
            modelingContent.style.display = 'none';
            businessContent.style.display = 'none';
            businessContainer.style.display = 'none';
            designContent.style.display = 'none';
            productsButton.classList.remove('active');
        }
    });

    businessButton.addEventListener('click', function() {
        if(businessContent.style.display === 'none' || businessContent.style.display === '') {
        businessContent.style.display = 'block';
        businessContainer.style.display = 'block';
        }
    });

    modelingButton.addEventListener('click', function() {
        if(modelingContent.style.display === 'none' || modelingContent.style.display === '') {
            modelingContent.style.display = 'block';
            businessContainer.style.display = 'none';
            lineaVertical.style.display = 'none';
            designContent.style.display = 'none';
        }
    });

    productionButton.addEventListener('click', function() {
        if(businessContainer.style.display === 'none' || businessContainer.style.display === '') {
            businessContainer.style.display = 'block';
            lineaVertical.style.display = 'block';
            modelingContent.style.display = 'none';
            designContent.style.display = 'none';
        }
    });
    
    designButton.addEventListener('click', function() {
        if(designContent.style.display === 'none' || designContent.style.display === '') {
            designContent.style.display = 'block';
            modelingContent.style.display = 'none';
            businessContainer.style.display = 'none';
            lineaVertical.style.display = 'none';
            verticalModeling.style.display = 'none';
        }
    });

});

