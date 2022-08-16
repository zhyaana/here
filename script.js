// close links//
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')
navToggle.addEventListener('click' , ()=>{
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if(containerHeight ===0){
    linksContainer.style.height = `${linksHeight}px`;
  }else{
    linksContainer.style.height = 0;
  }
})

//  ********fixed navbar*********
const navbar = document.getElementById('nav');

window.addEventListener('scroll' , ()=>{
const scrollHeight = window.pageYOffset;
const navHeight = navbar.getBoundingClientRect().height;
if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav');
}else{
    navbar.classList.remove('fixed-nav');
}
})


// // scroll links -------

// const scrollLinks=document.querySelectorAll('.scroll-link')

// scrollLinks.forEach(link=>{
//     link.addEventListener('click' , e=>{
//         e.preventDefault();
//      const id = e.currentTarget.getAttribute('href').slice(1) 
//      const element = document.getElementById(id);
// //  calculate the height
// const navHeight = navBar.getBoundingClientRect().height;
// const containerHeight = linksContainer.getBoundingClientRect().height;
// const fixedNav = navBar.classList.contains("fixed-nav");
// let position = element.offsetTop - navHeight;
// console.log(position)
// if (!fixedNav) {
//   position = position - navHeight;
// }
// if (navHeight > 82) {
//   position = position + containerHeight;
// }
// console.log(position)

// window.scrollTo({
//   left: 0,
//   top: position,
// });
//      linksContainer.style.height=0
//     });
// })
