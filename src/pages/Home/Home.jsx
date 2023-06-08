import React from 'react'
import './Home.css'
import SearchBox from '../../components/SearchBox'
import { imageCard } from '../../data'

const Home = () => {
  
  return (
    <>
        <div className="container">
              <div className="title">
                  <h1>Image Gallery</h1>
              </div>
              <SearchBox />
              <div className="gallery-container">
                {imageCard.map((image) => {
                  const {id, src} = image
                  return (
                      <div key={id} className="card">
                        <img src={src} className='img' alt="" />
                        <p>Download</p>
                      </div>
                  )
                })}
              </div>
        </div>
    </>
  )
}

export default Home