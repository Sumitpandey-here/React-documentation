import React from 'react'
import { useref } from './Data'

const Useref = () => {
    return (
        <div className='container-fluid  mb-2'>
            <div className='row'>
                <div className='h1 text-center my-2 font-weight-bold'>
                    {useref.title}
                </div>

                <div className='bg-info py-2'>

                    <div className='my-4'>
                        {useref.points.map((points) => {

                            return (
                                <div className='h5'>
                                    ✅ {
                                        points
                                    }
                                </div>
                            )
                        })}

                        <div className='h5 my-2'>
                            Example of UseRef :
                        </div>

                        <div className='text-center my-4'>
                            <img className='img-fluid' src={require("../data/useref.png")} alt="" />

                        </div>

                        <div className='h5 ms-4'>
                            {useref.points2}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Useref
