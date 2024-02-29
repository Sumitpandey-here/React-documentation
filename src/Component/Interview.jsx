import React from 'react'
import { question } from './Qustions'


const Interview = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>

                <div className='h1 text-center  font-weight-bold'>
                    Interview Questions
                </div>

                <div className='bg-info my-4'>

                    <ul className='my-5'>
                        {question.map((pair, index) => (
                            <li className='my-4' key={index}>
                                <strong className='h4'>{pair.ques}</strong> <br></br><span className='h6'>✅{pair.ans}</span>
                            </li>
                        ))}
                    </ul>

                </div>


            </div>

        </div>
    )
}

export default Interview
