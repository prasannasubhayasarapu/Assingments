const heading=document.getElementById("heading");
heading.textContent="Welcome to the DOM World"


const para=document.getElementsByTagName('p');
for(let i=0;i<para.length;i++){
    para[i].style.color='blue';
}


const container=document.querySelector('.container');
container.style.backgroundColor='yellow';
