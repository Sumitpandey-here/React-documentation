import React from 'react'
import { lifecycle } from './Data'

const Lifecycle = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='h1 text-center my-2 font-weight-bold'>
                    {lifecycle.title}
                </div>
                <div className='bg-info my-2'>
                    <div className='h5 mt-4'>
                        ✅ In React, components go through several lifecycle stages from initialization to unmounting.
                    </div>
                    <div className='h5 my-2'>
                        Let we disuss each stage :
                    </div>

                    <div className='my-3 h3'>
                        {lifecycle.title1}
                    </div>

                    <div className='h5'>
                        {lifecycle.points1.map((points1)=>{
                            return(
                                <div>
                                     ✅{points1}
                                </div>
                            )
                        })}
                        
                    </div>

                    <div className='my-3 h3'>
                        {lifecycle.title1}
                    </div>

                    <div className='h5'>
                        {lifecycle.points1.map((points1)=>{
                            return(
                                <div>
                                     ✅{points1}
                                </div>
                            )
                        })}
                        
                    </div>

                    <div className='my-3 h3'>
                        {lifecycle.title2}
                    </div>

                    <div className='h5'>
                        {lifecycle.points2.map((points2)=>{
                            return(
                                <div>
                                     ✅{points2}
                                </div>
                            )
                        })}
                        
                    </div>

                    <div className='my-3 h3'>
                        {lifecycle.title3}
                    </div>

                    <div className='h5'>
                        {lifecycle.points3.map((points3)=>{
                            return(
                                <div>
                                     ✅{points3}
                                </div>
                            )
                        })}
                        
                    </div>

                    <div className='my-2 h3'>
                        {lifecycle.title4}
                    </div>

                    <div className='h5 mb-4'>
                        {lifecycle.points4.map((points4)=>{
                            return(
                                <div>
                                     ✅{points4}
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Lifecycle
