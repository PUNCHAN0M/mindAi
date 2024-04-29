import SvgLike from "../SVG/SvgLike";
import SvgSearch from "../SVG/SvgSearch";
import React, { useState } from 'react';

interface TeacherProps {
  name: string;
  department: string;
  detailsData: string[][]; 
  fieldCoordinators: string[]; 
  gmail: string; 
  phone: string; 
  recommand:boolean;
}

const TeacherCard: React.FC<TeacherProps> = ({recommand, name, department, detailsData, fieldCoordinators , gmail ,phone }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // เปลี่ยนสถานะการขยายขนาดหน้าจอ
  const handleExpandToggle = () => { 
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card-ListTeacher ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-container">
      <div className="profile-card-ListTeacher"></div>
      <div className="discription-card-ListTeacher">
        <p>ชื่อ : {name}</p>
        <p>ภาควิชา : {department}</p>
      </div>
      <div className="button-card-ListTeacher">
      <div className="icon-button" style={{opacity : recommand ? 1 : 0}}><div className="SvgLike"><SvgLike/></div></div>
        <div className="button-card">
          <div className="btn-choose"><button>เลือก</button></div>
          <div className="btn-more"><button onClick={handleExpandToggle}>{isExpanded ? 'น้อยลง' : 'เพิ่มเติม'}</button></div>
        </div>
      </div>
      </div>
      {/* data หลังจากที่ขยายแล้ว */}
      {isExpanded && (
      <div className="moredetails-container" >
        <div className="graduation-container">
        <div className="nav-moredetails">
          <p>ปีที่สำเร็จการศึกษา</p>
          <p>วุฒิการศึกษา</p>
          <p>ประเทศ</p>
        </div>
        <hr />
        <div className="details-moredetails">
        {detailsData.map((data, index) => (
    <div key={index} className="data-details-moredetails">
      {data.map((value, i) => (
        <p key={i}>{i === 0 ? '' : i === 1 ? '' : ''} {value}</p>
      ))}
    </div>
  ))}
        </div>
        </div>
      <div className="footer-container">
      <div className="Field-expertise">
        <div className="nav-expertise">
          <p>สาขาที่เชี่ยวชาญ / สนใจ</p>
        </div>
        <hr />
        <div className="details-field">
        {fieldCoordinators.map((coordinator, index) => (
                  <div key={index} className="data-details-field">
                    <p>{coordinator}</p>
                  </div>
                ))}
        </div>
      </div>

      <div className="contact">
        <div className="gmail-contact">
          <p>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3.5" y="5.25" width="14" height="10.5" rx="2" fill="black" fill-opacity="0.25"/>
              <path d="M3.5 13.75V8.1177C3.5 8.0062 3.61735 7.93367 3.71708 7.98354L9.15836 10.7042C10.0029 11.1265 10.9971 11.1265 11.8416 10.7042L17.2829 7.98354C17.3827 7.93367 17.5 8.0062 17.5 8.11771V13.75C17.5 14.8546 16.6046 15.75 15.5 15.75H5.5C4.39543 15.75 3.5 14.8546 3.5 13.75Z" fill="#2C2C2C"/>
              </svg>
          </p>
          <p>{gmail}</p>
        </div>
        <div className="phone-contact">
          <p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.0404 15.3738L19.5702 16.9035C19.8076 17.1409 19.8076 17.5258 19.5702 17.7632C18.2867 19.0467 16.2548 19.1911 14.8027 18.102L14.0642 17.5481C12.695 16.5213 11.4787 15.305 10.4519 13.9358L9.898 13.1973C8.80894 11.7453 8.95334 9.71332 10.2368 8.42985C10.4742 8.19245 10.8591 8.19245 11.0965 8.42985L12.6262 9.95956C13.0168 10.3501 13.0168 10.9832 12.6262 11.3738L12.1812 11.8188C12.073 11.927 12.0462 12.0923 12.1146 12.2292C12.9057 13.8114 14.1886 15.0943 15.7708 15.8854C15.9077 15.9538 16.073 15.927 16.1812 15.8188L16.6262 15.3738C17.0168 14.9832 17.6499 14.9833 18.0404 15.3738Z" stroke="#2C2C2C" stroke-width="0.8"/>
              </svg>
          </p>
          <p>{phone}</p>
        </div>
      </div>
      </div>
      </div>
       )}
      </div>
    
  );
};

const ListTeacher = () => {

  const goBack=()=>{
    window.history.back();

  }

  return (
    <div>
    <div className="titleTopOutside"><p>ค้นหา อาจารย์ที่ปรึกษาในงานวิจัย ใน มหาวิทยาลัยสงขลานครินทร์</p></div>
    <div className="backgroundListTeacher">
      <div className="nav-top-listteacher">
        <div className="title-nav-listteacher">อาจารย์ที่แนะนำ</div>
        <div className="search-nav-listteacher">
          <input className="center-placeholder" placeholder="ค้นหารายชื่ออาจารย์" type="text" />
          <div className="SvgSearch"><SvgSearch/></div>
        </div>
      </div>

      {/* การ์ดสำหรับใส่ข้อมูลอาจารย์แต่ละคน */}
      <div className="container-card-teacher">

      <TeacherCard
        name="อาจารย์ A"
        department="ป้องกันตัวจากศาสตร์มืด"
        detailsData={[
          ["2560", "วท.บ. (วิทยาการคอมพิวเตอร์) มหาวิทยาลัยสงขลานครินทร์", "ไทย"],
          ["2553", "วท.บ. (วิทยาการคอมพิวเตอร์) มหาวิทยาลัยสงขลานครินทร์", "ไทย"]
        ]}
        fieldCoordinators={["ผู้ประสานงานสาขา CC", "ผู้ประสานงานสาขา B","ผู้ประสานงานสาขา B","ผู้ประสานงานสาขา B"]} 
        gmail="sitta@psu.ac.th"
        phone="2222"
        recommand={true}


      />
      
      <TeacherCard
        name="อาจารย์ B"
        department="ป้องกันตัวจากศาสตร์มืด"
        detailsData={[
          ["2563", "วท.บ. (วิทยาการคอมพิวเตอร์) มหาวิทยาลัยสงขลานครินทร์", "ไทย"],
          ["2553", "วท.บ. (วิทยาการคอมพิวเตอร์) มหาวิทยาลัยสงขลานครินทร์", "ไทย"]
        ]}
        fieldCoordinators={["ผู้ประสานงานสาขา A", "ผู้ประสานงานสาขา B"]} 
        gmail="hellosis@psu.ac.th"
        phone="03222"
        recommand={false}

      />
      
     </div>
    </div>
    <div className="backbutton" ><button onClick={goBack}>ย้อนกลับ</button></div>
</div>
    
  );
};

export default ListTeacher;