import type { Partner, Value } from "./types.defs";

export const PAGE_ANCHORS: string[] = [
	"accueil",
	"valeurs",
	"partenaires",
	"contact"
];

export const texts: string[] = [`in principio erat Verbum et Verbum erat apud Deum et Deus erat Verbum\n
		hoc erat in principio apud Deum\n
		omnia per ipsum facta sunt et sine ipso factum est nihil quod factum est\n
		in ipso vita erat et vita erat lux hominum\n
		et lux in tenebris lucet et tenebrae eam non conprehenderunt\n
		fuit homo missus a Deo cui nomen erat Iohannes\n
		hic venit in testimonium ut testimonium perhiberet de lumine ut omnes crederent per illum\n
		non erat ille lux sed ut testimonium perhiberet de lumine\n
		erat lux vera quae inluminat omnem hominem venientem in mundum\n
		in mundo erat et mundus per ipsum factus est et mundus eum non cognovit\n
		in propria venit et sui eum non receperunt\n
		quotquot autem receperunt eum dedit eis potestatem filios Dei fieri his qui credunt in nomine eius\n
		qui non ex sanguinibus neque ex voluntate carnis neque ex voluntate viri sed ex Deo nati sunt\n
		et Verbum caro factum est et habitavit in nobis et vidimus gloriam eius gloriam quasi unigeniti a Patre plenum gratiae et veritatis`,
	`circa undecimam vero exiit et invenit alios stantes et dicit illis quid hic statis tota die otiosi
		dicunt ei quia nemo nos conduxit dicit illis ite et vos in vineam\n
		cum sero autem factum esset dicit dominus vineae procuratori suo voca operarios et redde illis mercedem incipiens a novissimis usque ad primos\n
		cum venissent ergo qui circa undecimam horam venerant acceperunt singulos denarios\n
		venientes autem et primi arbitrati sunt quod plus essent accepturi acceperunt autem et ipsi singulos denarios\n
		et accipientes murmurabant adversus patrem familias\n
		dicentes hii novissimi una hora fecerunt et pares illos nobis fecisti qui portavimus pondus diei et aestus\n
		at ille respondens uni eorum dixit amice non facio tibi iniuriam nonne ex denario convenisti mecum\n
		tolle quod tuum est et vade volo autem et huic novissimo dare sicut et tibi\n
		aut non licet mihi quod volo facere an oculus tuus nequam est quia ego bonus sum\n
		sic erunt novissimi primi et primi novissimi multi sunt enim vocati pauci autem electi`,
	`tunc si quis vobis dixerit ecce hic Christus aut illic nolite credere
		surgent enim pseudochristi et pseudoprophetae et dabunt signa magna et prodigia ita ut in errorem inducantur si fieri potest etiam electi\n
		ecce praedixi vobis\n
		si ergo dixerint vobis ecce in deserto est nolite exire ecce in penetrabilibus nolite credere\n
		sicut enim fulgur exit ab oriente et paret usque in occidente ita erit et adventus Filii hominis\n
		ubicumque fuerit corpus illuc congregabuntur aquilae\n
		statim autem post tribulationem dierum illorum sol obscurabitur et luna non dabit lumen suum et stellae cadent de caelo et virtutes caelorum commovebuntur\n`
];


export const values: Value[] = [{
	id: "trust",
	credits: {
		accountUrl: "https://unsplash.com/@e_sykes",
		name: "Ethan Sykes",
		originName: "Unsplash",
		originUrl: "https://unsplash.com/"
	},
	image: "values/compass.jpg"
}, {
	id: "respect",
	credits: {
		accountUrl: "https://unsplash.com/@ludovicfrancois",
		name: "Ludovic François",
		originName: "Unsplash",
		originUrl: "https://unsplash.com/"
	},
	image: "values/bird.jpg"
}, {
	id: "excellence",
	credits: {
		accountUrl: "https://unsplash.com/@tmillot",
		name: "Thomas Millot",
		originName: "Unsplash",
		originUrl: "https://unsplash.com/"
	},
	image: "values/cathedral.jpg"
}, {
	id: "justice",
	credits: {
		accountUrl: "https://unsplash.com/@tingeyinjurylawfirm",
		name: "Tingey Injury Law Firm",
		originName: "Unsplash",
		originUrl: "https://unsplash.com/"
	},
	image: "values/justice.jpg"
}, {
	id: "transparency",
	credits: {
		accountUrl: "https://unsplash.com/@__orsini",
		name: "Andrea Orsini",
		originName: "Unsplash",
		originUrl: "https://unsplash.com/"
	},
	image: "values/mont.jpg"
}, {
	id: "privacy",
	credits: {
		accountUrl: "https://unsplash.com/@whoisrobinhood",
		name: "Irina Shishkina",
		originName: "Unsplash",
		originUrl: "https://unsplash.com/"
	},
	image: "values/island.jpg"
}];

export const partners: Partner[] = [{
	id: "coq-hardi",
	name: "Coq Hardi",
	image: "partners/coqhardi.svg",
	link: "https://www.coqhardi.fr/",
	description: "Coq Hardi est un agrégateur d'articles de fond et d'informations, de vidéos et de billets de blog."
}];