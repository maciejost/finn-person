import { formatValuta } from '@fremtind/jkl-formatters-util'
import { CheckListItem, List } from '@fremtind/jkl-list-react'
import { Loader } from '@fremtind/jkl-loader-react'
import React from 'react'

const Card: React.FC<{
	title: string
	covers: string[]
	price: number
	isPriceLoading: boolean
	selectedCoverage: 'Toppkasko' | 'Kasko' | 'Delkasko' | 'Ansvar'
	setSelectedCoverage: () => void
}> = ({
	title,
	covers,
	price,
	selectedCoverage,
	setSelectedCoverage,
	isPriceLoading,
}) => {
	const isCurrent = selectedCoverage === title
	return (
		<div
			onClick={setSelectedCoverage}
			className={`flex body flex-col cursor-pointer  justify-start transition-all items-center px-16 py-24 rounded-lg bg-hvit border-border-separator border ${
				isCurrent && '!bg-[#C8ECD2] -translate-y-6 cursor-default'
			}
			${!isCurrent && 'hover:-translate-y-3 hover:bg-snohvit'}
			`}
		>
			{isCurrent && <span className=''>Valgt ✔️</span>}
			<h3 className='mb-8 font-bold heading-3'>{title}</h3>
			{isPriceLoading ? (
				<p className='my-16 font-bold mt-8 pb-24 border-b w-full text-center border-border-separator mb-16 '>
					<Loader
						className=''
						textDescription='Laster pris'
						/* className='!justify-start' */
					/>
				</p>
			) : (
				<div className='font-bold mt-8 pb-8 border-b w-full text-center border-border-separator mb-16 '>
					<span className=''>{formatValuta(price)}</span>
					/måned
				</div>
			)}
			<div className='body text-left self-start mb-8'>Dekker:</div>
			<List className='mb-8 body space-y-4 text-left'>
				{covers.map(item => (
					<CheckListItem
						key={item}
						className='flex items-center space-x-3'
					>
						<span>{item}</span>
					</CheckListItem>
				))}
			</List>
		</div>
	)
}

const toppKasko = [
	'Ansvar og rettshjelp',
	'Glasskader, brann og tyveri',
	'Fastmontert ekstrautstyr',
	'Personlige eiendeler',
	'Veihjelp',
	'Uhell med bilen din',
	'8 års garanti på reparasjoner',
	'Ny bil ved totalskade',
	'Punkteringsskader uten bonustap (valgfritt)',
	'Hvis bilen er leaset: Startleie',
	'Skader på maskin og elektronikk',
	'Skade på parkert bil uten bonustap',
	'Leiebil',
]

const kasko = toppKasko.slice(0, 10)
const delKasko = toppKasko.slice(0, 5)
const ansvar = toppKasko.slice(0, 1)
const toppKaskoView = toppKasko

