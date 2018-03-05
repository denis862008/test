import './styles.css';
let h1;
const greeting = 'Hello friend)))';

function say() {
    h1 = document.createElement('h1');
    h1.innerHTML = greeting;
    document.body.appendChild(h1);
}

say();

if (module.hot) {
    module.hot.dispose(() => {
        document.body.removeChild(h1);
    });
    module.hot.accept();
}

// import './styles.css';
// let h1;
// let greeting = require('./greeting.js').default;
//
// function say() {
//     h1 = document.createElement('h1');
//     h1.innerHTML = greeting;
//     document.body.appendChild(h1);
// }
//
// say();
//
// if (module.hot) {
//     module.hot.accept('./greeting.js', () => {
//         greeting = require('./greeting.js').default;
//         document.body.removeChild(h1);
//         say();
//     });
// }

