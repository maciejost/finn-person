import { TextInput } from '@fremtind/jkl-text-input-react'

const Flyt = () => {
	const Summary = () => {
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

	const Form = () => {
		return (
			<div className='rounded-md border w-1/3 border-border-separator py-40 px-24'>
				hello
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
			<main className='pl-40 max-width-content mx-auto  mt-40 w-full flex-grow'>
				<h1 className='title my-40'>
					Flytt bilforsikringen på din ID.3 til oss
				</h1>
				<div className='relative flex min-w-full gap-40'>
					<Summary />
					<Form />
				</div>
			</main>
		</div>
	)
}

export default Flyt
