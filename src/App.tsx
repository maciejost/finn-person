import { Filters } from './components/Filters'
import Prototype from './prototype'
import SideMeny from './prototype/Sidemeny'
import Oversikt from './prototype/Oversikt'
import { useState } from 'react'
import Kvittering from './prototype/Kvittering'
import Flyt from './prototype/Flyt'

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
	const [kjorelengde, setKjorelengde] = useState('12')
	const [egenandel, setEgenandel] = useState('1')
	const [bonus, setBonus] = useState('75')
	const [kilometerstand, setKilometerstand] = useState('10000')
	const [selectedCoverage, setSelectedCoverage] = useState<
		'Toppkasko' | 'Kasko' | 'Delkasko' | 'Ansvar'
	>('Kasko')

	return (
		<>
			<Prototype>
				<SideMeny />
				{view === 'START' && <Oversikt setView={setView} />}
				{view === 'FLYT' && (
					<Flyt
						setView={setView}
						kjorelengde={kjorelengde}
						setKjorelengde={setKjorelengde}
						egenandel={egenandel}
						setEgenandel={setEgenandel}
						bonus={bonus}
						setBonus={setBonus}
						kilometerstand={kilometerstand}
						setKilometerstand={setKilometerstand}
						selectedCoverage={selectedCoverage}
						setSelectedCoverage={setSelectedCoverage}
					/>
				)}
				{view === 'KVITTERING' && <Kvittering />}
			</Prototype>
		</>
	)
}
export default App
