import SvgEnvelope from "../SVG/SvgEnvelope";
import SvgPhone from "../SVG/SvgPhone";

const CardDetail = () => {
    return (
      <div className="Card-container-pdc-background w-[55.8vw]">
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
                  <div className="names-research flex items-end space-x-[0.5vw]">
                    <p>ชื่องานวิจัย</p>
                  </div>
                  <div className="names-idea flex items-end space-x-[0.5vw]">
                    <p>ไอเดีย</p>
                  </div>
                  <div className="names-problem flex items-end space-x-[0.5vw]">
                    <p>ปัญหาที่พบ</p>
                  </div>
                  <div className="names-resource flex items-end space-x-[0.5vw]">
                    <p>ทรัพยากร</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-container relative">
            <div className="  flex absolute h-[4.3vw] w-[4.3vw] ml-[6%] mt-[-5%]">
              <div className="flex  bg-yellow-200  w-full h-full rounded-full border-[0.5vh] border-white ">
                img
              </div>
            </div>
  
            <div className="footer-PDC text-white relative">
              <div className="boxleft-PDC">
                <div>
                  <p>นายสิทธา สหธรรม</p>
                </div>
                <div className="boxleft-phone space-x-[0.5vw]">
                  <p>
                    <SvgPhone />
                  </p>
                  <p>012-123123</p>
                </div>
                <div className="boxleft-gmail space-x-[0.5vw]">
                  <p>
                    <SvgEnvelope />
                  </p>
                  <p>sittasahathum@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="boxright-PDC  text-black text-[1.6vh]">
              <button>เข้าดู</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default CardDetail;