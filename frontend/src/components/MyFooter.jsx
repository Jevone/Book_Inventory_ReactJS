import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <Footer bgDark className='rounded-none'>
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div className='text-white'>
            <Footer.Title className='text-white' title="Company" />
            <Footer.LinkGroup col className='text-white'>
              <Footer.Link className='hover:text-yellow-400' href="#">About</Footer.Link>
              <Footer.Link className='hover:text-yellow-400' href="#">Careers</Footer.Link>
              <Footer.Link className='hover:text-yellow-400' href="#">Brand Center</Footer.Link>
              <Footer.Link className='hover:text-yellow-400' href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title  className='text-white' title="help center" />
            <Footer.LinkGroup col className='text-white'>
              <Footer.Link className='hover:text-yellow-400' href="#">Discord Server</Footer.Link>
              <Footer.Link className='hover:text-yellow-400' href="#">Twitter</Footer.Link>
              <Footer.Link className='hover:text-yellow-400' href="#">Facebook</Footer.Link>
              <Footer.Link className='hover:text-yellow-400' href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className='text-white' title="legal" />
            <Footer.LinkGroup col className='text-white'>
              <Footer.Link className='hover:text-yellow-400' href="#">Privacy Policy</Footer.Link>
              <Footer.Link className='hover:text-yellow-400' href="#">Licensing</Footer.Link>
              <Footer.Link className='hover:text-yellow-400' href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title  className='text-white' title="download" />
            <Footer.LinkGroup col className='text-white' >
              <Footer.Link className='hover:text-yellow-400' href="#">iOS</Footer.Link>
              <Footer.Link className='hover:text-yellow-400' href="#">Android</Footer.Link>
              <Footer.Link className='hover:text-yellow-400' href="#">Windows</Footer.Link>
              <Footer.Link className='hover:text-yellow-400' href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Jefri Jaya" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
            <Footer.Icon className='text-white hover:text-yellow-400' href="#" icon={BsFacebook} />
            <Footer.Icon className='text-white hover:text-yellow-400' href="#" icon={BsInstagram} />
            <Footer.Icon className='text-white hover:text-yellow-400' href="#" icon={BsTwitter} />
            <Footer.Icon className='text-white hover:text-yellow-400' href="#" icon={BsGithub} />
            <Footer.Icon className='text-white hover:text-yellow-400' href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter