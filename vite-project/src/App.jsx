
import './App.css'
import image from './images/hero_iphone15pro__i70z9oz3hj2i_largetall.jpg'
import iphone from './images/hero_iphone15_announce__uuemlcwczn6u_largetall.jpg'

function App() {


  return (
    <div className='bg-gray-200'>
      <nav className='bg-neutral-700 text-white p-4 fixed w-full z-10 top-0'>
        <div className='container'>
          <div className='flex justify-center'>
            <ul className='flex space-x-4'>
              <li><a href="#" className=''>Store</a></li>
              <li><a href="#" className=''>Mac</a></li>
              <li><a href="#" className=''>ipad</a></li>
              <li><a href="#" className=''>iphone</a></li>
              <li><a href="#" className=''>Watch</a></li>
              <li><a href="#" className=''>Vision</a></li>
              <li><a href="#" className=''>AirPods</a></li>
              <li><a href="#" className=''>TV&Home </a></li>
              <li><a href="#" className=''>Entertainment</a></li>
              <li><a href="#" className=''>Accessories</a></li>
              <li><a href="#" className=''>Support</a></li>
            </ul>
          </div>

        </div>
      </nav>
      <div className='container relative mt-10 '>
          <img src={image} className='h-96' alt="" />
          <div className='  absolute  left-0  top-20 right-0 text-center'>
            <h2 className='text-white font-semibold text-4xl'>iphone 15</h2>
            <h3 className='text-white'>Titanium. So strong. So light. So Pro.</h3>
            <a href="#" className='text-sky-600 mx-5'>Learn more</a>
            <a href="#" className='text-sky-600 mx-5'>Buy</a>
          </div>
        </div>
        <div className='container relative  '>
          <img src={iphone} className='h-96' alt="" />
          <div className='  absolute  left-0  top-28 right-0 text-center'>
            <h2 className='text-black font-semibold text-4xl'>iphone 15</h2>
            <h3 className='text-black'>New camera. New design. Newphoria.</h3>
            <a href="#" className='text-sky-600 mx-5'>Learn more</a>
            <a href="#" className='text-sky-600 mx-5'>Buy</a>
          </div>
        </div>
      </div>
      
  

  )
}

export default App
