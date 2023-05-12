(()=>{"use strict";class e{constructor(e){this.board=e||[],this.missed=[[]],this.hits=[[]]}initialize(){let e=0;for(let t=0;t<10;t++){this.board[t]=[];for(let r=0;r<10;r++)this.board[t][r]=e,e++}}placeShip(e){let t=e.column,r=e.position;for(let e=0;e<r.length;e++)this.board[t][this.board[t].indexOf(r[e])]="x"}recieveAttack(e,t){"x"===this.board[e][t]?void 0===this.hits[e]?this.hits[e]=[t]:this.hits[e].push(t):void 0===this.missed[e]?this.missed[e]=[t]:this.missed[e].push(t)}}class t{constructor(){this.turn=!0,this.position=this.position}autoPlay(){return Math.floor(10*Math.random())}}class r{constructor(e,t,r){this.length=e,this.hits=[],this.position=r||[],this.column=t}hit(e){this.position.includes(e)&&!this.hits.includes(e)&&this.hits.push(e)}isSunk(){return this.length===this.hits.length}}const o=(e,t,r)=>{const o=document.querySelector(t);e.initialize(),e.board.forEach((e=>{e.forEach((e=>{const t=document.createElement("div");t.classList.add(r),t.setAttribute("value",e),o.appendChild(t),t.value=e,t.textContent=e}))}))},a=(e,t,r)=>{l(t,r);const o=document.querySelector(`#${t}`);e.board.forEach((e=>{e.forEach((e=>{const t=document.createElement("div");t.classList.add(r),t.setAttribute("value",e),o.appendChild(t),t.value=e,t.textContent=e}))}))},l=(e,t)=>{const r=document.querySelector(`#${e}`);document.querySelectorAll(`.${t}`).forEach((e=>{r.removeChild(e)}))},s=(e,t,r)=>{switch(e.length){case 2:{const e=document.querySelector(`div[value="${t.target.value}"]`),o=document.querySelector(`div[value="${t.target.value+1}"]`);return e.style.backgroundColor=r,o.style.backgroundColor=r,[t.target.value,t.target.value+1]}case 3:{const e=document.querySelector(`.player-grids[value="${t.target.value}"]`),o=document.querySelector(`.player-grids[value="${t.target.value+1}"]`),a=document.querySelector(`.player-grids[value="${t.target.value+2}"]`);return e.style.backgroundColor=r,o.style.backgroundColor=r,a.style.backgroundColor=r,[t.target.value,t.target.value+1,t.target.value+2]}case 4:{const e=document.querySelector(`div[value="${t.target.value}"]`),o=document.querySelector(`div[value="${t.target.value+1}"]`),a=document.querySelector(`div[value="${t.target.value+2}"]`),l=document.querySelector(`div[value="${t.target.value+3}"]`);return e.style.backgroundColor=r,o.style.backgroundColor=r,a.style.backgroundColor=r,l.style.backgroundColor=r,[t.target.value,t.target.value+1,t.target.value+2,t.target.value+3]}case 5:{const e=document.querySelector(`.player-grids[value="${t.target.value}"]`),o=document.querySelector(`.player-grids[value="${t.target.value+1}"]`),a=document.querySelector(`.player-grids[value="${t.target.value+2}"]`),l=document.querySelector(`.player-grids[value="${t.target.value+3}"]`),s=document.querySelector(`.player-grids[value="${t.target.value+4}"]`);return e.style.backgroundColor=r,o.style.backgroundColor=r,a.style.backgroundColor=r,l.style.backgroundColor=r,s.style.backgroundColor=r,[t.target.value,t.target.value+1,t.target.value+2,t.target.value+3,t.target.value+4]}}};let u=!0;const c=(e,t)=>{const o=new r(t,0,[1,2,3]);if(3===t&&u&&(t+=1,u=!1),t<=0)return;const l=document.querySelectorAll("#primary-container>.player-grids");l.forEach((r=>r.addEventListener("mouseover",(l=>{s(o,l,"blue"),r.addEventListener("click",(r=>{o.position=s(o,r,"yellow"),o.column=Math.floor(o.position[0]/10),e.placeShip(o),a(e,"primary-container","player-grids"),c(e,t-1)}))})))),l.forEach((e=>e.addEventListener("mouseout",(e=>{s(o,e,"black")}))))};(()=>{new t,new t;const l=new e,s=new e;o(l,"#primary-container","player-grids"),o(s,"#secondary-container","ai-grids"),c(l,5),(e=>{const t=new r(5,0,[1,2,3,4,5]),o=new r(4,7,[73,74,75,76]),l=new r(3,2,[22,23,24]),s=new r(3,4,[44,45,46]),u=new r(2,9,[91,92]);e.placeShip(t),e.placeShip(o),e.placeShip(l),e.placeShip(s),e.placeShip(u),a(e,"secondary-container","ai-grids"),document.querySelectorAll("#secondary-container>.ai-grids")})(s)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVDeEp6RTBCLENBQWNMLEVBQU8sRUFlekJNLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3Rvcihib2FyZCkge1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZCB8fCBbXTtcbiAgICB0aGlzLm1pc3NlZCA9IFtbXV07XG4gICAgdGhpcy5oaXRzID0gW1tdXTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHRoaXMuYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gY291bnQ7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXApIHtcbiAgICBsZXQgY29sdW1uID0gc2hpcC5jb2x1bW47XG4gICAgbGV0IHBvc2l0aW9uID0gc2hpcC5wb3NpdGlvbjtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmJvYXJkW2NvbHVtbl1bdGhpcy5ib2FyZFtjb2x1bW5dLmluZGV4T2YocG9zaXRpb25baV0pXSA9ICd4J1xuICAgICAgXG4gICAgfVxuICAgIFxuICB9XG5cbiAgcmVjaWV2ZUF0dGFjayhjb2x1bW4sIHBvc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbY29sdW1uXVtwb3NpdGlvbl0gPT09IFwieFwiKSB7XG4gICAgICBpZiAodGhpcy5oaXRzW2NvbHVtbl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmhpdHNbY29sdW1uXSA9IFtwb3NpdGlvbl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpdHNbY29sdW1uXS5wdXNoKHBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubWlzc2VkW2NvbHVtbl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5taXNzZWRbY29sdW1uXSA9IFtwb3NpdGlvbl07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWlzc2VkW2NvbHVtbl0ucHVzaChwb3NpdGlvbik7XG4gICAgfVxuICB9XG4gXG59XG4iLCJleHBvcnQgY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKCl7IFxuICAgICAgICB0aGlzLnR1cm4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICB9XG4gIFxuICAgIGF1dG9QbGF5KCl7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICByZXR1cm4gcmFuZG9tO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwe1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCxjb2x1bW4scG9zaXRpb24pe1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbnx8W107XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgIFxuICAgIH1cbiAgICBoaXQoaGl0UG9zaXRpb24pe1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKGhpdFBvc2l0aW9uKSYmICEodGhpcy5oaXRzLmluY2x1ZGVzKGhpdFBvc2l0aW9uKSkpe1xuICAgICAgICAgICAgdGhpcy5oaXRzLnB1c2goaGl0UG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGlzU3Vuaygpe1xuICAgICAgICBpZih0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzLmxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuLi9mYWN0b3JpZXMvR2FtZUJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vZmFjdG9yaWVzL1NoaXBcIjtcbmV4cG9ydCBjb25zdCBjcmVhdGVCb2FyZCA9IChuZXdCb2FyZCxpZCxjbGFzc05hbWUpPT57XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgbmV3Qm9hcmQuaW5pdGlhbGl6ZSgpO1xuICAgIGxldCBib2FyZCA9IG5ld0JvYXJkLmJvYXJkO1xuICAgIGJvYXJkLmZvckVhY2goZT0+e1xuICAgICAgICBlLmZvckVhY2goZT0+e1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyBcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgZGl2LnZhbHVlID0gZTtcbiAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGU7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBcbn1cbmV4cG9ydCBjb25zdCB1cGRhdGVCb2FyZCA9IChuZXdCb2FyZCxjb250YWluZXJJRCxncmlkSUQpPT57XG4gICAgcmVtb3ZlQm9hcmQoY29udGFpbmVySUQsZ3JpZElEKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjb250YWluZXJJRH1gKTtcbiAgICBsZXQgYm9hcmQgPSBuZXdCb2FyZC5ib2FyZDtcbiAgICBib2FyZC5mb3JFYWNoKGU9PntcbiAgICAgICAgZS5mb3JFYWNoKGU9PntcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoZ3JpZElEKTsgXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd2YWx1ZScsZSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIGRpdi52YWx1ZSA9IGU7XG4gICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBlO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICAgXG4gICAgfSk7XG5cbiAgICBcbn1cbmV4cG9ydCBjb25zdCByZW1vdmVCb2FyZCA9IChjb250YWluZXJJRCxncmlkSUQpPT57XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29udGFpbmVySUR9YCk7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2dyaWRJRH1gKTtcbiAgICBncmlkLmZvckVhY2goZWxlbWVudD0+IHsgXG4gICAgICAgICAgICBcbiAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgICAgXG4gICAgICAgXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgY2xpY2tFdmVudCA9IChwbGF5ZXIsYWkpPT57XG4gICAgY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZHMnKTtcbiAgICBncmlkcy5mb3JFYWNoKGVsZW1lbnQ9PmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICBpZihwbGF5ZXIudHVybil7XG4gICAgICAgICAgICAgYWkudHVybiA9IHRydWU7XG4gICAgICAgICAgICAgcGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllcjogJytlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2NsaWNrJyk7XG4gICAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9ZWxzZSBpZihhaS50dXJuKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhaTogJysgYWkuYXV0b1BsYXkoKSk7XG4gICAgICAgICAgICBhaS50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICBwbGF5ZXIudHVybiA9IHRydWU7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KSk7XG59XG5jb25zdCBmaW5kRWxlbWVudD0gKHNoaXAsZXZlbnQsY29sb3IpPT57XG4gICAgc3dpdGNoKHNoaXAubGVuZ3RoKXtcbiAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdlt2YWx1ZT1cIiR7ZXZlbnQudGFyZ2V0LnZhbHVlfVwiXWApO1xuICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbdmFsdWU9XCIke2V2ZW50LnRhcmdldC52YWx1ZSsxfVwiXWApO1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgICAgICAgbmV4dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgICAgICAgcmV0dXJuIFtldmVudC50YXJnZXQudmFsdWUsZXZlbnQudGFyZ2V0LnZhbHVlKzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6e1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLWdyaWRzW3ZhbHVlPVwiJHtldmVudC50YXJnZXQudmFsdWV9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1ncmlkc1t2YWx1ZT1cIiR7ZXZlbnQudGFyZ2V0LnZhbHVlKzF9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCB0aGlyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLWdyaWRzW3ZhbHVlPVwiJHtldmVudC50YXJnZXQudmFsdWUrMn1cIl1gKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgc2Vjb25kRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgIHRoaXJkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgIHJldHVybiBbZXZlbnQudGFyZ2V0LnZhbHVlLGV2ZW50LnRhcmdldC52YWx1ZSsxLGV2ZW50LnRhcmdldC52YWx1ZSsyXTtcbiAgICAgICAgfVxuICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIDQ6IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W3ZhbHVlPVwiJHtldmVudC50YXJnZXQudmFsdWV9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W3ZhbHVlPVwiJHtldmVudC50YXJnZXQudmFsdWUrMX1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHRoaXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdlt2YWx1ZT1cIiR7ZXZlbnQudGFyZ2V0LnZhbHVlKzJ9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBmb3VydGhFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W3ZhbHVlPVwiJHtldmVudC50YXJnZXQudmFsdWUrM31cIl1gKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgc2Vjb25kRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgIHRoaXJkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgIGZvdXJ0aEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gW2V2ZW50LnRhcmdldC52YWx1ZSxldmVudC50YXJnZXQudmFsdWUrMSxldmVudC50YXJnZXQudmFsdWUrMixldmVudC50YXJnZXQudmFsdWUrM11cbiAgICAgICAgIH1cbiAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSA1OiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItZ3JpZHNbdmFsdWU9XCIke2V2ZW50LnRhcmdldC52YWx1ZX1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLWdyaWRzW3ZhbHVlPVwiJHtldmVudC50YXJnZXQudmFsdWUrMX1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHRoaXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItZ3JpZHNbdmFsdWU9XCIke2V2ZW50LnRhcmdldC52YWx1ZSsyfVwiXWApO1xuICAgICAgICAgICAgY29uc3QgZm91cnRoRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItZ3JpZHNbdmFsdWU9XCIke2V2ZW50LnRhcmdldC52YWx1ZSszfVwiXWApO1xuICAgICAgICAgICAgY29uc3QgZmlmdGhFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1ncmlkc1t2YWx1ZT1cIiR7ZXZlbnQudGFyZ2V0LnZhbHVlKzR9XCJdYCk7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgIHNlY29uZEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgICAgICB0aGlyZEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgICAgICBmb3VydGhFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgZmlmdGhFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIFtldmVudC50YXJnZXQudmFsdWUsZXZlbnQudGFyZ2V0LnZhbHVlKzEsZXZlbnQudGFyZ2V0LnZhbHVlKzIsZXZlbnQudGFyZ2V0LnZhbHVlKzMsZXZlbnQudGFyZ2V0LnZhbHVlKzRdO1xuICAgICAgICAgfVxuICAgIH1cbn1cbmxldCBmbGFnID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCByZW5kZXJQbGF5ZXJTaGlwcyA9ICAoZ2FtZWJvYXJkLGxlbmd0aCkgPT57XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCwwLFsxLDIsM10pO1xuICAgIGlmKGxlbmd0aD09PTMpe1xuICAgICAgICBpZihmbGFnKXtcbiAgICAgICAgICAgbGVuZ3RoKz0xOyBcbiAgICAgICAgICAgZmxhZz1mYWxzZTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgaWYobGVuZ3RoPD0wKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcmltYXJ5LWNvbnRhaW5lcj4ucGxheWVyLWdyaWRzJyk7XG4gICAgZ3JpZHMuZm9yRWFjaChlbGVtZW50PT5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKGUpPT57XG4gICAgICAgIFxuICAgICAgICAgICAgZmluZEVsZW1lbnQoc2hpcCxlLCdibHVlJyk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcblxuICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbiA9IGZpbmRFbGVtZW50KHNoaXAsZSwneWVsbG93Jyk7XG4gICAgICAgICAgICAgICBzaGlwLmNvbHVtbiA9IE1hdGguZmxvb3Ioc2hpcC5wb3NpdGlvblswXS8xMCk7XG4gICAgICAgICAgICAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCk7XG4gICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKGdhbWVib2FyZCwncHJpbWFyeS1jb250YWluZXInLFwicGxheWVyLWdyaWRzXCIpO1xuICAgICAgICAgICAgICAgICByZW5kZXJQbGF5ZXJTaGlwcyhnYW1lYm9hcmQsbGVuZ3RoLTEpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgfSkpO1xuICAgIFxuXG4gICAgZ3JpZHMuZm9yRWFjaChlbGVtZW50PT5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywoZSk9PntcbiAgICAgICBmaW5kRWxlbWVudChzaGlwLGUsJ2JsYWNrJyk7XG4gICAgfSkpOyAgICAgXG4gICAgXG59XG5cblxuXG5cblxuXG5leHBvcnQgY29uc3QgcmVuZGVyQWlTaGlwcyA9ICAoZ2FtZWJvYXJkKSA9PntcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoNSwwLFsxLDIsMyw0LDVdKTtcbiAgICBjb25zdCBzaGlwMiA9IG5ldyBTaGlwKDQsNyxbNzMsNzQsNzUsNzZdKTtcbiAgICBjb25zdCBzaGlwMyA9IG5ldyBTaGlwKDMsMixbMjIsMjMsMjRdKTtcbiAgICBjb25zdCBzaGlwNCA9IG5ldyBTaGlwKDMsNCxbNDQsNDUsNDZdKTtcbiAgICBjb25zdCBzaGlwNSA9IG5ldyBTaGlwKDIsOSxbOTEsOTJdKTtcbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXApO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDIpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDMpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDQpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDUpO1xuICAgIHVwZGF0ZUJvYXJkKGdhbWVib2FyZCwnc2Vjb25kYXJ5LWNvbnRhaW5lcicsXCJhaS1ncmlkc1wiKTtcbiAgICBjb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZWNvbmRhcnktY29udGFpbmVyPi5haS1ncmlkcycpO1xuICAgIC8vIGdyaWRzLmZvckVhY2goZWxlbWVudD0+e1xuICAgICAgICBcbiAgICAvLyB9KTtcbiAgICAvLyBncmlkcy5mb3JFYWNoKGVsZW1lbnQ9PmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywoZSk9PntcbiAgICAgICAgXG4gICAgLy8gICAgICAgICBmaW5kRWxlbWVudChzaGlwLGUsJ2JsdWUnKTtcbiAgICAvLyAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuXG4gICAgLy8gICAgICAgICAgICBzaGlwLnBvc2l0aW9uID0gZmluZEVsZW1lbnQoc2hpcCxlLCd5ZWxsb3cnKTtcbiAgICAvLyAgICAgICAgICAgIHNoaXAuY29sdW1uID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdLzEwKTtcbiAgICAvLyAgICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwKTtcbiAgICAvLyAgICAgICAgICAgICAgdXBkYXRlQm9hcmQoZ2FtZWJvYXJkLCdwcmltYXJ5LWNvbnRhaW5lcicsXCJwbGF5ZXItZ3JpZHNcIik7XG4gICAgLy8gICAgICAgICAgICAgIHJlbmRlclBsYXllclNoaXBzKGdhbWVib2FyZCxsZW5ndGgtMSk7XG4gICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9KSk7XG4gICAgXG5cbiAgICAgXG4gICAgXG59XG5cblxuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi4vZmFjdG9yaWVzL0dhbWVCb2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL2ZhY3Rvcmllcy9QbGF5ZXJcIlxuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL2ZhY3Rvcmllcy9TaGlwXCI7XG5pbXBvcnQgeyBjbGlja0V2ZW50LCBjcmVhdGVCb2FyZCwgcmVtb3ZlQm9hcmQsIHJlbmRlckFpU2hpcHMsIHJlbmRlclBsYXllclNoaXBzLCB1cGRhdGVCb2FyZCB9IGZyb20gXCIuL2RvbVwiO1xuXG5leHBvcnQgY29uc3QgcnVuR2FtZSA9ICgpPT57XG4gICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuICAgIGNvbnN0IGFpID0gbmV3IFBsYXllcigpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIGNvbnN0IGFpQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgXG4gICAgY3JlYXRlQm9hcmQocGxheWVyQm9hcmQsJyNwcmltYXJ5LWNvbnRhaW5lcicsJ3BsYXllci1ncmlkcycpO1xuICAgIGNyZWF0ZUJvYXJkKGFpQm9hcmQsJyNzZWNvbmRhcnktY29udGFpbmVyJywnYWktZ3JpZHMnKTtcbiAgICAgcmVuZGVyUGxheWVyU2hpcHMocGxheWVyQm9hcmQsNSk7IFxuICAgIHJlbmRlckFpU2hpcHMoYWlCb2FyZClcbiAgICAvLyByZW5kZXJTaGlwcyhnYW1lYm9hcmQsNCk7XG4gICAvLyB1cGRhdGVCb2FyZChnYW1lYm9hcmQsJ3ByaW1hcnktY29udGFpbmVyJyxcInBsYXllci1ncmlkc1wiKTtcbiAgICAgXG4gICAgLy8gZm9yKGxldCBpID0wO2k8NDsgaSsrKXtcbiAgICAgICBcbiAgICAvLyAgICAgcmVuZGVyU2hpcHMoZ2FtZWJvYXJkLDQpO1xuICAgIC8vIH1cbiAgICAgXG4gICAgXG5cbiAgIFxuICAgIC8vICBjb25zb2xlLmxvZyhnYW1lYm9hcmQuYm9hcmQpO1xuICAgIC8vICBjbGlja0V2ZW50KHBsYXllcixhaSk7XG59XG5ydW5HYW1lKCk7Il0sIm5hbWVzIjpbIkdhbWVCb2FyZCIsImNvbnN0cnVjdG9yIiwiYm9hcmQiLCJ0aGlzIiwibWlzc2VkIiwiaGl0cyIsImluaXRpYWxpemUiLCJjb3VudCIsImkiLCJqIiwicGxhY2VTaGlwIiwic2hpcCIsImNvbHVtbiIsInBvc2l0aW9uIiwibGVuZ3RoIiwiaW5kZXhPZiIsInJlY2lldmVBdHRhY2siLCJ1bmRlZmluZWQiLCJwdXNoIiwiUGxheWVyIiwidHVybiIsImF1dG9QbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiU2hpcCIsImhpdCIsImhpdFBvc2l0aW9uIiwiaW5jbHVkZXMiLCJpc1N1bmsiLCJjcmVhdGVCb2FyZCIsIm5ld0JvYXJkIiwiaWQiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwiZSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJ1cGRhdGVCb2FyZCIsImNvbnRhaW5lcklEIiwiZ3JpZElEIiwicmVtb3ZlQm9hcmQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInJlbW92ZUNoaWxkIiwiZmluZEVsZW1lbnQiLCJldmVudCIsImNvbG9yIiwiY3VycmVudEVsZW1lbnQiLCJ0YXJnZXQiLCJuZXh0RWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic2Vjb25kRWxlbWVudCIsInRoaXJkRWxlbWVudCIsImZvdXJ0aEVsZW1lbnQiLCJmaWZ0aEVsZW1lbnQiLCJmbGFnIiwicmVuZGVyUGxheWVyU2hpcHMiLCJnYW1lYm9hcmQiLCJncmlkcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5ZXJCb2FyZCIsImFpQm9hcmQiLCJzaGlwMiIsInNoaXAzIiwic2hpcDQiLCJzaGlwNSIsInJlbmRlckFpU2hpcHMiLCJydW5HYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==