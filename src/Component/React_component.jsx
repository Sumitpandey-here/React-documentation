import React from 'react'
import { react_components } from './Data'
const React_component = () => {
    return (
        <div className='container-fluid mb-2'>
            <div className='row'>
                <div className='h1 text-center my-4 font-weight-bold'>
                    {react_components.title}
                </div>
                <div className='bg-info py-3'>
                    {react_components.points1.map((points1) => {

                        return (

                            <div className='h5 my-2'>
                                ✅ {points1}
                            </div>
                        )
                    })}

                    <div className='h3 my-3'>
                        {react_components.title1}

                    </div>
                    <div className='my-4'>
                        {react_components.points2.map((points2) => {
                            return (
                                <div className='h5 pmy-2'>
                                    {points2}
                                </div>

                            )
                        })}

                    </div>

                    <div className='h3 my-2'>
                        {react_components.title3}

                    </div>
                    <div className='py-2'>
                        {react_components.points3.map((points3) => {
                            return (
                                <div className='h5'>
                                    ✅ {points3}

                                </div>
                            )
                        })}
                    </div>
                    <div className='h5'>
                        Simplest way to write a Function component:
                    </div>

                    <div className='text-center my-5'>
                        <img src={require('../data/react_functional_component.png')} alt="react" />
                    </div>
                    <div className='h5'>
                    Example :
                    </div>

                    <div className='text-center py-5'>
                        <img src={require('../data/react_functional_component_part2.png')} alt="react" />
                    </div>

                    <div className='h3'>
                   {react_components.title4}
                    </div>
                    <div className='py-3'>
                        {react_components.points4.map((points4)=>{

                            return(
                            <div className='h5'>
                        ✅ {points4}

                            </div>
                            )
                        })}
                    </div>

                    <div className='h5'>
                    Simplest way to write a Class component:
                    </div>
                    <div className='text-center my-4'>
                        <img src={require('../data/class_component.png')} alt="react" />
                    </div>
                    <div className='h5'>
                    Example :
                    </div>
                    <div className='text-center my-4'>
                        <img src={require('../data/class_component_part2.png')} alt="react" />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default React_component
