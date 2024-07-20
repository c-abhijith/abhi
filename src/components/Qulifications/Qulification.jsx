import React, { useState } from 'react'
import "./Qulification.css"
export default function Qulification() {
    const[toggleState,setToggleState]=useState(1)
    const toggleTab=(index)=>{
        setToggleState(index);
    }
  return (
    <div className="qualification section" id='qualification'>
        <h2 className="section__title">Qulification</h2>
        <span className="section__subtitle">My personel journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState===1?
                    "qualification__button button--flex qualification__active":
                    "qualification__button button--flex"}
                    onClick={()=>toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap  qualification__icon"></i>
                    Education
                </div>

                <div className={toggleState===2?
                    "qualification__button button--flex qualification__active"
                    :"qualification__button button--flex"}
                    onClick={()=>toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState===1?
                "qualification__content qualification__content-active":
                    "qualification__content"}>
                    
                    <div className="qualification__data">            
                        <div>
                            <h3 className="qualification__title">GHS Pooyappally</h3>
                            <span className="qualification__subtitle">SSLC</span>
                            <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>   -2015
                            </div>
                            
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">  
                        <div></div>      
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>    
                        <div>
                            <h3 className="qualification__title">KPMHSS </h3>
                            <span className="qualification__subtitle">Computer Science</span>
                            <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2015-2017
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    <div className="qualification__data">            
                        <div>
                            <h3 className="qualification__title">University of Kerala</h3>
                            <span className="qualification__subtitle">BCA</span>
                            <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2017-2020
                            </div>
                            
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">  
                        <div></div>      
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>    
                        <div>
                            <h3 className="qualification__title">JAIN(Kochi)</h3>
                            <span className="qualification__subtitle">MCA</span>
                            <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2024-present
                            </div>
                            
                        </div>
                        
                    </div>
                    

                    
                    
                </div>
                <div className={toggleState===2?
                "qualification__content qualification__content-active":
                    "qualification__content"}>
                        <div className="qualification__data">            
                        <div>
                            <h3 className="qualification__title">CYBERIA (TVM)</h3>
                            <span className="qualification__subtitle">Intern</span>
                            <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2020-2021
                            </div>
                            
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">  
                        <div></div>      
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>    
                        <div>
                            <h3 className="qualification__title">CYBERIA (TVM)</h3>
                            <span className="qualification__subtitle">Software developert</span>
                            <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2021-2022
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="qualification__data">            
                        <div>
                            <h3 className="qualification__title">Syoft</h3>
                            <span className="qualification__subtitle">Jr software developert</span>
                            <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>2022-2023
                            </div>
                            
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    

                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}
