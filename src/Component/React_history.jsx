import React from 'react'
import { react_history } from './Data'

const React_history = () => {
    return (
        <div className='container-fluid bg-light'>
            <div className='row'>
                <div className='h1 text-center my-4 font-weight-bold'>
                    {react_history.title}
                </div>
                <div className='bg-info h5 py-4'>
                    <div className='h3'>
                        Key Points:
                    </div>
                    {react_history.Points1.map((history) => {
                        return (
                            <div >
                                ✅ {history}

                            </div>

                        )
                    })}

                    <hr></hr>
                    <div className='h3 text-center'>
                        {react_history.title1}
                    </div>

                    {react_history.points2.map((history2) => {

                        return(
                        <div>
                            {history2}

                        </div>
                        )
                    })}
                    <div >

                    </div>
                    <div>

                    </div>




                    <div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default React_history
