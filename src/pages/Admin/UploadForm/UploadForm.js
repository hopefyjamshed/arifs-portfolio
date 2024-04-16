import React from 'react';
import { useForm } from 'react-hook-form';
import './UploadForm.css'
import { IconName, SiAboutdotme } from "react-icons/si"
import toast from 'react-hot-toast';

const UploadForm = () => {
    const {register, handleSubmit, formState: {errors}, reset}= useForm()
    // upload about 
    const uploadAbout=data=>{
 console.log(data.about)
        const About={
            describe: data.about
        }
 fetch('http://localhost:5000/uploadabout',{
    method: 'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(About)
 })
 .then(res=>res.json())
 .then(result=>{
    console.log(result)
    toast.success('about description uploaded successfully!')
 })
    }
    return (
        <div className=''>
            

            {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* modal open button  */}
<div className='card h-[200px] absolute w-[150px] cursor-pointer mt-5 bg-gradient-to-r from-amber-200 to-yellow-700'>
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
<div className="card h-[200px] bg-transparent relative w-[150px]  hover:bg-black hover:border duration-500 hover:border-white p-[20px] cursor-pointer mt-5" onClick={()=>document.getElementById('my_modal_1').showModal()}>
<SiAboutdotme className='text-[10vh] mx-auto my-auto text-white' />
<h1 className='text-white text-xl -mt-9 text-center font-bold'>Add about</h1>
    </div>
{/*modal open button  */}
<dialog id="my_modal_1" className="modal">
  <div className="modal-box relative">
    <h3 className="font-bold text-lg">Add About Here</h3>
    <form onSubmit={handleSubmit(uploadAbout)}>
            <textarea type="text" name="about" {...register('about')} placeholder="Type here" className=" hover:bg-blue-100 w-[90%] textarea p-5 rounded-md mx-5 my-5 border-gray-400 focus:border-gray-300  focus: " />
            
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

export default UploadForm;
