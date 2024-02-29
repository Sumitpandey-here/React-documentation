import React from 'react'
import { react_dom } from './Data'

const React_dom = () => {
  return (
    <div className='container-fluid mb-2'>
      <div className='row'>
        <div className='h1 text-center my-4 font-weight-bold'>
          {react_dom.title}
        </div>
        <div className='bg-info py-4'>
          {react_dom.points1.map((points1) => {
            return (
              <div className='h5 my-2'>
                ✅{points1}
              </div>

            )

          })}

          <div className='text-center py-2'>
            <img className='img-fluid' src={require('../data/react_dom.jpg')} alt="react" />
          </div>

          {react_dom.points2.map((points2) => {

            return (

              <div className='h5 py-2'>
                {points2}
              </div>

            )
          })}

          <div className='h3 py-2 text-success'>
            {react_dom.title1}
          </div>

          {react_dom.points3.map((points3) => {

            return (
              <div className='h5'>

                ✅{points3}
              </div>

            )
          })}

          <div className='h3 text-success my-2'>
            {react_dom.title2}

          </div>

          {react_dom.points4.map((points4)=>{
            return(
              <div className='h5'>

✅ {points4}
              </div>

            )
          })}
        </div>

      </div>

    </div>
  )
}

export default React_dom
