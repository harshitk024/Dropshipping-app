import { useState, useEffect } from "react";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const Input = ({
  type,
  name,
  className,
  label,
  id,
  placeholder,
  value,
  onChange,
  error_message,
  lowerLabel
}) => {
  return (
    <>
      <div class="col-sm-10">
        <div class  = "labels">
        <label for={id} className ="col-sm col-form-label" class = "labels">
            {label} 
        </label>
        <label class = "error-label">
          {error_message}
        </label>
        </div>      
        <input
          className={className}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id = {id}
        />
        {lowerLabel ?
         <label htmlFor={id} className = "col-sm-10 col-form-label">
          {lowerLabel}
         </label>
        : null
      }
      </div>
    </>
  );
};

const LoginForm = ({handleFilter,loginUser}) => {

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");


  const handleLoginSubmit = (event) => {
    event.preventDefault();
    loginUser(login, handleLoginError);

    setLogin({
      username: "",
      password: "",
    });




  };

  const handleLoginError = (message) => {
    console.log(message);
    setLoginError(message);
  };


  return (
    <>
    <h1>Sign In</h1>
    <hr></hr>
    <form class="login-form" onSubmit={handleLoginSubmit}>
        <Input label={"Username"} type = "text" className = "form-control" id = "inputUser" value = {login.username} onChange={(event) => setLogin({...login,username:event.target.value})} error_message = {loginError}/>
        <Input label={"Password"} type = "password" className = "form-control" od = "inputPassword" value = {login.password} onChange={(event) => setLogin({...login, password: event.target.value})} lowerLabel = {<a href ="" id = "forgot-password">Forget your Password?</a>} error_message = {loginError} />
        <div class="col-sm-10" id = "submit-container">
          <button type="submit" class="btn btn-primary" id = "button">
            Sign In
          </button>
        </div>
        <div id = "create-user">
          Don't have an account? <a href = "" onClick={handleFilter}>Create user</a>
        </div>
    </form>
    </>
  )

}

const SignupForm = ({createUser,handleFilter}) => {

  const [signup, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const result = createUser(signup, handleError);

    if (result) {
      setSignUp({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (

    <>
    <h1>Register</h1>
    <hr></hr>
    <form class = "signup-form" onSubmit={handleSignupSubmit}>
      <Input label="Username" type="text" className="form-control" id = "input-user-signup" value = {signup.username} onChange={(event) => setSignUp({...signup,username: event.target.value}) } />
      <Input label="Email" type="email" className={"form-control"} id = "input-email-signup" value = {signup.email} onChange={(event) => setSignUp({...signup,email: event.target.value}) } />
      <Input label="Password" type="password" className={"form-control"} id = "input-password-signup" value = {signup.password} onChange={(event) => setSignUp({...signup,password: event.target.value}) } />
      <div class="col-sm-10" id = "submit-container">
          <button type="submit" class="btn btn-primary" id = "button">
            Register
          </button>
      </div>
      <div id = "already-user">
        Already a user? <a href="" onClick = {handleFilter}>Sign in</a>
      </div>
    </form>

    </>

  )
}
const Login = ({ createUser, loginUser }) => {

  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `body {

	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	font-family: 'Jost', sans-serif;
    // background: linear-gradient(to bottom,#219ebc,#1ac2ec,#2bc9f0);
    }`;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);



  const [showLogin,setShowLogin] = useState(true)


  const [error, setError] = useState("");

  const handleError = (message) => {
    setError(message);
  };




  const handleFilter = (event) => {
    event.preventDefault()
    setShowLogin(!showLogin)
  }


  return (
    <div className="main-login">
      {showLogin ? <LoginForm handleFilter = {handleFilter} loginUser={loginUser} /> : <SignupForm />}
    </div>
  );
};

export default Login;
