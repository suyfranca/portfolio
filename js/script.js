(function(){
  'use strict';

  let frontend = document.querySelector('.frontend');
  let backend = document.querySelector('.backend');
  let logic = document.querySelector('.logic');
  let git = document.querySelector('.git');
  let agile = document.querySelector('.agile');
  let english = document.querySelector('.english');

  function Trigger( element ){
    element.addEventListener( 'click', event => {
      element.nextElementSibling.className = 'd-block';
    });
  }

  Trigger(frontend);
  Trigger(backend);
  Trigger(logic);
  Trigger(git);
  Trigger(agile);
  Trigger(english);
  

})();