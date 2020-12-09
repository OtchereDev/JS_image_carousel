panels = document.querySelectorAll('.panel');

function removeAllActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeAllActiveClasses();
        panel.classList.add('active');
    })
});