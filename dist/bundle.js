(()=>{"use strict";class t{constructor(t){this.board=t||[],this.missed=[[]],this.hits=[[]]}initialize(){let t=0;for(let e=0;e<10;e++){this.board[e]=[];for(let o=0;o<10;o++)this.board[e][o]=t,t++}}placeShip(t){let e=t.column,o=t.position;for(let t=0;t<o.length;t++)for(let i=0;i<o.length;i++)this.board[e[t]][this.board[e[t]].indexOf(o[i])]="x"}recieveAttack(t,e){"x"===this.board[t][e]?void 0===this.hits[t]?this.hits[t]=[e]:this.hits[t].push(e):void 0===this.missed[t]?this.missed[t]=[e]:this.missed[t].push(e)}}class e{constructor(){this.turn=!0,this.position=this.position}autoPlay(){return Math.floor(10*Math.random())}}class o{constructor(t,e,o){this.length=t,this.hits=[],this.position=o||[],this.column=e||[]}hit(t){this.position.includes(t)&&!this.hits.includes(t)&&this.hits.push(t)}isSunk(){return this.length===this.hits.length}}const i=(t,e,o,i)=>{const s=document.querySelector(e);t.initialize(),t.board.forEach((t=>{t.forEach((t=>{const e=document.createElement("div");e.classList.add(o),e.classList.add(i),e.setAttribute("value",t),s.appendChild(e),e.value=t,e.textContent=t}))}))},s=(t,e,o,i)=>{n(e,o);const s=document.querySelector(`#${e}`);t.board.forEach((t=>{t.forEach((t=>{const e=document.createElement("div");e.classList.add(o),e.classList.add(i),e.setAttribute("value",t),s.appendChild(e),e.value=t,e.textContent=t}))}))},n=(t,e)=>{const o=document.querySelector(`#${t}`);document.querySelectorAll(`.${e}`).forEach((t=>{o.removeChild(t)}))},l=(t,e,o,i)=>{i>1&&(t.length=10*t.length);let s=[];if(1!==t.length){for(let n=0;n<=t.length-1;n+=i)document.querySelector(`div[value="${e.target.value+n}"]`).style.backgroundColor=o,console.log(e.target.value+n),s.push(e.target.value+n);return s}};let r=!0,a="horizontal",c=1;const h=(t,e)=>{console.log(a);let i=document.querySelectorAll(`#primary-container>.${a}`);console.log(i[1]);const n=document.querySelector("#rotate"),d=new o(e,[0,0,0],[1,2,3]);3===e&&r&&(e+=1,r=!1),e<=0||(i.forEach((o=>o.addEventListener("mouseover",(i=>{console.log(l(d,i,"blue",c)),o.addEventListener("click",(o=>{d.position=l(d,o,"yellow",c),d.column=Math.floor(d.position[0]/10),t.placeShip(d),s(t,"primary-container","player-grids",a),h(t,e-1)}))})))),i.forEach((t=>t.addEventListener("mouseout",(t=>{l(d,t,"black",c)})))),n.addEventListener("click",(t=>{c=10,a="horizontal"===a?"vertical":"horizontal",i.forEach((t=>{t.classList.toggle("horizontal"),t.classList.toggle("vertical")}))})))};(()=>{new e,new e;const n=new t,l=new t;i(n,"#primary-container","player-grids","horizontal"),i(l,"#secondary-container","ai-grids","horizontal"),h(n,5),(t=>{const e=new o(5,0,[1,2,3,4,5]),i=new o(4,7,[73,74,75,76]),n=new o(3,2,[22,23,24]),l=new o(3,4,[44,45,46]),r=new o(2,9,[91,92]);t.placeShip(e),t.placeShip(i),t.placeShip(n),t.placeShip(l),t.placeShip(r),s(t,"secondary-container","ai-grids")})(l)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VXpELFVBQVVpRSxHQUNwQlIsRUFBVXpELFVBQVVrRSxHQUNwQlQsRUFBVXpELFVBQVVtRSxHQUNwQjdCLEVBQVltQixFQUFVLHNCQUFzQixXQUFXLEVDekp2RFcsQ0FBY0wsRUFBUSxFQWUxQk0sRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL0dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGJvYXJkKSB7XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkIHx8IFtdO1xuICAgIHRoaXMubWlzc2VkID0gW1tdXTtcbiAgICB0aGlzLmhpdHMgPSBbW11dO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgdGhpcy5ib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSBjb3VudDtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCkge1xuICAgIGxldCBjb2x1bW4gPSBzaGlwLmNvbHVtbjtcbiAgICBsZXQgcG9zaXRpb24gPSBzaGlwLnBvc2l0aW9uO1xuICAgIGZvcihsZXQgaT0wOyBpPHBvc2l0aW9uLmxlbmd0aDtpKyspe1xuICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9zaXRpb24ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtjb2x1bW5baV1dW3RoaXMuYm9hcmRbY29sdW1uW2ldXS5pbmRleE9mKHBvc2l0aW9uW2pdKV0gPSAneCc7XG4gICAgICBcbiAgICB9XG4gICAgfVxuICAgXG4gICAgXG4gIH1cblxuICByZWNpZXZlQXR0YWNrKGNvbHVtbiwgcG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5ib2FyZFtjb2x1bW5dW3Bvc2l0aW9uXSA9PT0gXCJ4XCIpIHtcbiAgICAgIGlmICh0aGlzLmhpdHNbY29sdW1uXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaGl0c1tjb2x1bW5dID0gW3Bvc2l0aW9uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGl0c1tjb2x1bW5dLnB1c2gocG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5taXNzZWRbY29sdW1uXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1pc3NlZFtjb2x1bW5dID0gW3Bvc2l0aW9uXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taXNzZWRbY29sdW1uXS5wdXNoKHBvc2l0aW9uKTtcbiAgICB9XG4gIH1cbiBcbn1cbiIsImV4cG9ydCBjbGFzcyBQbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IoKXsgXG4gICAgICAgIHRoaXMudHVybiA9IHRydWU7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIH1cbiAgXG4gICAgYXV0b1BsYXkoKXtcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIHJldHVybiByYW5kb207XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLGNvbHVtbixwb3NpdGlvbil7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9ufHxbXTtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW58fFtdO1xuICAgICAgIFxuICAgIH1cbiAgICBoaXQoaGl0UG9zaXRpb24pe1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLmluY2x1ZGVzKGhpdFBvc2l0aW9uKSYmICEodGhpcy5oaXRzLmluY2x1ZGVzKGhpdFBvc2l0aW9uKSkpe1xuICAgICAgICAgICAgdGhpcy5oaXRzLnB1c2goaGl0UG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGlzU3Vuaygpe1xuICAgICAgICBpZih0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzLmxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuLi9mYWN0b3JpZXMvR2FtZUJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vZmFjdG9yaWVzL1NoaXBcIjtcbmV4cG9ydCBjb25zdCBjcmVhdGVCb2FyZCA9IChuZXdCb2FyZCxpZCxjbGFzc05hbWUsZGlyZWN0aW9uKT0+e1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuICAgIG5ld0JvYXJkLmluaXRpYWxpemUoKTtcbiAgICBsZXQgYm9hcmQgPSBuZXdCb2FyZC5ib2FyZDtcbiAgICBib2FyZC5mb3JFYWNoKGU9PntcbiAgICAgICAgZS5mb3JFYWNoKGU9PntcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb24pOyBcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgZGl2LnZhbHVlID0gZTtcbiAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGU7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgdXBkYXRlQm9hcmQgPSAobmV3Qm9hcmQsY29udGFpbmVySUQsZ3JpZElELGRpcmVjdGlvbik9PntcbiAgICByZW1vdmVCb2FyZChjb250YWluZXJJRCxncmlkSUQpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbnRhaW5lcklEfWApO1xuICAgIGxldCBib2FyZCA9IG5ld0JvYXJkLmJvYXJkO1xuICAgIGJvYXJkLmZvckVhY2goZT0+e1xuICAgICAgICBlLmZvckVhY2goZT0+e1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChncmlkSUQpOyBcbiAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uKTsgXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd2YWx1ZScsZSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIGRpdi52YWx1ZSA9IGU7XG4gICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBlO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICAgXG4gICAgfSk7XG5cbiAgICBcbn1cbmV4cG9ydCBjb25zdCByZW1vdmVCb2FyZCA9IChjb250YWluZXJJRCxncmlkSUQpPT57XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29udGFpbmVySUR9YCk7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2dyaWRJRH1gKTtcbiAgICBncmlkLmZvckVhY2goZWxlbWVudD0+IHsgXG4gICAgICAgICAgICBcbiAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgICAgXG4gICAgICAgXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgY2xpY2tFdmVudCA9IChwbGF5ZXIsYWkpPT57XG4gICAgY29uc3QgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZHMnKTtcbiAgICBncmlkcy5mb3JFYWNoKGVsZW1lbnQ9PmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICBpZihwbGF5ZXIudHVybil7XG4gICAgICAgICAgICAgYWkudHVybiA9IHRydWU7XG4gICAgICAgICAgICAgcGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllcjogJytlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2NsaWNrJyk7XG4gICAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9ZWxzZSBpZihhaS50dXJuKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhaTogJysgYWkuYXV0b1BsYXkoKSk7XG4gICAgICAgICAgICBhaS50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICBwbGF5ZXIudHVybiA9IHRydWU7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KSk7XG59XG5jb25zdCBnZXRDb29yZGluYXRlcyA9IChzaGlwLGV2ZW50LGNvbG9yLGluY3JlbWVudCk9PntcbiAgICBpZihpbmNyZW1lbnQgPjEpe1xuICAgICAgICAgc2hpcC5sZW5ndGggPSBzaGlwLmxlbmd0aCoxMDtcbiAgICB9XG4gICAgbGV0IGNvb3JkaW5hdGUgPSBbXTtcbiAgICBpZihzaGlwLmxlbmd0aD09PTEpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvcihsZXQgaT0wO2k8PXNoaXAubGVuZ3RoLTE7aT1pK2luY3JlbWVudCl7IFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbdmFsdWU9XCIke2V2ZW50LnRhcmdldC52YWx1ZStpfVwiXWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUraSk7XG4gICAgICAgIGNvb3JkaW5hdGUucHVzaChldmVudC50YXJnZXQudmFsdWUraSk7XG4gICAgICAgIC8vIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdlt2YWx1ZT1cIiR7ZXZlbnQudGFyZ2V0LnZhbHVlK2l9XCJdYCkhPW51bGwpe1xuICAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgXG4gICAgfVxuICAgIHJldHVybiBjb29yZGluYXRlO1xufVxuY29uc3QgZ2V0UG9zaXRpb25zID0gKHNoaXApPT57XG4gICAgXG59XG5sZXQgZmxhZyA9IHRydWU7XG4gbGV0IGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiBsZXQgaW5jcmVtZW50ID0gMTtcbmV4cG9ydCBjb25zdCByZW5kZXJQbGF5ZXJTaGlwcyA9ICAoZ2FtZWJvYXJkLGxlbmd0aCkgPT57XG4gICAgXG4gICBjb25zb2xlLmxvZyhkaXJlY3Rpb24pO1xuICAgIGxldCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCNwcmltYXJ5LWNvbnRhaW5lcj4uJHtkaXJlY3Rpb259YCk7XG4gICAgY29uc29sZS5sb2coZ3JpZHNbMV0pO1xuICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUnKTtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoLFswLDAsMF0sWzEsMiwzXSk7XG4gICAgaWYobGVuZ3RoPT09Myl7XG4gICAgICAgIGlmKGZsYWcpe1xuICAgICAgICAgICBsZW5ndGgrPTE7IFxuICAgICAgICAgICBmbGFnPWZhbHNlO1xuICAgICAgICB9IFxuICAgIH1cbiAgICBpZihsZW5ndGg8PTApe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGdyaWRzLmZvckVhY2goZWxlbWVudD0+ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLChlKT0+e1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBnZXRDb29yZGluYXRlcyhzaGlwLGUsJ2JsdWUnLGluY3JlbWVudCkpO1xuICAgICAgICAgICAgIC8vZ2V0Q29vcmRpbmF0ZXMoc2hpcCxlLCdibHVlJyxpbmNyZW1lbnQpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uID0gZ2V0Q29vcmRpbmF0ZXMoc2hpcCxlLCd5ZWxsb3cnLGluY3JlbWVudCk7XG4gICAgICAgICAgICAgICBzaGlwLmNvbHVtbiA9IE1hdGguZmxvb3Ioc2hpcC5wb3NpdGlvblswXS8xMCk7XG4gICAgICAgICAgICAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCk7XG4gICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKGdhbWVib2FyZCwncHJpbWFyeS1jb250YWluZXInLFwicGxheWVyLWdyaWRzXCIsZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgcmVuZGVyUGxheWVyU2hpcHMoZ2FtZWJvYXJkLGxlbmd0aC0xKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgXG4gICAgfSkpO1xuICAgIFxuXG4gICAgZ3JpZHMuZm9yRWFjaChlbGVtZW50PT5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywoZSk9PntcbiAgICAgICAgZ2V0Q29vcmRpbmF0ZXMoc2hpcCxlLCdibGFjaycsaW5jcmVtZW50KTtcbiAgICB9KSk7ICBcbiAgICBcbiAgICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICBpbmNyZW1lbnQgPSAxMDtcbiAgICAgICAgaWYoZGlyZWN0aW9uID09PSdob3Jpem9udGFsJyl7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgICAgfVxuICAgICAgICAvL2RpcmVjdGlvbj09PSdob3Jpem9udGFsJz9kaXJlY3Rpb249J3ZlcnRpY2FsJzpkaXJlY3Rpb249J2hvcml6b250YWwnO1xuICAgIC8vICAgIGdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgI3ByaW1hcnktY29udGFpbmVyPi4ke2RpcmVjdGlvbn1gKTsgXG4gICAgICAgIGdyaWRzLmZvckVhY2goZWxlbWVudD0+e1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdob3Jpem9udGFsJyk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIH0pOyBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pO1xuICAgXG59XG5cblxuXG5cblxuXG5leHBvcnQgY29uc3QgcmVuZGVyQWlTaGlwcyA9ICAoZ2FtZWJvYXJkKSA9PntcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoNSwwLFsxLDIsMyw0LDVdKTtcbiAgICBjb25zdCBzaGlwMiA9IG5ldyBTaGlwKDQsNyxbNzMsNzQsNzUsNzZdKTtcbiAgICBjb25zdCBzaGlwMyA9IG5ldyBTaGlwKDMsMixbMjIsMjMsMjRdKTtcbiAgICBjb25zdCBzaGlwNCA9IG5ldyBTaGlwKDMsNCxbNDQsNDUsNDZdKTtcbiAgICBjb25zdCBzaGlwNSA9IG5ldyBTaGlwKDIsOSxbOTEsOTJdKTtcbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXApO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDIpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDMpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDQpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDUpO1xuICAgIHVwZGF0ZUJvYXJkKGdhbWVib2FyZCwnc2Vjb25kYXJ5LWNvbnRhaW5lcicsXCJhaS1ncmlkc1wiKTtcbn1cblxuXG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuLi9mYWN0b3JpZXMvR2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vZmFjdG9yaWVzL1BsYXllclwiXG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vZmFjdG9yaWVzL1NoaXBcIjtcbmltcG9ydCB7IGNsaWNrRXZlbnQsIGNyZWF0ZUJvYXJkLCByZW1vdmVCb2FyZCwgcmVuZGVyQWlTaGlwcywgcmVuZGVyUGxheWVyU2hpcHMsIHVwZGF0ZUJvYXJkIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmV4cG9ydCBjb25zdCBydW5HYW1lID0gKCk9PntcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgY29uc3QgYWkgPSBuZXcgUGxheWVyKCk7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgY29uc3QgYWlCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICBcbiAgICBjcmVhdGVCb2FyZChwbGF5ZXJCb2FyZCwnI3ByaW1hcnktY29udGFpbmVyJywncGxheWVyLWdyaWRzJywnaG9yaXpvbnRhbCcpO1xuICAgIGNyZWF0ZUJvYXJkKGFpQm9hcmQsJyNzZWNvbmRhcnktY29udGFpbmVyJywnYWktZ3JpZHMnLCdob3Jpem9udGFsJyk7XG4gICAgIHJlbmRlclBsYXllclNoaXBzKHBsYXllckJvYXJkLDUpOyBcbiAgICByZW5kZXJBaVNoaXBzKGFpQm9hcmQpO1xuICAgIC8vIHJlbmRlclNoaXBzKGdhbWVib2FyZCw0KTtcbiAgIC8vIHVwZGF0ZUJvYXJkKGdhbWVib2FyZCwncHJpbWFyeS1jb250YWluZXInLFwicGxheWVyLWdyaWRzXCIpO1xuICAgICBcbiAgICAvLyBmb3IobGV0IGkgPTA7aTw0OyBpKyspe1xuICAgICAgIFxuICAgIC8vICAgICByZW5kZXJTaGlwcyhnYW1lYm9hcmQsNCk7XG4gICAgLy8gfVxuICAgICBcbiAgICBcblxuICAgXG4gICAgLy8gIGNvbnNvbGUubG9nKGdhbWVib2FyZC5ib2FyZCk7XG4gICAgLy8gIGNsaWNrRXZlbnQocGxheWVyLGFpKTtcbn1cbnJ1bkdhbWUoKTsiXSwibmFtZXMiOlsiR2FtZUJvYXJkIiwiY29uc3RydWN0b3IiLCJib2FyZCIsInRoaXMiLCJtaXNzZWQiLCJoaXRzIiwiaW5pdGlhbGl6ZSIsImNvdW50IiwiaSIsImoiLCJwbGFjZVNoaXAiLCJzaGlwIiwiY29sdW1uIiwicG9zaXRpb24iLCJsZW5ndGgiLCJpbmRleE9mIiwicmVjaWV2ZUF0dGFjayIsInVuZGVmaW5lZCIsInB1c2giLCJQbGF5ZXIiLCJ0dXJuIiwiYXV0b1BsYXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJTaGlwIiwiaGl0IiwiaGl0UG9zaXRpb24iLCJpbmNsdWRlcyIsImlzU3VuayIsImNyZWF0ZUJvYXJkIiwibmV3Qm9hcmQiLCJpZCIsImNsYXNzTmFtZSIsImRpcmVjdGlvbiIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCJlIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsInVwZGF0ZUJvYXJkIiwiY29udGFpbmVySUQiLCJncmlkSUQiLCJyZW1vdmVCb2FyZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJnZXRDb29yZGluYXRlcyIsImV2ZW50IiwiY29sb3IiLCJpbmNyZW1lbnQiLCJjb29yZGluYXRlIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb25zb2xlIiwibG9nIiwiZmxhZyIsInJlbmRlclBsYXllclNoaXBzIiwiZ2FtZWJvYXJkIiwiZ3JpZHMiLCJyb3RhdGVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwicGxheWVyQm9hcmQiLCJhaUJvYXJkIiwic2hpcDIiLCJzaGlwMyIsInNoaXA0Iiwic2hpcDUiLCJyZW5kZXJBaVNoaXBzIiwicnVuR2FtZSJdLCJzb3VyY2VSb290IjoiIn0=