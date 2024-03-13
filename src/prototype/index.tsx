const Prototype: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div>
			<header className='flex  h-64 flex-shrink-0 items-center justify-center bg-background-container-high px-40'>
				<span className='font-bold'>LOGO</span>
			</header>
			<main
				className='grid gap-32'
				style={{ gridTemplateColumns: '360px 1fr' }}
			>
				{children}
			</main>
			<footer
				data-theme='dark'
				className='flex flex-shrink-0 flex-wrap justify-between gap-24 bg-background-container-low p-40 pb-24 text-16 '
			>
				<ul className='flex flex-wrap gap-24 gap-y-12'>
					<li>
						<a href='#' className='jkl-link jkl-link--external'>
							Fremtind Forsikring AS
						</a>
					</li>
					<li>
						<a href='#' className='jkl-link jkl-link--external'>
							Personvern og vilkår
						</a>
					</li>
					<li>
						<button
							data-testautoid='footer-cookies'
							className='jkl-link'
						>
							Bruk av informasjonskapsler
						</button>
					</li>
				</ul>
				<svg
					viewBox='0 0 116 23'
					className='w-[116px] h-[24px]'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='m13.198 0.59988h-13.198v21.031h1.627v-9.8729h9.8918v-1.5646h-9.8918v-8.0296h11.571v-1.5635z'
						fill='#F9F9F9'
					/>
					<path
						d='m22.452 6.6626c-2.0569 0-4.0705 1.3781-4.7935 3.2447l-0.0315-3.0523v-0.04547h-1.3923v14.826h1.5675v-7.1178c0-2.3715 0.6038-6.3496 4.6498-6.3496 0.5816 0 1.0383 0.04664 1.4343 0.14574l0.0572 0.01399v-1.5693l-0.0374-7e-3c-0.4765-0.08861-0.9741-0.08861-1.4541-0.08861z'
						fill='#F9F9F9'
					/>
					<path
						d='m32.439 6.4293c-2.0603 0-3.8088 0.89308-5.0551 2.5825-0.9928 1.3478-1.4541 3.0232-1.4541 5.2723 0 2.2292 0.6576 4.1762 1.9003 5.629 1.2287 1.399 2.8196 2.1079 4.7269 2.1079 1.6317 0 3.1419-0.6109 4.2539-1.7209 0.911-0.8779 1.4716-1.9272 1.6655-3.1199l0.0094-0.0525h-1.6271l-7e-3 0.0361c-0.1553 0.78-0.508 1.4376-1.1084 2.0695-0.8001 0.8267-1.9307 1.2825-3.1863 1.2825-1.4775 0-2.6665-0.52-3.5367-1.5448-0.9309-1.1018-1.4845-2.6828-1.5242-4.3442h11.276v-0.0454c0-0.1761 0.0082-0.3335 0.0152-0.4862 7e-3 -0.1528 0.0152-0.3102 0.0152-0.4874 0-1.8992-0.5945-3.6702-1.6749-4.9866-1.175-1.4341-2.7962-2.1919-4.6884-2.1919zm-4.9137 6.7483c0.0198-3.057 2.0802-5.2711 4.9137-5.2711 3.038 0 4.6919 2.6443 4.7666 5.2711h-9.6803z'
						fill='#F9F9F9'
					/>
					<path
						d='m58.525 6.4293c-2.1818 0-3.8637 1.0994-4.7456 3.099-0.4789-1.4411-1.6796-3.099-4.6708-3.099-1.9354 0-3.5881 1.0388-4.4548 2.7877l-0.1635-2.3621-0.0035-0.04197h-1.3876v14.826h1.5675v-7.414c0-2.4496 0.591-4.2427 1.7567-5.3294 0.6902-0.65641 1.5639-0.98985 2.5964-0.98985 2.3862 0 3.4982 1.2872 3.4982 4.0503v9.6817h1.5966v-8.3852c0-1.7803 0.5981-3.2867 1.7275-4.357 0.7417-0.67506 1.5663-0.98985 2.5965-0.98985 2.3652 0 3.4678 1.2872 3.4678 4.0503v9.6817h1.5674v-9.7691c-0.0011-3.507-1.7578-5.439-4.9488-5.439z'
						fill='#F9F9F9'
					/>
					<path
						d='m71.096 2.3487-1.5674 0.37659v4.0562h-2.9528v1.4469h2.9528v9.2375c0 2.8448 1.3327 4.3476 3.8544 4.3476 0.7989 0 1.5569-0.162 2.3617-0.3334l0.1343-0.0292v-1.3897l-0.0537 0.0105c-0.7265 0.134-1.5044 0.2646-2.3244 0.2646-1.6854 0-2.4037-0.8767-2.4037-2.9299v-9.178h8.7705v13.379h1.6562v-14.826h-10.427v-4.4328h-0.0012z'
						fill='#F9F9F9'
					/>
					<path
						d='m93.761 6.4293c-2.0883 0-4.0973 1.1974-4.9558 2.9311l-0.167-2.5475h-1.3887v14.826h1.5674v-7.414c0-1.2172 0.1881-2.9556 1.0816-4.3209 0.8421-1.286 2.1129-1.9377 3.7749-1.9377 2.5311 0 3.7622 1.3058 3.7622 3.9921v9.6817h1.5674v-9.7715c0-3.4569-1.9108-5.439-5.242-5.439z'
						fill='#F9F9F9'
					/>
					<path
						d='m80.729 0.48328c-0.6553 0-1.1879 0.53165-1.1879 1.1857 0 0.65408 0.5326 1.1857 1.1879 1.1857 0.6552 0 1.1878-0.53165 1.1878-1.1857 0-0.65407-0.5326-1.1857-1.1878-1.1857z'
						fill='#F9F9F9'
					/>
					<path
						d='m114.38 0.25006v8.8714c-0.859-1.6066-2.836-2.7131-4.884-2.7131-1.626 0-2.988 0.52-4.046 1.5448-1.473 1.3874-2.317 3.6761-2.317 6.2807 0 2.7353 0.865 4.9971 2.436 6.3694 1.055 0.9257 2.385 1.3956 3.957 1.3956 2.038 0 4.052-1.1846 4.866-2.8413l0.168 2.4589h1.388v-21.366h-1.568zm-1.845 19.049c-0.807 0.7741-1.81 1.167-2.981 1.167-1.163 0-2.109-0.3334-2.892-1.019-1.246-1.1099-1.933-2.9707-1.933-5.2419 0-2.073 0.583-3.8417 1.64-4.9773 0.833-0.86277 1.856-1.2825 3.127-1.2825 1.25 0 2.281 0.38242 3.068 1.1368 1.259 1.1752 1.847 2.804 1.847 5.123 0 2.1651-0.631 3.879-1.876 5.0939z'
						fill='#F9F9F9'
					/>
				</svg>
			</footer>
		</div>
	)
}

export default Prototype
