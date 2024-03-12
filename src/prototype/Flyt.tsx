import { TextInput } from '@fremtind/jkl-text-input-react'
import { Dekninger } from './Dekninger'
import { CheckListItem, List } from '@fremtind/jkl-list-react'
import { formatValuta } from '@fremtind/jkl-formatters-util'

const Flyt = () => {
	const Summary = () => {
		return (
			<div className='rounded-md border w-1/3 border-border-separator py-40 px-24'>
				<h2 className='heading-3 mb-16'>Oppsummering</h2>
				<p className='body mb-8'>
					Din Volkswagen ID.3 (EB87553) vil bli forsikret med:{' '}
				</p>
				<List className='body'>
					<CheckListItem>KJORELENGDE kilometer per år</CheckListItem>
					<CheckListItem>EGENANDEL i egenandel</CheckListItem>
					<CheckListItem>
						EGENANDEL i bonus som overføres
					</CheckListItem>
					<CheckListItem>DEKNING-dekning</CheckListItem>
				</List>
				<p className='heading-3 mt-24'>{formatValuta(1000)}/måned</p>
			</div>
		)
	}

	const Form = () => {
		return (
			<div className='rounded-md w-1/2 bg-hvit py-40 px-24'>
				<h2 className='heading-3 mb-24'>Om bilen</h2>
				<TextInput
					disabled
					label='Registreringsnummer'
					placeholder='Registreringsnummer'
					value={'EB87553'}
				/>
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
				className='jkl-breadcrumb max-width-content mx-auto w-full  pt-16 md:px-40'
			>
				<ol className='jkl-breadcrumb__list'>
					<li className='jkl-breadcrumb__item'>
						<a
							className='jkl-link'
							href='http://localhost.sparebank1.no:3000/bedrift/hjem'
						>
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
						<a
							className='jkl-link'
							href='http://localhost.sparebank1.no:3000/bedrift/forsikringer/kjop-forsikring'
						>
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
						<a
							aria-current='page'
							className='jkl-link'
							href='http://localhost.sparebank1.no:3000/bedrift/kjop/reise'
						>
							Reiseforsikring bedrift
						</a>
					</li>
				</ol>
			</nav>
			<main className='pl-40 max-width-content  mt-40 w-full flex-grow'>
				<h1 className='title my-40'>
					Flytt forsikringen på din ID.3 til oss
				</h1>
				<div className='relative flex min-w-full gap-40'>
					<Form />
					<Summary />
				</div>
				<Dekninger />
			</main>
		</div>
	)
}

export default Flyt
