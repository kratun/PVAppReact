import React, { useState, useContext } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { register } from '../../services/auth-service';
import AppContext from '../../app/AppContext';
import PageLayout from '../../pages/layout'

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState(null);
  const appContext = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const credentialsAreNotSet = !email || !password || !rePassword;
    const passwordMissMatch = password !==rePassword;

    if(credentialsAreNotSet) {
      setError(error)
    } else if(passwordMissMatch){
      setError('Password and re-password missmatch!')
    }else {
      const registerResponse = await register(email, password);

      setError(null);
      
      if (registerResponse && registerResponse.idToken) {
        appContext.loginUser(email, password);
      }
    }
  }

  return (
    <PageLayout>
    <MDBContainer>
      <MDBRow className="mt-4">
        <MDBCol md="6 mx-auto">
          <form onSubmit={handleSubmit}>
            <p className="h4 text-center my-4">Register</p>
            <label htmlFor="defaultFormRegisterEmail" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmail"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
            
            <label htmlFor="defaultFormRegisterPassword" className="grey-text mt-4">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormRegisterPassword"
              className="form-control"
              onChange={e => setPassword(e.target.value)}
              value={password}
              required
            />
            <label htmlFor="defaultFormRegisterPassword" className="grey-text mt-4">
                Your re-password
            </label>
            <input
              type="rePassword"
              id="defaultFormRegisterRePassword"
              className="form-control"
              onChange={e => setRePassword(e.target.value)}
              value={rePassword}
              required
            />
            {
              error?
              (
              <div className="text-danger">{error}</div>
              ):(null)} 
            <div className="text-center mt-4">
              <MDBBtn className="white-text" color="default" type="submit">Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </PageLayout>
  );
}

export default Register;