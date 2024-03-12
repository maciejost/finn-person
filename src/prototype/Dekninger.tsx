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
			className={`flex body cursor-pointer flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white bg-hvit ${
				isCurrent && '!bg-[#C8ECD2]'
			}`}
		>
			<h3 className='mb-4 text-2xl font-semibold'>{title}</h3>
			{isPriceLoading ? (
				<p className='my-16'>
					<Loader
						textDescription='Laster pris'
						/* className='!justify-start' */
					/>
				</p>
			) : (
				<div className=' my-8'>
					<span className=''>{formatValuta(price)}</span>/måned
				</div>
			)}
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
							covers={toppKasko}
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
		</div>
	)
}
