import { Field, Formik } from "formik"
import SvgSwitch from "../SVG/SvgSwitch"

const ShowDetail = () => {
    return (
        <Formik
        // validationSchema={}
        // initialValues={}
        >
        <div className="bg-blue-300">
            <div className="flex flex-row">
                <button className="bg-yellow-200 rounded-full px-3">สาธารณะ</button>
                <SvgSwitch/>
            </div>
            <div>
                <div className="flex flex-row justify-between">
                    <label>แสดงปัญหาที่พบ</label>
                    <Field type="checkbox"></Field>
                </div>
                <div className="flex flex-row justify-between">
                    <label>แสดงไอเดีย</label>
                    <Field type="checkbox"></Field>
                </div>
                <div className="flex flex-row justify-between">
                    <label>แสดงทรัพยากร</label>
                    <Field type="checkbox"></Field>
                </div>
                <div className="flex flex-row justify-between">
                    <label>แสดงเบอร์โทรศัพท์</label>
                    <Field type="checkbox"></Field>
                </div>
                <div className="flex flex-row justify-between">
                    <label>แสดงอีเมล</label>
                    <Field type="checkbox"></Field>
                </div>
                
            </div>
        </div>
        </Formik>
    )
}
export default ShowDetail;