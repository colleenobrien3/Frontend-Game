console.log('Connected! You got this!')

//Connecting nav buttons to correct question divs
let changeButtons = document.querySelectorAll('.change')
let divs = document.querySelectorAll
function toggleActive(e){
	document.querySelectorAll('.active').forEach(item=>{
		item.classList.remove('active')
	})
	document.querySelector(`#${e.target.innerText}`).classList.toggle('active')
}
changeButtons.forEach(item=>{
	item.addEventListener('click', toggleActive)
})

//Selecting answer

let options = document.querySelectorAll('.option')

function toggleAnswer(e){
	e.target.parentElement.children.forEach(item=>{
		item.classList.remove('chosen')
	})
	e.target.classList.toggle('chosen')
}
options.forEach(item=>{
	item.addEventListener('click', toggleAnswer)
})