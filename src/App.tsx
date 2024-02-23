import { useState } from 'react'
function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<h1 className='text-center my-64'>Vite + React</h1>
			<div className='rounded-xl bg-varde p-40 flex items-center justify-center flex-col gap-24 max-w-xl mx-auto'>
				<button
					onClick={() => setCount(count => count + 1)}
					className='px-24 py-16 bg-granitt text-snohvit rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-granitt focus:ring-opacity-50 transition-all duration-300 ease-in-out'
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
		</>
	)
}

export default App
