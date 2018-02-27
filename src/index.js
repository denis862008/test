import './styles.css';
let h1;
// import main from './index.js';
// const main = require('./index.js');
// console.log(main);

export function say() {
    const greeting = 'Hello, friend';
    h1 = document.createElement('h1');
    h1.innerHTML = greeting;
    document.body.appendChild(h1);
}
say();

if (module.hot) {
    console.log('Hot');
    module.hot.accept('./index.js', () => {
        require('./index.js');
        alert('accept');
        document.body.removeChild(h1);
        say();
    });
}

