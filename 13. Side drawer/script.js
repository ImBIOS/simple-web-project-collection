const toggleButton = document.getElementById('toggleBtn');
const sideDrawer = document.getElementById('sideDrawerContainer');
const closeBtn = document.getElementById('closeBtn');
const doneBtn = document.getElementById('doneBtn');
const toggleContainer = document.getElementById('drawerToggleContainer');

let width = 0

toggleButton.addEventListener('focusout', () => {
    onClose();
});

toggleButton.addEventListener('click', () => {
    onOpen();
});

closeBtn.addEventListener('click', () => {
    onClose();
});

doneBtn.addEventListener('click', () => {
    onClose();
});

function onClose() {
    for (let i = 402; i > 0; i -= 1) {
        width = i;
    }
    toggleContainer.style.filter = 'opacity(1)';
    sideDrawer.style.width = `${width}px`;
}

function onOpen() {
    for (let i = 0; i < 402; i += 1) {
        width = i;
    }
    toggleContainer.style.filter = 'opacity(0.4)';
    sideDrawer.style.width = `${width}px`;
}