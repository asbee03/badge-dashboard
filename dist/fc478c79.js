import{s as h,i as d,y as s}from"./ab6369d8.js";import"./254e923e.js";class r extends h{static get tag(){return"badge-list"}static get properties(){return{badges:{type:Array},searchForThis:{type:String}}}constructor(){super(),this.badges=[],this.updateBadges(),this.searchForThis="",this.searchThis(this.badges,this.searchForThis)}updateBadges(){fetch("../api/badge-search").then(e=>e.ok?e.json():[]).then(e=>{this.badges=e})}static get styles(){return d`:host{display:block}.wrapper{display:flex}.item{display:inline-flex}`}searchThis(e,i){return e.filter(t=>{for(var a in t)if(t[a].toString().toLowerCase().includes(i.toLowerCase()))return!0;return!1})}render(){return s` <div class="wrapper"> ${this.searchThis(this.badges,this.searchForThis).map(e=>s` <div class="item"> <badge-dashboard header="${e.header}" img="${e.img}" title="${e.title}" creator="${e.creator}"></badge-dashboard> </div> `)} </div> `}}customElements.define(r.tag,r);