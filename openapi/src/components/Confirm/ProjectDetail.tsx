import SvgEnvelope from "../SVG/SvgEnvelope";
import SvgEyeOpengray from "../SVG/SvgEyeOpenGrey";
import SvgEyeOpenWhite from "../SVG/SvgEyeOpenWhite";
import SvgPen from "../SVG/SvgPen";
import SvgEyeClosegray from "../SVG/SvgEyeCloseGrey";
import SvgPhone from "../SVG/SvgPhone";
import { useState } from "react";
import clsx from "clsx";
import SvgEyeCloseWhite from "../SVG/SvgEyeCloseWhite";
import SvgCircle from "../SVG/SvgCircle";
import SvgChecked from "../SVG/SvgChecked";
import SvgWhiteBox from "../SVG/SvgWhiteBox";
import Image from "next/image";

interface CardDetailProp {
  imageProfile: any;
  imageProject: string[];
  statusProject: string;
  nameProject: string;
  ideaProject: string;
  problemProject: string;
  resourcePrject: string;
  nameCreater: string;
  phoneCreater: string;
  emailCreater: string;
}

const CardProjectDetail: React.FC<CardDetailProp> = ({
  imageProfile,
  imageProject,
  statusProject,
  nameProject,
  ideaProject,
  problemProject,
  resourcePrject,
  nameCreater,
  phoneCreater,
  emailCreater,
}) => {
  const [problem, setProblem] = useState(true);
  const [resource, setResource] = useState(true);
  const [phone, setPhone] = useState(true);

  const handlePost = (values: CardDetailProp) => {
    // รับจากFormStudent
    console.log({ values });
    console.log(`problem :${problem}`); //true ตาเปิด,เช็คแล้ว false ตาปิด,ยังงไม่เช็ค
    console.log(`resource :${resource}`);
    console.log(`phone :${phone}`);
  };

  const handleClickEye = (val: boolean) => {
    return !val;
  };

  return (
    <div className="ProjectDetailsContainer text-[1.5vh] p-[2vw]">
      <div className="flex absolute h-[4.3vw] w-[4.3vw] mt-[47vh] ml-[3vw]">
        <img
          className="flex bg-yellow-200  w-full h-full rounded-full border-[0.5vh] border-white object-cover"
          src={`${imageProfile}`}
          alt=""
        />
      </div>
      <div className="top-title flex items-center justify-start ">
        <SvgPen />
        <div>แก้ไขโพสต์</div>
      </div>
      <div className="Card-container-pdc-background ">
        <div className="Title-Edit-ProjectDetails pt-[vh]">
          <div className="title-PDC">
            <div className="inside-title flex justify-between ">
              <div className="text-[2.5vh] ml-[1.5vw] text-white mt-[1vh]">
                ชื่องานวิจัย
              </div>
              <div className="text-[1.8vh] mr-[1.5vw] text-white mt-[1vh]">
                ต้องการ{statusProject}
              </div>
            </div>
          </div>
          <div className="Card-ProjectDetailsContainer">
            <div className="background-Card-PDC">
              <div className="front-bdc">
                <div className="front-left-bdc">
                  <img className="img-front-left-bdc object-cover" src={`${imageProject[0]}`} alt="" />
                </div>
                <div className="front-right-bdc">
                  <div className="names-research flex items-end space-x-[0.5vw]">
                    <SvgWhiteBox />
                    <p className={clsx("text-gray-300")}>
                      ชื่องานวิจัย : {nameProject}
                    </p>
                  </div>
                  <div className="names-idea flex items-end space-x-[0.5vw]">
                    <SvgWhiteBox />
                    <p className={clsx("text-gray-300")}>
                      ไอเดีย : {ideaProject}
                    </p>
                  </div>
                  <div
                    className="names-problem flex items-end space-x-[0.5vw]"
                    onClick={() => {
                      setProblem(handleClickEye(problem));
                    }}
                  >
                    {problem === true ? (
                      <SvgEyeOpengray />
                    ) : (
                      <SvgEyeClosegray />
                    )}

                    <p
                      className={clsx(
                        "",
                        problem === true ? "" : "text-gray-200"
                      )}
                    >
                      ปัญหาที่พบ : {problemProject}
                    </p>
                  </div>
                  <div
                    className="names-resource flex items-end space-x-[0.5vw]"
                    onClick={() => {
                      setResource(handleClickEye(resource));
                    }}
                  >
                    {resource === true ? (
                      <SvgEyeOpengray />
                    ) : (
                      <SvgEyeClosegray />
                    )}

                    <p
                      className={clsx(
                        "",
                        resource === true ? "" : "text-gray-200"
                      )}
                    >
                      ทรัพยากร {resourcePrject}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-container">
            <div className="footer-PDC text-white">
              <div className="boxleft-PDC">
                <div>
                  <div className="text-white">{nameCreater}</div>
                </div>
                <div className="boxleft-phone space-x-[0.5vw]">
                  <div>
                    <SvgPhone />
                  </div>
                  <div className="text-white">{phoneCreater}</div>
                  <div>
                    <div
                      onClick={() => {
                        setPhone(handleClickEye(phone));
                      }}
                    >
                      {phone === false ? (
                        <SvgEyeOpenWhite />
                      ) : (
                        <SvgEyeCloseWhite />
                      )}
                    </div>
                  </div>
                </div>
                <div className="boxleft-gmail space-x-[0.5vw]">
                  <div>
                    <SvgEnvelope />
                  </div>
                  <div className="text-white">{emailCreater}</div>
                </div>
              </div>
            </div>
            <div className="boxright-PDC font-extralight text-white text-[1.6vh] cursor-default">
              <button className="cursor-default">เข้าดู</button>
            </div>
          </div>
        </div>
      </div>
      <div className="OptionSelected-Card flex flex-col justify-start">
        <div className="flex justify-center">
          <div className="bg-gray-150 rounded-full w-[9vw] flex justify-center p-[0.4vh] align-middle ml-[2vw]">
            ตัวเลือกการแสดงผล
          </div>
        </div>
        <div className="flex flex-col">
          <div className="problem-option justify-between">
            <div>แสดงปัญหาที่พบ</div>
            <div
              onClick={() => {
                setProblem(handleClickEye(problem));
              }}
            >
              {problem === false ? <SvgCircle /> : <SvgChecked />}
            </div>
          </div>

          <div className="resource-option justify-between">
            <div>แสดงทรัพยากร</div>
            <div
              onClick={() => {
                setResource(handleClickEye(resource));
              }}
            >
              {resource === false ? <SvgCircle /> : <SvgChecked />}
            </div>
          </div>
          <div className="phone-option justify-between">
            <div>แสดงเบอร์โทรศัพท์</div>
            <div
              onClick={() => {
                setPhone(handleClickEye(phone));
              }}
            >
              {phone === false ? <SvgCircle /> : <SvgChecked />}
            </div>
          </div>
        </div>
        <div className="post-btn font-bold text-[2vh] mt-[23vh]">
          <button
          className="flex justify-center items-center"
            onClick={() => {
              handlePost({
                imageProfile,
                imageProject,
                statusProject,
                nameProject,
                ideaProject,
                problemProject,
                resourcePrject,
                nameCreater,
                phoneCreater,
                emailCreater,
              });
            }}
          >
            โพสต์
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectDetail = () => {
  return (
    // ส่งค่ามาจาก FormSyudent
    <CardProjectDetail
      imageProfile="data:image/jpeg;base64,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"
      imageProject={[
        "data:image/png;base64,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",
      ]}
      statusProject="นักศึกษา"
      nameProject="การวิจัยศาสตร์มืด"
      ideaProject="ความแรงของเวทมนตร์เมื่อโดนคน"
      problemProject="เวทมนตร์แบบเก่ามาก"
      resourcePrject="ไม้คทาสำหรับการร่าย และอาหารฟรีมื้อเย็น"
      nameCreater="นายสิทธา  สหรรม"
      phoneCreater="085-123401234"
      emailCreater="sitasahahum@gmail.com"
    />
  );
};
export default ProjectDetail;
