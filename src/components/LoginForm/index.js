// // Write your JS code here
// import './index.css'
// import {Component} from 'react'

// class LoginForm extends Component {
//   state = {username: '', password: ''}

//   onSubmitSuccess = jwtToken => {
//     const {history} = this.props
//     Cookies.set('jwt_token', jwtToken, {expires: 30})
//     history.replace('/')
//   }
//   submitForm = async event => {
//     event.preventDefault()
//     const {username, password} = this.state

//     if (username === '' || password === '') {
//       this.setState({
//         showSubmitError: true,
//         errorMsg: 'Username or password is invalid',
//       })
//       return
//     }

//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }

//     const response = await fetch(url, options)
//     const data = await response.json()

//     if (response.ok === true) {
//       this.onSubmitSuccess(data.jwt_token)
//     } else {
//       this.setState({
//         showSubmitError: true,
//         errorMsg: data.error_msg,
//       })
//     }
//   }

//   // submitForm = async event => {
//   //   event.preventDefault()

//   //   const {username, password} = this.state
//   //   const userDetails = {username, password}
//   //   const url = 'https://apis.ccbp.in/login'
//   //   const options = {
//   //     method: 'POST',
//   //     body: JSON.stringify(userDetails),
//   //   }

//   //   const response = await fetch(url, options)

//   //   if (response.ok === true) {
//   //     const data = await response.json()
//   //     this.onSubmitSuccess(data.jwt_token)
//   //   }
//   // }

//   onChangeUsername = event => {
//     this.setState({username: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({password: event.target.value})
//   }

//   renderUsernameField = () => {
//     const {username} = this.state
//     return (
//       <>
//         <label className="input-label" htmlFor="username">
//           USERNAME
//         </label>

//         <input
//           type="text"
//           id="username"
//           value={username}
//           placeholder="Username"
//           className="username-input-field"
//           onChange={this.onChangeUsername}
//         />
//       </>
//     )
//   }

//   renderPasswordField = () => {
//     const {password} = this.state

//     return (
//       <>
//         <label className="input-label" htmlFor="password">
//           PASSWORD
//         </label>

//         <input
//           type="password"
//           value={password}
//           id="password"
//           placeholder="Password"
//           className="password-input-field"
//           onChange={this.onChangePassword}
//         />
//       </>
//     )
//   }

//   render() {
//     return (
//       <div>
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
//           alt="website login"
//           className="loginImg"
//         />

//         <div>
//           <form className="form-container" onSubmit={this.submitForm}>
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//               alt="website logo"
//               className="login-logo"
//             />

//             <div className="input-container">{this.renderUsernameField()}</div>
//             <div className="input-container">{this.renderPasswordField()}</div>
//             <button type="submit" className="login-button">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }
// export default LoginForm

// import {Component} from 'react'

// import './index.css'

// class LoginForm extends Component {
//   state = {
//     username: '',
//     password: '',
//   }

//   onSubmitSuccess = () => {
//     const {history} = this.props
//     history.replace('/')
//   }

//   // onSubmitSuccess

//   onSubmitForm = async event => {
//     event.preventDefault()
//     const {username, password} = this.state
//     const userDetails = {username, password}

//     const url = 'https://apis.ccbp.in/login'

//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     console.log(data)

//     console.log(response)
//     if (response.ok === true) {
//       this.onSubmitSuccess()
//     }
//   }

//   onChangeUsername = event => {
//     this.setState({username: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({password: event.target.value})
//   }
//   renderPasswordField = () => {
//     const {password} = this.state
//     return (
//       <>
//         <label className="input-label" htmlFor="password">
//           PASSWORD
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="password-input-filed"
//           value={password}
//           onChange={this.onChangePassword}
//         />
//       </>
//     )
//   }

//   renderUsernameField = () => {
//     const {username} = this.state
//     return (
//       <>
//         <label className="input-label" htmlFor="username">
//           USERNAME
//         </label>
//         <input
//           type="text"
//           id="username"
//           className="username-input-filed"
//           value={username}
//           onChange={this.onChangeUsername}
//         />
//       </>
//     )
//   }

//   render() {
//     return (
//       <div className="login-form-container">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//           className="login-website-logo-mobile-image"
//           alt="website logo"
//         />
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
//           className="login-image"
//           alt="website login"
//         />
//         <form className="form-container" onSubmit={this.onSubmitForm}>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//             className="login-website-logo-desktop-image"
//             alt="website logo"
//           />
//           <div className="input-container">{this.renderUsernameField()}</div>
//           <div className="input-container">{this.renderPasswordField()}</div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>
//       </div>
//     )
//   }
// }

// export default LoginForm

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  // submitForm = async event => {
  //   event.preventDefault()
  //   const {username, password} = this.state
  //   const userDetails = {username, password}
  //   const url = 'https://apis.ccbp.in/login'
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(userDetails),
  //   }
  //   const response = await fetch(url, options)
  //   // const data = await response.json()
  //   // console.log(data)
  //   if (response.ok === true) {
  //     this.onSubmitSuccess()
  //   }
  // }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({showSubmitError: true, errorMsg: data.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  // render() {
  //   return (
  //     <div className="login-form-container">
  //       <img
  //         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
  //         className="login-website-logo-mobile-image"
  //         alt="website logo"
  //       />
  //       <img
  //         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
  //         className="login-image"
  //         alt="website login"
  //       />

  //       <form className="form-container" onSubmit={this.submitForm}>
  //         <img
  //           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
  //           className="login-website-logo-desktop-image"
  //           alt="website logo"
  //         />
  //         <div className="input-container">{this.renderUsernameField()}</div>
  //         <div className="input-container">{this.renderPasswordField()}</div>
  //         <button type="submit" className="login-button">
  //           Login
  //         </button>
  //         {showSubmitError && <p className="error-message">*{errorMsg}</p>}
  //       </form>
  //     </div>
  //   )
  // }

  render() {
    const {showSubmitError, errorMsg} = this.state

    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />

        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm

// <form className="form-container" onSubmit={this.submitForm}>
//   <img
//     src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//     className="login-website-logo-desktop-image"
//     alt="website logo"
//   />
//   <div className="input-container">{this.renderUsernameField()}</div>
//   <div className="input-container">{this.renderPasswordField()}</div>
//   <button type="submit" className="login-button">
//     Login
//   </button>
// </form>
