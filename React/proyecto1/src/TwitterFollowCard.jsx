import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ userName, name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard' >
            <header className='tw-followCard-header' >
                <img className='tw-followCard-avatar' alt="Avatar Kikobeats" src={`https://unavatar.io/twitter/${userName}`} />
                < div className="tw-followCard-info" >
                    <strong>{name}</strong>
                        <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick= {handleClick}>
                    <span className="tw-followCard-follow">{text}</span>
                    <span className="tw-followCard-stopFollowing">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}