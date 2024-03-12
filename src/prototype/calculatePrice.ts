export const calculatePrice = (
	kjorelengde: string,
	egenandel: string,
	bonus: string
) => {
	let basePrice = 1000

	const setPrice = (newPrice: number) => (basePrice = newPrice)

	console.log('basePrice', basePrice)
	setPrice(basePrice)

	switch (kjorelengde) {
		case '12':
			setPrice(basePrice)
			break
		case '8':
			setPrice(basePrice * 0.8)
			break
		case '99':
			setPrice(basePrice * 6)
			break
		case '16':
			setPrice(basePrice * 1.2)
			break
		case '20':
			setPrice(basePrice * 1.5)
			break
		case '25':
			setPrice(basePrice * 2)
			break
		case '30':
			setPrice(basePrice * 2.5)
			break
		case '40':
			setPrice(basePrice * 3)
			break
		case '50':
			setPrice(basePrice * 3.5)
			break
		case '60':
			setPrice(basePrice * 4)
			break
		case '75':
			setPrice(basePrice * 5)
			break
	}

	console.log('basePrice', basePrice)

	switch (egenandel) {
		case '1':
			break
		case '2':
			setPrice(basePrice * 0.8)
			break
		case '3':
			setPrice(basePrice * 0.6)
			break
		case '4':
			setPrice(basePrice * 0.5)
			break
	}

	switch (bonus) {
		case '75':
			setPrice(basePrice)
			break
		case '10':
			setPrice(basePrice * 4)
			break
		case '20':
			setPrice(basePrice * 3.5)
			break
		case '30':
			setPrice(basePrice * 3)
			break
		case '40':
			setPrice(basePrice * 2.5)
			break
		case '50':
			setPrice(basePrice * 2)
			break
		case '60':
			setPrice(basePrice * 1.5)
			break
		case '70':
			setPrice(basePrice * 1.25)
			break
		case '99':
			setPrice(basePrice * 7)
			break
	}

	return basePrice
}
