import React from 'react'
import ReactDOM from 'react-dom/client'
import reactToWebComponent from "react-to-webcomponent";
import AppHeader from './AppHeader'

const webComponent = reactToWebComponent(AppHeader, React, ReactDOM);

customElements.define("app-header", webComponent);
