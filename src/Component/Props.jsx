import React from 'react'
import { props } from './Data'

const Props = () => {
    return (
        <div className='container-fluid mb-2'>
            <div className='row'>
                <div className='h1 text-center my-4 font-weight-bold'>
                    {props.title}
                </div>
                <div className='bg-info '>
                    <div className='py-4 h5'>

                        {props.points1.map((points1) => {

                            return (
                                <div>
                                    ✅ {points1}
                                </div>
                            )
                        })}
                    </div>

                    <div className='h5'>
                        An example of using props in React Components:
                    </div>

                    <div className='container'>
                        <div className='row my-4'>
                            <div className='d-flex col-6'>
                                <img className="img-fluid" src={require('../data/props_left.png')} alt="left" />
                            </div>
                            <div className='col-6'>
                                <img className="img-fluid" src={require('../data/props_right.png')} alt="right" />
                            </div>

                        </div>

                    </div>

                    <div className='h5 py-4'>
                        {props.points2.map((points2)=>{

                            return(
                                <div>
                                     ✅ {points2}
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Props
