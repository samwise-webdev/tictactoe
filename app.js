// const div = document.querySelectorAll('div.img');

// div.addEventListener('click', () => {
//     hidden = false;
// }) //doesn't work

// document.querySelectorAll(img).forEach(img => img.addEventListener('click', () => img.hidden = false))  doesn't work

// document.querySelectorAll(div).forEach(img => img.addEventListener('click', () => img.hidden = false)) doesn't work

//     div.addEventListener('click', () => {
//         imagesX.forEach(img => {
//         img.hidden = false;
//     })
// }) turns all of them on :()

// div.addEventListener('click', () => {
//     x.hidden = false;
// })

// img.addEventListener('click', () => {
//         img.hidden = false;
//     })

// const img = document.querySelectorAll('div.img')
// const imgsX = document.querySelectorAll('div img.x');
// imgsX.forEach(img => addEventListener('click', toggleVis()));

// const imgsO = document.querySelectorAll('div img.o');
// imgsO.forEach(img => addEventListener('dblclick', toggleVis()));

// function toggleVis() {
//     if (img.hidden !== false) {
//         img.hidden = false
//     } else {
//         img.hidden === true
//     }
// }  //was trying to see if i could toggle hidden using a separate function but that didn't work. don't know why i thought it might apply it to individual imgs instead?

//-----------------------------------------------------------------

const imgsX = document.querySelectorAll('div img.x');
imgsX.forEach(img => addEventListener('click', () => img.hidden = false));

const imgsO = document.querySelectorAll('div img.o');
imgsO.forEach(img => addEventListener('dblclick', () => img.hidden = false));  //so this works to show all the images

