const SideMeny = () => {
	return (
		<aside
			className='sidemeny sidemeny--with-brandheader'
			data-testid='megameny'
			data-testautoid='megameny'
		>
			<div className='sidemeny__header'>
				<div className='sidemeny__org'>
					<p>ALBJERK BIL RINGERIKE AS</p>
					<p>817 203 752</p>
				</div>
				<button
					data-density='compact'
					className='jkl-button jkl-button--secondary sidemeny__hamburger'
					id='hamburger'
					aria-controls='sidemeny'
					data-testautoid='sidemeny-åpne-lukk'
				>
					<div className='jkl-button__content'>
						<div className='jkl-button__slider'>
							<span className='jkl-button__children'>
								<span className='jkl-sr-only'>Åpne meny</span>
								Meny
							</span>
						</div>
					</div>
				</button>
			</div>
			<div className='sidemeny__content sidemeny__content--closed'>
				<nav
					className='sidemeny__meny'
					data-testid='megameny-nav'
					data-testautoid='megameny-nav'
					id='sidemeny'
				>
					<ul className='sidemeny__meny-list'>
						<li className='forsikring'>
							<div className='link-liste link-liste--with-megameny'>
								<ul>
									<li>
										<a
											className='jkl-link jkl-link--active'
											data-testautoid='megameny-hjem'
											href='#'
										>
											Hjem{' '}
										</a>
									</li>
									<li>
										<a
											className='jkl-link '
											data-testautoid='megameny-forsikringer'
											href='#'
										>
											Forsikringer{' '}
										</a>
									</li>
									<li>
										<a
											className='jkl-link '
											data-testautoid='megameny-faktura'
											href='#'
										>
											Faktura{' '}
										</a>
									</li>
									<li>
										<a
											className='jkl-link '
											data-testautoid='megameny-dokumenter'
											href='#'
										>
											Dokumenter{' '}
										</a>
									</li>
									<li>
										<a
											className='jkl-link '
											data-testautoid='megameny-forsikringer/kjop-forsikring'
											href='#'
										>
											Kjøp forsikring{' '}
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div className='link-liste link-liste--with-megameny'>
								<ul>
									<li>
										<a
											className='jkl-link '
											data-testautoid='megameny-ansatte-navn'
											href='#'
										>
											Meld inn/ut ansatte{' '}
										</a>
									</li>
									<li>
										<a
											className='jkl-link '
											data-testautoid='megameny-tilganger'
											href='#'
										>
											Tilganger - ALBJERK BIL RINGERIKE AS{' '}
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div className='link-liste link-liste--with-megameny'>
								<ul>
									<li>
										<a
											className='jkl-link '
											data-testautoid='megameny-kontakt-oss'
											href='#'
										>
											Kontakt oss{' '}
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</nav>
				<div className='sidemeny__bottom'>
					<div className='buttons css-damvy5'>
						<button
							data-density='compact'
							className='jkl-button jkl-button--secondary sidemeny__loggut'
							data-testautoid='header-loggut-desktop'
						>
							<div className='jkl-button__content'>
								<div className='jkl-button__slider'>
									<span className='jkl-button__children'>
										Logg ut
									</span>
								</div>
							</div>
						</button>
						<a
							data-density='compact'
							className='sidemeny__loggut jkl-button jkl-button--secondary'
							data-testid='knapp-bytt-bedrift'
							data-testautoid='knapp-bytt-bedrift'
							href='#'
						>
							Bytt bedrift
						</a>
					</div>
					<div className='sidemeny__meny-bottom'>
						<div className='link-liste link-liste--with-megameny'>
							<ul>
								<li>
									<a
										className='jkl-link'
										href='#'
										target='_blank'
										rel='noopener noreferrer'
										data-testautoid='ga-til-pensjon'
										data-lenkeid='pensjon'
									>
										Gå til pensjon
									</a>
								</li>
								<li>
									<a
										className='jkl-link'
										href='#'
										target='_blank'
										rel='noopener noreferrer'
										data-testautoid='melde-skade'
										data-lenkeid='meld-skade'
									>
										Meld skade
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default SideMeny
