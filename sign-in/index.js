document.addEventListener('DOMContentLoaded', function () {
	const passwordInput = document.getElementById('password')
	const togglePasswordButton = document.querySelector('.toggle-password')
	const eyeIcon = document.getElementById('eye-icon')
	let userInputData = { password: '' }

	togglePasswordButton.addEventListener('click', function () {
		if (passwordInput.type === 'password') {
			passwordInput.type = 'text'
			eyeIcon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C7 5 3 10 3 12C3 14 7 19 12 19C17 19 21 14 21 12C21 10 17 5 12 5ZM12 17C9 17 6 14 6 12C6 10 9 7 12 7C15 7 18 10 18 12C18 14 15 17 12 17Z" fill="#AFB1B6"/>`
		} else {
			passwordInput.type = 'password'
			eyeIcon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9996 9.6413C10.6696 9.6413 9.58862 10.7233 9.58862 12.0533C9.58862 13.3823 10.6696 14.4633 11.9996 14.4633C13.3296 14.4633 14.4116 13.3823 14.4116 12.0533C14.4116 10.7233 13.3296 9.6413 11.9996 9.6413ZM11.9996 15.9633C9.84262 15.9633 8.08862 14.2093 8.08862 12.0533C8.08862 9.8963 9.84262 8.1413 11.9996 8.1413C14.1566 8.1413 15.9116 9.8963 15.9116 12.0533C15.9116 14.2093 14.1566 15.9633 11.9996 15.9633Z" fill="#AFB1B6"/>`
		}
	})

	passwordInput.addEventListener('input', function (event) {
		userInputData.password = event.target.value
	})

    document.querySelector('form').addEventListener('submit', function (event) {
		event.preventDefault() // Запобігаємо відправці форми
		console.log('Введене значення пароля:', userInputData.password)
	})
})
