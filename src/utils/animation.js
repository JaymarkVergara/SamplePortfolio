const animation = () => {
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('logoshow')
                entry.target.classList.add('projectshow')
                entry.target.classList.add('aboutcontentshow')
                entry.target.classList.add('aboutimgshow')
            }else{
            
          
            }
        })
    })
    const techlogo = document.querySelectorAll('.tech-logo')
    techlogo.forEach((entry)=> observer.observe(entry));
    const projectwork = document.querySelectorAll('.project-work-container');
    projectwork.forEach((entry)=> observer.observe(entry));
    const aboutcontent = document.querySelectorAll('.about-content');
    aboutcontent.forEach((entry)=> observer.observe(entry));
    const aboutimg = document.querySelectorAll('.about-img-container');
    aboutimg.forEach((entry)=> observer.observe(entry));
}
export default animation;