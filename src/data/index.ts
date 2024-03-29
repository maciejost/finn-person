export type Person = {
	firstName: string
	lastName: string
	ssn: string
	status?: 'midlertidig' | 'doed' | 'utflyttet'
	gender?: 'mann' | 'kvinne'
}

const deadPeople: Person[] = [
	{
		status: 'doed',
		ssn: '31888697112',
		firstName: 'MUNTER',
		lastName: 'STJERNE',
		gender: 'mann',
	},
	{
		status: 'doed',
		ssn: '62899000477',
		firstName: 'KANTETE',
		lastName: 'VALS',
		gender: 'kvinne',
	},
	{
		status: 'doed',
		ssn: '08857197756',
		firstName: 'MARITIM',
		lastName: 'ART',
		gender: 'mann',
	},
	{
		status: 'doed',
		ssn: '24830699518',
		firstName: 'VASSEN',
		lastName: 'KUBBESTOL',
		gender: 'mann',
	},
	{
		status: 'doed',
		ssn: '15928697972',
		firstName: 'ÆRLIG',
		lastName: 'KAFETERIA',
		gender: 'mann',
	},
	{
		status: 'doed',
		ssn: '23915299342',
		firstName: 'MEMORERENDE',
		lastName: 'SILHUETT',
		gender: 'mann',
	},
	{
		status: 'doed',
		ssn: '26898774146',
		firstName: 'OBSERVANT',
		lastName: 'BAKVERK',
		gender: 'mann',
	},
	{
		status: 'doed',
		ssn: '07829474845',
		firstName: 'KONFUS',
		lastName: 'KUSINE',
		gender: 'kvinne',
	},
	{
		status: 'doed',
		ssn: '26841949462',
		firstName: 'OVERMODIG',
		lastName: 'TOMMEL',
		gender: 'kvinne',
	},
	{
		status: 'doed',
		ssn: '14898774288',
		firstName: 'SØVNIG',
		lastName: 'RAMME',
		gender: 'kvinne',
	},
	{
		status: 'doed',
		ssn: '23909498422',
		firstName: 'FORNØYD',
		lastName: 'KATTUNGE',
		gender: 'kvinne',
	},
	{
		status: 'doed',
		ssn: '09864296766',
		firstName: 'KOMISK',
		lastName: 'HANDEL',
		gender: 'mann',
	},
]

