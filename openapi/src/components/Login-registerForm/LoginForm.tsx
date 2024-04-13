import { Field, Form, Formik } from "formik";
import SvgSignUp from "../SVG/SvgSignUp";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { loginFormSchema, loginSchema } from "@/modules/login-register/login";

const initialLoginValue: loginSchema = {
  emailUser: "",
  passwordUser: "",
};

export type LoginProps = {
  submitLogin: (value: loginSchema) => void;
};

const LoginForm = ({ submitLogin }: LoginProps): JSX.Element => {
  const handleSubmitLogin = (values: loginSchema): void => {
    submitLogin(values);
  };

  return (
    <Formik
      validationSchema={toFormikValidationSchema(loginFormSchema)}
      initialValues={initialLoginValue}
      onSubmit={handleSubmitLogin}
    >
      {({ values, dirty }) => (
        <Form className="flex flex-col space-y-2 items-center">
          <div className="flex flex-col w-[475px] space-y-1">
            <label className="text-[11px] ml-1"> อีเมล</label>
            <Field
              type="email"
              name="emailUser"
              className="border-[1px] rounded-full border-gray-200 w-full"
            />
            <label className="text-[11px] ml-1">รหัสผ่าน</label>
            <Field
              type="text"
              name="passwordUser"
              className=" border-[1px] rounded-full border-gray-200"
            />
            <button className="flex justify-end text-[11px] text-gray-200">ลืมรหัสผ่าน?</button>
          </div>
          <button className="flex bg-blue-100 rounded-full justify-center w-24 text-gray-200 text-[12px]">
            เข้าสู่ระบบ
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
