import CardDetail from "./CardDetail";
import { useState } from "react";
import React from "react";
import SvgEyeOpengray from "../SVG/SvgEyeOpenGrey";
import classNames from 'classnames';

interface DropdownProps {
  buttonText: string;
  linkText: string[];
}
interface VisibleProps {
  teacherButtonText: string;
  studentButtonText: string;
}
const imageUrls: string[] = [
  "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const Dropdown: React.FC<DropdownProps> = ({ buttonText, linkText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };
  const handleMouseIn = () =>{
    setIsOpen(true);
    setIsRotated(!isRotated);
  }
  const handleMouseLeave = () => {
    setIsOpen(false);
    setIsRotated(false);
  };

  //ส่งข้อมูลให้หลังบ้าน
  const handleLinkClick = (clickedText: string) => {
    console.log(`${buttonText} : ${clickedText}`);

    
    if (selectedOption === clickedText) {
      setSelectedOption('');
    } else {
      setSelectedOption(clickedText);
    }
  };

  return (
    <div className="dropdown" onMouseLeave={handleMouseLeave}>
       <button className="dropbtn" onClick={toggleDropdown} >
        <div className="dropbtn-inside">
          <p>{selectedOption || buttonText}</p>
          <i id="rotate-back" className={isRotated ? 'rotated' : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
          </i>
        </div>
       </button>
        <div className={`dropdown-content ${isOpen ? 'show' : ''}`} onMouseDown={handleMouseIn} onMouseLeave={handleMouseLeave}>
        {linkText.map((text, index) => (
          <a
            key={index}
            href="#"
            onClick={() => handleLinkClick(text)}
            className={classNames({ 'selected-option-now': selectedOption === text })}
          >
            {text}
          </a>
        
        ))}
      </div>
    </div>
  );
}

const Visiblebtn: React.FC<VisibleProps> = ({ teacherButtonText, studentButtonText }) => {
  const [isTeacherClicked, setIsTeacherClicked] = useState(false);
  const [isStudentClicked, setIsStudentClicked] = useState(false);

  //ส่งข้อมูลให้หลังบ้าน    
  const handleTeacherClick = () => {
    setIsTeacherClicked(!isTeacherClicked); 
    console.log("showTeacher = " , !isTeacherClicked)
  };
  const handleStudentClick = () => {
    setIsStudentClicked(!isStudentClicked); 
    console.log("showStudent = ", !isStudentClicked)
  };

  return (
    <>
      <div>
      <button className={`visible-prof ${isTeacherClicked ? 'Teacherclicked' : ''}`} onClick={handleTeacherClick}>{teacherButtonText}</button>
      </div>
      <div>
      <button className={`visible-std ${isStudentClicked ? 'Studentclicked' : ''}`} onClick={handleStudentClick}>{studentButtonText}</button>
      </div>
    </>
  );
}

const ProjectDetailDashboard = () => {
  const [showFeedPage, setShowFeedPage] = useState(true);
  const [isActiveHomePage, setIsActiveHomePage] = useState(false);
  const [isActiveRecommendedPage, setIsActiveRecommendedPage] = useState(false);

  //ส่งข้อมูลให้หลังบ้าน    
  const handleHomePageClick = () => {
    
    setShowFeedPage(true);
    console.log("user click หน้าหลัก")
    setIsActiveHomePage(true);
    setIsActiveRecommendedPage(false);
  };

  const handleRecommendedPageClick = () => {
    setShowFeedPage(false);
    console.log("user click งานวิจัยที่แนะนำ")
    setIsActiveHomePage(false);
    setIsActiveRecommendedPage(true);
  };
  return (
    <div className="HomePage">
    <div className="HomePage-container">
    <div className="left-HomePage">
        <div className="topbar-title">
        <div className={`topbar-HomePage ${isActiveHomePage ? 'active' : ''}`} onClick={handleHomePageClick}>
  <p>หน้าหลัก</p>
  <div className="line"></div>
</div>
<div className={`recommended-HomePage ${isActiveRecommendedPage ? 'active' : ''}`} onClick={handleRecommendedPageClick}>
  <p>งานวิจัยที่แนะนำสำหรับคุณ</p>
  <div className="line"></div>
</div>
    </div>
    {showFeedPage ? (
        <div className="feedPage">
          <CardDetail researchName="โดรนเปลี่ยนแบตเตอรี่กลางอากาศ"   
          image={imageUrls[0]} 
          profileUrl = {imageUrls[2]} 
          idea = "ไอเดีย" 
          problem = "ปัญหาที่พบ" 
          resource = "ทรัพยากร"/>

          <CardDetail researchName="หูฟังเพื่อการมองเห็น"   
          image={imageUrls[1]} 
          profileUrl = {imageUrls[1]} 
          idea = "ไอเดีย" 
          problem = "ปัญหาที่พบ" 
          resource = "ทรัพยากร"/>
        </div>
        
      ) : (
        <div className="recommandPage">
          <CardDetail researchName="โดรนเพื่อการเกษตร" image ={imageUrls[1]} profileUrl = {imageUrls[1]} idea = "ไอเดีย" problem = "ปัญหาที่พบ" resource = "ทรัพยากร"/>
        </div> )}
    </div>
    <div className="right-HomePage">
        <div className="searchtop-bar">
          <div className="searchbar">
            <input placeholder="ค้นหา" type="text" />
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            </i>
          </div>
        </div>
        <div className="filterbar-container">
          <div className="titlebar">
            <div className="filter-icon">ตัวกรอง</div>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5"/>
              </svg>
            </i>
          </div>
          <div className="searchbar-department">
            <input placeholder="ค้นหารายชื่อคณะ/สาขา" type="text" />
          </div>

          {/* ส่งข้อมูลให้หลังบ้าน */}
          <div className="dropdownline-A">
            <div className="dropdownleft">
              <Dropdown buttonText="ระดับการศึกษา"
              linkText={['ปริญญาตรี', 'ปริญญาโท', 'ปริญญาเอก']} />
            </div>
            <div className="dropdownright">
              <Dropdown buttonText="ผลตอบแทน"
              linkText={['ไม่ต้องการผลตอบแทน', '200-1000 บาท', '1000-3000 บาท', '3000-5000 บาท', 'มากกว่า 5000 บาท']} />
            </div>
          </div>
          <div className="dropdownline-B">
            <div className="dropdownleft">
              <Dropdown buttonText="หมวดหมู่"
              linkText={['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5']} />
            </div>
            <div className="dropdownright">
              <Dropdown buttonText="เวลาที่ว่าง"
              linkText={['30 นาที','1 ชั่วโมง', '2-4 ชั่วโมง', 'มากกว่า 4 ชั่วโมง']} />
            </div>      
          </div>
          {/* <div className="DateTime">
            <div className="dateStart">CalenderA</div>
            <div className="dateEnd">CalenderB</div>
          </div> */}
        </div>
        <hr className="DateLine" />

        <div className="visiblepost-container">
          <div className="titlevisiblepos">
            <p>ตัวเลือกแสดงการมองเห็นโพสต์</p>
            <i><SvgEyeOpengray/></i>
          </div>
          <div className="btn-visiblepost">
              <Visiblebtn teacherButtonText ="โพสต์ที่ต้องการอาจารย์" studentButtonText="โพสต์ที่ต้องการนักศึกษา"/>
          </div>
          <hr className="line-visiblepost" />
        </div>
        <div className="create-researchcontainr">
          <div className="name-researchcreate"><a href="/createprojectstudent">สร้างโพสต์งานวิจัย</a></div>
          <div className="icon-researchcreate">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
          </div>
        </div>
    </div>
    </div>
</div>
  );
};

export default ProjectDetailDashboard;
