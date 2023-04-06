import { LitElement, html, css } from "lit";

class BadgeDashboard extends LitElement {
  static properties = {
    badgeTopTitle: {
      type: String,
      reflect: true,
    },

    badgePic: {
      type: String,
    },

    badgeTitleName: {
      type: String,
      reflect: true,
    },

    badgeCreatorName: {
      type: String,
      reflect: true,
    },
  };

  static styles = css`
    main {
      padding: 20px;
    }

    .badge-all {
      display: block;
      letter-spacing: 0.02em;
      float: left;
      height: 135px;
      width: 280px;
      cursor: pointer;
      text-decoration: none;
      position: relative;
      font-weight: 300;
      font-size: 12px;
      line-height: 20px;
      margin: 0 10px 10px 0;
      background: transparent;
      border: 1px solid #fff;
      border-color: #3e98d3;
      border-radius: 6px;
    }

    .badge-top {
      background-color: #cfe6f4;
      border-left: 15px solid #3b8fc6;
      color: #333333;
      font-weight: 400;
      height: 2.25em;
      line-height: 2.25em;
      padding: 0 0.75em;
    }

    .badge-body {
      border-left: 15px solid #3e98d3;
      vertical-align: top;
      padding: 10px 10px;
      overflow: hidden;
      position: relative;
      font-weight: 400;
      font-size: 15px;
      margin-bottom: 10px;
    }

    .badgepic {
      float: right;
      width: 60px;
      height: 60px;
      display: block;
      background-size: contain;
    }

    .creator {
      border-left: 15px solid #3e98d3;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      min-height: 30px;
    }

    .badge-creator-name {
      position: absolute;
      bottom: 0;
      left: 0;
      margin-bottom: 5px;
      margin-left: 10px;
      margin-right: 15px;
      font-weight: 400;
      font-size: 13px;
    }
    /*.box{
      width: 200px;
      height: 100px;
      border: 1px solid black;
      }*/
      .container {
        position: absolute;
        height: 250px;
        width: 400px;
        background-color: #ffffff;
      }
  `;

  constructor() {
    super();
    this.badgeTopTitle = "Technology & Information";
    this.badgePic =
      "https://badges.psu.edu/wp-content/uploads/sites/4454/2015/04/mortar_board_badge.png";
    this.badgeTitleName = "APA Style Citations: Introduction";
    this.badgeCreatorName = "Abhi Shah";
  }


  render() {
    return html`
      <main>
      <div class="container"></div>
      
        <div class="badge-all">
          <div class="badge-top">
            <span class="badge-top-title">${this.badgeTopTitle}</span>
          </div>

          <div class="badge-body">
            <div class="badge-image">
              <img class="badgepic" src=${this.badgePic} alt="badge" />
            </div>
            <h3>${this.badgeTitleName}</h3>
          </div>

          <div class="creator">
            <div class="badge-creator-name">
              Creator: ${this.badgeCreatorName}
            </div>
          </div>
        </div>
      </main>
    `;
  }
}

customElements.define("badge-dashboard", BadgeDashboard);
