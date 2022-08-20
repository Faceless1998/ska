import React from 'react'
import './homecategories.css'

import IMG1 from './../../assets/icon1.svg'
import IMG2 from './../../assets/icon2.svg'
import IMG3 from './../../assets/icon3.svg'

const Homecategories = () => {
  return (
    
    <>
    <div className="services-area">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <img src={IMG1} alt=""/>
                            </div>
                            <div className="features-caption">
                                <div className="cattitle">60+ UX courses</div>
                                <div className="catpar">The automated process all your website tasks.</div >
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <img src={IMG2} alt=""/>
                            </div>
                            <div className="features-caption">
                                <div className="cattitle">Expert instructors</div>
                                <div className="catpar">The automated process all your website tasks.</div >
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <img src={IMG3} alt="" />
                            </div>
                            <div className="features-caption">
                                <div className="cattitle">Life time access</div>
                                <div className="catpar">The automated process all your website tasks.</div >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default Homecategories