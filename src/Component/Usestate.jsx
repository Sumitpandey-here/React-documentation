import React from 'react'
import { usestate } from './Data'
const Usestate = () => {

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='h1 text-center my-2 font-weight-bold'>
                    {usestate.title}
                </div>
                <div className='bg-info my-2'>
                    <div className='mt-4' >
                        {usestate.points1.map((points1) => {

                            return (
                                <div className='h5'>
                                    ✅{points1}
                                </div>
                            )
                        })}

                    </div>

                    <div>
                        {usestate.points2.map((points2) => {
                            return (
                                <div className='h5 ms-4'>
                                    {points2}
                                </div>
                            )
                        })}
                    </div>

                    <div className='my-4 h5'>
                        Example of UseState :
                    </div>

                    <div className='text-center mb-4'>
                        <img  className='img-fluid' src={require("../data/usestate_hook.png")} alt="usestate" />

           
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usestate
