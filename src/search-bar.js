import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class Searchbar extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
body {
	font-family: sans-serif;
	background-color: #111;
}
.button {
	display: inline-block;
	margin: 4px 2px;
	background-color: #444;
	font-size: 14px;
	padding-left: 32px;
	padding-right: 32px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: white;
	text-decoration: none;
	cursor: pointer;
	-moz-user-select: none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.button:hover {
	transition-duration: 0.4s;
	-moz-transition-duration: 0.4s;
	-webkit-transition-duration: 0.4s;
	-o-transition-duration: 0.4s;
	background-color: white;
	color: black;
}
.search-container {
	position: relative;
	display: inline-block;
	margin: 4px 2px;
	height: 50px;
	width: 50px;
	vertical-align: bottom;
}
.searchbutton {
	position: absolute;
	font-size: 22px;
	width: 100%;
	margin: 0;
	padding: 0;
}
.search:focus + .searchbutton {
	transition-duration: 0.4s;
	-moz-transition-duration: 0.4s;
	-webkit-transition-duration: 0.4s;
	-o-transition-duration: 0.4s;
	background-color: white;
	color: black;
}
.search {
	position: absolute;
	left: 49px; 
	background-color: white;
	outline: none;
	border: none;
	padding: 0;
	width: 0;
	height: 100%;
	z-index: 10;
	transition-duration: 0.4s;
	-moz-transition-duration: 0.4s;
	-webkit-transition-duration: 0.4s;
	-o-transition-duration: 0.4s;
}
.search:focus {
	width: 418px; 
	padding: 0 16px 0 0;
}
.expandright {
	left: auto;
	right: 60px; 
}
.expandright:focus {
	padding: 0 0 0 20px;
}
    main {
      flex-grow: 1;
    }
    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }
    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }
    .app-footer a {
      margin-left: 5px;
  
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
<div class="search-container">
  <form action="/search" method="get">
    <input class="search" id="searchleft" type="search" name="q" placeholder="Search">
    <label class="button searchbutton" for="searchleft"><span class="mglass">&#9906;</span></label>
  </form>
</div>
    `;
  }
}

// old search bar
// class Searchbar extends LitElement {
//   static properties = {}
//   static styles = css`
//     .searchbar {
//       box-shadow: 1px 1px 1px 2px gray;
//       margin: auto;
//       margin-top: 5px;
//       width: fit-content;
//     }
//     .searchInput {
//       width: 1300px;
//       height: 50px;
//       border: 0;
//     }
//     .icon {
//       width: 45px;
//     }
//   `;

//   constructor() {
//     super();
//   }

//   render() {
//     return html`
//       <main>
//         <div class="searchbar">
//           <form>
//             <simple-icon icon="search" class="icon"></simple-icon>
//             <input
//               class="searchInput"
//               type="text"
//               placeholder="Search Content, Topics, and People"
//             />
//           </form>
//         </div>
//       </main>
//     `;
//   }
// }

customElements.define("search-bar", Searchbar);