const noMetaDataPeople: Person[] = [
	{
		firstName: 'OVERNATURLIG',
		lastName: 'OPPLAG',
		ssn: '13929797358',
	},
	{
		firstName: 'KJÆR',
		lastName: 'BYSSE',
		ssn: '25877798731',
	},
	{
		firstName: 'LAV',
		lastName: 'HUMOR',
		ssn: '26836499785',
	},
	{
		firstName: 'OPPKLARENDE',
		lastName: 'MALERBUKSE',
		ssn: '03837697866',
	},
	{
		firstName: 'USJENERT',
		lastName: 'SKY',
		ssn: '27856798106',
	},
	{
		firstName: 'UTÅLMODIG',
		lastName: 'EPLEKAKE',
		ssn: '12867698823',
	},
	{
		firstName: 'REFLEKSIV',
		lastName: 'ERIDOFOBI',
		ssn: '27849198861',
	},
	{
		firstName: 'ALVORLIG',
		lastName: 'OSTEHØVEL',
		ssn: '02846197551',
	},
	{
		firstName: 'USENSUELL',
		lastName: 'KJØTTDEIG',
		ssn: '11916998726',
	},
	{
		firstName: 'OPPLYST',
		lastName: 'KARRIERE',
		ssn: '18888499527',
	},
	{
		firstName: 'UNDERDANIG',
		lastName: 'TROMPET',
		ssn: '13877699565',
	},
	{
		firstName: 'GØYAL',
		lastName: 'SÅPE',
		ssn: '04887596889',
	},
	{
		firstName: 'MUSIKALSK',
		lastName: 'AVDELING',
		ssn: '11889498899',
	},
	{
		firstName: 'UMUSIKALSK',
		lastName: 'TANNBØRSTE',
		ssn: '01896697567',
	},
	{
		firstName: 'ALLSLAGS',
		lastName: 'BAR',
		ssn: '10867295300',
	},
	{
		firstName: 'STOLT',
		lastName: 'ALV',
		ssn: '19858298256',
	},
	{
		firstName: 'FORNUFTIG',
		lastName: 'KOKEPLATE',
		ssn: '19856197657',
	},
	{
		firstName: 'TØRR',
		lastName: 'JEANS',
		ssn: '08827099857',
	},
	{
		firstName: 'LEDENDE',
		lastName: 'FILMOMTALE',
		ssn: '11826299535',
	},
	{
		firstName: 'HYPPIG',
		lastName: 'HENSIKT',
		ssn: '07880098300',
	},
	{
		firstName: 'LEKKER',
		lastName: 'JUNI',
		ssn: '06819799871',
	},
	{
		firstName: 'AKUSTISK',
		lastName: 'ALDERDOM',
		ssn: '13816198466',
	},
	{
		firstName: 'PRIKKETE',
		lastName: 'STRUTS',
		ssn: '22848497774',
	},
	{
		firstName: 'SALT',
		lastName: 'HETE',
		ssn: '29926795943',
	},
	{
		firstName: 'MOMENTAN',
		lastName: 'VALMUE',
		ssn: '02868397953',
	},
	{
		firstName: 'KLARTENKT',
		lastName: 'TUNNEL',
		ssn: '15908197655',
	},
	{
		firstName: 'KVART',
		lastName: 'FEBER',
		ssn: '14926897595',
	},
	{
		firstName: 'AKSEPTABEL',
		lastName: 'KAMERA',
		ssn: '11877296204',
	},
	{
		firstName: 'PLUTSELIG',
		lastName: 'JUBEL',
		ssn: '28928896422',
	},
	{
		firstName: 'DEILIG',
		lastName: 'OPPHOPING',
		ssn: '02816298043',
	},
	{
		firstName: 'PESSIMISTISK',
		lastName: 'KUTTE',
		ssn: '31888199139',
	},
	{
		firstName: 'KORT',
		lastName: 'DUK',
		ssn: '27927194932',
	},
	{
		firstName: 'MANGE',
		lastName: 'ALDERSFORSKJELL',
		ssn: '20917297704',
	},
	{
		firstName: 'RETTFERDIG',
		lastName: 'SATIRE',
		ssn: '26887897726',
	},
	{
		firstName: 'ELASTISK',
		lastName: 'AVSLUTNINGSFEST',
		ssn: '21819898046',
	},
	{
		firstName: 'UROKKELIG',
		lastName: 'TIRSDAG',
		ssn: '20916398590',
	},
	{
		firstName: 'TALEFØR',
		lastName: 'PIANIST',
		ssn: '01916399614',
	},
	{
		firstName: 'TRU',
		lastName: 'BEVEGELSE',
		ssn: '23846996958',
	},
	{
		firstName: 'HEL',
		lastName: 'AKTUALITET',
		ssn: '14867097911',
	},
	{
		firstName: 'STOR',
		lastName: 'HEIS',
		ssn: '19847997713',
	},
	{
		firstName: 'SMISKENDE',
		lastName: 'HUMOR',
		ssn: '15907595185',
	},
	{
		firstName: 'ALLSLAGS',
		lastName: 'BYREGION',
		ssn: '09900199020',
	},
	{
		firstName: 'UNDERDANIG',
		lastName: 'SUM',
		ssn: '30857096629',
	},
	{
		firstName: 'MOMENTAN',
		lastName: 'TOWNSHIP',
		ssn: '20916997702',
	},
	{
		firstName: 'RETT',
		lastName: 'FLASKE',
		ssn: '14849997956',
	},
	{
		firstName: 'KOMPLETT',
		lastName: 'SLEKTNING',
		ssn: '22858298192',
	},
	{
		firstName: 'MYE',
		lastName: 'MAST',
		ssn: '10838699001',
	},
	{
		firstName: 'PLEIENDE',
		lastName: 'AMBASSADEFUNKSJONÆR',
		ssn: '22826694703',
	},
	{
		firstName: 'USEDVANLIG',
		lastName: 'BØK',
		ssn: '21829898621',
	},
	{
		firstName: 'POPULÆR',
		lastName: 'FORMIDDAG',
		ssn: '04928397829',
	},
	{
		firstName: 'FLAT',
		lastName: 'BANK',
		ssn: '30916098509',
	},
	{
		firstName: 'GUL',
		lastName: 'PARYKK',
		ssn: '16886597189',
	},
	{
		firstName: 'MUSKULØS',
		lastName: 'BÅNDSALAT',
		ssn: '15928599105',
	},
	{
		firstName: 'OPPFYLLENDE',
		lastName: 'AVTALE',
		ssn: '03817298191',
	},
	{
		firstName: 'ELEGANT',
		lastName: 'FASTLANDSFORBINDELSE',
		ssn: '28888997077',
	},
	{
		firstName: 'VAKLENDE',
		lastName: 'LAMPETT',
		ssn: '13910198607',
	},
	{
		firstName: 'RASTLØS',
		lastName: 'BAKGRUNNSLITTERATUR',
		ssn: '18837399528',
	},
	{
		firstName: 'KORREKT',
		lastName: 'MAST',
		ssn: '01856697092',
	},
	{
		firstName: 'UMAKE',
		lastName: 'HALVSØSKEN',
		ssn: '24896299200',
	},
	{
		firstName: 'KONGE',
		lastName: 'NETTHINNE',
		ssn: '10856998709',
	},
	{
		firstName: 'MEDGJØRLIG',
		lastName: 'ETTERMIDDAG',
		ssn: '23876497999',
	},
	{
		firstName: 'BLID',
		lastName: 'TREKKFUGL',
		ssn: '06849099068',
	},
	{
		firstName: 'SORGLØS',
		lastName: 'PRODUKSJON',
		ssn: '11836595566',
	},
	{
		firstName: 'TILLITSFULL',
		lastName: 'KJEKS',
		ssn: '23827998907',
	},
	{
		firstName: 'FIKTIV',
		lastName: 'LEFSE',
		ssn: '06816799110',
	},
	{
		firstName: 'OVERBEVISENDE',
		lastName: 'HALVØY',
		ssn: '01867296405',
	},
	{
		firstName: 'RETT',
		lastName: 'LEVEREGEL',
		ssn: '06858197706',
	},
	{
		firstName: 'TØFF',
		lastName: 'SYND',
		ssn: '12920197874',
	},
	{
		firstName: 'AKUSTISK',
		lastName: 'SKO',
		ssn: '17847898275',
	},
	{
		firstName: 'OPPBLÅST',
		lastName: 'DIESEL',
		ssn: '15878999271',
	},
	{
		firstName: 'MORALSK',
		lastName: 'DAGKREM',
		ssn: '03916896459',
	},
	{
		firstName: 'URETTFERDIG',
		lastName: 'PÅKJENNING',
		ssn: '03848497761',
	},
	{
		firstName: 'VARSOM',
		lastName: 'ALV',
		ssn: '25908598302',
	},
	{
		firstName: 'INTELLIGENT',
		lastName: 'PYJAMASBUKSE',
		ssn: '24847097155',
	},
	{
		firstName: 'SPESIFIKK',
		lastName: 'AVDELING',
		ssn: '17876695561',
	},
	{
		firstName: 'KUNNSKAPSLØS',
		lastName: 'ALTMULIGMANN',
		ssn: '13887297228',
	},
	{
		firstName: 'FORSTANDIG',
		lastName: 'PERMANENT',
		ssn: '14906299349',
	},
	{
		firstName: 'TØRST',
		lastName: 'RESSURS',
		ssn: '08830097334',
	},
	{
		firstName: 'IVRIG',
		lastName: 'SYND',
		ssn: '20879397198',
	},
	{
		firstName: 'AKROBATISK',
		lastName: 'RETORIKK',
		ssn: '07916098892',
	},
	{
		firstName: 'EVENTYRLIG',
		lastName: 'FASE',
		ssn: '05889999138',
	},
	{
		firstName: 'SLEM',
		lastName: 'ENTREPRENØR',
		ssn: '29858099917',
	},
	{
		firstName: 'NERVØS',
		lastName: 'AVSTAND',
		ssn: '02898499289',
	},
	{
		firstName: 'HORISONTAL',
		lastName: 'ENERGI',
		ssn: '23848398152',
	},
	{
		firstName: 'SKÅNSOM',
		lastName: 'AMBOLT',
		ssn: '25858696405',
	},
	{
		firstName: 'KORREKT',
		lastName: 'KONSONANT',
		ssn: '20907699618',
	},
	{
		firstName: 'AUTORISERT',
		lastName: 'KLUT',
		ssn: '27836697664',
	},
	{
		firstName: 'EKSAKT',
		lastName: 'SERVITRISE',
		ssn: '16926199114',
	},
	{
		firstName: 'SPESIFIKK',
		lastName: 'TAKKE',
		ssn: '30816296400',
	},
	{
		firstName: 'SVÆR',
		lastName: 'RAMME',
		ssn: '17906295334',
	},
	{
		firstName: 'INKLUDERENDE',
		lastName: 'DUELL',
		ssn: '14867398415',
	},
	{
		firstName: 'LIDENSKAPELIG',
		lastName: 'GRAVIMETRI',
		ssn: '01880098124',
	},
	{
		firstName: 'AKROBATISK',
		lastName: 'LUNSJ',
		ssn: '14837996792',
	},
	{
		firstName: 'INTERESSANT',
		lastName: 'GAUPE',
		ssn: '04897699694',
	},
	{
		firstName: 'UBESTIKKELIG',
		lastName: 'MATVARE',
		ssn: '11879299731',
	},
	{
		firstName: 'FREIDIG',
		lastName: 'BØTTE',
		ssn: '24858299469',
	},
	{
		firstName: 'SKRIVEFØR',
		lastName: 'PLATE',
		ssn: '28897698384',
	},
	{
		firstName: 'OPPSTEMT',
		lastName: 'NETTVERKSKABEL',
		ssn: '07898599951',
	},
	{
		firstName: 'PROAKTIV',
		lastName: 'BAKTANKE',
		ssn: '07847898628',
	},
	{
		firstName: 'UKONTROVERSIELL',
		lastName: 'STØVEL',
		ssn: '07926895782',
	},
	{
		firstName: 'UINTERESSERT',
		lastName: 'SEKRETÆR',
		ssn: '28898298843',
	},
	{
		firstName: 'ULIK',
		lastName: 'INTRIKAT',
		ssn: '23838197256',
	},
	{
		firstName: 'FIOLETT',
		lastName: 'HINNE',
		ssn: '24889297960',
	},
	{
		firstName: 'RØD',
		lastName: 'PIZZA',
		ssn: '09887598875',
	},
	{
		firstName: 'REDD',
		lastName: 'AVANSE',
		ssn: '01887195257',
	},
	{
		firstName: 'LILLA',
		lastName: 'AVENY',
		ssn: '02870098173',
	},
	{
		firstName: 'TRÅDLØS',
		lastName: 'BØR',
		ssn: '16858997139',
	},
	{
		firstName: 'DEILIG',
		lastName: 'KILE',
		ssn: '20897599164',
	},
	{
		firstName: 'OVERMODIG',
		lastName: 'DIALEKT',
		ssn: '23837596831',
	},
	{
		firstName: 'SLEM',
		lastName: 'PUTE',
		ssn: '09836595154',
	},
	{
		firstName: 'ALMINNELIG',
		lastName: 'DUNKJEVLE',
		ssn: '18859198062',
	},
	{
		firstName: 'OVERFLØDIG',
		lastName: 'GLOSE',
		ssn: '22817199481',
	},
	{
		firstName: 'LETT',
		lastName: 'PAPPA',
		ssn: '26927699965',
	},
	{
		firstName: 'TROSSIG',
		lastName: 'SOKK',
		ssn: '14906498759',
	},
	{
		firstName: 'KRANGLETE',
		lastName: 'KJÆRESTE',
		ssn: '29916396501',
	},
	{
		firstName: 'VELKOMMEN',
		lastName: 'GLUTEN',
		ssn: '19840098470',
	},
	{
		firstName: 'RØD',
		lastName: 'KAMEL',
		ssn: '27857496847',
	},
	{
		firstName: 'DOBBEL',
		lastName: 'NATUR',
		ssn: '13827197933',
	},
	{
		firstName: 'INTUITIV',
		lastName: 'VARE',
		ssn: '25888498101',
	},
	{
		firstName: 'LOJAL',
		lastName: 'FASTE',
		ssn: '20879196443',
	},
	{
		firstName: 'MISFORNØYD',
		lastName: 'FLYVERTINNE',
		ssn: '11869399258',
	},
	{
		firstName: 'FIKTIV',
		lastName: 'GARASJE',
		ssn: '02828497742',
	},
	{
		firstName: 'TØRR',
		lastName: 'KONTINGENT',
		ssn: '31900199646',
	},
	{
		firstName: 'OPTIMISTISK',
		lastName: 'OTER',
		ssn: '28837398039',
	},
	{
		firstName: 'RAKRYGGET',
		lastName: 'TALLTEGN',
		ssn: '18889898492',
	},
	{
		firstName: 'FANTASILØS',
		lastName: 'MOR',
		ssn: '29897399235',
	},
	{
		firstName: 'KONSEKVENT',
		lastName: 'KRYPDYR',
		ssn: '11816396419',
	},
	{
		firstName: 'PRAGMATISK',
		lastName: 'BRETT',
		ssn: '10909797956',
	},
	{
		firstName: 'LANGFINGRET',
		lastName: 'PAUSE',
		ssn: '22866698604',
	},
	{
		firstName: 'HÅRSÅR',
		lastName: 'INFORMASJON',
		ssn: '24907799170',
	},
	{
		firstName: 'STORARTET',
		lastName: 'DEL',
		ssn: '19928099671',
	},
	{
		firstName: 'FRISK',
		lastName: 'FIOLIN',
		ssn: '24817499836',
	},
	{
		firstName: 'PERFEKT',
		lastName: 'VAFFEL',
		ssn: '01878099377',
	},
	{
		firstName: 'OPERATIV',
		lastName: 'KRABBE',
		ssn: '25828995785',
	},
	{
		firstName: 'RIKTIG',
		lastName: 'FOXTROT',
		ssn: '14828999525',
	},
	{
		firstName: 'UGLESETT',
		lastName: 'MEDISTERDEIG',
		ssn: '21928099498',
	},
	{
		firstName: 'HENSYNSFULL',
		lastName: 'LIKNING',
		ssn: '17858299667',
	},
	{
		firstName: 'TROFAST',
		lastName: 'KAKAOBØNNE',
		ssn: '30888799105',
	},
	{
		firstName: 'NYSGJERRIG',
		lastName: 'ONKEL',
		ssn: '07907696582',
	},
	{
		firstName: 'ALTERNATIV',
		lastName: 'BÆRTUR',
		ssn: '26888197647',
	},
	{
		firstName: 'LIVSGLAD',
		lastName: 'JORD',
		ssn: '30918499322',
	},
	{
		firstName: 'MATEMATISK',
		lastName: 'BAKGRUNNSLITTERATUR',
		ssn: '15906298241',
	},
	{
		firstName: 'ORDENTLIG',
		lastName: 'UNIVERSITET',
		ssn: '29878197583',
	},
	{
		firstName: 'GJENNOMSIKTIG',
		lastName: 'VITS',
		ssn: '04896499977',
	},
	{
		firstName: 'DYP',
		lastName: 'STUND',
		ssn: '21896098044',
	},
	{
		firstName: 'REDD',
		lastName: 'FLOD',
		ssn: '23907097013',
	},
	{
		firstName: 'PÅTROPPENDE',
		lastName: 'KOMFYR',
		ssn: '06896798861',
	},
	{
		firstName: 'KONSERVATIV',
		lastName: 'LINJAL',
		ssn: '19928399462',
	},
	{
		firstName: 'SELVHJULPEN',
		lastName: 'RESSURS',
		ssn: '30918299714',
	},
	{
		firstName: 'POPULÆR',
		lastName: 'BUKK',
		ssn: '04919498752',
	},
	{
		firstName: 'MÅTEHOLDEN',
		lastName: 'APPETITT',
		ssn: '24877699818',
	},
	{
		firstName: 'VIKTIG',
		lastName: 'BAND',
		ssn: '06887299356',
	},
	{
		firstName: 'UNDERFUNDIG',
		lastName: 'MOLDVARP',
		ssn: '19918196636',
	},
	{
		firstName: 'HORISONTAL',
		lastName: 'GJERRIGKNARK',
		ssn: '11847799880',
	},
	{
		firstName: 'URIMELIG',
		lastName: 'GALLUPMÅLING',
		ssn: '05887399095',
	},
	{
		firstName: 'KOMPLETT',
		lastName: 'FLAMME',
		ssn: '04826697968',
	},
	{
		firstName: 'SJELDEN',
		lastName: 'SYSTRENDING',
		ssn: '06906898487',
	},
	{
		firstName: 'GJENSIDIG',
		lastName: 'KRÅKE',
		ssn: '20888595938',
	},
	{
		firstName: 'LEVENDE',
		lastName: 'ABONNEMENT',
		ssn: '09928596890',
	},
	{
		firstName: 'USEDVANLIG',
		lastName: 'LIVSSTIL',
		ssn: '19878398338',
	},
	{
		firstName: 'OVEREKSPONERT',
		lastName: 'AKADEMISK',
		ssn: '23929697650',
	},
	{
		firstName: 'BLØT',
		lastName: 'TALLERKEN',
		ssn: '03886995910',
	},
	{
		firstName: 'FLYKTIG',
		lastName: 'UNGDOM',
		ssn: '23879198895',
	},
	{
		firstName: 'EMPIRISK',
		lastName: 'PURRE',
		ssn: '03917999111',
	},
	{
		firstName: 'HEL',
		lastName: 'LEVEREGEL',
		ssn: '16886497087',
	},
	{
		firstName: 'PRIKKETE',
		lastName: 'TRENCHCOAT',
		ssn: '19867398824',
	},
	{
		firstName: 'SPONTAN',
		lastName: 'FELTTOG',
		ssn: '01856498944',
	},
	{
		firstName: 'KVADRATISK',
		lastName: 'LUPE',
		ssn: '08898497535',
	},
	{
		firstName: 'LIKEGYLDIG',
		lastName: 'SAUS',
		ssn: '26828099859',
	},
	{
		firstName: 'FORSIKTIG',
		lastName: 'OMELETT',
		ssn: '28929998563',
	},
	{
		firstName: 'VAKLENDE',
		lastName: 'BARON',
		ssn: '12867497836',
	},
	{
		firstName: 'SPETTETE',
		lastName: 'ENERGI',
		ssn: '18906297627',
	},
	{
		firstName: 'LAV',
		lastName: 'GLADIATOR',
		ssn: '30878297381',
	},
	{
		firstName: 'KONGE',
		lastName: 'OPPTAKSPRØVE',
		ssn: '14899298854',
	},
	{
		firstName: 'FILOSOFISK',
		lastName: 'KRÅKESØLV',
		ssn: '30908799476',
	},
	{
		firstName: 'FORNØYD',
		lastName: 'ANSIKTSKREM',
		ssn: '14836694962',
	},
	{
		firstName: 'OPPRETT',
		lastName: 'REISE',
		ssn: '23866299110',
	},
	{
		firstName: 'MOMENTAN',
		lastName: 'NØTT',
		ssn: '06838399264',
	},
	{
		firstName: 'SLAKK',
		lastName: 'DOKTORGRAD',
		ssn: '23866198810',
	},
	{
		firstName: 'OPPRIKTIG',
		lastName: 'FRUKT',
		ssn: '06816196491',
	},
	{
		firstName: 'ALLSIDIG',
		lastName: 'POTET',
		ssn: '05886797887',
	},
	{
		firstName: 'OVERSIKTLIG',
		lastName: 'DANS',
		ssn: '30859596408',
	},
	{
		firstName: 'UMUSIKALSK',
		lastName: 'PÅSKEEGG',
		ssn: '08890199659',
	},
	{
		firstName: 'PRATSOM',
		lastName: 'SYNSING',
		ssn: '21857899277',
	},
	{
		firstName: 'ALLSLAGS',
		lastName: 'TELEFONNUMMER',
		ssn: '30906399799',
	},
	{
		firstName: 'AKUSTISK',
		lastName: 'HANDELSFLÅTE',
		ssn: '13888997959',
	},
	{
		firstName: 'VENSTRE',
		lastName: 'RYNKE',
		ssn: '07919497895',
	},
	{
		firstName: 'OPERATIV',
		lastName: 'KAR',
		ssn: '27827798911',
	},
	{
		firstName: 'NYTTIG',
		lastName: 'AMBULANSE',
		ssn: '11877997962',
	},
	{
		firstName: 'KONSERVATIV',
		lastName: 'ORIDÉ',
		ssn: '01837398467',
	},
	{
		firstName: 'OPTIMISTISK',
		lastName: 'HANKATT',
		ssn: '24837797434',
	},
	{
		firstName: 'VENNLIG',
		lastName: 'SEIDEL',
		ssn: '11869999182',
	},
	{
		firstName: 'USEDVANLIG',
		lastName: 'VARE',
		ssn: '14869498654',
	},
	{
		firstName: 'RESERVERT',
		lastName: 'PAPEGØYE',
		ssn: '30927599577',
	},
	{
		firstName: 'NYTTIG',
		lastName: 'PÅFUNN',
		ssn: '26827096783',
	},
	{
		firstName: 'AUTORISERT',
		lastName: 'RIST',
		ssn: '10898399341',
	},
	{
		firstName: 'MINST',
		lastName: 'HORISONT',
		ssn: '12876599234',
	},
	{
		firstName: 'KONSEKVENT',
		lastName: 'LENSMANN',
		ssn: '24896098809',
	},
	{
		firstName: 'OPPFARENDE',
		lastName: 'FAMILIE',
		ssn: '07886999717',
	},
	{
		firstName: 'SOLID',
		lastName: 'VEVSTOL',
		ssn: '23858698448',
	},
]

