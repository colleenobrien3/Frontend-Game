console.log('Connected! You got this!')
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