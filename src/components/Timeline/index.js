import { StyledTimeline } from './StyledTimeline'

export default function Timeline({ valorDoFiltro, ...props }) {
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
