import "./login.scss";
import logo from "..//..//assets/images/logo.png";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="login">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="This is the company logo" className="logoi" />
          </div>
          <span>The Smart Way</span>
          <span>to get Smarter</span>
        </div>
        <div className="right">
          <form action="/home">
            <h1 className="header">Log In</h1>
            <div className="col-md-4">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email or username"
              />
            </div>
            <div className="col-md-4">
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div className="col-md-4">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="col-md-4 d-flex ">
              <button type="submit" className="btn btn-primary" formAction="/home">
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
