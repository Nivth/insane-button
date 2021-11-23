const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};
const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', () => {
        button.style.backgroundColor = makeRandomColor();
        button.style.color = makeRandomColor();
    });
}
const h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
    h1.style.color = makeRandomColor();
    document.body.style.backgroundColor = makeRandomColor();
    h1.style.backgroundColor = makeRandomColor();
});




