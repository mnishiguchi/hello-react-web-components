import React from 'react'
import ReactDOM from 'react-dom/client'
import AppHeader from './AppHeader'

// Wrap a React component in an HTMLElement
// https://reactjs.org/docs/web-components.html#using-react-in-your-web-components
class AppHeaderWebComponent extends HTMLElement {
  connectedCallback() {
    // Create a mount point and attach it to the shadow DOM
    const mountPoint = document.createElement('span')
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint)

    // Get HTML attributes
    const name = this.getAttribute('name')

    // Render the React component
    const root = ReactDOM.createRoot(mountPoint)
    root.render(
      <React.StrictMode>
        <AppHeader name={name} />
      </React.StrictMode>
    )
  }
}

// Get or define a Web Component
window.customElements.get('app-header') ||
  window.customElements.define('app-header', AppHeaderWebComponent)
