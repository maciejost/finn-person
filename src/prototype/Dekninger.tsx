import { formatValuta } from '@fremtind/jkl-formatters-util'
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
			className={`flex cursor-pointer flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white bg-hvit ${
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

			<ul role='list' className='mb-8 space-y-4 text-left'>
				{covers.map(item => (
					<li className='flex items-center space-x-3'>
						<svg
							className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
								clip-rule='evenodd'
							></path>
						</svg>
						<span>{item}</span>
					</li>
				))}
			</ul>
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
		'Leiebil',
		'Ny bil ved totalskade',
		'Punkteringsskader uten bonustap (valgfritt)',
		'Hvis bilen er leaset: Startleie',
		'Skader på maskin og elektronikk',
		'Skade på parkert bil uten bonustap',
	]

	const kasko = toppKasko.slice(0, 10)
	const delKasko = toppKasko.slice(0, 5)
	const ansvar = toppKasko.slice(0, 1)

	const [selectedCoverage, setSelectedCoverage] = useState<
		'Toppkasko' | 'Kasko' | 'Delkasko' | 'Ansvar'
	>('Kasko')

	return (
		<div>
			<section className='bg-white dark:bg-gray-900'>
				<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
					<div className='grid grid-cols-4 gap-0 justify-center'>
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
