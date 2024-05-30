import SearchDashboard from '@/app/ui/rootpage/searchdashboard'
import SeeCloth from '@/app/ui/rootpage/seecloth'
import SeeMap from '@/app/ui/rootpage/seemap'


export default function HomePage() {
	return (
		<main className="min-h-screen flex flex-col items-center">
			<div className="h-16"></div>
			<SearchDashboard></SearchDashboard>
			<SeeCloth></SeeCloth>
			<SeeMap></SeeMap>
		</main>
	)
}

