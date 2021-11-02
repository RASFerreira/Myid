
function mobileMenu() {
    const btn = document.querySelector('.mobile-btn');
    const navigation = document.querySelector('.navigation');

    btn.addEventListener('click', () => {
        navigation.classList.toggle('navigation__active');
    })

};


mobileMenu();



function dataHTML(){
    var data = new Date();
    var ano = data.getFullYear();
    const data_html = document.querySelector('.data');

    data_html.innerHTML = `${ano}`;

}

dataHTML();



function btnTopo() {

    const btn_topo = document.querySelector('.btn__top');
    

    window.addEventListener('scroll', () => {

        if(window.scrollY >= 600){
           
            btn_topo.classList.add('btn__top--active');
            
            
        }else if(window.scrollY <= 550){
            btn_topo.classList.remove('btn__top--active');
        }

    });

};

btnTopo();








