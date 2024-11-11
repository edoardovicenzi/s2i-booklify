import './style.css';
import { spinnerSmall } from '../../components/spinners/spinners.js';

export function submitButton(innerText = ""){
    const submitButtonElement = document.createElement("button");
    submitButtonElement.setAttribute('type',"submit");
    submitButtonElement.classList.add('btn');
    submitButtonElement.classList.add('form-submit-button');

    const submitTextElement = document.createElement('span');
    submitTextElement.classList.add('form-submit-button-text');
    submitTextElement.innerText = innerText;
    submitButtonElement.appendChild(submitTextElement);

    const spinner = spinnerSmall();
    submitButtonElement.appendChild(spinner);


    return submitButtonElement
}

export function loadMoreButton(){
    const button = document.createElement('button')
    button.type = 'submit';
    button.classList.add('btn');
    button.classList.add('form-submit-button-load-more');

    const buttonTextElement = document.createElement('span');
    buttonTextElement.classList.add('form-submit-button-text');
    buttonTextElement.innerText = "LOAD MORE";
    button.appendChild(buttonTextElement);

    const spinner = spinnerSmall();
    button.appendChild(spinner);
    return button
}

