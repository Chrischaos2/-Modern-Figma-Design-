import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import Ai  from '../../assets/Ai.png'

const Header = () => {
    return (
      <div className='gpt3__header section__padding' id='Home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>
            Lets Build Something amazing with GPT-4 OpenAI
          </h1>
          <p>To secure an internship position in software and website development or network management where I can
              apply my programming skills and network management expertise and continue to grow and learn in a
              dynamic environment.
           </p>

          <div className='gpt3__header-content__input'>
            <input type="email" placeholder='Your Email Address'/>
            <button type='button'>Get Started</button>
          </div>
          
          <div className='gpt3__header-content__people'>
            <img src="{people}" alt="people" />
            <p>1600 people requested access to visit in the last 24 hoours</p>
          </div>
          
          <div className='gpt3__header-image'>
            <img src="{Ai}" alt="Ai" />
          </div>
        </div>
      </div>
    )
}

export default Header