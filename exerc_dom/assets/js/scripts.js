var h1 = document.getElementById('page-title');
var btn = document.getElementById('mode-selector');
var body = document.getElementsByTagName('body')[0];
var footer = document.getElementsByTagName('footer')[0];

btn.addEventListener('click', () => {
    h1.classList.toggle("dark-mode");
    btn.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");

    if(btn.classList.contains('dark-mode'))
    {
        h1.innerHTML = 'Dark Mode ON';
        btn.innerHTML = 'Light Mode';
    }
    else
    {
        h1.innerHTML = 'Light Mode ON';
        btn.innerHTML = 'Dark Mode';
    }
})

