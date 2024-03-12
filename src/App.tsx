import { Filters } from './components/Filters'
import Prototype from './prototype'
import SideMeny from './prototype/Sidemeny'
import Oversikt from './prototype/Oversikt'

export type Status = 'midlertidig' | 'doed' | 'utflyttet' | 'levende' | 'alle'
export type Gender = 'mann' | 'kvinne' | 'alle'

export type Filters = {
	status: Status
	gender: Gender
}

function App() {
	return (
		<>
			<Prototype>
				<SideMeny />
				<Oversikt />
			</Prototype>
		</>
	)
}
export default App
