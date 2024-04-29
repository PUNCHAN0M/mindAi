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
import SvgSwitch from "../SVG/SvgSwitch";

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
      <div className="image-profile">
        <div className="image-inside-profile">img</div>
      </div>
      <div className="top-title flex items-center justify-start">
        <SvgPen />
        <p>แก้ไขโพสต์</p>
      </div>
      <div className="Card-container-pdc-background ">
        <div className="Title-Edit-ProjectDetails">
          <div className="title-PDC">
            <div className="inside-title">
              <p>ชื่องานวิจัย</p>
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
                  <p>นายสิทธา สหธรรม</p>
                </div>
                <div className="boxleft-phone space-x-[0.5vw]">
                  <p>
                    <SvgPhone />
                  </p>
                  <p>012-123123</p>
                  <p>
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
                  </p>
                </div>
                <div className="boxleft-gmail space-x-[0.5vw]">
                  <p>
                    <SvgEnvelope />
                  </p>
                  <p>sittasahathum@gmail.com</p>
                  <p>
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
                  </p>
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
            <p>แสดงปัญหาที่พบ</p>
            <div
              onClick={() => {
                setShowProblem(handleClickEye(showProblem));
              }}
            >
              {showProblem === false ? <SvgCircle /> : <SvgChecked />}
            </div>
          </div>
          <div className="idea-option justify-between">
            <p>แสดงไอเดีย</p>
            <div
              onClick={() => {
                setShowIdea(handleClickEye(showIdea));
              }}
            >
              {showIdea === false ? <SvgCircle /> : <SvgChecked />}
            </div>
          </div>
          <div className="resource-option justify-between">
            <p>แสดงทรัพยากร</p>
            <div
              onClick={() => {
                setShowResource(handleClickEye(showResource));
              }}
            >
              {showResource === false ? <SvgCircle /> : <SvgChecked />}
            </div>
          </div>
          <div className="phone-option justify-between">
            <p>แสดงเบอร์โทรศัพท์</p>
            <div
              onClick={() => {
                setShowPhone(handleClickEye(showPhone));
              }}
            >
              {showPhone === false ? <SvgCircle /> : <SvgChecked />}
            </div>
          </div>
          <div className="email-option justify-between">
            <p>แสดงอีเมล</p>
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
