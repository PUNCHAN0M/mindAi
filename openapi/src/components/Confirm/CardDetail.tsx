import { profile } from "console";
import SvgEnvelope from "../SVG/SvgEnvelope";
import SvgPhone from "../SVG/SvgPhone";

interface CardDetailProps {
  researchName: string;
  image: string;
  idea: string;
  problem: string;
  resource: string;
  profileUrl :string;
}

const CardDetail: React.FC<CardDetailProps> = ({ researchName, image, idea, problem, resource , profileUrl}) => {
  return (
      <div className="Card-container-pdc-background w-[55.8vw]">
        <div className="Title-Edit-ProjectDetails">
          <div className="title-PDC">
            <div className="inside-title">
              <p>{researchName}</p>
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
                    <p>{researchName}</p>
                  </div>
                  <div className="names-idea flex items-end space-x-[0.5vw]">
                    <p>{idea}</p>
                  </div>
                  <div className="names-problem flex items-end space-x-[0.5vw]">
                    <p>{problem}</p>
                  </div>
                  <div className="names-resource flex items-end space-x-[0.5vw]">
                    <p>{resource}</p>
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