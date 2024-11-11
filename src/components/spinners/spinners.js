import './style.css';

export function spinnerSmall(){
    const spinnerWrapper = document.createElement('div');
    spinnerWrapper.classList.add('hidden','spinner','spinner-small');
    return spinnerWrapper
}
