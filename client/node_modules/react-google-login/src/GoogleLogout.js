import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GoogleLogout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true
    }
    this.signOut = this.signOut.bind(this)
  }
  componentDidMount() {
    const { jsSrc } = this.props
    ;((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0]
      const fjs = element
      let js = element
      js = d.createElement(s)
      js.id = id
      js.src = jsSrc
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs)
      } else {
        d.head.appendChild(js)
      }
      js.onload = cb
    })(document, 'script', 'google-login', () => {
      window.gapi.load('auth2', () => {
        this.setState({
          disabled: false
        })
      })
    })
  }

  signOut() {
    const auth2 = window.gapi.auth2.getAuthInstance()
    if (auth2 != null) {
      auth2.signOut().then(this.props.onLogoutSuccess)
    }
  }

  render() {
    const { tag, style, className, disabledStyle, buttonText, children, render } = this.props

    if (render) {
      return render({ onClick: this.signOut })
    }

    const disabled = this.state.disabled || this.props.disabled
    const initialStyle = {
      display: 'inline-block',
      background: '#d14836',
      color: '#fff',
      width: 190,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 2,
      border: '1px solid transparent',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Roboto'
    }
    const styleProp = (() => {
      if (style) {
        return style
      } else if (className && !style) {
        return {}
      }

      return initialStyle
    })()
    const defaultStyle = (() => {
      if (disabled) {
        return Object.assign({}, styleProp, disabledStyle)
      }

      return styleProp
    })()
    const googleLoginButton = React.createElement(
      tag,
      {
        onClick: this.signOut,
        style: defaultStyle,
        disabled,
        className
      },
      children || buttonText
    )

    return googleLoginButton
  }
}

GoogleLogout.propTypes = {
  jsSrc: PropTypes.string,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  disabledStyle: PropTypes.object,
  disabled: PropTypes.bool,
  tag: PropTypes.string,
  onLogoutSuccess: PropTypes.func,
  render: PropTypes.func
}

GoogleLogout.defaultProps = {
  tag: 'button',
  buttonText: 'Logout',
  disabledStyle: {
    opacity: 0.6
  },
  jsSrc: 'https://apis.google.com/js/client:platform.js'
}

export default GoogleLogout
