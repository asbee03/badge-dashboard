import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class SearchBar extends LitElement {
  static properties = {
    topic: { type: String },
    word: { type: String }
  }

  static styles = css`
    :host {
      
    }
    .searchbar {
      box-shadow: 1px 1px 1px 2px gray;
      margin-top: 5px;
      width: 1300px;
      border-radius: 5px;
      padding: 2px;
      
    }
    .searchInput {
      width: 1200px;
      height: 50px;
      border-radius: 5px;
    }
    .icon{
      width:100px;
    }
  `;

  constructor() {
    super();
    this.topic = 'Search Content, Topics, and People';
    this.word = "";    
  }

  inputChange(e) {
    this.word = this.shadowRoot.querySelector('input').value;
  }

  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has('word')) {
      this.dispatchEvent(new CustomEvent('word-changed', {
        detail: {
          value: this.word
        }
      }));
    }
  }
 
  render() {
    return html`
    <div class="searchbar">
      <simple-icon class="searchIcon" accent-color="black" icon="search"></simple-icon><input type="text" id="searchbar" placeholder="${this.topic}" @input="${this.inputChange}" />
      
    </div>

    
    `;
  }
}





customElements.define('search-bar', SearchBar);

//harder search bar 

   //static styles = css`
     //.searchbar {
     //  box-shadow: 1px 1px 1px 2px gray;
      // margin: auto;
      // margin-top: 5px;
      // width: fit-content;
   //  }
    // .searchInput {
     //  width: 1300px;
      // height: 50px;
       //border: 0;
    // }
     //.icon {
     //  width: 45px;
    //}
 //  `;

//   // constructor() {
//     // super();
//    }
//    updated(changedProperties) {
// 	changedProperties.forEach((oldValue, propName) => {
// 	  if (propName === "value") {
// 		this.dispatchEvent(
// 		  new CustomEvent("search-bar-value-changed", {
// 			detail: {
// 			  value: this[propName],
// 			},
// 		  })
// 		);
// 	  }
// 	});
//   }

//   handleInput(e) {
// 	this.value = this.shadowRoot.querySelector("input").value;
//   }

//    render() {
//      return html`
       
//          <div class="searchbar">
           
//              <simple-icon icon="search" class="icon"></simple-icon>
//              <input
//                class="searchInput"
//                type="text"
//                placeholder="Search Content, Topics, and People"
// 			   @input="${this.handleInput}"

			
//              />
//          </div>
       
//      `;
//    }
