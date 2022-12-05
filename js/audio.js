const slider = document.querySelector('#slider');
const volume = document.querySelector('#volume');
const audio = document.querySelector('#audio');
audio.autoplay=false;
audio.loop=false;
// audio.addEventListener('click',(e)=>{
//     if (e.target.muted===true){
//         slider.value = 0;
//         volume.innerHTML=0;
//     }
// })
// const check = ()=>{
//     if (audio.muted===true){
//     slider.value = 0;
//     volume.innerHTML=0;
// }
// }
// check()
slider.addEventListener('change',(e)=>{
    audio.volume = e.target.value/100;
    volume.innerHTML = `${audio.volume*100}%`;
})
