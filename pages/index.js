import config from '../config.json'
import styled from 'styled-components'
import { CSSReset } from '../src/components/CSS.reset'
import Menu from '../src/components/Menu'
import { StyledTimeline } from '../src/components/Timeline'

export default function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  )
}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user_info {
    display: flex;
    align-items: center;
    margin-top: 60px;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`
function Header() {
  return (
    <StyledHeader>
      <section className="user_info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline(props) {
  const playlistsNames = Object.keys(props.playlists)

  return (
    <StyledTimeline>
      {playlistsNames.map((playlistsNames) => {
        const videos = props.playlists[playlistsNames]
        return (
          <section>
            <h2>{playlistsNames}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
