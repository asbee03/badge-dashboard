import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";



// old search bar
 class Searchbar extends LitElement {
   static properties = {
	value: { type: String },
  }

  static get styles(){
    return css`
    :host{
      display: block; 

    }
    simple-icon {
      display: inline-block;
      --simple-icon-height: 24px; 
      --simple-icon-width: 24px; 
    }
    `;
  }

  constructor(){
    super();
    this.value= 'Search Here!'; 
  }
render(){
  return html`
  <simple-icon icon="icons:search"></simple-icon>
  <input type="text" value="${this.value}" @input="${this.handleInput}" />
  
  `;
}
handleInput(e){
  this.value = e.detail.value; 
  this.dispatchEvent(new CustomEvent('value-changed', {
   detail: {
    value: this.value,
   }
  })); 
}


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
 }

customElements.define("search-bar", Searchbar);
