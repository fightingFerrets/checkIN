import { renderComponent, expect } from './test_helper'
import { GoogleLogout } from '../src/index'
import { GoogleLogout as GoogleLogoutDist } from '../dist/google-login'

describe('Google Logout', () => {
  const defaultText = 'Logout'
  let component
  let propsObj

  describe('With default props', () => {
    beforeEach(() => {
      propsObj = {}
      component = renderComponent(GoogleLogout, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(defaultText)
    })

    it('does not have a class attr', () => {
      expect(component).to.not.have.attr('class')
    })

    it('has inline styles', () => {
      expect(component).to.have.attr('style')
    })

    it('displays a button element when tag prop is not set', () => {
      expect(component.get(0).tagName).to.equal('BUTTON')
    })
  })
  describe('With custom text and default props', () => {
    const buttonText = 'buttonText'

    beforeEach(() => {
      propsObj = {
        buttonText
      }
      component = renderComponent(GoogleLogout, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(buttonText)
    })

    it('does not have a class attr', () => {
      expect(component).to.not.have.attr('class')
    })

    it('has inline styles', () => {
      expect(component).to.have.attr('style')
    })
  })
  describe('With custom class and default props', () => {
    let className = 'test-class'

    beforeEach(() => {
      propsObj = {
        className
      }
      component = renderComponent(GoogleLogout, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(defaultText)
    })

    it('has a class attr with custom class', () => {
      expect(component).to.have.attr('class', className)
    })

    it('does not have inline styles', () => {
      expect(component).to.have.attr('style')
    })
  })
  describe('With custom class and custom style', () => {
    let className = 'test-class'
    let style = { color: 'red' }

    beforeEach(() => {
      propsObj = {
        className,
        style
      }
      component = renderComponent(GoogleLogout, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(defaultText)
    })

    it('has a class attr with custom class', () => {
      expect(component).to.have.attr('class', className)
    })

    it('to have custom inline styles', () => {
      expect(component).to.have.attr('style')
    })
  })
  describe('With children, custom text, and default props', () => {
    const children = 'test'
    const buttonText = 'buttonText'

    beforeEach(() => {
      propsObj = {
        children,
        buttonText
      }
      component = renderComponent(GoogleLogout, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays children text', () => {
      expect(component).to.have.text(children)
    })

    it('does not display default text', () => {
      expect(component).to.not.have.text(defaultText)
    })

    it('does not display custom text', () => {
      expect(component).to.not.have.text(buttonText)
    })

    it('does not have a class attr', () => {
      expect(component).to.not.have.attr('class')
    })

    it('has inline styles', () => {
      expect(component).to.have.attr('style')
    })
  })
  describe('With style and default props', () => {
    let style = {
      padding: '10px',
      fontSize: '20px'
    }

    beforeEach(() => {
      propsObj = {
        style
      }
      component = renderComponent(GoogleLogout, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(defaultText)
    })

    it('has a style with custom class', () => {
      expect(component).to.have.attr('style', 'padding: 10px; font-size: 20px; opacity: 0.6;')
    })
  })
  describe('With handles custom tag prop', () => {
    beforeEach(() => {
      propsObj = {
        tag: 'div'
      }
      component = renderComponent(GoogleLogout, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays a div element when tag prop is set to div', () => {
      expect(component.get(0).tagName).to.equal('DIV')
    })
  })
})

describe('Google Logout Dist', () => {
  const defaultText = 'Logout'
  let component
  let propsObj

  describe('With default props', () => {
    beforeEach(() => {
      propsObj = {}
      component = renderComponent(GoogleLogoutDist, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(defaultText)
    })

    it('does not have a class attr', () => {
      expect(component).to.not.have.attr('class')
    })

    it('has inline styles', () => {
      expect(component).to.have.attr('style')
    })

    it('displays a button element when tag prop is not set', () => {
      expect(component.get(0).tagName).to.equal('BUTTON')
    })
  })
  describe('With custom text and default props', () => {
    const buttonText = 'buttonText'

    beforeEach(() => {
      propsObj = {
        buttonText
      }
      component = renderComponent(GoogleLogoutDist, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(buttonText)
    })

    it('does not have a class attr', () => {
      expect(component).to.not.have.attr('class')
    })

    it('has inline styles', () => {
      expect(component).to.have.attr('style')
    })
  })
  describe('With custom class and default props', () => {
    let className = 'test-class'

    beforeEach(() => {
      propsObj = {
        className
      }
      component = renderComponent(GoogleLogoutDist, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(defaultText)
    })

    it('has a class attr with custom class', () => {
      expect(component).to.have.attr('class', className)
    })

    it('does not have inline styles', () => {
      expect(component).to.have.attr('style')
    })
  })
  describe('With custom class and custom style', () => {
    let className = 'test-class'
    let style = { color: 'red' }

    beforeEach(() => {
      propsObj = {
        className,
        style
      }
      component = renderComponent(GoogleLogoutDist, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(defaultText)
    })

    it('has a class attr with custom class', () => {
      expect(component).to.have.attr('class', className)
    })

    it('to have custom inline styles', () => {
      expect(component).to.have.attr('style')
    })
  })
  describe('With children, custom text, and default props', () => {
    const children = 'test'
    const buttonText = 'buttonText'

    beforeEach(() => {
      propsObj = {
        children,
        buttonText
      }
      component = renderComponent(GoogleLogoutDist, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays children text', () => {
      expect(component).to.have.text(children)
    })

    it('does not display default text', () => {
      expect(component).to.not.have.text(defaultText)
    })

    it('does not display custom text', () => {
      expect(component).to.not.have.text(buttonText)
    })

    it('does not have a class attr', () => {
      expect(component).to.not.have.attr('class')
    })

    it('has inline styles', () => {
      expect(component).to.have.attr('style')
    })
  })
  describe('With style and default props', () => {
    let style = {
      padding: '10px',
      fontSize: '20px'
    }

    beforeEach(() => {
      propsObj = {
        style
      }
      component = renderComponent(GoogleLogoutDist, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays correct button text', () => {
      expect(component).to.have.text(defaultText)
    })

    it('has a style with custom class', () => {
      expect(component).to.have.attr('style', 'padding: 10px; font-size: 20px; opacity: 0.6;')
    })
  })
  describe('With handles custom tag prop', () => {
    beforeEach(() => {
      propsObj = {
        tag: 'div'
      }
      component = renderComponent(GoogleLogoutDist, propsObj)
    })

    it('shows the button', () => {
      expect(component).to.exist
    })

    it('displays a div element when tag prop is set to div', () => {
      expect(component.get(0).tagName).to.equal('DIV')
    })
  })
})
