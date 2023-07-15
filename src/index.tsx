import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
} else {
	// Handle the case when the root element is null
	// For example, show an error message or fallback content
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
