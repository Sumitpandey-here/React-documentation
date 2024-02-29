import React from 'react'
import { callback_function } from './Data'

const Callback_function = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>

                <div className='h1 text-center my-4 font-weight-bold'>
                    {callback_function.title}

                </div>

                <div className='h5 my-2 bg-info'>
                    <div className='my-4'>
                        {callback_function.points1.map((points1) => {

                            return (
                                <div >
                                    ✅ {points1}
                                </div>
                            )
                        })}
                    </div>
                    <div className='h5'>
                        Here are a few scenarios where callback functions are commonly used in React :
                    </div>

                    <div className='h3'>
                        {callback_function.title1}
                    </div>
                    <div className='h5' >
                        ✅{callback_function.points2}
                    </div>
                    <div className='my-4 text-center'>
                        <img className="img-fluid w-50" src={require("../data/callback_function.png")} alt="callback" />
                    </div>

                    <div className='h3 my-2'>
                        {callback_function.title2}

                    </div>
                    <div className='h5 my-4'>
                        ✅{callback_function.points3}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Callback_function