const AlternativVisning = () => {
	const [selectedCoverage, setSelectedCoverage] = React.useState<
		'Toppkasko' | 'Kasko' | 'Delkasko' | 'Ansvar'
	>('Delkasko')

	return (
		<div className='body my-64  rounded-lg border border-border-separator bg-hvit flex flex-col items-center text-left w-[500px]'>
			<button
				onClick={() => setSelectedCoverage('Toppkasko')}
				className={`
				${!selectedCoverage === 'Toppkasko' && 'hover:bg-snohvit'}
				${
					selectedCoverage === 'Toppkasko' && '!bg-[#C8ECD2]'
				} text-left w-full pt-40 pb-16 px-24`}
			>
				<h3 className=' text-center self-center mb-24 mt-24 heading-3 pb-16 border-b border-border-separator'>
					Toppkasko
				</h3>
				<List>
					<CheckListItem>
						Skader på maskin og elektronikk
					</CheckListItem>
					<CheckListItem>
						Skade på parkert bil uten bonustap
					</CheckListItem>
					<CheckListItem>Leiebil</CheckListItem>
				</List>
			</button>
			<button
				onClick={() => setSelectedCoverage('Kasko')}
				className={`
				${!selectedCoverage === 'Kasko' && 'hover:bg-snohvit'}
				${
					(selectedCoverage === 'Toppkasko' ||
						selectedCoverage === 'Kasko') &&
					'!bg-[#C8ECD2]'
				} text-left pb-16 w-full px-24`}
			>
				<h3 className=' text-center self-center mb-24 mt-24 heading-3 pb-16 border-b border-border-separator'>
					Kasko
				</h3>
				<List>
					<CheckListItem>Uhell med bilen din</CheckListItem>
					<CheckListItem>8 års garanti på reparasjoner</CheckListItem>
					<CheckListItem>Ny bil ved totalskade</CheckListItem>
					<CheckListItem>
						Punkteringsskader uten bonustap (valgfritt)
					</CheckListItem>
					<CheckListItem>
						Hvis bilen er leaset: Startleie
					</CheckListItem>
				</List>
			</button>
			<button
				onClick={() => setSelectedCoverage('Delkasko')}
				className={`
				${!selectedCoverage === 'Delkasko' && 'hover:bg-snohvit'}
				${
					(selectedCoverage === 'Toppkasko' ||
						selectedCoverage === 'Kasko' ||
						selectedCoverage === 'Delkasko') &&
					'!bg-[#C8ECD2]'
				} text-left pb-16 w-full px-24`}
			>
				<h3 className=' text-center self-center mb-24 mt-24 heading-3 pb-16 border-b border-border-separator'>
					Delkasko
				</h3>
				<List>
					<CheckListItem>Glasskader, brann og tyveri</CheckListItem>
					<CheckListItem>Fastmontert ekstrautstyr</CheckListItem>
					<CheckListItem>Personlige eiendeler</CheckListItem>
					<CheckListItem>Veihjelp</CheckListItem>
				</List>
			</button>
			<button
				onClick={() => setSelectedCoverage('Ansvar')}
				className={`
				${!selectedCoverage === 'Ansvar' && 'hover:bg-snohvit'}
				${
					(selectedCoverage === 'Toppkasko' ||
						selectedCoverage === 'Kasko' ||
						selectedCoverage === 'Delkasko' ||
						selectedCoverage === 'Ansvar') &&
					'!bg-[#C8ECD2]'
				} text-left  pb-40 w-full px-24`}
			>
				<h3 className=' text-center self-center mb-24 heading-3 pb-16 border-b border-border-separator'>
					Ansvar
				</h3>
				<List>
					<CheckListItem>Ansvar og rettshjelp</CheckListItem>
				</List>
			</button>
		</div>
	)
}