const temporaryPeople: Person[] = [
	{
		ssn: '45895400150',
		firstName: 'FREDELIG',
		lastName: 'DIESEL',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '43917400580',
		firstName: 'EFFEKTIV',
		lastName: 'IDÉ',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '68917601767',
		firstName: 'UMUSIKALSK',
		lastName: 'GYNGEHEST',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '48898700529',
		firstName: 'NYBAKT',
		lastName: 'UNNSELIG',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '71835000537',
		firstName: 'REDELIG',
		lastName: 'GREVE',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '41825601757',
		firstName: 'TYDELIG',
		lastName: 'SVAMP',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '56928201177',
		firstName: 'TRIST',
		lastName: 'KJØTTBOLLE',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '58924400119',
		firstName: 'UFRUKTBAR',
		lastName: 'APPELSIN',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '65916301264',
		firstName: 'UKLAR',
		lastName: 'BREGNE',
		status: 'midlertidig',
		gender: 'kvinne',
	},
	{
		ssn: '53839002749',
		firstName: 'UTØRST',
		lastName: 'STATIST',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '44837902123',
		firstName: 'EPISK',
		lastName: 'APPELL',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '58898301743',
		firstName: 'UPERSONLIG',
		lastName: 'KONGE',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '54815603918',
		firstName: 'ROBUST',
		lastName: 'PANIKK',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '60838900731',
		firstName: 'LUN',
		lastName: 'BUSSE',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '49835000183',
		firstName: 'SAMLET',
		lastName: 'ALGE',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '67928200717',
		firstName: 'VERD',
		lastName: 'PAPPA',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '66878702361',
		firstName: 'VEIK',
		lastName: 'KYSTSTI',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '61832075174',
		firstName: 'GJENSIDIG',
		lastName: 'OKSE',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '64858601094',
		firstName: 'KREATIV',
		lastName: 'FAR',
		status: 'midlertidig',
		gender: 'kvinne',
	},
	{
		ssn: '57867100557',
		firstName: 'ERFAREN',
		lastName: 'PES',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '42833000335',
		firstName: 'LYKKELIG',
		lastName: 'GAUPE',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '46855200783',
		firstName: 'RU',
		lastName: 'HØRSEL',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '60867501765',
		firstName: 'ROLIG',
		lastName: 'ART',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '65857702314',
		firstName: 'LEVENDE',
		lastName: 'KORNSIRKEL',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '58824400251',
		firstName: 'OPPRIKTIG',
		lastName: 'EPISODE',
		status: 'midlertidig',
		gender: 'kvinne',
	},
	{
		ssn: '63882300996',
		firstName: 'SKY',
		lastName: 'KUTTE',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '48879100995',
		firstName: 'UFRUKTBAR',
		lastName: 'MYNTSAMLING',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '46826901985',
		firstName: 'ELASTISK',
		lastName: 'TREFF',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '41909800380',
		firstName: 'PUSSIG',
		lastName: 'NEPE',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '60904016139',
		firstName: 'BESTEMT',
		lastName: 'BAKEPULVER',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '65835801343',
		firstName: 'UGJENNOMSIKTIG',
		lastName: 'KULEPENN',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '67869800349',
		firstName: 'HÅNDFAST',
		lastName: 'SKYTTE',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '47838200202',
		firstName: 'PESSIMISTISK',
		lastName: 'KRYDDERMÅL',
		status: 'midlertidig',
		gender: 'kvinne',
	},
	{
		ssn: '70906001398',
		firstName: 'EKSAKT',
		lastName: 'BØFFEL',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '55868400721',
		firstName: 'RELEVANT',
		lastName: 'GEOMETRI',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '56887400208',
		firstName: 'SPETTETE',
		lastName: 'STASJONSVOGN',
		status: 'midlertidig',
		gender: 'kvinne',
	},
	{
		ssn: '70858501855',
		firstName: 'ELEKTRONISK',
		lastName: 'DAMESYKKEL',
		status: 'midlertidig',
		gender: 'kvinne',
	},
	{
		ssn: '68914800920',
		firstName: 'INTERESSANT',
		lastName: 'AGURKTID',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '67917600934',
		firstName: 'FIN',
		lastName: 'STRUTS',
		status: 'midlertidig',
		gender: 'mann',
	},
	{
		ssn: '59878100462',
		firstName: 'KONTROLLERT',
		lastName: 'EKTEMANN',
		status: 'midlertidig',
		gender: 'kvinne',
	},
]

