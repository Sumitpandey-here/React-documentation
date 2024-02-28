import React from 'react'
import { introduction } from './Data'

console.log(introduction);

const Introduction = () => {
  return (
<div className='container-fluid mb-2'>
<div className='row'>
    <div className='h1 text-center my-4 font-weight-bold'>
        {introduction.title}
    </div>
<div className='col-6 bg-info py-4'>
    <div className='h3'>
        Key Points:
    </div>
    {introduction.points.map((intro)=>{
       
        return(
    <div className='h5'>
       ✅ {intro}
    </div>
        )
    })}

</div>
<div className='col-6'>
<img className="img_width" src={require('../data/intro_img.png')} alt="" />
</div>
        </div>
      
    </div>
  )
}

export default Introduction
