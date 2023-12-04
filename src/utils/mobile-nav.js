const mobileNav = () =>{
const headerbutton = document.querySelector('.header-bars');
const mobilenav = document.querySelector('.mobile-nav');
const mobilelinks = document.querySelectorAll('.mobile-nav-link');

//state
let isMobileNavOpen = false;

headerbutton.addEventListener('click',() => {
    isMobileNavOpen = !isMobileNavOpen;
    if(isMobileNavOpen){
        mobilenav.style.display = 'flex';
        document.body.style.overflowY = 'hidden'; 
    }else{
        mobilenav.style.display = 'none';
        document.body.style.overflowY = 'auto'; 
    }

    mobilelinks.forEach((Links) => {
        Links.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobilenav.style.display = 'none';
            document.body.style.overflowY = 'auto'; 
        })
    })
   
});
}
export default mobileNav;