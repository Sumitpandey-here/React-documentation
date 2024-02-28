import React from 'react'
import { props_drilling } from './Data'

const Props_drilling = () => {
    return (
        <div className='container-fluid mb-2'>
            <div className='row'>
                <div className='h1 text-center my-4 font-weight-bold'>
                    {props_drilling.title}
                </div>

                <div className='bg-info py-2'>
                    <div className='py-4 h5'>
                        {props_drilling.Points1.map((points1) => {
                            return (
                                <div>
                                    ✅ {points1}
                                </div>
                            )
                        })}
                    </div>

                    <div className='row'>
                        <div className='col-4 d-flex'>
                            <img className="img-fluid" src={require('../data/props_drilling_left.png')} alt="left" />
                        </div>
                        <div className='col-4 d-flex'>
                            <img className="img-fluid" src={require('../data/props_drilling_middle.png')} alt="left" />
                        </div>
                        <div className='col-4 d-flex'>
                            <img className="img-fluid" src={require('../data/props_drilling_right.png')} alt="left" />
                        </div>

                    </div>

                    <div className='my-4 h5'>

                    ✅{props_drilling.points2}

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Props_drilling
