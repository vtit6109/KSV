import {useEffect} from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { getAllBlogs } from "../../redux/slice/blogsSlice";
import './hotfeeds.css'; 

const HotFeeds = ()=>{
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.data);

    useEffect(() => {
        dispatch(getAllBlogs());
      }, [dispatch]);

    return (
        <div className=' w-[1140px] mx-auto text-center my-10'>
            <h3 className=' text-primary-blue text-4xl font-bold mb-3'>Nổi bật</h3>
            <ul className='grid grid-cols-2 gap-4 '>
            {blogs.map((blog)=>{
                return (
                    <li className='w-full relative group' key={blog._id}>
                        <img className='w-full h-auto' src={blog.image} alt="" />
                        <div className="overlay cursor-pointer"></div>
                        <h3 className='absolute top-0 left-2 text-white text-xl font-bold mt-2 z-10'>{blog.title}</h3>
                        {blog.content.type === "text" && (
                            <p className='absolute top-0 left-2 text-xl font-bold mt-2 z-10'>{blog.content.value}</p>
                        )}
                    </li>
                )
            })}
           </ul>
        </div>
    )
}

export default HotFeeds;