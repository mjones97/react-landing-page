import React from 'react'
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='content'>
          <div className='col-1'>
            <div className='col-items'>
              <h1>Data to enrich your<br />
              <span className='primary-color'>online business</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
               et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
               eu fugiat nulla pariatur.</p> 
              </div>
          </div>
          <div className='col-2'>
            <div className='form-layout'>
              <div className='form-container'>
                <p className='sign-in-text'>Sign in with</p>
                <div className='social-login'>
                  <span><FaFacebook size={20} /></span>
                  <span><FaTwitter size={20} /></span>
                  <span><FaGithub size={20} /></span>
                </div>
                <div className='divider'>
                  <p><span>Or</span></p>
                </div><form action=''>
                  <input type='text' placeholder='Name' />
                  <input type='text' placeholder='Email' />
                  <input type='text' placeholder='Password' />
                  <button>Create Account</button>
                </form>
              </div>
              <div className='form-footer'>
                <p>By signing up, you agree to our <span className='primary-color'>terms, data policy</span> and <span className='primary-color'>cookies policy</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
