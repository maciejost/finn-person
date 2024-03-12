const Card = () => {
	return (
		<li className='agreement-overview__list-item'>
			<a
				className='agreement-card'
				href='/bedrift/forsikringer/OTk0NDY5MTI2Ok5JQ0U6VjIwOjIwMTMwOTI6MzUzMDYxNTY6MTQ6IDpbNTksIC0xMTAsIC01MCwgMTIxLCAtMTEzLCAtMTAzLCAtMTQsIDIxLCAzNSwgLTEwOSwgODEsIDEyMCwgLTU3LCAtNDIsIC01MSwgNjIsIC0zOSwgLTQ0LCAtMTA5LCAtMzIsIDQ5LCAtNjUsIC04MywgMTEwLCA4NywgLTgyLCAtMzgsIC0xMTksIDExNSwgODIsIDIxLCA3OSwgNTAsIDksIDM2LCAxLCA4NCwgMTIwLCAtOTEsIC0yMywgLTEsIDQ3LCAtMTA1LCAtMTIwLCAxMDUsIC02OSwgLTExNCwgMTIzLCA0LCAtMTE2LCAtODIsIC05MywgLTQ5LCA2NSwgLTU4LCAtNDIsIDk0LCAxMjcsIC0xMDcsIDE2LCA0NywgLTI4LCA0LCAtMTNd'
			>
				<div className='agreement-card__content'>
					<h2 className='bm-typography jkl-heading-2 agreement-card__heading'>
						Lastebil&nbsp;→
					</h2>
					<p className='bm-typography jkl-small agreement-card__identificator'>
						SCANIA, 9 94 P94DB4X2NA310, HJ63687
					</p>
				</div>
				<footer className='agreement-card__footer'>
					<p className='bm-typography jkl-small agreement-card__price'>
						4&nbsp;102&nbsp;kr/år
					</p>
				</footer>
			</a>
		</li>
	)
}

export default Card
