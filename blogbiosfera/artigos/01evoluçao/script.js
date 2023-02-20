

function clickMenu(){
    if(menu2ul.style.display == 'block'){
        menu2ul.style.display = 'none'
    } else {
        menu2ul.style.display = 'block'
    }
}

const observer = new IntersectionObserver( 
    ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
    {threshold: [1]}
  );
  
  observer.observe(document.querySelector('nav'));