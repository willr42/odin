const rootDiv = document.getElementById('content')

function mainComponent() {
	const title = document.createElement('h1')
	title.textContent = "Welcome to Applebeys"
	rootDiv.appendChild(title)
}

export default mainComponent;