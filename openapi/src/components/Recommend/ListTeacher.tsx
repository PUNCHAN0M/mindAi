import SvgLike from "../SVG/SvgLike";
import SvgSearch from "../SVG/SvgSearch";

interface TeacherProps {
  name: string;
  department: string;
}

const TeacherCard: React.FC<TeacherProps> = ({ name, department }) => {
  return (
    <div className="card-ListTeacher">
      <div className="profile-card-ListTeacher"><img src="" alt="" /></div>
      <div className="discription-card-ListTeacher">
        <p>ชื่อ : {name}</p>
        <p>ภาควิชา : {department}</p>
      </div>
      <div className="button-card-ListTeacher">
        <div className="icon-button"><div className="SvgLike"><SvgLike/></div></div>
        <div className="button-card">
          <div className="btn-choose"><button>เลือก</button></div>
          <div className="btn-more"><button>เพิ่มเติม</button></div>
        </div>
      </div>
    </div>
  );
};

const ListTeacher = () => {
  return (
    <div className="backgroundListTeacher">
      <div className="nav-top-listteacher">
        <div className="title-nav-listteacher">อาจารย์ที่แนะนำ</div>
        <div className="search-nav-listteacher">
          <input className="center-placeholder" placeholder="ค้นหารายชื่ออาจารย์" type="text" />
          <div className="SvgSearch"><SvgSearch/></div>
        </div>
      </div>
      <TeacherCard name="อาจารย์ A" department="ป้องกันตัวจากศาสตร์มืด" />
      <TeacherCard name="อาจารย์ B" department="ป้องกันตัวจากศาสตร์มืด" />
     
    </div>
  );
};

export default ListTeacher;
