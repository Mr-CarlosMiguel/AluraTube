import React, { useState } from 'react'
import config from '../config.json'
import styled from 'styled-components'
import { CSSReset } from '../src/components/CSS.reset'
import Menu from '../src/components/Menu'
import { StyledTimeline } from '../src/components/Timeline'

export default function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState('')

  return (
    <>
      <CSSReset />
      <div>
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline valorDoFiltro={valorDoFiltro} playlists={config.playlists} />
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
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`
const StyledBanner = styled.div`
  height: 240px;
  background-image: url(${config.bg});

`
function Header() {
  return (
    <StyledHeader>
      <StyledBanner />
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

function Timeline({ valorDoFiltro, ...props }) {
  const playlistsNames = Object.keys(props.playlists)

  return (
    <StyledTimeline>
      {playlistsNames.map((playlistsNames) => {
        const videos = props.playlists[playlistsNames]
        return (
          <section key={playlistsNames}>
            <h2>{playlistsNames}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormaLized = video.title.toLowerCase()
                  const filtroNormaLized = valorDoFiltro.toLowerCase()
                  return titleNormaLized.includes(filtroNormaLized)
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
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
