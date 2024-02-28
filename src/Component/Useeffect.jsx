import React from 'react'
import { useeffect } from './Data'

const Useeffect = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>

                <div className='h1 text-center my-2 font-weight-bold'>
                    {useeffect.title}
                </div>
                <div className='bg-info my-2'>

                    {useeffect.points.map((points) => {

                        return (
                            <div className='h5 mt-4'>
                                ✅{points}
                            </div>
                        )
                    })}

                    <div className='my-4 h5 ms-4'>
                        Example of UseEffect :
                    </div>

                    <div className='text-center my-4'>
                        <img className="img-fluid" src={require("../data/useeffect.png")} alt="useeffect" />
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Useeffect
