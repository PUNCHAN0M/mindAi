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

interface CardDetailProp {
  nameProject: string;
  ideaProject: string;
  problemProject: string;
  resourcePrject: string;
  nameCreater: string;
  phoneCreater: string;
  emailCreater: string;
}

const CardProjectDetail: React.FC<CardDetailProp> = ({
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

  const handlePost = (values:CardDetailProp) => {
    // รับจากFormStudent
    console.log({values})
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
        <div className="flex bg-yellow-200  w-full h-full rounded-full border-[0.5vh] border-white ">
          img
        </div>
      </div>
      <div className="top-title flex items-center justify-start ">
        <SvgPen />
        <div>แก้ไขโพสต์</div>
      </div>
      <div className="Card-container-pdc-background ">
        <div className="Title-Edit-ProjectDetails pt-[vh]">
          <div className="title-PDC">
            <div className="inside-title">
              <div className="text-[2.5vh] ml-[1.5vw] text-white">
                ชื่องานวิจัย
              </div>
            </div>
          </div>
          <div className="Card-ProjectDetailsContainer">
            <div className="background-Card-PDC">
              <div className="front-bdc">
                <div className="front-left-bdc">
                  <div className="img-front-left-bdc">Image</div>
                </div>
                <div className="front-right-bdc">
                  <div className="names-research flex items-end space-x-[0.5vw]">
                    <SvgWhiteBox />
                    <p className={clsx("text-gray-200")}>
                      ชื่องานวิจัย : {nameProject}
                    </p>
                  </div>
                  <div className="names-idea flex items-end space-x-[0.5vw]">
                    <SvgWhiteBox />
                    <p className={clsx("text-gray-200")}>
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
        <div className="post-btn font-bold text-[1.6vh] mt-[23vh]">
          <button
            onClick={() => {
              handlePost({nameProject,ideaProject,problemProject,resourcePrject,nameCreater,phoneCreater,emailCreater});
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
