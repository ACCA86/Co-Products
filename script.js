const sign_up = document.querySelector('#sign-up');
const nav01_hidden = document.querySelector('#nav01-hidden');
const close_nav01 = document.querySelector('#close-nav');

const login = document.querySelector('#login');
const nav02_hidden = document.querySelector('#nav02-hidden');
const close_nav02 = document.querySelector('#close-nav02');

const showpassword01 = document.querySelector('#show-password01');
const showEye01 = document.querySelector('#show-eye01');
const hiddenEye01 = document.querySelector('#hidden-eye01');

const showpassword02 = document.querySelector('#show-password02');
const showEye02 = document.querySelector('#show-eye02');
const hiddenEye02 = document.querySelector('#hidden-eye02');


const landpage = document.querySelector('#landpage');
const landpage_items = document.querySelectorAll('#landpage img');
let index = 1;
let i = 0;
const slideWidth = landpage_items[index].clientWidth;

const move = ()=>{
	if(i <= landpage_items.length){
		i++;
		landpage.style.transform="translateX(" + (i*(-slideWidth)) + "px)";
		landpage.style.transition="0.8s";
	}
	if(i >= landpage_items.length){
		i = 0;
		landpage.style.transform="translateX(" + (i*(-slideWidth)) + "px)";
		landpage.style.transition="0s";
	}

}
setInterval(move,5000);

sign_up.addEventListener('click',()=>{
	nav01_hidden.style.transform="translateY(0)";;
},false);
close_nav01.addEventListener('click',()=>{
	nav01_hidden.style.transform="translateY(-100%)";;
},false);

login.addEventListener('click',()=>{
	nav02_hidden.style.transform="translateY(0)";;
},false);
close_nav02.addEventListener('click',()=>{
	nav02_hidden.style.transform="translateY(-100%)";;
},false);

showEye01.addEventListener('click',()=>{
	showpassword01.setAttribute('type','text');
	hiddenEye01.style.display="inline-block";
	showEye01.style.display="none";
},false);
hiddenEye01.addEventListener('click',()=>{
	showpassword01.setAttribute("type",'password');
	hiddenEye01.style.display="none";
	showEye01.style.display="inline-block";
},false);


showEye02.addEventListener('click',()=>{
	showpassword02.setAttribute('type','text');
	hiddenEye02.style.display="inline-block";
	showEye02.style.display="none";
},false);
hiddenEye02.addEventListener('click',()=>{
	showpassword02.setAttribute("type",'password');
	hiddenEye02.style.display="none";
	showEye02.style.display="inline-block";
},false);
