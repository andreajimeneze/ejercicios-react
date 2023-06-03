import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return (
        <div className='App'>
            <TwitterFollowCard
                initialIsFollowing={false}
                userName="jota_andrea"
                name="Andrea Jota"
            />
            <TwitterFollowCard
                initialIsFollowing={true}
                userName="pherald"
                name="Pedro Hernández"
            />
            <TwitterFollowCard
                initialIsFollowing={true}
                userName="shinji"
                name="Miguel Ángel Jiménez"
            />
            <TwitterFollowCard
                initialIsFollowing={false}
                userName="elonmusk"
                name="Elon Musk"
            />
        </div>
    )

}