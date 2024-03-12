const Card: React.FC<{
	setView: React.Dispatch<
		React.SetStateAction<'START' | 'FLYT' | 'INFORMASJON' | 'KVITTERING'>
	>
}> = ({ setView }) => {
	return (
		<li
			className='agreement-overview__list-item cursor-pointer'
			onClick={() => setView('FLYT')}
		>
			<span className='agreement-card !bg-[#D9DDFF]'>
				<div className='agreement-card__content'>
					<h2 className='bm-typography jkl-heading-2 agreement-card__heading'>
						Volkswagen ID.3 →
					</h2>
					<p className='bm-typography jkl-small agreement-card__identificator'>
						EB87553
					</p>
				</div>
				<footer className='agreement-card__footer'>
					<button className='jkl-button--primary jkl-button'>
						Flytt forsikringen hit!
					</button>
				</footer>
			</span>
		</li>
	)
}

export default Card

/*
Volkswagen ID.3
EB87553 */
