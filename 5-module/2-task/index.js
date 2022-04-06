function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener('click', () =>{
    if (document.querySelector('#text').hasAttribute('hidden')){
        document.querySelector('#text').removeAttribute('hidden')
    } else{
        document.querySelector('#text').setAttribute('hidden', 'true');
    }
});
}