import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'laultimatostada',
    name: 'Javizaki',
    isFollowing: false
  },
  {
    userName: 'Bardinosoccer',
    name: 'BardiñoSoccer',
    isFollowing: true
  },
  {
    userName: 'isthatpaus',
    name: 'Yin',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