const emigratedPeople: Person[] = [
	{
		ssn: '28845998592',
		firstName: 'UFORNUFTIG',
		lastName: 'SYSVORT',
		status: 'utflyttet',
		gender: 'mann',
	},
]

const genderedPeople: Person[] = [
	{
		ssn: '28864599011',
		firstName: 'ORDINÆR',
		lastName: 'KASJOTT',
		gender: 'kvinne',
	},
	{
		ssn: '06869199816',
		firstName: 'MINST',
		lastName: 'KOMEDIE',
		gender: 'kvinne',
	},
	{
		ssn: '21870449000',
		firstName: 'PUNKTLIG',
		lastName: 'KAR',
		gender: 'kvinne',
	},
	{
		ssn: '21851199796',
		firstName: 'AUTENTISK',
		lastName: 'PISTOL',
		gender: 'mann',
	},
	{
		ssn: '12889599128',
		firstName: 'SOFISTIKERT',
		lastName: 'LABYRINT',
		gender: 'mann',
	},
	{
		ssn: '28892549283',
		firstName: 'OPPRØMT',
		lastName: 'FIOLIN',
		gender: 'kvinne',
	},
	{ ssn: '03889699379', firstName: 'REAL', lastName: 'BRY', gender: 'mann' },
	{
		ssn: '04866699343',
		firstName: 'SAMTIDIG',
		lastName: 'SANS',
		gender: 'mann',
	},
	{
		ssn: '20908797737',
		firstName: 'LILLA',
		lastName: 'PINNESTOL',
		gender: 'mann',
	},
	{
		ssn: '13832948971',
		firstName: 'LYSTIG',
		lastName: 'MÅNE',
		gender: 'mann',
	},
	{
		ssn: '29891999524',
		firstName: 'UMUSIKALSK',
		lastName: 'ARKITEKTUR',
		gender: 'mann',
	},
	{
		ssn: '03877596779',
		firstName: 'SITRONGUL',
		lastName: 'SMARAGD',
		gender: 'mann',
	},
	{
		ssn: '06842549394',
		firstName: 'INITIATIVRIK',
		lastName: 'BASS',
		gender: 'mann',
	},
	{
		ssn: '12847298527',
		firstName: 'SIGEN',
		lastName: 'MODELL',
		gender: 'mann',
	},
	{
		ssn: '01894998438',
		firstName: 'HUMAN',
		lastName: 'LYTE',
		gender: 'kvinne',
	},
	{
		ssn: '02846699638',
		firstName: 'TYPISK',
		lastName: 'BLOMSTERPLANTE',
		gender: 'kvinne',
	},
	{
		ssn: '23821849454',
		firstName: 'RIKTIG',
		lastName: 'HISTORIE',
		gender: 'kvinne',
	},
	{
		ssn: '04918099544',
		firstName: 'GJENSIDIG',
		lastName: 'BILDEKORT',
		gender: 'mann',
	},
	{
		ssn: '05831049938',
		firstName: 'RØD',
		lastName: 'SEIDEL',
		gender: 'mann',
	},
	{
		ssn: '04903849385',
		firstName: 'INTEGRERT',
		lastName: 'GLEDE',
		gender: 'mann',
	},
	{
		ssn: '08830147684',
		firstName: 'TOPP',
		lastName: 'ALUMINIUM',
		gender: 'kvinne',
	},
	{
		ssn: '15869998254',
		firstName: 'KONKRET',
		lastName: 'BLANDING',
		gender: 'kvinne',
	},
	{
		ssn: '23904599034',
		firstName: 'UNDERFUNDIG',
		lastName: 'SOKK',
		gender: 'kvinne',
	},
	{
		ssn: '03859898547',
		firstName: 'OPPFARENDE',
		lastName: 'ALLIGATOR',
		gender: 'mann',
	},
	{
		ssn: '13845399748',
		firstName: 'SVÆR',
		lastName: 'TELESKOPORD',
		gender: 'mann',
	},
	{
		ssn: '12905498329',
		firstName: 'STOR',
		lastName: 'BUSSKUR',
		gender: 'mann',
	},
	{
		ssn: '22847699950',
		firstName: 'EGOISTISK',
		lastName: 'ADMIRAL',
		gender: 'mann',
	},
	{
		ssn: '30929598306',
		firstName: 'SELVHJULPEN',
		lastName: 'KVINNE',
		gender: 'mann',
	},
	{
		ssn: '19810298947',
		firstName: 'SNAR',
		lastName: 'KATEGORI',
		gender: 'mann',
	},
	{
		ssn: '22889197629',
		firstName: 'GRØNN',
		lastName: 'FANT',
		gender: 'kvinne',
	},
	{
		ssn: '01877496194',
		firstName: 'UTØRST',
		lastName: 'ALUMINIUM',
		gender: 'mann',
	},
	{
		ssn: '04865899438',
		firstName: 'RØD',
		lastName: 'OKTOBER',
		gender: 'kvinne',
	},
	{
		ssn: '28860149445',
		firstName: 'GJESTFRI',
		lastName: 'KENGURU',
		gender: 'kvinne',
	},
	{
		ssn: '11851097440',
		firstName: 'RU',
		lastName: 'HØRSEL',
		gender: 'kvinne',
	},
	{
		ssn: '01846696985',
		firstName: 'LYSELILLA',
		lastName: 'FRUKTHAGE',
		gender: 'mann',
	},
	{
		ssn: '07835798903',
		firstName: 'BLID',
		lastName: 'EPLEKAKE',
		gender: 'mann',
	},
	{
		ssn: '03880749322',
		firstName: 'NYSGJERRIG',
		lastName: 'KVELD',
		gender: 'mann',
	},
	{
		ssn: '11913048255',
		firstName: 'OPPRETTHOLDENDE',
		lastName: 'GLUTEN',
		gender: 'kvinne',
	},
	{
		ssn: '08895398919',
		firstName: 'USJENERT',
		lastName: 'LAMPETT',
		gender: 'mann',
	},
	{
		ssn: '20915398724',
		firstName: 'VIKTIG',
		lastName: 'ADJUTANT',
		gender: 'mann',
	},
	{
		ssn: '21916196587',
		firstName: 'LITT',
		lastName: 'ALLIANSE',
		gender: 'mann',
	},
	{
		ssn: '03869599106',
		firstName: 'LIVLIG',
		lastName: 'RETORIKK',
		gender: 'mann',
	},
	{
		ssn: '04858797662',
		firstName: 'PÅPASSELIG',
		lastName: 'PUMPE',
		gender: 'kvinne',
	},
	{
		ssn: '08874296202',
		firstName: 'ULIK',
		lastName: 'JOURNAL',
		gender: 'kvinne',
	},
	{
		ssn: '13929299536',
		firstName: 'PUNKTLIG',
		lastName: 'SYND',
		gender: 'mann',
	},

	{
		ssn: '05855897476',
		firstName: 'HARDHUDET',
		lastName: 'MASKIN',
		gender: 'kvinne',
	},
	{
		ssn: '10816599488',
		firstName: 'DEDIKERT',
		lastName: 'VÅGHALS',
		gender: 'kvinne',
	},
	{
		ssn: '25907297376',
		firstName: 'INNBRINGENDE',
		lastName: 'RESTAURANT',
		gender: 'mann',
	},
	{
		ssn: '18891999352',
		firstName: 'SMUL',
		lastName: 'JULEPRESANG',
		gender: 'mann',
	},
	{
		ssn: '18906895893',
		firstName: 'PROAKTIV',
		lastName: 'SOLOPPGANG',
		gender: 'kvinne',
	},
	{
		ssn: '16812290952',
		firstName: 'SALIG',
		lastName: 'GRANDONKEL',
		gender: 'mann',
	},
	{
		ssn: '17832449393',
		firstName: 'ØKONOMISK',
		lastName: 'ROSIN',
		gender: 'mann',
	},
	{
		ssn: '29857597549',
		firstName: 'OKSYDERT',
		lastName: 'SUPPORTER',
		gender: 'mann',
	},
	{
		ssn: '25894898758',
		firstName: 'ENKEL',
		lastName: 'LODDSNOR',
		gender: 'mann',
	},

	{
		ssn: '12861249660',
		firstName: 'UKLAR',
		lastName: 'KJENDIS',
		gender: 'kvinne',
	},
	{
		ssn: '26837395851',
		firstName: 'ROMANTISK',
		lastName: 'DATO',
		gender: 'kvinne',
	},
	{
		ssn: '26846298354',
		firstName: 'SJOKKERT',
		lastName: 'KORNSORT',
		gender: 'mann',
	},
	{
		ssn: '01861198355',
		firstName: 'MOTIVERT',
		lastName: 'SANDKASSE',
		gender: 'mann',
	},
	{
		ssn: '27847797431',
		firstName: 'JURIDISK',
		lastName: 'HALS',
		gender: 'kvinne',
	},
	{
		ssn: '07926699177',
		firstName: 'OPPRIKTIG',
		lastName: 'BEUNDRING',
		gender: 'mann',
	},
	{
		ssn: '16840548434',
		firstName: 'DEMOKRATISK',
		lastName: 'OPSJON',
		gender: 'kvinne',
	},
	{
		ssn: '25890299604',
		firstName: 'STOR',
		lastName: 'BJØRN',
		gender: 'kvinne',
	},
	{
		ssn: '02887399673',
		firstName: 'TRU',
		lastName: 'FILET',
		gender: 'kvinne',
	},
	{
		ssn: '24810648216',
		firstName: 'VIKTIG',
		lastName: 'GRANDIS',
		gender: 'kvinne',
	},
	{
		ssn: '22910449048',
		firstName: 'EMPATISK',
		lastName: 'STILLING',
		gender: 'kvinne',
	},
	{
		ssn: '07905697662',
		firstName: 'PARISK',
		lastName: 'MYNT',
		gender: 'kvinne',
	},
	{
		ssn: '28875598084',
		firstName: 'FLYKTIG',
		lastName: 'STAMFAR',
		gender: 'kvinne',
	},
	{
		ssn: '24850497636',
		firstName: 'UAVHENGIG',
		lastName: 'KANT',
		gender: 'kvinne',
	},
	{
		ssn: '28906898901',
		firstName: 'HISTORISK',
		lastName: 'AKUPUNKTØR',
		gender: 'mann',
	},
	{
		ssn: '08925599914',
		firstName: 'EMPIRISK',
		lastName: 'BÆR',
		gender: 'mann',
	},
	{
		ssn: '18910649538',
		firstName: 'STORARTET',
		lastName: 'HENSIKT',
		gender: 'mann',
	},
	{
		ssn: '22851449764',
		firstName: 'TØRST',
		lastName: 'KONTROLL',
		gender: 'mann',
	},
	{
		ssn: '23901097801',
		firstName: 'LANGFINGRET',
		lastName: 'PERIODE',
		gender: 'kvinne',
	},
	{
		ssn: '03831298536',
		firstName: 'GLEMSOM',
		lastName: 'ARBEIDSSTYRKE',
		gender: 'mann',
	},
	{
		ssn: '31837498239',
		firstName: 'KONSEKVENT',
		lastName: 'BILLE',
		gender: 'kvinne',
	},
	{
		ssn: '02912649094',
		firstName: 'HEL',
		lastName: 'DRESS',
		gender: 'kvinne',
	},
	{
		ssn: '17926996215',
		firstName: 'GUL',
		lastName: 'AMBASSADESEKRETÆR',
		gender: 'kvinne',
	},
	{
		ssn: '28848097472',
		firstName: 'IVRIG',
		lastName: 'AROMA',
		gender: 'kvinne',
	},
	{
		ssn: '13880198194',
		firstName: 'MISFORNØYD',
		lastName: 'PRESENTASJON',
		gender: 'mann',
	},
	{
		ssn: '01904298863',
		firstName: 'KUL',
		lastName: 'NYRE',
		gender: 'kvinne',
	},
	{
		ssn: '03828798013',
		firstName: 'STORARTET',
		lastName: 'DUK',
		gender: 'kvinne',
	},
	{
		ssn: '14880048784',
		firstName: 'SENSITIV',
		lastName: 'EPISODE',
		gender: 'mann',
	},
	{
		ssn: '15844598340',
		firstName: 'ENKEL',
		lastName: 'BUKSESELE',
		gender: 'mann',
	},
	{
		ssn: '21850098368',
		firstName: 'NESNØDD',
		lastName: 'GENSER',
		gender: 'mann',
	},
	{
		ssn: '02845898424',
		firstName: 'UFUNKSJONELL',
		lastName: 'BEVILLING',
		gender: 'kvinne',
	},
	{
		ssn: '07883049327',
		firstName: 'KJÆRLIG',
		lastName: 'BAKGRUNN',
		gender: 'mann',
	},
	{
		ssn: '18866396503',
		firstName: 'HENSYNSLØS',
		lastName: 'KAM',
		gender: 'mann',
	},
	{
		ssn: '28821249505',
		firstName: 'KLARTENKT',
		lastName: 'PÅPAKNING',
		gender: 'mann',
	},
	{
		ssn: '18904699140',
		firstName: 'INTERESSANT',
		lastName: 'KANIN',
		gender: 'mann',
	},
	{
		ssn: '05824299988',
		firstName: 'OMSORGSFULL',
		lastName: 'SKYVEDØR',
		gender: 'mann',
	},

	{
		ssn: '26929299190',
		firstName: 'LOJAL',
		lastName: 'AKELEIE',
		gender: 'mann',
	},
	{
		ssn: '24824399235',
		firstName: 'ØDE',
		lastName: 'BAKTERIE',
		gender: 'kvinne',
	},
	{
		ssn: '27861199458',
		firstName: 'MOTLØS',
		lastName: 'HØYDEDRAG',
		gender: 'kvinne',
	},
	{
		ssn: '28810799333',
		firstName: 'AUTORISERT',
		lastName: 'JORDSKJELV',
		gender: 'mann',
	},
	{
		ssn: '25882398636',
		firstName: 'KOGNITIV',
		lastName: 'KRÅKESØLV',
		gender: 'kvinne',
	},
	{
		ssn: '22914897118',
		firstName: 'VARSOM',
		lastName: 'JOLLE',
		gender: 'mann',
	},
	{
		ssn: '15851449881',
		firstName: 'MYE',
		lastName: 'STAMFAR',
		gender: 'kvinne',
	},
	{
		ssn: '30817598745',
		firstName: 'SVIMMEL',
		lastName: 'ESKE',
		gender: 'mann',
	},
	{ ssn: '26886197348', firstName: 'MYE', lastName: 'SAKS', gender: 'mann' },
	{
		ssn: '13840049579',
		firstName: 'LEGITIM',
		lastName: 'PARASOLL',
		gender: 'mann',
	},
	{
		ssn: '02906398446',
		firstName: 'HØY',
		lastName: 'HALVKULE',
		gender: 'kvinne',
	},
	{
		ssn: '21835698324',
		firstName: 'KONSERVATIV',
		lastName: 'BLANKETT',
		gender: 'mann',
	},
	{
		ssn: '16898098358',
		firstName: 'HANDLEKRAFTIG',
		lastName: 'RIST',
		gender: 'mann',
	},
	{
		ssn: '28871399923',
		firstName: 'VELKOMMEN',
		lastName: 'MATBOKS',
		gender: 'mann',
	},
	{
		ssn: '12869999545',
		firstName: 'RAKRYGGET',
		lastName: 'KULEPENN',
		gender: 'mann',
	},
	{
		ssn: '04831098886',
		firstName: 'AKSELERERENDE',
		lastName: 'FREDAG',
		gender: 'kvinne',
	},
	{
		ssn: '19914198049',
		firstName: 'MOTIVERT',
		lastName: 'TØRKETROMMEL',
		gender: 'kvinne',
	},
	{
		ssn: '05875198213',
		firstName: 'PATENT',
		lastName: 'BARK',
		gender: 'kvinne',
	},
	{
		ssn: '12858599634',
		firstName: 'ROMANTISK',
		lastName: 'MAGE',
		gender: 'kvinne',
	},
	{
		ssn: '19908799960',
		firstName: 'OPPRETT',
		lastName: 'EGGEPLOMME',
		gender: 'mann',
	},
	{
		ssn: '17814499030',
		firstName: 'SNAR',
		lastName: 'MALM',
		gender: 'kvinne',
	},
	{
		ssn: '10853548222',
		firstName: 'BRA',
		lastName: 'MEDVIND',
		gender: 'kvinne',
	},
	{
		ssn: '01878799565',
		firstName: 'FLAT',
		lastName: 'BLUND',
		gender: 'mann',
	},
	{
		ssn: '23825699287',
		firstName: 'JORDNÆR',
		lastName: 'AMBULOFOBI',
		gender: 'kvinne',
	},
	{
		ssn: '11876697558',
		firstName: 'KLAR',
		lastName: 'KATEGORI',
		gender: 'mann',
	},
	{
		ssn: '30854498890',
		firstName: 'OPPLAGT',
		lastName: 'BABY',
		gender: 'kvinne',
	},
	{
		ssn: '30833649422',
		firstName: 'SPISS',
		lastName: 'HYLLE',
		gender: 'kvinne',
	},
	{
		ssn: '04820149225',
		firstName: 'TAUS',
		lastName: 'SEN',
		gender: 'kvinne',
	},
	{
		ssn: '17918898433',
		firstName: 'RASTLØS',
		lastName: 'TRADISJON',
		gender: 'kvinne',
	},
	{
		ssn: '30878698815',
		firstName: 'PARODISK',
		lastName: 'KONTAKT',
		gender: 'kvinne',
	},
	{
		ssn: '06855599706',
		firstName: 'TOM',
		lastName: 'HIEROGLYF',
		gender: 'mann',
	},
	{
		ssn: '06910149170',
		firstName: 'UFORNUFTIG',
		lastName: 'GRAVIMETRI',
		gender: 'mann',
	},
	{
		ssn: '23867199713',
		firstName: 'FORNUFTIG',
		lastName: 'VANNMANN',
		gender: 'mann',
	},
	{
		ssn: '19880399368',
		firstName: 'IMPULSIV',
		lastName: 'PALI',
		gender: 'mann',
	},
	{ ssn: '18886699936', firstName: 'RETT', lastName: 'BALL', gender: 'mann' },
	{
		ssn: '10896696896',
		firstName: 'LOGISK',
		lastName: 'MOSKUS',
		gender: 'kvinne',
	},
	{
		ssn: '30857193683',
		firstName: 'DOGMATISK',
		lastName: 'FORELDER',
		gender: 'kvinne',
	},
	{
		ssn: '16889597910',
		firstName: 'AKADEMISK',
		lastName: 'BAGASJETRALLE',
		gender: 'mann',
	},
	{
		ssn: '19873449511',
		firstName: 'SENTRAL',
		lastName: 'PARTIKKEL',
		gender: 'mann',
	},
	{
		ssn: '23895197645',
		firstName: 'AKVATISK',
		lastName: 'STAFETT',
		gender: 'kvinne',
	},
	{
		ssn: '07861649991',
		firstName: 'SENSITIV',
		lastName: 'BYSSE',
		gender: 'mann',
	},
	{
		ssn: '23870097522',
		firstName: 'KRITISK',
		lastName: 'PÆRE',
		gender: 'mann',
	},
	{
		ssn: '07880599865',
		firstName: 'PÅPASSELIG',
		lastName: 'INGENIØR',
		gender: 'kvinne',
	},
	{
		ssn: '25865399262',
		firstName: 'KULTURELL',
		lastName: 'KANON',
		gender: 'kvinne',
	},
	{
		ssn: '07826196763',
		firstName: 'SKY',
		lastName: 'MYNTSAMLING',
		gender: 'mann',
	},
	{
		ssn: '09884997728',
		firstName: 'ORDINÆR',
		lastName: 'FORNØYELSE',
		gender: 'mann',
	},
	{
		ssn: '16890898975',
		firstName: 'KULTURELL',
		lastName: 'NETTLESER',
		gender: 'mann',
	},
	{
		ssn: '23854498746',
		firstName: 'FRUKTBAR',
		lastName: 'BLOGG',
		gender: 'mann',
	},
	{
		ssn: '07914699716',
		firstName: 'UVANLIG',
		lastName: 'RETORIKK',
		gender: 'mann',
	},
	{
		ssn: '07907897308',
		firstName: 'ALLMEKTIG',
		lastName: 'BIE',
		gender: 'mann',
	},
	{
		ssn: '12840149550',
		firstName: 'FORSTÅELSESFULL',
		lastName: 'ALTMULIGMANN',
		gender: 'mann',
	},
]

export const people: Person[] = [
	...deadPeople,
	...noMetaDataPeople,
	...temporaryPeople,
	...emigratedPeople,
	...genderedPeople,
]
