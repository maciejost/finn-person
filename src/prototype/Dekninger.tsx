import { formatValuta } from '@fremtind/jkl-formatters-util'
import { CheckListItem, List } from '@fremtind/jkl-list-react'
import React, { useState } from 'react'

const Card: React.FC<{
	title: string
	covers: string[]
	price: number
	selectedCoverage: 'Toppkasko' | 'Kasko' | 'Delkasko' | 'Ansvar'
	setSelectedCoverage: () => void
}> = ({ title, covers, price, selectedCoverage, setSelectedCoverage }) => {
	const isCurrent = selectedCoverage === title
	return (
		<div
			onClick={setSelectedCoverage}
			className={`flex body cursor-pointer flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white bg-hvit ${
				isCurrent && '!bg-[#C8ECD2]'
			}`}
		>
			<h3 className='mb-4 text-2xl font-semibold'>{title}</h3>
			<div className='flex justify-center items-baseline my-8'>
				<span className='mr-2 text-5xl font-extrabold'>
					{formatValuta(price)}
				</span>
				<span className='text-gray-500 dark:text-gray-400'>
					/måned, inkludert trafikkforsikringsavgift
				</span>
			</div>

			<List className='mb-8 body space-y-4 text-left'>
				{covers.map(item => (
					<CheckListItem className='flex items-center space-x-3'>
						<span>{item}</span>
					</CheckListItem>
				))}
			</List>
		</div>
	)
}

export const Dekninger = () => {
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

	const [selectedCoverage, setSelectedCoverage] = useState<
		'Toppkasko' | 'Kasko' | 'Delkasko' | 'Ansvar'
	>('Kasko')

	return (
		<div>
			<section className='bg-white dark:bg-gray-900 mt-64'>
				<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
					<div className='grid grid-cols-4 gap-16 justify-center'>
						<Card
							title='Toppkasko'
							price={1000}
							covers={toppKasko}
							setSelectedCoverage={() =>
								setSelectedCoverage('Toppkasko')
							}
							selectedCoverage={selectedCoverage}
						/>
						<Card
							title='Kasko'
							price={1000}
							covers={kasko}
							setSelectedCoverage={() =>
								setSelectedCoverage('Kasko')
							}
							selectedCoverage={selectedCoverage}
						/>
						<Card
							title='Delkasko'
							price={1000}
							covers={delKasko}
							setSelectedCoverage={() =>
								setSelectedCoverage('Delkasko')
							}
							selectedCoverage={selectedCoverage}
						/>
						<Card
							title='Ansvar'
							price={1000}
							covers={ansvar}
							setSelectedCoverage={() =>
								setSelectedCoverage('Ansvar')
							}
							selectedCoverage={selectedCoverage}
						/>
					</div>
				</div>
			</section>
		</div>
	)
}
