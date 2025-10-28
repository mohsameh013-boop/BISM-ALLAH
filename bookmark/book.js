document.addEventListener('DOMContentLoaded', () => {
    
    const submitBtn = document.getElementById('submitBtn');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    
    submitBtn.addEventListener('click', () => {
        
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        
        if (input1.value.trim() !== '' && input2.value.trim() !== '') {
        
            successMessage.style.display = 'block';
        } else {
            
            errorMessage.style.display = 'block';
        }
    });
});