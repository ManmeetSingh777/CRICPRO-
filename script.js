
const virender = document.getElementById('VS');
const sachin = document.getElementById('ST');
const gautam = document.getElementById('GG');
const virat = document.getElementById('VK');
const ms = document.getElementById('MS');
const yuvraj = document.getElementById('YS');
const suresh = document.getElementById('SR');
const harbhajan = document.getElementById('HS');
const zaheer = document.getElementById('ZR');
const munaf = document.getElementById('MP');
const sreesanth = document.getElementById('SSR');

const details = document.getElementById('details');

const table = document.getElementById('tableau');


let arr=[
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sehwag.png',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sachin.png',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-gambhir.png',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-virat-kohli.png',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-dhoni.png',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-yuvraj.png',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-suresh-raina.jpg',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-harbhajan.jpg',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-zaheer-khan.jpg',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-munaf-patel.jpg',
    'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sreeshanth.jpg'

];

document.addEventListener('keydown', function(e){
    if(e.key!='Escape'){
    close();
    }
})



function popup(n){
    details.style.display='block';
    details.style.backgroundImage= `url(${arr[n]})`;
    table.style.filter="blur(1px)";

}

function close(){
    details.style.display='none';
    table.style.filter='none';

}