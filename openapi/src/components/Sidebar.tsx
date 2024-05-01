import SvgHomePage from "./SVG/sidebar/SvgHomePage"
import SvgSearch from "./SVG/sidebar/SvgSearch";
import SvgCreateProject from "./SVG/sidebar/SvgCreateProject"
import SvgAccount from "./SVG/sidebar/SvgAccount"
import SvgNoti from "./SVG/sidebar/SvgNoti"

 const Sidebar = () => {
    return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                <ul>
                    <div className="sidebar-top">
                    <li>
                        <a href="/dashboard" className="list-sidebar">
                            <div className="icon-container">
                                <i className="icon-sidebar"><SvgHomePage className ="svghomepage"/></i>
                                <span className="nav-item">หน้าหลัก</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/searchresearch" className="list-sidebar">
                            <div className="icon-container">
                                <i className="icon-sidebar"><SvgSearch className="svgsearch"/></i>
                                <span className="nav-item">ค้นหา</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/createprojectstudent" className="list-sidebar">
                            <div className="icon-container">
                                <i className="icon-sidebar"><SvgCreateProject className="svgcreateproject"/></i>
                                <span className="nav-item">เพิ่มงานวิจัย</span>
                            </div>
                        </a>
                    </li>
                    </div>
                    <hr className="line-sidebar" />
                    <div className="sidebar-bottom">
                    <li>
                        <a href="#" className="list-sidebar">
                            <div className="icon-container">
                                <i className="icon-sidebar"><SvgAccount className="svgaccount"/></i>
                                <span className="nav-item">ข้อมูลบัญชี</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="list-sidebar">
                            <div className="icon-container">
                                <i className="icon-sidebar"><SvgNoti className="svgnoti"/></i>
                                <span className="nav-item">การแจ้งเตือน</span>
                            </div>
                        </a>
                    </li>
                    </div>
                </ul>
                </nav>

            
            </div>
            
    )
 }
 export default Sidebar;