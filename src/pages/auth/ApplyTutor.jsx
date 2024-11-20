import React from 'react'
import { Link } from 'react-router-dom';

function ApplyTutor() {
  const countryes = [
    "Bangladesh",
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "United Kingdom",
  ];

  const programs = [
    "Math and English Tuition",
    "11 Plus and Entrance Exams",
    "GCSE preparation and tutoring"
  ];

  const classSub = [
    "Math",
    "English",
  ];

  return (
  <div className='mt-7 container'>
   <div>
   <h2 className='w-[700px] text-[30px] font-semibold leading-[38px]'>To apply as a tutor</h2>
    <p className='w-[627px] h-[48px] text-[16px] leading-[24px] mt-3'>You’ll need to provide some essential information about your qualifications, experience, and teaching style.</p>         
   </div>

    <div className='mt-3'>
      <div className='mt-9'>
      <h2>Program</h2>
      <div className='flex gap-2 items-center  w-[300px] h-[48px] border-2 border-primary rounded-lg pl-4 text-primary  mt-2'>
        <input className='w-[16px] h-[16px] valid:border-green-500  ' type="radio" id='onlineTuition' checked value='Online Tuition' />
        <label className='text-[16px] ' htmlFor="onlineTuition">online Tuition</label>
      </div>
    </div>

    <div className='grid grid-cols-2 justify-between w-full space-y-7'>
      <div className=' grid w-[305px] mt-7 '>
        <label htmlFor="firstName">First name</label>
        <input className='border rounded-lg h-[48px] pl-4 mt-2' type="text" id='firstName' name='firstName' required placeholder='Enter your first name' />
      </div>

      <div className=' grid w-[305px] '>
        <label htmlFor="lastName">Last name</label>
        <input className='border rounded-lg h-[48px] pl-4 mt-2' type="text" id='lastName' name='lastName' required placeholder='Enter your last name' />
      </div>

      <div className=' grid w-[305px] '>
        <label htmlFor="email">Email address</label>
        <input className='border rounded-lg h-[48px] pl-4 mt-2' type="email" id='email' name='email' required placeholder='Enter your email address' />
      </div>

      <div className=' grid w-[305px] '>
        <label htmlFor="phone">Phone number</label>
        <input className='border rounded-lg h-[48px] pl-4 mt-2' type="tel" id='phone' name='phone' required placeholder='Enter your phone number' />
      </div>

      <div className='grid w-[305px]'>
      <label htmlFor="country">Country</label>
      <select name="" id="country" className='border rounded-lg h-[48px] pl-4 mt-2'>
       <option value="">Select your country</option>
       {countryes.map((countryes) =>(
        <option key={countryes} value={countryes}> {countryes} </option>
       )) }
      </select>
      </div>

      <div className='grid w-[305px]'>
       <label htmlFor="experience">Experience</label>
       <input className='border rounded-lg h-[48px] pl-4 mt-2' type="number" id="experience" name="experience" required placeholder='1 years' />
       </div>

      <div className='grid w-[305px]'>
        <label htmlFor="Program">Program</label>
        <select name="" id="Program" className='border rounded-lg h-[48px] pl-4 mt-2'>
          <option value="">Select your program</option>
          {programs.map((programs) =>(
            <option key={programs} value= {programs}> {programs} </option>
          ))}
        </select>
      </div>

      <div className='grid w-[305px]'>
        <label htmlFor="class">Class</label>
        <select name="class" id="class" className='border rounded-lg h-[48px] pl-4 mt-2'>
          <option value="">Select your class</option>
          {classSub.map((classSub) =>(
            <option key={classSub} value= {classSub}> {classSub} </option>
          ))}
        </select>
      </div>
    </div>
     </div>


    <div className='mt-7 space-y-7'>
      <div className=' grid items-center justify-center'>
       <label htmlFor="curriculumVitae" className='block text-gray-700 font-semibold mb-2'> Curriculum Vitae</label>
      <div className=' grid items-center justify-between '>
      <input type="file" id="curriculumVitae" className=" shadow appearance-none border border-black rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[250px] w-[1100px] " required />
      </div>
      </div>
   

    <div>
      <div className=' grid items-center justify-center'>
       <label htmlFor="videoResume" className='block text-gray-700 font-semibold mb-2'>  Video Resume</label>
      <div className=' grid items-center justify-between '>
      <input type="file" id="videoResume" className=" shadow appearance-none border border-black rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[250px] w-[1100px] " required />
      </div>
      </div>
    </div>
    </div>

    <div className='flex items-center justify-center py-8'>
   <Link to= "/home" className='bg-primary text-white rounded-full px-28 py-2 flex items-center gap-1 text-xl'> Submit</Link> 
    </div>
   
  </div>
)
}


export default ApplyTutor
