let allCheckBoxes = document.querySelectorAll('.checkBox');
let inputElements = document.querySelectorAll('input');
let error = document.querySelector('.error');
let progressBar = document.querySelector('.progress-bar');

allCheckBoxes.forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
        const fieldsValue = [...inputElements].every((inputElements) => {
            return inputElements.value;
        });

        if (fieldsValue) {
            checkBox.parentElement.classList.toggle('checkBoxParent');
            checkBox.classList.add('imgShow');
            progressBar.parentElement.classList.add('increaseInnerRange');
        } else {
            error.parentElement.classList.add('range-error-bar');
        }
    });
});

inputElements.forEach((input) => {
    input.addEventListener('focus', () => {
        error.parentElement.classList.remove('range-error-bar');
    });
});
