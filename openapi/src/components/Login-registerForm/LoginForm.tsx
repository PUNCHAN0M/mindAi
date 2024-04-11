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
        <Form className="flex flex-col space-y-2 ">
          <div className="flex flex-col">
            <label> อีเมล</label>
            <Field
              type="email"
              name="emailUser"
              className="border-[1px] rounded-full border-grey-200 w-full"
            />
            <label>รหัสผ่าน</label>
            <Field
              type="text"
              name="passwordUser"
              className=" border-[1px] rounded-full border-grey-200"
            />
          </div>
          <button className="flex bg-blue-100 rounded-full justify-center min-w-5">
            เข้าสู่ระบบ
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
