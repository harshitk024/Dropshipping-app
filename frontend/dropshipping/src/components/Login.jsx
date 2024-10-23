import { useState,useEffect} from "react";
import Error from "./Error"


const Input = ({type,name,className,placeholder,value,onChange,error_message}) => {
	return (
		<>
		<div class = "input-container">
          <input className={className} type = {type} name = {name} placeholder={placeholder} value = {value} onChange={onChange}/>
		  <Error message = {error_message}/>
		</div>
		</>
	)
}
const Login = ({createUser,loginUser}) => {

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
    background: linear-gradient(to bottom,#219ebc,#1ac2ec,#2bc9f0);
    }`;

	document.head.appendChild(style)

	return () => {
		document.head.removeChild(style)
	}

  }, []);


	const [signup,setSignUp] = useState({
		username: "",
		email: "",
		password: ""
	})

	const [login,setLogin] = useState({
		username: "",
		password: ""
	})

	const [error,setError] = useState("")
	const [LoginError,setLoginError] = useState("")

	const handleError = (message) => {
		setError(message)
	}

	const handleLoginError = (message) => {
		console.log(message)
		setLoginError(message)
	}

	const handleSignupSubmit = (event) => {

		event.preventDefault()
		const result = createUser(signup,handleError)

		if(result){
		setSignUp({
			username: "",
			email: "",
			password: ""
		})
	    }

	}

	const handleLoginSubmit = (event) => {

		event.preventDefault()
		loginUser(login,handleLoginError)

		setLogin({
			username:"",
			password: ""
		})

	}



    return (
      <div className="main-login">  	
		<input type="checkbox" id="chk" aria-hidden="true" class = "input"/>

			<div className="signup">
				<form onSubmit={handleSignupSubmit}>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					   <Input className = "input" type="text" name="txt" placeholder="User name" required="" value={signup.username}  onChange={(event) => setSignUp({...signup,username: event.target.value})} error_message={error}/>
					   <Input className = "input" type="email" name="email" placeholder="Email" required="" value={signup.email} onChange={(event) => setSignUp({...signup,email:event.target.value})}/>
					   <Input className = "input" type="password" name="pswd" placeholder="Password" required="" value={signup.password} onChange={(event) => setSignUp({...signup,password:event.target.value})}/>
					   <button  class = "login-button">Sign up</button>
				</form>
			</div>

			<div className="login" onSubmit={handleLoginSubmit}>
				<form>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<Input className = "input" type="text" name="email" placeholder="User name" required="" value = {login.email} onChange={(event) => setLogin({...login,username: event.target.value})} error_message={LoginError}/>
					<Input className = "input" type="password" name="pswd" placeholder="Password" required="" value={login.password} onChange={(event) => setLogin({...login,password: event.target.value})} error_message={LoginError}/>
					<button class = "login-button">Login</button>
				    {/* <a id = "forget-link" href="">Forget Password</a> */}
				</form>
			</div>
			<div>
			</div>
	   </div>
    )
}

export default Login;