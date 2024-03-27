
import './App.css'
import image from './images/hero_iphone15pro__i70z9oz3hj2i_largetall.jpg'
import iphone from './images/hero_iphone15_announce__uuemlcwczn6u_largetall.jpg'
import appleIcon from "./images/icons8-apple-50.png"
import macBook from "./images/macbook.jpg"
import imac from "./images/imac.jpg"
import watch from "./images/watch.jpg"
import airpod from './images/airpod.jpg'
import ipad from './images/ipad.jpg'

function App() {


  return (
    <div className='bg-gray-200'>
      <nav className='bg-neutral-700 text-white p-4 fixed w-full z-10 top-0'>
        <div className='container ml-80'>
          <div className='flex justify-center '>
            <ul className='flex space-x-4  '>
              <li ><a href=""><img src={appleIcon} alt="" /></a></li>
              <li className='mt-4'><a href="#" className='text-xl'>Store</a></li>
              <li className='mt-4'><a href="#" className='text-xl'>Mac</a></li>
              <li className='mt-4'><a href="#" className='text-xl'>ipad</a></li>
              <li className='mt-4'><a href="#" className='text-xl'>iphone</a></li>
              <li className='mt-4'><a href="#" className='text-xl'>Watch</a></li>
              <li className='mt-4'><a href="#" className='text-xl'>Vision</a></li>
              <li className='mt-4'><a href="#" className='text-xl'>AirPods</a></li>
              <li className='mt-4'><a href="#" className='text-xl'>TV&Home </a></li>
              <li className='mt-4'><a href="#" className='text-xl'>Entertainment</a></li>
              <li className='mt-4'><a href="#" className='text-xl'>Accessories</a></li>
              <li className='mt-4'><a href="#" className='text-xl'>Support</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className=' relative mt-10'>
          <img src={image} className='h-screen w-full object-cover' alt="" />
          <div className='  absolute  left-0  top-28 right-0 text-center'>
            <h2 className='text-white font-semibold text-9xl'>iPhone 15</h2>
            <h3 className='text-white text-6xl mt-4'>Titanium. So strong. So light. So Pro.</h3>
            <a href="#" className='text-sky-600 mx-5 text-4xl mt-4'>Learn more</a>
            <a href="#" className='text-sky-600 mx-5 text-4xl mt-6'>Buy</a>
          </div>
        </div>
        <div className='relative  '>
          <img src={iphone} className='h-screen w-full object-cover' alt="" />
          <div className='  absolute  left-0  top-28 right-0 text-center'>
            <h2 className='text-black font-semibold text-9xl'>iPhone 15</h2>
            <h3 className='text-black text-6xl mt-4 '>New camera. New design. Newphoria.</h3>
            <a href="#" className='text-sky-600 mx-5 text-4xl'>Learn more</a>
            <a href="#" className='text-sky-600 mx-5 text-4xl'>Buy</a>
          </div> 
        </div>
        <div className='relative'>
          <img src={macBook} className='h-screen w-full object-cover' alt="" />
          <div className='  absolute  left-0  top-28 right-0 text-center'>
            <h2 className='text-black font-semibold text-9xl'>MacBook</h2>
            <h3 className='text-black text-6xl mt-4'>Mind-blowing. Head-turning.</h3>
            <a href="#" className='text-sky-600 mx-5 text-4xl'>Learn more</a>
            <a href="#" className='text-sky-600 mx-5 text-4xl'>Order Now</a>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
          <div className='relative'>
          <img src={imac} className='w-full object-cover' alt="" />
          <div className='  absolute  left-0  top-1 right-0 text-center'>
            <h4 className='text-black font-semibold text-7xl'>iMac</h4>
            <h3 className='text-black text-4xl mt-2'>Packed with more juice.</h3>
            <a href="#" className='text-sky-600 mx-5 text-3xl'>Learn more</a>
            <a href="#" className='text-sky-600 mx-5 text-3xl'>Order Now</a>
          </div>
          </div>
          <div className=' relative'>
          <img src={watch} className='w-full object-cover' alt="" />
          <div className='  absolute  left-0  top-6 right-0 text-center'>
            <h4 className='text-white font-semibold text-5xl'>WATCH</h4>
            <h4 className='text-red-500 font-medium  text-3xl'>SERIES 9</h4>
            <h3 className='text-white text-4xl mt-2'>Smarter. Brighter. Mightier.</h3>
            <a href="#" className='text-sky-600 mx-5 text-3xl'>Learn more</a>
            <a href="#" className='text-sky-600 mx-5 text-3xl'>Order Now</a>
          </div>
          </div>
          <div className='relative'>
          <img src={airpod} className='' alt="" />
          <div className='  absolute  left-0  top-7 right-0 text-center'>
            <h4 className='text-white font-semibold text-5xl'>AirPods Pro</h4>
            <h3 className='text-white text-4xl mt-2'>Adaptive Audio. Now playing.</h3>
            <a href="#" className='text-sky-600 mx-5 text-3xl'>Learn more</a>
            <a href="#" className='text-sky-600 mx-5 text-3xl'>Order Now</a>
          </div>
          </div>
          <div className='relative'>
          <img src={ipad} className='' alt="" />
          <div className='  absolute  left-0  top-1 right-0 text-center'>
            <h4 className='text-black font-semibold text-7xl'>iPad</h4>
            <h3 className='text-black text-4xl mt-2'>Lovable. Drawable. Magical.</h3>
            <a href="#" className='text-sky-600 mx-5 text-3xl'>Learn more</a>
            <a href="#" className='text-sky-600 mx-5 text-3xl'>Order Now</a>
          </div>
          </div>
        </div>
      </div>
      
  

  )
}

export default App
