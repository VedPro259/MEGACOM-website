const example = document.querySelector('.hello');
const visibility = document.querySelector('.visibility');
const ourSubstring = "@";

example.addEventListener('input', () => {
    if (!example.value.includes(ourSubstring)) {
        visibility.style.opacity = '1';
    } else {
        visibility.style.opacity = '0';
    }
});
