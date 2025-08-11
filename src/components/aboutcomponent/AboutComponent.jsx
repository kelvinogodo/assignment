import React from 'react'
import './aboutcomponent.css'
const AboutComponent = () => {
  return (
      <section className='aboutComponentSection' id='about'>
          <div className="landpage-text-container" 
            >
                <h1
                    initial={{y:45, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.2}}
                >
                   
                    Innovative Copy Trading Platform for 
                </h1>
                <p
                    initial={{y:45, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.4}}
                >
                    Trust us to navigate the complexities of the investment market, while you sit back and watch your wealth flourish. It's time to unlock your financial potential and embark on a prosperous journey with us.
                  </p>
                <button className="cssbuttons-io"initial={{y:45, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.4}} onClick={()=>{
                        navigate('/signup')
                    }} >
                  <span>get started</span>
                </button>
            </div>
              <div className="landpage-img-container">
                  <img src="/commissionBuilding.jpg" alt="" className='phone'
                    initial={{ y: 45, opacity: 0 }}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.6}}/>
            </div>
    </section>
  )
}

export default AboutComponent