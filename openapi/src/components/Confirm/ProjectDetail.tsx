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

const ProjectDetail = () => {
  const [name, setName] = useState(false);
  const [idea, setIdea] = useState(false);
  const [problem, setProblem] = useState(false);
  const [resource, setResource] = useState(false);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);

  const [showIdea, setShowIdea] = useState(false);
  const [showProblem, setShowProblem] = useState(false);
  const [showResource, setShowResource] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

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
      <div className="toptitle-post">
      <div className="top-title flex items-center justify-start ">
        <SvgPen />
        <div>แก้ไขโพสต์</div>
      </div>
      </div>
      <div className="Card-container-pdc-background ">
        <div className="Title-Edit-ProjectDetails pt-[vh]">
          <div className="title-PDC">
            <div className="inside-title">
              <div className="text-[2.5vh] ml-[1.5vw] text-white">ชื่องานวิจัย</div>
            </div>
          </div>
          <div className="Card-ProjectDetailsContainer">
            <div className="background-Card-PDC">
              <div className="front-bdc">
                <div className="front-left-bdc">
                  <div className="img-front-left-bdc">Image</div>
                </div>
                <div className="front-right-bdc">
                  <div
                    className="names-research flex items-end space-x-[0.5vw]"
                    onClick={() => {
                      setName(handleClickEye(name));
                    }}
                  >
                    {name === false ? <SvgEyeOpengray /> : <SvgEyeClosegray />}

                    <p
                      className={clsx(
                        "",
                        name === false ? "" : "text-gray-200"
                      )}
                    >
                      ชื่องานวิจัย
                    </p>
                  </div>
                  <div
                    className="names-idea flex items-end space-x-[0.5vw]"
                    onClick={() => {
                      setIdea(handleClickEye(idea));
                    }}
                  >
                    {idea === false ? <SvgEyeOpengray /> : <SvgEyeClosegray />}
                    <p
                      className={clsx(
                        "",
                        idea === false ? "" : "text-gray-200"
                      )}
                    >
                      ไอเดีย
                    </p>
                  </div>
                  <div
                    className="names-problem flex items-end space-x-[0.5vw]"
                    onClick={() => {
                      setProblem(handleClickEye(problem));
                    }}
                  >
                    {problem === false ? (
                      <SvgEyeOpengray />
                    ) : (
                      <SvgEyeClosegray />
                    )}

                    <p
                      className={clsx(
                        "",
                        problem === false ? "" : "text-gray-200"
                      )}
                    >
                      ปัญหาที่พบ
                    </p>
                  </div>
                  <div
                    className="names-resource flex items-end space-x-[0.5vw]"
                    onClick={() => {
                      setResource(handleClickEye(resource));
                    }}
                  >
                    {resource === false ? (
                      <SvgEyeOpengray />
                    ) : (
                      <SvgEyeClosegray />
                    )}

                    <p
                      className={clsx(
                        "",
                        resource === false ? "" : "text-gray-200"
                      )}
                    >
                      ทรัพยากร
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
                  <div>นายสิทธา สหธรรม</div>
                </div>
                <div className="boxleft-phone space-x-[0.5vw]">
                  <div>
                    <SvgPhone />
                  </div>
                  <div>012-123123</div>
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
                  <div>sittasahathum@gmail.com</div>
                  <div>
                    <div
                      onClick={() => {
                        setEmail(handleClickEye(email));
                      }}
                    >
                      {email === false ? (
                        <SvgEyeOpenWhite />
                      ) : (
                        <SvgEyeCloseWhite />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="boxright-PDC font-extralight text-white text-[1.6vh]">
              <button>เข้าดู</button>
            </div>
          </div>
        </div>
      </div>
      <div className="OptionSelected-Card">
        <div className="flex justify-center ">
          <div className="bg-gray-150 rounded-full w-[9vw] flex justify-center p-[0.4vh] align-middle ml-[2vw]">
            ตัวเลือกการแสดงผล
          </div>
        </div>
        <div className="selected-option flex flex-col">
          <div className="problem-option justify-between">
            <div>แสดงปัญหาที่พบ</div>
            <div
              onClick={() => {
                setShowProblem(handleClickEye(showProblem));
              }}
            >
              {showProblem === false ? <SvgCircle /> : <SvgChecked />}
            </div>
          </div>
          <div className="idea-option justify-between">
            <div>แสดงไอเดีย</div>
            <div 
              onClick={() => {
                setShowIdea(handleClickEye(showIdea));
              }}
            >
              {showIdea === false ? <SvgCircle /> : <SvgChecked />}
            </div>
          </div>
          <div className="resource-option justify-between">
            <div>แสดงทรัพยากร</div>
            <div
              onClick={() => {
                setShowResource(handleClickEye(showResource));
              }}
            >
              {showResource === false ? <SvgCircle /> : <SvgChecked />}
            </div>
          </div>
          <div className="phone-option justify-between">
            <div>แสดงเบอร์โทรศัพท์</div>
            <div
              onClick={() => {
                setShowPhone(handleClickEye(showPhone));
              }}
            >
              {showPhone === false ? <SvgCircle /> : <SvgChecked />}
            </div>
          </div>
          <div className="email-option justify-between">
            <div>แสดงอีเมล</div>
            <div
              onClick={() => {
                setShowEmail(handleClickEye(showEmail));
              }}
            >
              {showEmail === false ? <SvgCircle /> : <SvgChecked />}
            </div>
          </div>
        </div>
        <div className="post-btn font-bold text-[1.6vh]">
          <button>โพสต์</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
