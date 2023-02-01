const card = document.querySelector('.card')
const questionBoxes = document.querySelectorAll('.accordion-name')

function openCard() {
	if (!this.parentElement.classList.contains('open')) {
		questionBoxes.forEach(element => {
			element.parentElement.classList.remove('open')
		})
	}
	this.parentElement.classList.toggle('open')
}
const moveBox = () => {
    card.classList.add('active-state')
}
const resetBox = () => {
    card.classList.remove('active-state')
}

questionBoxes.forEach(questionBox => {
	questionBox.addEventListener('click', openCard)
})
questionBoxes.forEach(questionBox => {
	questionBox.addEventListener('mouseover', moveBox)
})
questionBoxes.forEach(questionBox => {
	questionBox.addEventListener('mouseleave', resetBox)
})
