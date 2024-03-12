import { Filters } from './components/Filters'
import Prototype from './prototype'
import SideMeny from './prototype/Sidemeny'
import Oversikt from './prototype/Oversikt'
import { useState } from 'react'
import Kvittering from './prototype/Kvittering'

export type Status = 'midlertidig' | 'doed' | 'utflyttet' | 'levende' | 'alle'
export type Gender = 'mann' | 'kvinne' | 'alle'

export type Filters = {
	status: Status
	gender: Gender
}

function App() {
	const [view, setView] = useState<
		'START' | 'FLYT' | 'INFORMASJON' | 'KVITTERING'
	>('START')
	return (
		<>
			<Prototype>
				<SideMeny />
				{view === 'START' && <Oversikt setView={setView} />}
				{view === 'KVITTERING' && <Kvittering />}
			</Prototype>
		</>
	)
}
export default App
