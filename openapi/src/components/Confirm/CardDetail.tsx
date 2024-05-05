import { profile } from "console";
import SvgEnvelope from "../SVG/SvgEnvelope";
import SvgPhone from "../SVG/SvgPhone";
import { useState,useEffect } from "react";
import { useRouter } from 'next/router';

interface CardDetailProps {
  researchName: string;
  image: string;
  idea: string;
  problem: string;
  resource: string;
  statusWant:string;
  profileName:string;
  profilePhone:string;
  profileGmail:string;
  profileUrl :string;
}

const CardDetail: React.FC<CardDetailProps> = ({ statusWant,researchName, image, idea, problem, resource , profileUrl , profileName , profileGmail , profilePhone}) => {
  const [statusShow, setStatusShow] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (statusWant === "std") {
      setStatusShow("ต้องการนักศึกษา");
    } else if (statusWant === "pfc") {
      setStatusShow("ต้องการอาจารย์");

    }
  }, [statusWant]);

  const handleClickPost = () => {

    //ส่งข้อมูลให้หลังบ้าน ใส่ข้อมูล แล้ว pass ไป PostDetails จากฟังก์ชันนี้
    const postData = {researchName , profileUrl,profileName , profileGmail , profilePhone}

    router.push({
      pathname: '/post',
      query: postData
    });

  };

  return (
      <div className="Card-container-pdc-background w-[55.8vw]">
        <div className="Title-Edit-ProjectDetails">
          <div className="title-PDC">
            <div className="inside-title">
              <p>{researchName}</p>
              <p className="status-want">{statusShow}</p>
            </div>
          </div>
          <div className="Card-ProjectDetailsContainer">
            <div className="background-Card-PDC">
              <div className="front-bdc">
                <div className="front-left-bdc">
                  <div className="img-front-left-bdc">
                    <div className="imagecardDetails">
                    <img src={image} alt="" />
                    </div>
                  </div>
                </div>
                <div className="front-right-bdc">
                  <div className="names-research flex items-end space-x-[0.5vw]">
                    <p className="researchName-inside">{researchName}</p>
                  </div>
                  <div className="names-idea flex items-end space-x-[0.5vw]">
                    <p>ไอเดีย : {idea}</p>
                  </div>
                  <div className="names-problem flex items-end space-x-[0.5vw]">
                    <p>ปัญหา : {problem}</p>
                  </div>
                  <div className="names-resource flex items-end space-x-[0.5vw]">
                    <p>ทรัพยากร : {resource}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-container relative">
            <div className="  flex absolute h-[4.3vw] w-[4.3vw] ml-[6%] mt-[-5%]">
            <div className="flex bg-yellow-200 w-full h-full rounded-full border-[0.5vh] border-white" 
            style={{ backgroundImage: `url('${profileUrl}')` ,
            backgroundSize: 'cover' ,backgroundPosition: 'center',
          }}></div>

            </div>
  
            <div className="footer-PDC text-white relative">
              <div className="boxleft-PDC">
                <div>
                  <p className="profile-card">{profileName}</p>
                </div>
                <div className="boxleft-phone space-x-[0.5vw]">
                  <p>
                    <SvgPhone />
                  </p>
                  <p className="profile-card">{profilePhone}</p>
                </div>
                <div className="boxleft-gmail space-x-[0.5vw]">
                  <p>
                    <SvgEnvelope />
                  </p>
                  <p className="profile-card">{profileGmail}</p>
                </div>
              </div>
            </div>
            <div className="boxright-PDC  text-black text-[1.6vh]">
              <button className="btn-watching-inside-post" onClick={handleClickPost}>เข้าดู</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default CardDetail;