import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { GiSkills } from "react-icons/gi";



const SkillUpload = () => {
    const [persent, setPersent]= useState(0)

    const {register, handleSubmit, formState: {errors}, reset}= useForm()
    // upload about 
    const uploadSkills=data=>{
 
        const skills={
            name: data.name,
            percent: data.percent,
            category: data.category
        }
        console.log(skills)
 fetch('http://localhost:5000/uploadSkill',{
    method: 'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(skills)
 })
 .then(res=>res.json())
 .then(result=>{
    console.log(result)
    toast.success('your skill uploaded to the database successfully!')
 })
 reset()
    }
    
    return (
        <div className=''>
            

            {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* modal open button  */}
<div className='card h-[200px] absolute w-[150px] cursor-pointer mt-5 bg-gradient-to-r from-green-200 to-green-700'>
<hr className='text-white  mt-4' />
<hr className='text-white  mt-4' />
<hr className='text-white  mt-4' />
<hr className='text-white  mt-4' />
<hr className='text-white  mt-4' />
<hr className='text-white  mt-4' />
<hr className='text-white  mt-4' />
<hr className='text-white  mt-4' />
<hr className='text-white  mt-4' />
<hr className='text-white  mt-4' />
</div>
<div className="card h-[200px] bg-transparent relative w-[150px]  hover:bg-black hover:border duration-500 hover:border-white p-[20px] cursor-pointer mt-5" onClick={()=>document.getElementById('my_modal_skill').showModal()}>
<GiSkills className='text-[10vh] mx-auto my-auto text-white mt-4' />
<h1 className='text-white text-xl -mt-9 text-center font-bold'>Add Skill</h1>
    </div>
{/*modal open button  */}
<dialog id="my_modal_skill" className="modal">
  <div className="modal-box relative">
    <h3 className="font-bold text-lg">Add Skill Here</h3>
    <form onSubmit={handleSubmit(uploadSkills)}>

            <select name='category' {...register('category')} className="select select-bordered w-[90%] ml-0 md:ml-5 text-black">
  <option disabled selected>Select Skill Category</option>
  <option>Software Skills</option>
  <option>Personal skills</option>
</select>
            <input type="text" name="name" {...register('name')} placeholder="Type skill name here" className=" hover:bg-blue-100 text-black w-[90%] textarea p-5 rounded-md mx-5 my-5 border-gray-400 focus:border-gray-300  focus: " />
            <div>
            <input name='percent' className='w-full' {...register('percent')} type='range' min='0' max='100' step='1' value={persent} onChange={(e)=>setPersent(e.target.value)} />
            <h1 className=' text-center text-black'>{persent}</h1>
            </div>

            
           <button className='bg-blue-500 text-white p-[12px] rounded-lg font-semibold absolute bottom-[23px] right-[100px]' type='submit' value='Submit'>Submit</button>
            </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
           
        </div>
    );
}

export default SkillUpload;
