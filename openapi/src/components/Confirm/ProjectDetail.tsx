import SvgEnvelope from "../SVG/SvgEnvelope";
import SvgEyeOpengray from "../SVG/SvgEyeOpenGrey";
import SvgEyeOpenWhite from "../SVG/SvgEyeOpenWhite";
import SvgPen from "../SVG/SvgPen";
import SvgEyeClosegray from "../SVG/SvgEyeCloseGrey";
import SvgPhone from "../SVG/SvgPhone";

const ProjectDetail = () => {
  return (
    <div className="ProjectDetailsContainer">
      <div className="image-profile">
        <div className="image-inside-profile">
          
        </div>
      </div>
      <div className="top-title">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
      </svg>
        <p>แก้ไขโพสต์</p>
      </div>
      <div className="Card-container-pdc-background">
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
              <div className="names-research">
                <div className="Eye-toggle-display">
                <SvgEyeOpengray/>
                </div>
                <p>ชื่องานวิจัย</p>
              </div>
              <div className="names-idea">
                <SvgEyeOpengray/>
                <p>ไอเดีย</p>
              </div>
              <div className="names-problem">
                <SvgEyeOpengray/>
                <p>ปัญหาที่พบ</p>
              </div>
              <div className="names-resource">
                <SvgEyeOpengray/>
                <p>ทรัพยากร</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
      <div className="footer-PDC">
            <div className="boxleft-PDC">
              <div><p>นายสิทธา สหธรรม</p></div>
              <div className="boxleft-phone">
                <p><SvgPhone/></p>
                <p>012-123123</p>
                <p><SvgEyeOpenWhite/></p>
              </div>
              <div className="boxleft-gmail">
                <p><SvgEnvelope/></p>
                <p>sittasahathum@gmail.com</p>
                <p><SvgEyeOpenWhite/></p>
              </div>
            </div>
    
          </div>
          <div className="boxright-PDC">
              <button>เข้าดู</button>
            </div>
      </div>
      </div>
      </div>
      <div className="OptionSelected-Card">
        <div className="btn-mode-optionselected">
          <button>สาธารณะ</button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
          <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
        </svg>
        </div>
        <div className="selected-option">
          <div className="problem-option">
            <p>แสดงปัญหาที่พบ</p>
            <p>O</p>
          </div>
          <div className="idea-option">
            <p>แสดงไอเดีย</p>
            <p>O</p>
          </div>
          <div className="resource-option">
            <p>แสดงทรัพยากร</p>
            <p>O</p>
          </div>
          <div className="phone-option">
            <p>แสดงเบอร์โทรศัพท์</p>
            <p>O</p>
          </div>
          <div className="email-option">
            <p>แสดงอีเมล</p>
            <p>O</p>
          </div>
        </div>
        <div className="post-btn">
           <button>โพสต์</button>
        </div>
      </div>
      
    </div>
  );
};

export default ProjectDetail;
