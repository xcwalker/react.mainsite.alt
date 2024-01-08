import { Link, useLocation } from "react-router-dom";
import css from "../styles/components/nav-btn.module.css";
import "../styles/components/navbar.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <header id="navbar">
      <div className="container">
        <nav>
          <ul>
            {console.log(location)}
            <NavButton internal={true} to="/" className={location.pathname === "/" ? css.active : ""}>
              <span className={"material-symbols-outlined " + css.icon}>home</span>
              Home
            </NavButton>
            <NavButton internal={true} to="/posts" className={location.pathname.startsWith("/posts") ? css.active : ""}>
              <span className={"material-symbols-outlined " + css.icon}>signpost</span>
              posts
            </NavButton>
          </ul>
          <ul>
            <span className="title">Projects</span>
            {console.log(location)}
            <NavButton internal={false} to="https://reactradio.dev/">
              <svg className={css.icon + " " + css.shrink} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.47 135.47">
                <path d="m0 0 45.155 45.155h45.156V90.31h45.155V45.155L90.311 0zm90.311 90.311L45.155 45.156v45.155l45.156 45.156h45.155zm-45.156 0L0 45.156v90.311h45.155z" />
              </svg>
              ReactRadio
            </NavButton>
            <NavButton internal={false} to="https://searrson.xcwalker.dev/">
              <svg className={css.icon + " " + css.shrink} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.47 135.47">
                <path
                  fill="#fff"
                  d="M37.303 80.767v96.899h96.9V157.9H57.07v-57.368h115.7V80.767zm38.567 38.567v19.765h77.134v57.369h-115.7v19.765h135.47v-96.9z"
                  color="#000"
                  style={{
                    InkscapeStroke: "none",
                  }}
                  transform="translate(-37.303 -80.767)"
                />
              </svg>
              Searrson
            </NavButton>
            <NavButton internal={false} to="https://immersion.xcwalker.dev/">
              <span className={"material-symbols-outlined " + css.icon}>stream</span>
              Immersion
            </NavButton>
            <NavButton internal={false} to="https://therwim.xcwalker.dev/">
              <span className={"material-symbols-outlined " + css.icon}>stream</span>
              Therwim
            </NavButton>
            <NavButton internal={false} to="https://nesbitt.nexus/">
              <svg className={css.icon + " " + css.shrink} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.47 135.47">
                <g strokeWidth={10}>
                  <path
                    d="m2074.1 1521 512 512h-85.333l-426.67-426.66zM2244.7 2033v-170.67l85.333 85.333v85.333zM2159.4 1521h85.333l341.33 341.33v85.333zM2586.1 1777l-85.333-85.333v-170.67h85.333zM2074.1 1691.7l85.333 85.333v256H2074.1z"
                    transform="translate(-548.77 -402.43) scale(.26458)"
                  />
                </g>
              </svg>
              Nesbitt Nexus
            </NavButton>
            <NavButton internal={false} to="https://archivest.net /">
              <svg className={css.icon + " " + css.shrink} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.47 135.47">
                <path d="M54.187 0 0 135.47h41.242a184.895 184.895 0 0 1 94.225-36.377V71.9a212.11 212.11 0 0 0-95.635 31.726L67.734 33.87l14.071 35.179a225.856 225.856 0 0 1 24.468-6.562L81.28.004zm72.606 113.78a171.025 171.025 0 0 0-24.815 5.696l6.395 15.988h27.093z" />
              </svg>
              <span>Archive<sup>st</sup></span>
            </NavButton>
          </ul>
          <ul>
            <span className="title">Contact</span>
            {console.log(location)}
            <NavButton internal={false} to="mailto:contact@xcw.one" className={css.email}>
              <span className={"material-symbols-outlined " + css.icon}>mail</span>
              contact@xcw.one
            </NavButton>
            <NavButton internal={false} to="mailto:xander@xcw.one" className={css.email}>
              <span className={"material-symbols-outlined " + css.icon}>mail</span>
              xander@xcw.one
            </NavButton>
          </ul>
          <ul>
            <span className="title">Socials</span>
            {console.log(location)}
            <NavButton internal={false} to="https://instagram.com/xc_walker/">
              <svg className={css.icon} xmlns="http://www.w3.org/2000/svg" id="svg30" viewBox="0 0 64 64">
                <defs id="defs17">
                  <radialGradient
                    id="radial-gradient"
                    cx={-578.95}
                    cy={-837.6}
                    r={197.06}
                    gradientTransform="matrix(.75 0 0 .75 499.5 629.5)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop id="stop4" offset={0} stopColor="#f9ed32" />
                    <stop id="stop6" offset={0.36} stopColor="#ee2a7b" />
                    <stop id="stop8" offset={0.44} stopColor="#d22a8a" />
                    <stop id="stop10" offset={0.6} stopColor="#8b2ab2" />
                    <stop id="stop12" offset={0.83} stopColor="#1b2af0" />
                    <stop id="stop14" offset={0.88} stopColor="#002aff" />
                  </radialGradient>
                  <style id="style2">{".cls-2{fill:#fff}"}</style>
                </defs>
                <title id="title19" />
                <g id="_3-instagram" data-name="3-instagram">
                  <rect
                    id="rect21"
                    width={64}
                    height={64}
                    x={0}
                    y={0}
                    rx={0}
                    ry={0}
                    style={{
                      fill: "url(#radial-gradient)",
                    }}
                    transform="rotate(180 32 32)"
                  />
                  <path
                    id="path23"
                    d="M44 56H20A12 12 0 0 1 8 44V20A12 12 0 0 1 20 8h24a12 12 0 0 1 12 12v24a12 12 0 0 1-12 12ZM20 12.8a7.21 7.21 0 0 0-7.2 7.2v24a7.21 7.21 0 0 0 7.2 7.2h24a7.21 7.21 0 0 0 7.2-7.2V20a7.21 7.21 0 0 0-7.2-7.2Z"
                    className="cls-2"
                  />
                  <path
                    id="path25"
                    d="M32 45.6A13.6 13.6 0 1 1 45.6 32 13.61 13.61 0 0 1 32 45.6Zm0-22.4a8.8 8.8 0 1 0 8.8 8.8 8.81 8.81 0 0 0-8.8-8.8Z"
                    className="cls-2"
                  />
                  <circle id="circle27" cx={45.6} cy={19.2} r={2.4} className="cls-2" />
                </g>
              </svg>
              Instagram
            </NavButton>
            <NavButton internal={false} to="http://www.twitter.com/xc_walker">
              <svg className={css.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <g data-name="6-twitter">
                  <rect
                    width={64}
                    height={64}
                    rx={0}
                    ry={0}
                    style={{
                      fill: "#00aade",
                    }}
                  />
                  <path
                    d="M47.2 20.8a8 8 0 0 0 4-4.8c-1.6 1.6-5 2.13-5 2.13a8 8 0 0 0-13.83 7.47H32a23.45 23.45 0 0 1-16.8-8.8s-4.8 6.4 2.4 11.2c0 0-3.2 0-4-.8 0 0-.8 4.8 6.4 8a3.86 3.86 0 0 1-3.2 0c0 3.09 3.22 5.6 7.2 5.6 0 2.21-5.37 4-12 4 10.4 7.2 35.2 5.6 36.8-21.6l4-4Z"
                    style={{
                      fill: "#fff",
                    }}
                  />
                </g>
              </svg>
              Twitter
            </NavButton>
            <NavButton internal={false} to="http://www.facebook.com/xander.walker.5">
              <svg className={css.icon} xmlns="http://www.w3.org/2000/svg" data-name="1-facebook" viewBox="0 0 64 64">
                <rect
                  width={64}
                  height={64}
                  rx={0}
                  ry={0}
                  style={{
                    fill: "#385997",
                  }}
                />
                <path
                  d="M54.4 29.6h-10V22c0-1.86 2.14-2 2.8-2H54V9.6h-6.8C39.67 9.6 34 14.93 34 22v7.6h-8.4V40H34v24h10.4V40h8.4Z"
                  style={{
                    fill: "#fff",
                  }}
                />
              </svg>
              Facebook
            </NavButton>
            <NavButton internal={false} to="https://discordapp.com/users/358316209252597761">
              <svg className={css.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <defs>
                  <style>{".cls-2{fill:#808285}.cls-3{fill:#ff0100}"}</style>
                </defs>
                <rect width={64} height={64} fill="#5865f2" data-name="2-youtube" rx={0} ry={0} />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  strokeWidth={0.224}
                  d="M49.644 15.871a41.733 41.733 0 0 0-10.487-3.24c-.452.802-.98 1.884-1.343 2.74a39.248 39.248 0 0 0-11.623 0 29.273 29.273 0 0 0-1.36-2.74 41.513 41.513 0 0 0-10.495 3.252C7.7 25.753 5.901 35.387 6.8 44.877c4.402 3.24 8.668 5.203 12.862 6.493a31.313 31.313 0 0 0 2.755-4.471 27.397 27.397 0 0 1-4.339-2.076c.365-.267.72-.54 1.064-.826 8.364 3.847 17.452 3.847 25.716 0 .348.285.704.559 1.063.826a27.143 27.143 0 0 1-4.346 2.082 31.191 31.191 0 0 0 2.755 4.465c4.198-1.284 8.468-3.252 12.87-6.493 1.056-11.001-1.803-20.544-7.556-29.006zM23.556 39.044c-2.51 0-4.57-2.313-4.57-5.12 0-2.812 2.015-5.126 4.57-5.126s4.614 2.308 4.57 5.126c.004 2.807-2.015 5.12-4.57 5.12zm16.888 0c-2.51 0-4.57-2.313-4.57-5.12 0-2.812 2.016-5.126 4.57-5.126 2.555 0 4.614 2.308 4.57 5.126 0 2.807-2.015 5.12-4.57 5.12z"
                />
              </svg>
              Discord
            </NavButton>
            <NavButton internal={false} to="https://www.twitch.tv/xc_walker">
              <svg className={css.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <rect width={512} height={512} fill="#6441a4" rx={0} ry={0} />
                <path
                  fill="#fff"
                  d="m115 101-22 56v228h78v42h44l41-42h63l85-85V101zm260 185-48 48h-78l-42 42v-42h-65V130h233zm-48-100v85h-30v-85zm-78 0v85h-29v-85z"
                />
              </svg>
              Twitch
            </NavButton>
            <NavButton internal={false} to="https://www.youtube.com/@xcwalker">
              <svg className={css.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <defs></defs>
                <g fill="#ed1f24" data-name="2-youtube">
                  <rect width={64} height={64} className="cls-1" rx={0} ry={0} />
                  <path
                    d="M52.8 1.07A10.14 10.14 0 0 1 62.93 11.2v41.6A10.14 10.14 0 0 1 52.8 62.93H11.2A10.14 10.14 0 0 1 1.07 52.8V11.2A10.14 10.14 0 0 1 11.2 1.07h41.6m0-1.07H11.2A11.19 11.19 0 0 0 0 11.2v41.6A11.19 11.19 0 0 0 11.2 64h41.6A11.19 11.19 0 0 0 64 52.8V11.2A11.19 11.19 0 0 0 52.8 0z"
                    style={{
                      fill: "#808285",
                    }}
                  />
                </g>
                <g fill="#fff" fillRule="nonzero" strokeLinejoin="round" strokeMiterlimit={2} clipRule="evenodd">
                  <path d="M55.667 20.11a6.186 6.186 0 0 0-4.368-4.366C47.447 14.71 32 14.71 32 14.71s-15.446 0-19.3 1.033a6.186 6.186 0 0 0-4.366 4.367C7.3 23.963 7.3 32 7.3 32s0 8.038 1.032 11.89a6.187 6.187 0 0 0 4.367 4.367C16.552 49.29 32 49.29 32 49.29s15.446 0 19.3-1.032a6.186 6.186 0 0 0 4.367-4.368C56.699 40.038 56.699 32 56.699 32s0-8.037-1.032-11.89z" />
                  <path d="M27.06 39.41 39.894 32 27.06 24.59z" />
                </g>
                <path fill="#ed1f24" d="m39.86 31.86-12.8 7.77V24.09z" className="cls-1" />
              </svg>
              Youtube
            </NavButton>
            <NavButton internal={false} to="https://www.tiktok.com/@xc_walker?lang=en">
              <svg className={css.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <defs>
                  <style>{".cls-2{fill:#fff}"}</style>
                </defs>
                <g data-name="21-tumblr">
                  <rect
                    width={64}
                    height={64}
                    x={-64}
                    y={-64}
                    rx={0}
                    ry={0}
                    style={{
                      fill: "#001934",
                    }}
                    transform="scale(-1)"
                  />
                  <g strokeWidth={0.301}>
                    <path
                      fill="#ee1d52"
                      d="M42.159 25.381a18.7 18.7 0 0 0 10.908 3.489v-7.823a11.028 11.028 0 0 1-2.29-.24v6.158a18.705 18.705 0 0 1-10.909-3.489v15.965c0 7.987-6.477 14.46-14.468 14.46-2.98 0-5.752-.9-8.054-2.445a14.428 14.428 0 0 0 10.345 4.35c7.99 0 14.467-6.473 14.467-14.46V25.382zm2.826-7.892a10.902 10.902 0 0 1-2.826-6.384V10.1h-2.17a10.952 10.952 0 0 0 4.996 7.39zM22.4 45.327a6.586 6.586 0 0 1-1.35-4.005 6.616 6.616 0 0 1 6.619-6.614 6.63 6.63 0 0 1 2.007.31V27.02a14.598 14.598 0 0 0-2.29-.132v6.226a6.634 6.634 0 0 0-2.008-.31A6.616 6.616 0 0 0 22.4 45.327z"
                    />
                    <path
                      fill="#fff"
                      d="M39.868 23.476a18.703 18.703 0 0 0 10.909 3.489v-6.158a10.95 10.95 0 0 1-5.792-3.319 10.952 10.952 0 0 1-4.996-7.39h-5.702v31.247a6.617 6.617 0 0 1-6.618 6.592 6.61 6.61 0 0 1-5.268-2.61 6.614 6.614 0 0 1 2.977-12.523c.7 0 1.376.11 2.009.31V26.89c-7.85.162-14.163 6.573-14.163 14.457 0 3.935 1.572 7.503 4.124 10.11a14.404 14.404 0 0 0 8.054 2.445c7.99 0 14.467-6.474 14.467-14.46z"
                    />
                    <path
                      fill="#69c9d0"
                      d="M50.776 20.807v-1.665a10.91 10.91 0 0 1-5.792-1.654 10.94 10.94 0 0 0 5.792 3.319zM39.988 10.098a11.102 11.102 0 0 1-.12-.898V8.194h-7.873v31.247a6.616 6.616 0 0 1-6.618 6.591 6.59 6.59 0 0 1-2.977-.705 6.61 6.61 0 0 0 5.268 2.61 6.617 6.617 0 0 0 6.618-6.592V10.098zm-12.602 16.79v-1.772a14.598 14.598 0 0 0-1.985-.135c-7.991 0-14.468 6.474-14.468 14.46 0 5.006 2.546 9.42 6.414 12.014a14.407 14.407 0 0 1-4.123-10.11c0-7.884 6.312-14.294 14.162-14.457z"
                    />
                  </g>
                </g>
              </svg>
              TikTok
            </NavButton>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavButton(props) {
  return (
    <>
      {props.internal === true && (
        <Link {...props} className={css.navBtn + " " + props.className} to={props.to}>
          {props.children}
        </Link>
      )}
      {props.internal === false && (
        <a {...props} className={css.navBtn + " " + props.className} href={props.to}>
          {props.children}
          <span className={"material-symbols-outlined " + css.tab}>open_in_new</span>
        </a>
      )}
    </>
  );
}
