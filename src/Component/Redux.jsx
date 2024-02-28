import React from 'react'
import { redux } from './Data'
const Redux = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>

                <div className='h1 text-center mt-2 font-weight-bold'>
                    {redux.title}
                </div>

                <div className='bg-info my-2'>
                    <div className='my-4 h5'>

                        {redux.points}

                    </div>

                  

                    <div className='my-4 h3'>
                        ✅{redux.title2}
                    </div>
                    <div className='my-2 text-center'>
                        <img src={require("../data/redux_install.png")} alt="redux" />

                    </div>

                    <div className='my-4 h3'>
                        ✅{redux.title3}
                    </div>

                    <div className='my-4 h5 ms-4'>
                        {redux.points3}

                    </div>

                    <div className='my-2 text-center'>
                        <img src={require("../data/store.png")} alt="redux" />

                    </div>

                    <div className='my-4 h3'>
                        ✅{redux.title4}
                    </div>
                    <div className='my-4 h5 ms-4'>
                        {redux.points4}

                    </div>

                    <div className='my-2 text-center'>
                        <img src={require("../data/provider.png")} alt="redux" />

                    </div>


                    <div className='my-4 h3'>
                        ✅{redux.title5}
                    </div>
                    <div className='my-4 h5 ms-4'>
                        {redux.points5}

                    </div>

                    <div className='my-2 text-center'>
                        <img src={require("../data/slice.png")} alt="redux" />

                    </div>


                    <div className='my-4 h3'>
                        ✅{redux.title6}
                    </div>
                    <div className='my-4 h5 ms-4'>
                        {redux.points6}

                    </div>

                    <div className='my-2 text-center'>
                        <img src={require("../data/addslicereducerstore.png")} alt="redux" />

                    </div>


                    <div className='my-4 h3'>
                        ✅{redux.title7}
                    </div>
                    <div className='my-4 h5 ms-4'>
                        {redux.points7}

                    </div>

                    <div className='my-2 text-center'>
                        <img src={require("../data/actionstateredux.png")} alt="redux" />

                    </div>

                    <div className='h5 my-4 ms-4'>
                        {redux.points8}
                    </div>
                    <div className='my-4 h5 ms-2'>
                        {redux.poinst9.map((points9) => {
                            return (
                                <div>
                                    ✅{points9}
                                </div>
                            )
                        })}
                    </div>


                    <div className='text-center mb-4'>
                        <img className='img-fluid' src={require("../data/Redux_toolkit.png")} alt="redux" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Redux
