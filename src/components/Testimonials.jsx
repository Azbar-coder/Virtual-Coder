import React from 'react';
import { testimonials } from '../constants';

const Testimonials = () => {
    return (
        <div>
            <h2 className='mt-20 text-3xl sm:text-5xl lg:text-6xl tracking-wide text-center  my-10'>What People are saying</h2>
            <div className='flex flex-wrap justify-center '>
                {testimonials.map((testimonial, id) => (
                    <div key={id} className='w-full sm:w-1/2 lg:w-1/3 py-2 '>
                        <div className='bg-neutral p-10 rounded-md border border-neutral-800 font-thin shadow-lg mx-3 my-3'>
                            <p>{testimonial.text}</p>
                            <div className='flex mt-8 items-start'>
                                <img src={testimonial.image} className='w-12 h-12 rounded-full  mr-6 border border-neutral-300' />
                                <div className='flex flex-col'>
                                    <span className='text-sm font-normal text-neutral-500'>{testimonial.user}</span>
                                    <span className='text-sm italic text-neutral-600 font-normal'>{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Testimonials
