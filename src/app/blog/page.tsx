
import Image from "next/image";
export default function Blog(){
 return(


 <div>
<h1 className="lg:text-4xl sm:text-3xl text-3xl sm:text-center font-bold sm:my-9">Our Latest Blogs</h1>
        {/* blog section */}
        <section className="sm:grid sm:grid-cols-2 mx-4 my-6">
<section className="sm:mx-11 sm:flex flex-col">

<div className="my-9">
 <Image height={200} width={200} className="sm:w-[500px] sm:h-[300px] " src="/blog1.png" alt="blog1"></Image>
<div className="flex sm:mx-6 my-4">
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo1.png" alt="blog1"></Image>
<h1 className="text-gray-400">Admin</h1>
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo2.png" alt="blog1"></Image>
<h1 className="text-gray-400">14 oct 2024</h1>

</div>
<h1 className="sm:text-4xl font-bold my-4 ">Going All-in With Millenial Design</h1>
<p className="sm:text-sm">
em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
</p>
</div>


<div className="my-9">
 <Image height={200} width={200} className="sm:w-[500px] sm:h-[300px] " src="/blog2.png" alt="blog1"></Image>
<div className="flex sm:mx-6 my-4">
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo1.png" alt="blog1"></Image>
<h1 className="text-gray-400">Admin</h1>
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo2.png" alt="blog1"></Image>
<h1 className="text-gray-400">14 oct 2024</h1>

</div>
<h1 className="sm:text-4xl font-bold my-4 ">Going All-in With Millenial Design</h1>
<p className="sm:text-sm">
em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
</p>
</div>


<div className="my-9">
 <Image height={200} width={200} className="sm:w-[500px] sm:h-[300px] " src="/blog3.png" alt="blog1"></Image>
<div className="flex  my-4">
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo1.png" alt="blog1"></Image>
<h1 className="text-gray-400">Admin</h1>
<Image height={10} width={30} className="text-gray-400 mx-2" src="/bloglogo2.png" alt="blog1"></Image>
<h1 className="text-gray-400">14 oct 2024</h1>

</div>
<h1 className="sm:text-4xl font-bold my-4 ">Going All-in With Millenial Design</h1>
<p className="sm:text-sm">
em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
</p>
</div>
</section>

{/* blogsec2 */}

<section>
 
 <div className="sm:ml-44">
  <h1 className="mx-2 my-4 font-bold text-2xl">Categories</h1>
  <p className="text-gray-600 flex my-9">Crafts <br /><p className="ml-52">2</p></p>
  <p className="text-gray-600 flex my-9">Design<br /><p className="ml-52">8</p></p>
  <p className="text-gray-600 flex my-9">Handmade <br /><p className="ml-44">6</p></p>
  <p className="text-gray-600 flex my-9">Wood <br /><p className="ml-52">4</p></p>
 
 </div>
</section>
        </section>
 </div>
  )
}