const sections = document.querySelectorAll('.section');
const secBtnsContainer = document.querySelector('.controls');
const secBtns = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    // Button click Active Class
    for (let i = 0; i < secBtns.length; i++){
        secBtns[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
            // Keep a space before the classname to avoid breaking the classnames
            this.className += ' active-btn';
        })   
    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            secBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            sections.forEach((sec) => {
                sec.classList.remove('active');
            })
            selectedSection = document.getElementById(id);
            selectedSection.classList.add('active');
        }
    })

    const themeButton = document.querySelector('.themeBtn');
    themeButton.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

//Progress bar 
document.querySelectorAll('.progress span').forEach((item)=>{
    const percentage = item.dataset.percentage;
    item.style.width = `${percentage}%`
})

// function PageTransitions() {
    

//     // Button click Active Class
//     for (let i = 0; i < secBtn.length; i++) {
//         secBtn[i].addEventListener('click', function() {
//             let currentBtn = document.querySelector('.active-btn'); // Select the currently active button
//             if (currentBtn) {
//                 currentBtn.classList.remove('active-btn'); 
//             }
//             this.classList.add('active-btn'); 
//         });
//     }
// }



PageTransitions();