import React, { useEffect, useState } from 'react'
import FaceExpression from '../../expression/components/FaceExpressions'
import Player from '../components/Player'
import { useSong } from '../hooks/useSong'
import Playlists from '../components/Playlists'
import Expresion from '../../expression/components/Expresion'

const Home = () => {
  const {handleGetSong} = useSong()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='player-page'>
      <div className="left">
        <FaceExpression onClick={(expression) => {handleGetSong({mood: expression})}} />
        {!isMobile && <Player />}   {/* sirf desktop pe render */}
      </div>

      <div className="right">
        <Playlists/>
      </div>

      {isMobile && (
        <div className="player-wrapper">
          <Player />                 {/* sirf mobile pe render */}
        </div>
      )}
    </div>
  )
}

export default Home
