import React from 'react'
import { usememo } from './Data'
const Usememo = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>

                <div className='h1 text-center my-2 font-weight-bold'>
                    {usememo.title}
                </div>

                <div className='bg-info my-2'>
                    <div className='my-4 h5'>
                        {usememo.points.map((points) => {
                            return (
                                <div className='h5'>
                                    ✅ {points}
                                </div>
                            )
                        })}

                        <div className='h5 my-2 ms-4'>
                            Example of UseMemo :
                        </div>

                        <div className='text-center mt-3'>
                            <img className='img-fluid' src={require("../data/usememo.png")} alt="" />
                        </div>
                        <div className='h5 my-2 ms-4 mt-3'>
                            {usememo.points2}
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Usememo
