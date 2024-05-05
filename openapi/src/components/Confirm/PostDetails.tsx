import { useState,useEffect } from "react";
import { useRouter } from 'next/router';
import SvgEnvelope from "../SVG/SvgEnvelope";
import SvgPhone from "../SVG/SvgPhone";



const PostDetails = () => {
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    //ข้อมูลพื้นฐานที่ดึงมาจาก Carddetails 
    const {researchName , profileUrl, profileName , profileGmail , profilePhone} = router.query;

    //ส่งข้อมูลให้หลังบ้าน 
    const images = [ 
        "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",];
    const statuswant = 'อาจารย์';
    const departmentwant = 'อาจารย์';
    const skillwant = 'เขียนโปรแกรมเก่ง';
    const dateproject = '10 ม.ค. - 12 มิ.ย'
    const idea = 'THIS IS IDEA'
    const problem = 'THIS IS PROBLEM'
    const resource = 'THIS IS RESOURCE'
    const details = 'THIS IS DETAILS'

    return(
        <div className="postDetails">
            <div className="postbar-title">
                <div className="inside-postbar-title">
                    <a href="/dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg>
                    </a>
                    <p>งานวิจัย</p>
                </div>
            </div>
            <div className="postinsidedetails">
            <div className="postDetailsFeed">
                <div className="imagepostbg">
                    
                    <div className="post-background-details">
                        <button className="btn-image-post"  onClick={prevImage}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                            </svg>
                        </button>

                        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />

                        <button className="btn-image-post" id="next-imagepost" onClick={nextImage}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </button></div>
                </div>
                <div className="post-profiles-details"><img src={profileUrl} alt="" /></div>
                <div className="user-post-details">
                    <div className="post-container-details-profile"><p>{profileName}</p></div>
                    <div className="first-post-container">
                    <div className="left-post-container">
                        <p>สถานะบุคคล : นักศึกษา</p>
                        <p>ภาควิชา : ป้องกันตัวจากศาสตร์มืด</p>
                    </div>
                    <div className="right-post-container">
                        <div className="gmail-post">
                            <i><SvgEnvelope/></i>
                            <p>{profileGmail}</p>
                        </div>
                        <div className="tel-post">
                            <i><SvgPhone/></i>
                            <p>{profilePhone}</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="discription-post-container">
                    <p>สถานะที่ต้องการ : {statuswant} </p>
                    <p>สาขาที่ต้องการ :  {departmentwant}</p>
                    <p>ความถนัด / ความสามารถที่ต้องการ : {skillwant}</p>
                    <p>ระยะเวลาเริ่มต้น - สิ้นสุด : {dateproject}</p>
                </div>
                <hr className="line-post"/>
                <div className="container-post-details">
                    <div className="container-post-layout">
                        <p className="title-big-layout">ชื่องานวิจัย</p>
                        <p id="title-layout">{researchName}</p>
                    </div>
                    <div className="container-post-layout">
                        <p className="title-big-layout">ไอเดีย</p>
                        <p id="title-layout">{idea}</p>
                    </div>
                    <div className="container-post-layout">
                        <p className="title-big-layout">ปัญหาที่พบ</p>
                        <p id="title-layout">{problem}</p>
                    </div>
                    <div className="container-post-layout">
                        <p className="title-big-layout">ทรัพยากร</p>
                        <p id="title-layout">{resource}</p>
                    </div>
                    <hr className="line-post"/>
                    <div className="container-post-layout">
                        <p className="title-big-layout">รายละเอียดเพิ่มเติม</p>
                        <p id="title-layout">{details}</p>
                    </div>
                </div>
                <div className="end-container-post-layout"></div>
                

            </div>
            </div>
        </div>
    )
}

export default PostDetails