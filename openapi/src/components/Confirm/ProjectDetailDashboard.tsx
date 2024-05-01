import CardDetail from "./CardDetail";
import { useState } from "react";
import React from "react";
import SvgEyeOpengray from "../SVG/SvgEyeOpenGrey";


interface DropdownProps {
  buttonText: string;
  linkText: string[];
}
interface VisibleProps {
  teacherButtonText: string;
  studentButtonText: string;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonText, linkText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

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
  };

  return (
    <div className="dropdown" onMouseLeave={handleMouseLeave}>
       <button className="dropbtn" onClick={toggleDropdown} >
        <div className="dropbtn-inside">
          <p>{buttonText}</p>
          <i id="rotate-back" className={isRotated ? 'rotated' : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
          </i>
        </div>
       </button>
        <div className={`dropdown-content ${isOpen ? 'show' : ''}`} onMouseDown={handleMouseIn} onMouseLeave={handleMouseLeave}>
        {linkText.map((text, index) => (
          <a key={index} href="#" onClick={() => handleLinkClick(text)}>
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

  return (
    <div className="HomePage">
    <div className="HomePage-container">
    <div className="left-HomePage">
        <div className="topbar-title">
            <div className="topbar-HomePage"><p>หน้าหลัก</p></div>
            <div className="recommended-HomePage"><p>งานวิจัยที่แนะนำสำหรับคุณ</p></div>
        </div>
        <div className="feedPage">
        <CardDetail/>
        <CardDetail/>
        </div>
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
          <div className="dropdownline-A">
            <div className="dropdownleft">
              <Dropdown buttonText="ระดับการศึกษา"
              linkText={['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5']} />
            </div>
            <div className="dropdownright">
              <Dropdown buttonText="ผลตอบแทน"
              linkText={['Link 1123', 'Link 2', 'Link 3', 'Link 4', 'Link 5']} />
            </div>
          </div>
          <div className="dropdownline-B">
            <div className="dropdownleft">
              <Dropdown buttonText="ระดับการศึกษา"
              linkText={['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5']} />
            </div>
            <div className="dropdownright">
              <Dropdown buttonText="ผลตอบแทน"
              linkText={['Link 1123', 'Link 2', 'Link 3', 'Link 4', 'Link 5']} />
            </div>      
          </div>
          <div className="DateTime">
            <div className="dateStart">CalenderA</div>
            <div className="dateEnd">CalenderB</div>
          </div>
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
          <div className="name-researchcreate">สร้างโพสต์งานวิจัย</div>
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
