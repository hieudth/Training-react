import { useState } from "react";
import "./Login.css";

function Login() {

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [isShowPassword, setisShowPassword] = useState(false);
	const [checkEmail, setCheckEmail] = useState(true);
	const [checkPassword, setCheckPassword] = useState(true);

	const handleOnChangeEmail = (email) => {		
		setEmail(email.target.value);
		// console.log(email.target.value);
	}

	const handleOnChangePassword = (password) => {		
		setPassword(password.target.value);
		// console.log(password.target.value);
	}
	
	const handleLogin = (e) => {
		e.preventDefault();
		if ("admin@email.com" !== email) {
			setCheckEmail(false);
		} else {
			setCheckEmail(true);
		}
		if ("admin123" !== password) {
			setCheckPassword(false);
		} else {
			setCheckPassword(true);
		}
		
		if (("admin@email.com" === email) && ("admin123" === password)) {
			alert("Đăng nhập thành công!");
		}
	}

	const handleShowHidePassword = () => {
		setisShowPassword(!isShowPassword);
	}

  return (
    <div className="form-login" style={ {maxWidth: "400px", padding: "25px", margin: "auto"} }>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
						placeholder="example@email.com"
						onChange={handleOnChangeEmail}
            aria-describedby="emailHelp"
          />
          <div 
						id="emailHelp" 
						className="form-text"
						style={{display: checkEmail ? "" :"none" }}
					>
            Email của bạn sẽ không được chia sẻ cho bất kỳ ai!
          </div>
          <div 
						id="emailHelp" 
						className="form-text alert alert-danger"
						style={{display: checkEmail ? "none" :"" }}
					>
            Email không đúng! Xin nhập lại!
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Mật khẩu
          </label>
					<div className="custom-input-password">
						<input
							type={isShowPassword ? 'text' : 'password'}
							className="form-control"
							id="exampleInputPassword1"
							onChange={handleOnChangePassword}
							autoComplete="on"
							aria-describedby="passwordError"
						/>
						<span onClick={handleShowHidePassword}>
							<i className={isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
						</span>
						<div 
						id="passwordError" 
						className="form-text alert alert-danger"
						style={{display: checkPassword ? "none" :"" }}
						>
							Mật khẩu không đúng! Xin nhập lại!
						</div>
					</div>
        </div>
				<div className="row">
          <button 
						className="btn btn-lg btn-primary mb-3"
						type="submit"
						onClick={handleLogin}
					>
            Đăng nhập
          </button>
				</div>

          <p>
            Đăng ký
          </p>
			</form>
    </div>
  );
}
export default Login;
