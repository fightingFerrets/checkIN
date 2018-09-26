import React from 'react'
import ReactDOM from 'react-dom'
// import FontAwesome from 'react-fontawesome';
import { GoogleLogout, GoogleLogin } from '../src/index'

const clientId = '617246850621-95f9qhmehd380g2df86pjhrqc84n8nij.apps.googleusercontent.com'
// import GoogleLogin, { GoogleLogout } from '../dist/google-login'

const success = response => {
  console.log(response)
}

const error = response => {
  console.error(response)
}

const loading = () => {
  console.log('loading')
}

const logout = () => {
  console.log('logout')
}

ReactDOM.render(
  <div>
    <GoogleLogin
      clientId={clientId}
      scope="https://www.googleapis.com/auth/analytics"
      onSuccess={success}
      onFailure={error}
      onRequest={loading}
      offline={false}
      approvalPrompt="force"
      responseType="id_token"
      isSignedIn
      // disabled
      // prompt="consent"
      // className='button'
      // style={{ color: 'red' }}
    >
      <span>Analytics</span>
    </GoogleLogin>

    <GoogleLogin
      clientId={clientId}
      scope="https://www.googleapis.com/auth/adwords"
      onSuccess={success}
      onFailure={error}
      onRequest={loading}
      approvalPrompt="force"
      responseType="code"
      // uxMode="redirect"
      // redirectUri="http://google.com"
      // disabled
      // prompt="consent"
      // className='button'
      // style={{ color: 'red' }}
    >
      <span>Adwords</span>
    </GoogleLogin>

    <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
  </div>,
  document.getElementById('google-login')
)
