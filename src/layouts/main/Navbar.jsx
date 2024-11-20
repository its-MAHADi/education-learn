
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {


// const learnList = [
//    {
//     title:"Home",
//     path:"/home"
//    },
//    {
//     title:"Online Tuition",
//     path:"/online-tuition"
//    },
//    {
//     title:"Personal Development",
//     path:"/personal-development"
//    },
//    {
//     title:"Resources",
//     path:"/resources"
//    },
//   //  {
//   //   title:"Apply as a tutor",
//   //   path:"/auth/apply-as-a-tutor"
//   //  },
//   //  {
//   //   title:"Log in",
//   //   path:"/auth/login"
//   //  },
// ]

  return (   
   <nav className="flex items-center justify-between container mt-3">
     <div>
      <img src= {logo} alt="" />
     </div>

     <div className="flex items-center gap-12">
      <a href="">Home</a>
      <select name="" id="">
        <option value="">Online Tuition</option>
        <option value="">Math</option>
        <option value="">English</option>
        </select>

        
        <select name="" id="">
            <option value="">Personal Development</option>
            <option value="">STEM Education</option>
            <option value="">Arts and Crafts</option>
            <option value="">Science</option>
          </select>

          <select name="" id="">
            <option value="">Resources</option>
          </select>

          <Link to= "/auth/apply-as-a-tutor" className="border border-black px-3 py-2 rounded-full hover:bg-secondary text-black duration-150 hover:text-white" >Apply as a tutor</Link> 
          <Link to= "/auth/login" className="bg-primary rounded-full px-4 py-2 text-white" >Log in</Link>  
    

     </div>

   </nav>
   
  )
}

export default Navbar















// {
//   learnList.map((item,index)=>  <li> <Link to={item.path} > {item.title} </Link></li> )
//  }

    
// {
//   learnList.map((item,index)=>  <li> <Link to={item.path} > {item.title} </Link></li> )
// }




// <nav className='flex items-center justify-between container'>
// <div>
//   <img src={logo} alt="" />
// </div>
// <ul className="flex items-center gap-14 " >

//  <li> <Link to= "/auth/apply-as-a-tutor" >Apply as a tutor</Link> </li>
//  <li> <Link to= "/auth/login" >Log in</Link> </li>
// </ul>
// </nav>