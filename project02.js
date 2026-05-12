// Select the necessary DOM elements
const addBtn = document.getElementById('addBtn');
const formModal = document.getElementById('formModal');
const closeBtn = document.getElementById('closeBtn');

// Open modal when '+' button is clicked
addBtn.addEventListener('click', () => {
    formModal.classList.remove('hidden');
});

// Close modal when 'x' button is clicked
closeBtn.addEventListener('click', () => {
    formModal.classList.add('hidden');
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === formModal) {
        formModal.classList.add('hidden');
    }
});