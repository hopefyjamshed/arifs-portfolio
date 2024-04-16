
import { useForm } from 'react-hook-form';
import { GrProjects, IconName } from "react-icons/gr";
import toast from 'react-hot-toast';

const UploadProjects = () => {
    
    const {register, handleSubmit, formState: {errors}, reset}= useForm()

    
    // upload about 
    const uploadProjects=data=>{
 
 const image= data.img[0]
 console.log(image)
        

        const preset= 'srbtxfi3';

        const formData = new FormData()
        formData.append("file", image)
        formData.append('upload_preset', preset )
        formData.append('cloud_name', 'dgla7fwvg')


        fetch('https://api.cloudinary.com/v1_1/dgla7fwvg/image/upload', {
          method: 'POST',
          body: formData
      })
          .then(res => res.json())
          .then(imgInfo => {
              console.log(imgInfo)
              if (imgInfo) {
                  const img = imgInfo?.url;
                  console.log(img)
                  const uploadData = {
                      image: img==='' ? "no image appeard": img,
                       name: data.name,
                    //    link: data.link
                  }
                  fetch('http://localhost:5000/uploadService', {
                      method: 'POST',
                      headers: {
                          'content-type': 'application/json'
                      },
                      body: JSON.stringify(uploadData)
                  })
                      .then(res => res.json())
                      .then(result => {
                          console.log(result)
                          toast.success('Product uploaded successfully!')

                      })
              }
          })
      reset()
  }
    return (
        <div>
            <div className=''>
            

            {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* modal open button  */}
<div className='card h-[200px] absolute w-[150px] cursor-pointer bg-gradient-to-r from-violet-200 to-indigo-700'>
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
<div className="card h-[200px] bg-transparent relative w-[150px] hover:bg-black hover:border duration-500 hover:border-white p-[20px] cursor-pointer mt-5" onClick={()=>document.getElementById('my_modal_2').showModal()}>
{/* <SiAboutdotme className='text-[10vh] mx-auto my-auto text-white' /> */}
<GrProjects className='text-[7vh] mx-auto my-auto text-white' />
<h1 className='text-white text-xl -mt-9 text-center font-semibold'>Add service</h1>
    </div>
{/*modal open button  */}
<dialog id="my_modal_2" className="modal">
  <div className="modal-box relative">
    <h3 className="font-bold text-lg">Add projects Here</h3>
    <form onSubmit={handleSubmit(uploadProjects)}>
        <input className='ml-5 text-black mt-2' type="file" {...register('img')} />
        {/* <input type="text" name='link' {...register('link')} className=" hover:bg-blue-100 w-[90%] text-black textarea p-5 rounded-md mx-5 my-5 border-gray-400 focus:border-gray-300  focus: " placeholder='type link here'/> */}
            <input type="text" name="about" {...register('name')} placeholder="describe your service" className=" hover:bg-blue-100 w-[90%] textarea p-5 rounded-md mx-5 my-5 border-gray-400 focus:border-gray-300  focus: " />
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
        </div>
    );
}

export default UploadProjects;
