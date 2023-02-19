

function clickMenu(){
    if(menu2li.style.display == 'block'){
        menu2li.style.display = 'none'
    } else {
        menu2li.style.display = 'block'
    }
}

const observer = new IntersectionObserver( 
    ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
    {threshold: [1]}
  );
  
  observer.observe(document.querySelector('nav'));