import { TextInput } from '@fremtind/jkl-text-input-react'
import { Dekninger } from './Dekninger'
import { CheckListItem, List } from '@fremtind/jkl-list-react'
import { formatValuta } from '@fremtind/jkl-formatters-util'
import { Select } from '@fremtind/jkl-select-react'
import { useState } from 'react'
import { Loader } from '@fremtind/jkl-loader-react'
import { Checkbox } from '@fremtind/jkl-checkbox-react'
import { PrimaryButton } from '@fremtind/jkl-button-react'

const lengthOptions = [
	{
		value: '99',
		label: 'Ubegrenset',
	},
	{
		value: '12',
		label: '12 000 km årlig',
	},
	{
		value: '25',
		label: '25 000 km årlig',
	},
	{
		value: '16',
		label: '16 000 km årlig',
	},
	{
		value: '8',
		label: ' 8 000 km årlig',
	},
	{
		value: '60',
		label: '60 000 km årlig',
	},
	{
		value: '50',
		label: '50 000 km årlig',
	},
	{
		value: '40',
		label: '40 000 km årlig',
	},
	{
		value: '30',
		label: '30 000 km årlig',
	},
	{
		value: '20',
		label: '20 000 km årlig',
	},
	{
		value: '75',
		label: '75 000 km årlig',
	},
]

const deductibleOptions = [
	{
		value: '1',
		label: '10 000',
	},
	{
		value: '2',
		label: '12 000',
	},
	{
		value: '3',
		label: '16 000',
	},
	{
		value: '4',
		label: '20 000',
	},
]

const bonusOptions = [
	{
		value: '75',
		label: '75%',
	},
	{
		value: '10',
		label: '10%',
	},
	{
		value: '20',
		label: '20%',
	},
	{
		value: '30',
		label: '30%',
	},
	{
		value: '40',
		label: '40%',
	},
	{
		value: '50',
		label: '50%',
	},
	{
		value: '60',
		label: '60%',
	},
	{
		value: '70',
		label: '70%',
	},
	{
		value: '99',
		label: '0 eller mindre',
	},
]

const Informasjon: React.FC<{
	setView: React.Dispatch<
		React.SetStateAction<'START' | 'FLYT' | 'INFORMASJON' | 'KVITTERING'>
	>
	kjorelengde: string
	egenandel: string
	bonus: string
	selectedCoverage: 'Toppkasko' | 'Kasko' | 'Delkasko' | 'Ansvar'
	setSelectedCoverage: React.Dispatch<
		React.SetStateAction<'Toppkasko' | 'Kasko' | 'Delkasko' | 'Ansvar'>
	>
	price: number
	isPriceLoading: boolean
}> = ({
	setView,
	kjorelengde,
	egenandel,
	bonus,
	selectedCoverage,
	setSelectedCoverage,
	price,
	isPriceLoading,
}) => {
	let multiplier = 1

	if (selectedCoverage === 'Toppkasko') multiplier = 1.7
	if (selectedCoverage === 'Delkasko') multiplier = 0.8
	if (selectedCoverage === 'Ansvar') multiplier = 0.5
	if (selectedCoverage === 'Kasko') multiplier = 1.2

	const [insuranceCompany, setInsuranceCompany] = useState('')
	const [email, setEmail] = useState('')
	const [isPurchasing, setIsPurchasing] = useState(false)

	const Summary = () => {
		return (
			<div className='rounded-md border w-1/3 border-border-separator py-40 px-24'>
				<h2 className='heading-4 mb-16'>Oppsummering</h2>
				<p className='body mb-8'>
					Din Volkswagen ID.3 (EB87553) vil bli forsikret med:{' '}
				</p>
				<List className='body'>
					<CheckListItem>{selectedCoverage}</CheckListItem>
					<CheckListItem>
						{
							lengthOptions.find(
								option => option.value === kjorelengde
							)?.label
						}{' '}
					</CheckListItem>
					<CheckListItem>
						{formatValuta(
							Number(
								deductibleOptions
									.find(option => option.value === egenandel)
									?.label.replace(/\s/g, '')
							)
						)}{' '}
						i egenandel
					</CheckListItem>
					<CheckListItem>
						{
							bonusOptions.find(option => option.value === bonus)
								?.label
						}{' '}
						i bonus som overføres
					</CheckListItem>
				</List>
				{isPriceLoading ? (
					<p className='heading-3 mt-24'>
						<Loader
							textDescription='Laster pris'
							className='!justify-start'
						/>
					</p>
				) : (
					<p className='heading-3 mt-24'>
						{formatValuta(Math.round(price * multiplier))}/måned
					</p>
				)}
			</div>
		)
	}

	const Form = () => {
		return (
			<div className='rounded-md w-1/2 bg-hvit py-40 px-24'>
				<h2 className='heading-3 mb-24'>Om bilen</h2>
				<div className='flex flex-col gap-24'>
					<TextInput
						label='Epost'
						placeholder='0 km'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<Select
						name='view'
						value={insuranceCompany}
						onChange={e => setInsuranceCompany(e.target.value)}
						label='Selskap du flytter fra'
						items={lengthOptions}
					/>
					<Checkbox name='Vilkar' value='true'>
						Jeg bekrefter å ha gitt riktige opplysninger, lest og
						forstått{' '}
						<span className='jkl-link jkl-link--external'>
							vilkårene
						</span>
						.
					</Checkbox>
				</div>
				<div className='mt-32 flex gap-16'>
					<button
						className='jkl-button jkl-button--secondary'
						onClick={() => setView('FLYT')}
					>
						Tilbake
					</button>

					<PrimaryButton
						loader={{
							showLoader: isPurchasing,
							textDescription: 'Flytter forsikring',
						}}
						onClick={() => {
							setIsPurchasing(true)

							setTimeout(() => {
								setIsPurchasing(false)
								setView('KVITTERING')
							}, 2000)
						}}
					>
						Flytt forsikringen
					</PrimaryButton>
				</div>
			</div>
		)
	}

	return (
		<div
			style={{
				minHeight: 'calc(100vh - 152px)',
			}}
		>
			<nav
				aria-label='Sti'
				className='jkl-breadcrumb max-width-content   w-full  pt-40 md:pr-40 pl-16'
			>
				<ol className='jkl-breadcrumb__list'>
					<li className='jkl-breadcrumb__item'>
						<a className='jkl-link' href='#'>
							Hjem
						</a>
					</li>
					<span
						className='jkl-breadcrumb__item-separator'
						aria-hidden='true'
					>
						›
					</span>
					<li className='jkl-breadcrumb__item'>
						<a className='jkl-link' href='#'>
							Kjøp forsikring
						</a>
					</li>
					<span
						className='jkl-breadcrumb__item-separator'
						aria-hidden='true'
					>
						›
					</span>
					<li className='jkl-breadcrumb__item'>
						<a aria-current='page' className='jkl-link' href='#'>
							Bil næring
						</a>
					</li>
				</ol>
			</nav>
			<main className='pl-16 max-width-content  mt-40 w-full flex-grow'>
				<h1 className='title my-40'>
					Flytt forsikringen på din ID.3 til oss
				</h1>
				<div className='relative flex min-w-full gap-40'>
					<Form />
					<Summary />
				</div>
				<Dekninger
					isPriceLoading={isPriceLoading}
					price={price}
					selectedCoverage={selectedCoverage}
					setSelectedCoverage={setSelectedCoverage}
				/>
			</main>
		</div>
	)
}

export default Informasjon