const AlternativVisningTo = () => {
	const [selectedCoverage, setSelectedCoverage] = React.useState<
		'Toppkasko' | 'Kasko' | 'Delkasko' | 'Ansvar'
	>('Delkasko')

	return (
		<div className='body my-64  rounded-lg border border-border-separator bg-hvit flex flex-col items-center text-left w-[500px]'>
			<button
				onClick={() => setSelectedCoverage('Ansvar')}
				className={`
				${!selectedCoverage === 'Ansvar' && 'hover:bg-snohvit'}
				${
					(selectedCoverage === 'Toppkasko' ||
						selectedCoverage === 'Kasko' ||
						selectedCoverage === 'Delkasko' ||
						selectedCoverage === 'Ansvar') &&
					'!bg-[#C8ECD2]'
				} text-left  pt-40 pb-16 w-full px-24`}
			>
				<h3 className=' text-center self-center mb-24 heading-3 pb-16 border-b border-border-separator'>
					Ansvar
				</h3>
				<List>
					<CheckListItem>Ansvar og rettshjelp</CheckListItem>
				</List>
			</button>
			<button
				onClick={() => setSelectedCoverage('Delkasko')}
				className={`
				${!selectedCoverage === 'Delkasko' && 'hover:bg-snohvit'}
				${
					(selectedCoverage === 'Toppkasko' ||
						selectedCoverage === 'Kasko' ||
						selectedCoverage === 'Delkasko') &&
					'!bg-[#C8ECD2]'
				} text-left pb-16 w-full px-24`}
			>
				<h3 className=' text-center self-center mb-24 mt-24 heading-3 pb-16 border-b border-border-separator'>
					Delkasko
				</h3>
				<List>
					<CheckListItem>Glasskader, brann og tyveri</CheckListItem>
					<CheckListItem>Fastmontert ekstrautstyr</CheckListItem>
					<CheckListItem>Personlige eiendeler</CheckListItem>
					<CheckListItem>Veihjelp</CheckListItem>
				</List>
			</button>

			<button
				onClick={() => setSelectedCoverage('Kasko')}
				className={`
				${!selectedCoverage === 'Kasko' && 'hover:bg-snohvit'}
				${
					(selectedCoverage === 'Toppkasko' ||
						selectedCoverage === 'Kasko') &&
					'!bg-[#C8ECD2]'
				} text-left pb-16 w-full px-24`}
			>
				<h3 className=' text-center self-center mb-24 mt-24 heading-3 pb-16 border-b border-border-separator'>
					Kasko
				</h3>
				<List>
					<CheckListItem>Uhell med bilen din</CheckListItem>
					<CheckListItem>8 års garanti på reparasjoner</CheckListItem>
					<CheckListItem>Ny bil ved totalskade</CheckListItem>
					<CheckListItem>
						Punkteringsskader uten bonustap (valgfritt)
					</CheckListItem>
					<CheckListItem>
						Hvis bilen er leaset: Startleie
					</CheckListItem>
				</List>
			</button>
			<button
				onClick={() => setSelectedCoverage('Toppkasko')}
				className={`
				${!selectedCoverage === 'Toppkasko' && 'hover:bg-snohvit'}
				${
					selectedCoverage === 'Toppkasko' && '!bg-[#C8ECD2]'
				} text-left w-full pb-40  px-24`}
			>
				<h3 className=' text-center self-center mb-24 mt-24 heading-3 pb-16 border-b border-border-separator'>
					Toppkasko
				</h3>
				<List>
					<CheckListItem>
						Skader på maskin og elektronikk
					</CheckListItem>
					<CheckListItem>
						Skade på parkert bil uten bonustap
					</CheckListItem>
					<CheckListItem>Leiebil</CheckListItem>
				</List>
			</button>
		</div>
	)
}

export const Dekninger: React.FC<{
	selectedCoverage: 'Toppkasko' | 'Kasko' | 'Delkasko' | 'Ansvar'
	setSelectedCoverage: React.Dispatch<
		React.SetStateAction<'Toppkasko' | 'Kasko' | 'Delkasko' | 'Ansvar'>
	>
	price: number
	isPriceLoading: boolean
}> = ({ selectedCoverage, setSelectedCoverage, price, isPriceLoading }) => {
	return (
		<div className='mb-64'>
			<section className='bg-white dark:bg-gray-900 mt-64'>
				<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
					<div className='grid grid-cols-4 gap-16 justify-center'>
						<Card
							title='Toppkasko'
							price={Math.round(price * 1.7)}
							isPriceLoading={isPriceLoading}
							covers={toppKaskoView}
							setSelectedCoverage={() =>
								setSelectedCoverage('Toppkasko')
							}
							selectedCoverage={selectedCoverage}
						/>
						<Card
							title='Kasko'
							price={Math.round(price * 1.2)}
							isPriceLoading={isPriceLoading}
							covers={kasko}
							setSelectedCoverage={() =>
								setSelectedCoverage('Kasko')
							}
							selectedCoverage={selectedCoverage}
						/>
						<Card
							title='Delkasko'
							price={Math.round(price * 0.8)}
							isPriceLoading={isPriceLoading}
							covers={delKasko}
							setSelectedCoverage={() =>
								setSelectedCoverage('Delkasko')
							}
							selectedCoverage={selectedCoverage}
						/>
						<Card
							title='Ansvar'
							price={Math.round(price * 0.5)}
							isPriceLoading={isPriceLoading}
							covers={ansvar}
							setSelectedCoverage={() =>
								setSelectedCoverage('Ansvar')
							}
							selectedCoverage={selectedCoverage}
						/>
					</div>
				</div>
			</section>
			<div className='flex gap-64'>
				<AlternativVisning />
				<AlternativVisningTo />
			</div>
		</div>
	)
}
