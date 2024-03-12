import Card from './Card'

const Oversikt: React.FC<{
	setView: React.Dispatch<
		React.SetStateAction<'START' | 'FLYT' | 'INFORMASJON' | 'KVITTERING'>
	>
}> = ({ setView }) => {
	return (
		<main
			style={{
				minHeight: 'calc(100vh - 152px)',
			}}
		>
			<div id='innhold'>
				<div className='side agreement-overview'>
					<div className='side-header__wrapper side-header__wrapper--with-megameny'>
						<div className='side-header__content'>
							<nav
								aria-label='Sti'
								className='jkl-breadcrumb fbm-breadcrumb'
							>
								<ol className='jkl-breadcrumb__list'>
									<li className='jkl-breadcrumb__item'>
										<a
											className='jkl-link'
											href='/bedrift/hjem'
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
											aria-current='page'
											className='jkl-link'
											href='/bedrift/forsikringer'
										>
											Dine forsikringer
										</a>
									</li>
								</ol>
							</nav>
							<div className='side-header__content__text side-header__content__text--with-toolbar'>
								<h1>Dine forsikringer</h1>
								<div className='side-header__toolbar'>
									<a
										href='https://www.sparebank1.no/nb/bank/bedrift/kundeservice/verktoy/meld-skade-for-bedrifter.html'
										className='jkl-button jkl-button--primary'
										data-density='compact'
										target='_blank'
										rel='noreferrer'
									>
										Meld skade
									</a>

									<a
										data-density='compact'
										className='jkl-button jkl-button--secondary'
										href='/bedrift/ansattbrosjyre'
									>
										Lag ansattbrosjyre
									</a>

									<button
										data-density='compact'
										className='jkl-button jkl-button--secondary'
									>
										<div className='jkl-button__content'>
											<div className='jkl-button__slider'>
												<span className='jkl-button__children'>
													Eksporter til Excel
												</span>
												<div className='jkl-button__loader'>
													<span
														aria-busy='true'
														className='jkl-loader'
														data-testautoid='jkl-loader'
														data-testid='jkl-loader'
														title='laster ned excel uttrekk'
														aria-hidden='true'
													>
														<span className='jkl-loader__dot jkl-loader__dot--left'></span>
														<span className='jkl-loader__dot jkl-loader__dot--middle'></span>
														<span className='jkl-loader__dot jkl-loader__dot--right'></span>
														<span className='jkl-sr-only'>
															laster ned excel
															uttrekk
														</span>
													</span>
												</div>
											</div>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className='side-innhold agreement-overview'>
						<div className='infomessages'></div>

						<div className='jkl-tabs'>
							<div role='tablist' className='jkl-tablist'>
								<button
									role='tab'
									type='button'
									data-testautoid='forsikringsoversikt-tab-ALLE_FORSIKRINGER'
									aria-selected='false'
									className='jkl-tab'
									aria-controls='jkl-tabpanel-iCzc_bL7'
									id='jkl-tab-SYkwjKsf'
								>
									Alle forsikringer
								</button>
								<button
									role='tab'
									type='button'
									data-testautoid='forsikringsoversikt-tab-ANSATT'
									aria-selected='false'
									className='jkl-tab'
									aria-controls='jkl-tabpanel-acFnlE9F'
									id='jkl-tab-bzsACGyM'
								>
									Ansatte
								</button>
								<button
									role='tab'
									type='button'
									data-testautoid='forsikringsoversikt-tab-DRIFT_OG_EIENDOM'
									aria-selected='false'
									className='jkl-tab'
									aria-controls='jkl-tabpanel-2wcOxoL1'
									id='jkl-tab-0-Ckl-5Y'
								>
									Drift og eiendom
								</button>
								<button
									role='tab'
									type='button'
									data-testautoid='forsikringsoversikt-tab-KJORETOY'
									aria-selected='true'
									className='jkl-tab'
									aria-controls='jkl-tabpanel-F6Y37eL0'
									id='jkl-tab-ufzC8vtD'
								>
									Kjøretøy
								</button>
								<span
									className='jkl-tablist__indicator'
									style={{
										left: '499.578px',
										bottom: '-1px',
										width: '82.8203px',
									}}
								></span>
							</div>
							<div
								role='tabpanel'
								data-testautoid='forsikringsoversikt-liste'
								aria-labelledby='jkl-tab-ufzC8vtD'
								id='jkl-tabpanel-F6Y37eL0'
								className='jkl-tabpanel'
							>
								<ul className='agreement-overview__list'>
									<li className='agreement-overview__list-item'>
										<a
											className='agreement-card'
											href='/bedrift/forsikringer/OTk0NDY5MTI2Ok5JQ0U6VjA1OjIwMTMwOTI6MzUzMDYwOTQ6MTY6IDpbNjcsIDkzLCAzNywgODYsIDIwLCA3NywgLTQ3LCA1MiwgNDMsIC03OSwgLTk0LCA1MywgMjIsIDEwMCwgLTExOSwgLTc0LCAtMTA5LCA0LCAtMjksIC01NywgMTAyLCA0MiwgODAsIC00NiwgMTEwLCA2OCwgOTIsIDY1LCAtMzAsIC0yMCwgLTI5LCAzNiwgOSwgLTM5LCAxMDcsIC0xOCwgLTcyLCAtNjAsIDgwLCA4MSwgMzIsIDgwLCAtMTMsIDEyNywgOTQsIDE0LCAtMTE4LCA0MiwgMTcsIDQzLCAtOTgsIDc5LCAtMTI4LCA4NywgMTIyLCAtOTYsIC0yNSwgMTA2LCA1MSwgMzAsIC01NCwgOTksIDEyNSwgLTgwXQ=='
										>
											<div className='agreement-card__content'>
												<h2 className='bm-typography jkl-heading-2 agreement-card__heading'>
													Bmw 535d Xdrive&nbsp;→
												</h2>
												<p className='bm-typography jkl-small agreement-card__identificator'>
													BT18931
												</p>
											</div>
											<footer className='agreement-card__footer'>
												<p className='bm-typography jkl-small agreement-card__price'>
													218&nbsp;382&nbsp;kr/år
												</p>
											</footer>
										</a>
									</li>

									<li className='agreement-overview__list-item'>
										<a
											className='agreement-card'
											href='/bedrift/forsikringer/OTk0NDY5MTI2Ok5JQ0U6VjA1OjIwMTMwOTI6MzUzNDU1MjI6MjogOlstMywgMzcsIC04MCwgNTMsIC01NywgNzgsIDY5LCA2NiwgLTk2LCAtMjcsIDI1LCA2OSwgMTEsIDExNiwgLTIzLCAtNzYsIC0xLCAtMTI1LCAxOCwgLTExLCAtODMsIC00MSwgODcsIC02LCAtNDYsIDIzLCAtMTYsIC0xMDEsIC04OCwgLTMzLCA1NCwgMTExLCAxMDMsIC01OCwgNDYsIDgxLCAtODksIDEwNiwgLTQ3LCA5MSwgLTEwOCwgMTQsIC0xMDcsIDk5LCAtMjQsIC04OSwgMTE0LCAyMCwgMTcsIDMzLCAxMTYsIDEyNCwgMTExLCA4NSwgOTgsIC05NiwgMTIxLCAzLCA2MiwgOTUsIDcsIDY5LCAtNzMsIDQ4XQ=='
										>
											<div className='agreement-card__content'>
												<h2 className='bm-typography jkl-heading-2 agreement-card__heading'>
													Ford Transit Connect&nbsp;→
												</h2>
												<p className='bm-typography jkl-small agreement-card__identificator'>
													TV94440
												</p>
											</div>
											<footer className='agreement-card__footer'>
												<p className='bm-typography jkl-small agreement-card__price'>
													20&nbsp;075&nbsp;kr/år
												</p>
											</footer>
										</a>
									</li>
									<Card setView={setView} />

									<li className='agreement-overview__list-item'>
										<a
											className='agreement-card'
											href='/bedrift/forsikringer/OTk0NDY5MTI2Ok5JQ0U6VjA1OjIwMTMwOTI6MzUzMDYxMTk6MTQ6IDpbOTcsIDE0LCAtOTMsIDY4LCA4MSwgODgsIDAsIDU0LCAtMTEyLCAtMTA4LCAtMzcsIC0xMTEsIC01NiwgNDcsIC05NSwgMzcsIC05NiwgLTM0LCAtMTI4LCAtNjgsIC0zOSwgMzcsIDE1LCAxMDgsIDY2LCAtMTI3LCA3NCwgLTEwNCwgLTU0LCAtMzksIDU0LCAzMiwgMzQsIDMwLCAxMTUsIDEwOSwgLTEwMCwgNiwgODIsIC00MSwgLTYxLCAyLCA1MiwgNjAsIC00NSwgMTEyLCA3MSwgLTU2LCA0NiwgLTk2LCAxMTksIC0xNywgLTgyLCAxMDIsIC01NSwgMTAsIC01MCwgMTA2LCAtODAsIC0xMTcsIC0xMSwgLTI1LCAxMDIsIC02OF0='
										>
											<div className='agreement-card__content'>
												<h2 className='bm-typography jkl-heading-2 agreement-card__heading'>
													Smart Fortwo Cabrio
													Brabus&nbsp;→
												</h2>
												<p className='bm-typography jkl-small agreement-card__identificator'>
													BS52784
												</p>
											</div>
											<footer className='agreement-card__footer'>
												<p className='bm-typography jkl-small agreement-card__price'>
													2&nbsp;806&nbsp;kr/år
												</p>
											</footer>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<a
							className='jkl-nav-link'
							href='https://kundeforsikring.sparebank1.no/'
							target='_blank'
						>
							Gå til dine privatforsikringer
						</a>
						<div className='side-footer'>
							<div
								className='jkl-feedback fbm-global-feedback'
								data-testid='feedback'
							>
								<fieldset
									id='jkl-field-group-:r1:'
									className='jkl-field-group'
								>
									<legend className='jkl-field-group__legend'>
										<span className='jkl-label jkl-label--large'>
											Hvor fornøyd er du med
											kundeløsningen?
										</span>
									</legend>
									<div className='jkl-feedback-smileys'>
										<input
											className='jkl-sr-only'
											id='smiley-1'
											name='smiley'
											type='radio'
											value='1'
										/>
										<label
											className='jkl-feedback-smiley-option'
											htmlFor='smiley-1'
										>
											<span className='jkl-sr-only'>
												Ikke fornøyd i det hele tatt
											</span>
											<svg
												className='jkl-feedback-smiley-option__icon'
												aria-hidden='true'
												viewBox='0 0 40 40'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<circle
													cx='20'
													cy='20'
													r='19'
													stroke='currentColor'
													stroke-width='2'
												/>
												<path
													d='M10 30C10 24.4772 14.4772 20 20 20C25.5228 20 30 24.4772 30 30'
													stroke='currentColor'
													stroke-width='2'
												/>
												<path
													d='M10 13.9865H16.6667'
													stroke='currentColor'
													stroke-width='2'
												/>
												<path
													d='M23.3333 13.9865H29.9999'
													stroke='currentColor'
													stroke-width='2'
												/>
											</svg>
										</label>
										<input
											className='jkl-sr-only'
											id='smiley-2'
											name='smiley'
											type='radio'
											value='2'
										/>
										<label
											className='jkl-feedback-smiley-option'
											htmlFor='smiley-2'
										>
											<span className='jkl-sr-only'>
												Ikke fornøyd
											</span>
											<svg
												className='jkl-feedback-smiley-option__icon'
												aria-hidden='true'
												viewBox='0 0 40 40'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<circle
													cx='20'
													cy='20'
													r='19'
													stroke='currentColor'
													stroke-width='2'
												/>
												<path
													d='M10 28.75C10 28.75 13.75 23.3334 20 23.3334C26.25 23.3334 30 28.75 30 28.75'
													stroke='currentColor'
													stroke-width='2'
												/>
												<circle
													cx='12.5'
													cy='14.5'
													r='1.5'
													fill='currentColor'
												/>
												<circle
													cx='27.5'
													cy='14.5'
													r='1.5'
													fill='currentColor'
												/>
											</svg>
										</label>
										<input
											className='jkl-sr-only'
											id='smiley-3'
											name='smiley'
											type='radio'
											value='3'
										/>
										<label
											className='jkl-feedback-smiley-option'
											htmlFor='smiley-3'
										>
											<span className='jkl-sr-only'>
												Hverken fornøyd eller misfornøyd
											</span>
											<svg
												className='jkl-feedback-smiley-option__icon'
												aria-hidden='true'
												viewBox='0 0 40 40'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<circle
													cx='20'
													cy='20'
													r='19'
													stroke='currentColor'
													stroke-width='2'
												/>
												<path
													d='M9.15283 25.6986H30.8477'
													stroke='currentColor'
													stroke-width='2'
												/>
												<circle
													cx='12.5'
													cy='14.5'
													r='1.5'
													fill='currentColor'
												/>
												<circle
													cx='27.5'
													cy='14.5'
													r='1.5'
													fill='currentColor'
												/>
											</svg>
										</label>
										<input
											className='jkl-sr-only'
											id='smiley-4'
											name='smiley'
											type='radio'
											value='4'
										/>
										<label
											className='jkl-feedback-smiley-option'
											htmlFor='smiley-4'
										>
											<span className='jkl-sr-only'>
												Fornøyd
											</span>
											<svg
												className='jkl-feedback-smiley-option__icon'
												aria-hidden='true'
												viewBox='0 0 40 40'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<circle
													cx='20'
													cy='20'
													r='19'
													stroke='currentColor'
													stroke-width='2'
												/>
												<path
													d='M10 23.3334C10 23.3334 12.9167 30 20 30C27.0833 30 30 23.3334 30 23.3334'
													stroke='currentColor'
													stroke-width='2'
												/>
												<circle
													cx='12.5'
													cy='14.5'
													r='1.5'
													fill='currentColor'
												/>
												<circle
													cx='27.5'
													cy='14.5'
													r='1.5'
													fill='currentColor'
												/>
											</svg>
										</label>
										<input
											className='jkl-sr-only'
											id='smiley-5'
											name='smiley'
											type='radio'
											value='5'
										/>
										<label
											className='jkl-feedback-smiley-option'
											htmlFor='smiley-5'
										>
											<span className='jkl-sr-only'>
												Veldig fornøyd
											</span>
											<svg
												className='jkl-feedback-smiley-option__icon'
												aria-hidden='true'
												viewBox='0 0 40 40'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<circle
													cx='20'
													cy='20'
													r='19'
													stroke='currentColor'
													stroke-width='2'
												/>
												<path
													d='M30 21C30 26.5228 25.5228 31 20 31C14.4772 31 10 26.5228 10 21'
													stroke='currentColor'
													stroke-width='2'
												/>
												<path
													d='M24 14.5H29'
													stroke='currentColor'
													stroke-width='2'
												/>
												<circle
													cx='12.5'
													cy='14.5'
													r='1.5'
													fill='currentColor'
												/>
											</svg>
										</label>
									</div>
								</fieldset>
								<div
									className='jkl-feedback__submit-wrapper jkl-feedback__submit-wrapper--hidden'
									style={{ display: 'none' }}
								>
									<div
										className='jkl-text-area jkl-spacing-xl--bottom jkl-spacing-xl--top jkl-text-area--start-open jkl-input-group'
										data-testid='jkl-text-area'
									>
										<label
											className='jkl-label jkl-label--small jkl-label--sr-only'
											htmlFor='jkl-input-:r2:'
										>
											Tips oss gjerne om hva vi kan
											forbedre
										</label>
										<div
											className='jkl-text-input-wrapper'
											data-invalid='false'
											data-has-content='false'
										>
											<textarea
												aria-invalid='false'
												className='jkl-text-area__text-area jkl-text-area__text-area--4-rows'
												placeholder='Tips oss gjerne om hva vi kan forbedre'
												data-testid='jkl-feedback__open-question'
												aria-describedby='jkl-support-label-:r3:'
												id='jkl-input-:r2:'
											></textarea>
										</div>
										<span
											id='jkl-support-label-:r3:'
											className='jkl-form-support-label jkl-form-support-label--help'
										>
											<div
												className='jkl-form-support-label__icon jkl-icon jkl-icon--small'
												aria-hidden='true'
											>
												<svg
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
													className='jkl-icon__icon jkl-icon__icon--inherit jkl-icon__icon--regular'
												>
													<path
														fill-rule='evenodd'
														clip-rule='evenodd'
														d='M10.157 4.055c.754-1.407 2.771-1.407 3.525 0l8.08 15C22.478 20.387 21.513 22 20 22H4.003c-1.512 0-2.477-1.613-1.763-2.945l7.917-15zM11.25 9h1.5v6h-1.5V9zm.75 9.5a1 1 0 100-2 1 1 0 000 2z'
														fill='currentColor'
													/>
												</svg>
												<svg
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
													className='jkl-icon__icon jkl-icon__icon--inherit jkl-icon__icon--bold'
												>
													<path
														fill-rule='evenodd'
														clip-rule='evenodd'
														d='M10.157 4.055c.754-1.407 2.771-1.407 3.525 0l8.08 15C22.478 20.387 21.513 22 20 22H4.003c-1.512 0-2.477-1.613-1.763-2.945l7.917-15zM11.25 9h1.5v6h-1.5V9zm.75 9.5a1 1 0 100-2 1 1 0 000 2z'
														fill='currentColor'
													/>
												</svg>
												<svg
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
													className='jkl-icon__icon jkl-icon__icon--medium jkl-icon__icon--regular'
												>
													<path
														fill-rule='evenodd'
														clip-rule='evenodd'
														d='M10.157 4.055c.754-1.407 2.771-1.407 3.525 0l8.08 15C22.478 20.387 21.513 22 20 22H4.003c-1.512 0-2.477-1.613-1.763-2.945l7.917-15zM11.25 9h1.5v6h-1.5V9zm.75 9.5a1 1 0 100-2 1 1 0 000 2z'
														fill='currentColor'
													/>
												</svg>
												<svg
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
													className='jkl-icon__icon jkl-icon__icon--medium jkl-icon__icon--bold'
												>
													<path
														fill-rule='evenodd'
														clip-rule='evenodd'
														d='M10.157 4.055c.754-1.407 2.771-1.407 3.525 0l8.08 15C22.478 20.387 21.513 22 20 22H4.003c-1.512 0-2.477-1.613-1.763-2.945l7.917-15zM11.25 9h1.5v6h-1.5V9zm.75 9.5a1 1 0 100-2 1 1 0 000 2z'
														fill='currentColor'
													/>
												</svg>
												<svg
													viewBox='0 0 20 20'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
													className='jkl-icon__icon jkl-icon__icon--small jkl-icon__icon--regular'
												>
													<path
														fill-rule='evenodd'
														clip-rule='evenodd'
														d='M8.23 3.083a1.983 1.983 0 013.534 0l5.998 11.93c.705 1.355-.26 2.987-1.767 2.987H4c-1.506 0-2.471-1.632-1.767-2.987L8.23 3.083zM9.248 7h1.499v5h-1.5V7zm.75 8.518c.551 0 .999-.456.999-1.018s-.448-1.018-1-1.018-1 .456-1 1.018.448 1.018 1 1.018z'
														fill='currentColor'
													/>
												</svg>
												<svg
													viewBox='0 0 20 20'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
													className='jkl-icon__icon jkl-icon__icon--small jkl-icon__icon--bold'
												>
													<path
														fill-rule='evenodd'
														clip-rule='evenodd'
														d='M8.23 3.083a1.983 1.983 0 013.534 0l5.998 11.93c.705 1.355-.26 2.987-1.767 2.987H4c-1.506 0-2.471-1.632-1.767-2.987L8.23 3.083zM9.248 7h1.499v5h-1.5V7zm.75 8.518c.551 0 .999-.456.999-1.018s-.448-1.018-1-1.018-1 .456-1 1.018.448 1.018 1 1.018z'
														fill='currentColor'
													/>
												</svg>
											</div>
											Ikke skriv personlige opplysninger.
											Tilbakemeldinger som kommer inn her
											blir ikke besvart, men brukt i
											videre arbeid med å forbedre
											tjenestene våre.
										</span>
									</div>
									<div className='jkl-spacing-xl--top'>
										<button className='jkl-button jkl-button--primary jkl-spacing-xl--right'>
											<div className='jkl-button__content'>
												<div className='jkl-button__slider'>
													<span className='jkl-button__children'>
														Send
													</span>
												</div>
											</div>
										</button>
										<button className='jkl-button jkl-button--tertiary'>
											<div className='jkl-button__content'>
												<div className='jkl-button__slider'>
													<span className='jkl-button__children'>
														Avbryt
													</span>
												</div>
											</div>
										</button>
									</div>
								</div>
								<div aria-live='polite'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Oversikt
