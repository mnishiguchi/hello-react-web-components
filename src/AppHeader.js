import { css } from '@emotion/css'
import logo from './logo.svg'

function AppHeader({ name }) {
  return (
    <header
      className={css`
        background-color: #282c34;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
        padding: 1rem 0;
        text-align: center;
      `}
    >
      <img
        src={logo}
        className={css`
          height: 10vmin;
          pointer-events: none;
        `}
        alt='logo'
      />
      <span
        className={css`
          color: #61dafb;
        `}
      >
        Learn {name}
      </span>
    </header>
  )
}

export default AppHeader
