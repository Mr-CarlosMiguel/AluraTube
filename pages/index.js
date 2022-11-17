import React, { useState } from 'react'
import config from '../config.json'
import styled from 'styled-components'
import Menu from '../src/components/Menu'
import Timeline from '../src/components/Timeline'

export default function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState('')

  return (
    <>
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
  background-color: ${({theme}) => theme.backgroundLevel1};
  
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

