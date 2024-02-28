import React from 'react'
import { usecontext } from './Data'

const Usecontext = () => {
    return (
        <div className='container-fluid mb-2'>
            <div className='row'>

                <div className='h1 text-center my-2 font-weight-bold'>
                    {usecontext.title}
                </div>
            

            <div className='bg-info py-2'>
                <div className='my-4'>
                    {usecontext.points.map((points) => {
                        return (
                            <div className='h5'>
                                ✅{points}
                            </div>
                        )
                    })}

                    <div className='h5 py-2'>
                        Example of UseContext :

                    </div>

                    <div className='row my-4'>
                        <div className='col-4'>
                            <img className="img-fluid" src={require("../data/usecontext_left.png")} alt="left" />
                        </div>
                        <div className='col-4'>
                            <img className="img-fluid" src={require("../data/usecontext_middle.png")} alt="middle" />
                        </div>
                        <div className='col-4'>
                            <img className="img-fluid" src={require("../data/usecontext_right.png")} alt="right" />
                        </div>

                    </div>
                </div>

            </div>

        </div>
        </div>
    )
}

export default Usecontext
