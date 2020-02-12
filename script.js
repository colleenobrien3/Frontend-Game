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
console.log(options)

function toggleAnswer(e){
	let sibs = e.target.parentElement.querySelectorAll(".chosen");
	sibs.forEach(item=>{
			item.classList.remove('chosen')
		
	}
		)
		e.target.classList.add('chosen')
		console.log(e.target)
	// sibs.forEach(item=>{
	// 	if(item.classList.contains('chosen')){
	// 		item.classList.remove('chosen')
	// 	}
	// })
}
options.forEach(item=>{
	item.addEventListener('click', toggleAnswer)
})



//Checking answers


console.log(document.querySelector('#checkAnswers'))

let checkButton = document.querySelector('#checkAnswers')
console.log(checkButton)

checkButton.addEventListener('click', checkAnswersFunction)

let points = 0

function checkAnswersFunction(){
	let correctAnswers = document.getElementsByClassName('chosen correct')
	for (let i=0; i<correctAnswers.length; i++){
		points+=1
	}
	console.log(points)
	document.querySelector('.winMessage').innerText='You got ' + points + ' out of 15 correct.'
	document.querySelector('.winMessage').classList.toggle('hidden')
	document.querySelector('.endOptions').classList.remove('hidden')
	checkButton.removeEventListener(checkAnswersFunction)
	// correctAnswers.forEach(item=>{
	// 	console.log('hello')
	// })
	// console.log(points)
	// correctAnswers.forEach(item=>{
	// 	if(item.classList.contains('chosen')){
	// 		console.log(item)
	// 	}
	// })
}

// let correctAnswers = document.querySelectorAll('.correct .chosen')
// console.log(correctAnswers)

// correctAnswers.forEach(item=>{
// 	if(item.classList.contains('chosen')){
// 		console.log(item.classList)
// 		}
// 	})
	
document.querySelector('.reload').addEventListener('click', function(){location.reload()})

document.querySelector('#seeAnswersButton').addEventListener('click', showModal)

function showModal(){
	document.querySelector('#answerModal').classList.add('active')
	document.querySelector('#Submit').classList.toggle('active')
}

document.querySelector('.reloadAgain').addEventListener('click', function(){location.reload()})




