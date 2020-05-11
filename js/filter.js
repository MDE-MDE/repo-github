(function(){
    const elem = document.querySelector('.products__list');
    const iso = new Isotope( elem, {
    itemSelector: '.products__item',
    filter:'.popular'
});

    const controls = document.querySelectorAll('.filter__link');
    const link = 'filter__item--activ';


    controls.forEach(function(control){
        control.addEventListener('click', function(e){
            e.preventDefault();
            const filterName = control.getAttribute('data-filter');
            controls.forEach(function(li){
                li.closest('.filter__item').classList.remove(link);
            });
            control.closest('.filter__item').classList.add(link);
            iso.arrange({
                filter: `.${filterName}`
            })
        })
    })
}())