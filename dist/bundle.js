(()=>{"use strict";class e{constructor(e){this.board=e||[],this.missed=[[]],this.hits=[],this.allow=!1}initialize(e){for(let t=0;t<10;t++){this.board[t]=[];for(let r=0;r<10;r++)this.board[t][r]=e,e++}}placeShip(e){let t=e.column,r=e.position;for(let e=0;e<r.length;e++)for(let o=0;o<r.length;o++)this.board[t[e]][this.board[t[e]].indexOf(r[o])]="x"}recieveAttack(e){this.hits.push(e)}allowAttack(){return this.allow}}class t{constructor(){this.turn=!0,this.position=this.position}autoPlay(e){return e[Math.floor(100*Math.random())]}}class r{constructor(e,t,r){this.length=e,this.hits=[],this.position=r||[],this.column=t||[]}hit(e){this.hits.push(e)}allShipSunk(){return 16===this.hits.length}}const o=(e,t,r,o)=>{const a=document.querySelector(t);e.board.forEach((e=>{e.forEach((e=>{const t=document.createElement("div");t.classList.add(r),t.classList.add(o),t.setAttribute("value",e),a.appendChild(t),t.value=e,t.textContent=e}))}))},a=(e,t,r,o)=>{l(t,r);const a=document.querySelector(`#${t}`);e.board.forEach((e=>{e.forEach((e=>{const t=document.createElement("div");t.classList.add(r),t.classList.add(o),t.setAttribute("value",e),a.appendChild(t),t.value=e,t.textContent=e}))}))},l=(e,t)=>{const r=document.querySelector(`#${e}`);document.querySelectorAll(`.${t}`).forEach((e=>{r.removeChild(e)}))},n=(e,t,r)=>{let o=[6,7,8,9],a=[7,8,9],l=[8,9],n=[9];if(1===r)switch(!0){case 5===e.length&&o.includes(t.target.value%10):case 4===e.length&&a.includes(t.target.value%10):case 3===e.length&&l.includes(t.target.value%10):case 2===e.length&&n.includes(t.target.value%10):return!0}if(10===r)switch(!0){case 5===e.length&&o.includes(Math.floor(t.target.value/10)):case 4===e.length&&a.includes(Math.floor(t.target.value/10)):case 3===e.length&&l.includes(Math.floor(t.target.value/10)):case 2===e.length&&n.includes(Math.floor(t.target.value/10)):return!0}},i=(e,t,r,o)=>{let a=[];if(1!==e.length){for(let l=0;l<=(e.length-1)*o;l+=o){if(n(e,t,o))return;if(5===e.length&&t.target.value%10==6)return;if(t.target.value+l=="x0")return;if(null===document.querySelector(`div[value="${t.target.value+l}"]`))return;if(t.target.value+l=="x0")return;document.querySelector(`div[value="${t.target.value+l}"]`).style.backgroundColor=r,a.push(t.target.value+l)}return a}};let c=!0,s="horizontal",u=1;const h=document.querySelector("#rotate"),d=(e,t,o)=>{let l=document.querySelectorAll(`.player-grids.${s}`);const n=new r(t,[0,0,0],[1,2,3]);3===t&&c&&(t+=1,c=!1),t<=1?g(e):(l.forEach((r=>r.addEventListener("mouseover",(l=>{i(n,l,"blue",u),r.addEventListener("click",(r=>{console.log(o),n.position=i(n,r,"gray",u),n.column=(e=>{let t=[];for(let r=0;r<=e.length-1;r++)e.position[r]&&t.push(Math.floor(e.position[r]/10));return t})(n),e.placeShip(n),a(e,"primary-container","player-grids",s),Array.from(document.querySelectorAll(".player-grids")).filter((e=>"x"===e.value)).forEach((e=>e.style.backgroundColor="transparent")),d(e,t-1)}))})))),l.forEach((e=>e.addEventListener("mouseout",(e=>{i(n,e,"gray",u)})))))},g=r=>{let o,a,l,n=new e;const i=document.querySelectorAll(".player-grids");document.querySelectorAll(".ai-grids").forEach((e=>e.addEventListener("click",(c=>{const s=c.target.value;o=new t,a=o.autoPlay(i),l=a.value,"x"===s?(n.recieveAttack(s),p(n),e.style.backgroundColor="red",v(a,l,r),console.log("hits:"+n.hits.length)):(e.style.backgroundColor="green",v(a,l,r))}))))},v=(e,t,r)=>{e.addEventListener("click",(o=>{const a=o.target.value;"x"===t?(r.recieveAttack(t),p(r),e.style.backgroundColor="red",r.recieveAttack(a)):e.style.backgroundColor="green"}));const o=new Event("click");e.dispatchEvent(o)};h.addEventListener("click",(e=>{"horizontal"===s?(s="vertical",u=10):"vertical"===s&&(s="horizontal",u=1)}));const p=e=>{17===e.hits.length&&console.log("player won!")};(()=>{new t,new t;const l=new e,n=new e;l.initialize(0),n.initialize(100),o(l,"#primary-container","player-grids","horizontal"),o(n,"#secondary-container","ai-grids","horizontal"),(e=>{const t=new r(5,[0,0,0,0,0],[101,102,103,104,105]),o=new r(4,[7,7,7,7],[173,174,175,176]),l=new r(3,[2,2,2],[122,123,124]),n=new r(3,[4,4,4],[144,145,146]),i=new r(2,[8,9],[181,191]);e.placeShip(t),a(e,"secondary-container","ai-grids","horizontal"),e.placeShip(o),a(e,"secondary-container","ai-grids","horizontal"),e.placeShip(l),a(e,"secondary-container","ai-grids","horizontal"),e.placeShip(n),a(e,"secondary-container","ai-grids","horizontal"),e.placeShip(i),a(e,"secondary-container","ai-grids","horizontal")})(n),d(l,5,n)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVU5RCxVQUFVQyxHQUNwQnFDLEVBQVl3QixFQUFVLHNCQUFzQixXQUFXLGNBQ3ZEQSxFQUFVOUQsVUFBVW9GLEdBQ3BCOUMsRUFBWXdCLEVBQVUsc0JBQXNCLFdBQVcsY0FDdkRBLEVBQVU5RCxVQUFVcUYsR0FDcEIvQyxFQUFZd0IsRUFBVSxzQkFBc0IsV0FBVyxjQUN2REEsRUFBVTlELFVBQVVzRixHQUNwQmhELEVBQVl3QixFQUFVLHNCQUFzQixXQUFXLGNBQ3ZEQSxFQUFVOUQsVUFBVXVGLEdBQ3BCakQsRUFBWXdCLEVBQVUsc0JBQXNCLFdBQVcsYUFBYSxFQzVUcEUwQixDQUFjekIsR0FFZEYsRUFBa0JhLEVBQVksRUFBRVgsRUFBUSxFQXFCNUMwQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoYm9hcmQpIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQgfHwgW107XG4gICAgdGhpcy5taXNzZWQgPSBbW11dO1xuICAgIHRoaXMuaGl0cyA9IFtdO1xuICAgIHRoaXMuYWxsb3cgPSBmYWxzZTtcbiAgfVxuXG4gIGluaXRpYWxpemUoY291bnQpIHtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHRoaXMuYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gY291bnQ7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuXG5cbiAgcGxhY2VTaGlwKHNoaXApIHtcbiAgICBsZXQgY29sdW1uID0gc2hpcC5jb2x1bW47XG4gICAgbGV0IHBvc2l0aW9uID0gc2hpcC5wb3NpdGlvbjtcbiAgICBcbiAgIFxuICAgIGZvcihsZXQgaT0wOyBpPHBvc2l0aW9uLmxlbmd0aDtpKyspe1xuICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9zaXRpb24ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgLy8gaWYoKHRoaXMuYm9hcmRbY29sdW1uW2ldKzFdW3RoaXMuYm9hcmRbY29sdW1uW2ldKzFdLmluZGV4T2YocG9zaXRpb25bal0rMTApXSkhPSd4Jyl7XG4gICAgICAgICAgdGhpcy5ib2FyZFtjb2x1bW5baV1dW3RoaXMuYm9hcmRbY29sdW1uW2ldXS5pbmRleE9mKHBvc2l0aW9uW2pdKV0gPSAneCc7XG4gICAgICAgIFxuICAgICAgICAvLyB9XG4gICAgfVxuICAgfVxuICAgXG4gIH1cbiAgXG4gXG4gIFxuICByZWNpZXZlQXR0YWNrKHBvc2l0aW9uKXtcbiAgICBcbiAgICAgICAgdGhpcy5oaXRzLnB1c2gocG9zaXRpb24pO1xuICAgIFxuICB9XG5cbiAgYWxsb3dBdHRhY2soKXtcbiAgICByZXR1cm4gdGhpcy5hbGxvdztcbiAgfVxuXG4gIC8vIHJlY2lldmVBdHRhY2soY29sdW1uLCBwb3NpdGlvbikge1xuICAvLyAgIGZvcihsZXQgaT0wOyBpPHBvc2l0aW9uLmxlbmd0aDsgaSsrKXtcbiAgLy8gICAgIGZvcihsZXQgaj0wOyBqPHBvc2l0aW9uLmxlbmd0aDsgaisrKXtcbiAgLy8gICAgICAgaWYgKHRoaXMuYm9hcmRbY29sdW1uW2ldXVtwb3NpdGlvbltqXV0gPT09IFwieFwiKSB7XG4gIC8vICAgICAgICAgaWYgKHRoaXMuaGl0c1tjb2x1bW5baV1dID09PSB1bmRlZmluZWQpIHtcbiAgLy8gICAgICAgdGhpcy5oaXRzW2NvbHVtbltpXV0gPSBbcG9zaXRpb25bal1dO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgdGhpcy5oaXRzW2NvbHVtbltpXV0ucHVzaChwb3NpdGlvbltpXSk7XG4gIC8vICAgICB9XG4gIC8vICAgfSBlbHNlIGlmICh0aGlzLm1pc3NlZFtjb2x1bW5dID09PSB1bmRlZmluZWQpIHtcbiAgLy8gICAgIHRoaXMubWlzc2VkW2NvbHVtbl0gPSBbcG9zaXRpb25dO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB0aGlzLm1pc3NlZFtjb2x1bW5dLnB1c2gocG9zaXRpb24pO1xuICAvLyAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gICAgXG4gIC8vIH1cbiBcbn1cbiIsImV4cG9ydCBjbGFzcyBQbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IoKXsgXG4gICAgICAgIHRoaXMudHVybiA9IHRydWU7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIH1cbiAgXG4gICAgYXV0b1BsYXkoZ3JpZCl7XG4gICAgICAgIFxuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZ3JpZFtyYW5kb21dO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwe1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCxjb2x1bW4scG9zaXRpb24pe1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbnx8W107XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1ufHxbXTtcbiAgICAgICBcbiAgICB9XG4gICAgaGl0KGhpdFBvc2l0aW9uKXtcbiAgICAgICAgLy8gaWYodGhpcy5wb3NpdGlvbi5pbmNsdWRlcyhoaXRQb3NpdGlvbikmJiAhKHRoaXMuaGl0cy5pbmNsdWRlcyhoaXRQb3NpdGlvbikpKXtcbiAgICAgICAgICAgIHRoaXMuaGl0cy5wdXNoKGhpdFBvc2l0aW9uKTtcbiAgICAgICAgLy99XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFsbFNoaXBTdW5rKCl7XG4gICAgICAgIGlmKHRoaXMuaGl0cy5sZW5ndGg9PT0xNil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuLi9mYWN0b3JpZXMvR2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vZmFjdG9yaWVzL1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL2ZhY3Rvcmllcy9TaGlwXCI7XG5cblxuLy8gVE9ETzogXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCb2FyZCA9IChuZXdCb2FyZCxpZCxjbGFzc05hbWUsZGlyZWN0aW9uKT0+e1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuICAgIFxuICAgIGxldCBib2FyZCA9IG5ld0JvYXJkLmJvYXJkO1xuICAgIFxuICAgIGJvYXJkLmZvckVhY2goZT0+e1xuICAgICAgICBlLmZvckVhY2goZT0+e1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyBcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbik7IFxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndmFsdWUnLGUpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICBkaXYudmFsdWUgPSBlO1xuICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gZTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCB1cGRhdGVCb2FyZCA9IChuZXdCb2FyZCxjb250YWluZXJJRCxncmlkSUQsZGlyZWN0aW9uKT0+e1xuICAgIHJlbW92ZUJvYXJkKGNvbnRhaW5lcklELGdyaWRJRCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29udGFpbmVySUR9YCk7XG4gICAgbGV0IGJvYXJkID0gbmV3Qm9hcmQuYm9hcmQ7XG4gICAgYm9hcmQuZm9yRWFjaChlPT57XG4gICAgICAgIGUuZm9yRWFjaChlPT57XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGdyaWRJRCk7IFxuICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb24pOyBcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgZGl2LnZhbHVlID0gZTtcbiAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgIFxuICAgIH0pO1xuXG4gICAgXG59XG5leHBvcnQgY29uc3QgcmVtb3ZlQm9hcmQgPSAoY29udGFpbmVySUQsZ3JpZElEKT0+e1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbnRhaW5lcklEfWApO1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtncmlkSUR9YCk7XG4gICAgZ3JpZC5mb3JFYWNoKGVsZW1lbnQ9PiB7IFxuICAgICAgICAgICAgXG4gICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICAgIFxuICAgICAgIFxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IGNsaWNrRXZlbnQgPSAocGxheWVyLGFpKT0+e1xuICAgIGNvbnN0IGdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWRzJyk7XG4gICAgZ3JpZHMuZm9yRWFjaChlbGVtZW50PT5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgaWYocGxheWVyLnR1cm4pe1xuICAgICAgICAgICAgIGFpLnR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgIHBsYXllci50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXI6ICcrZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdjbGljaycpO1xuICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfWVsc2UgaWYoYWkudHVybil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWk6ICcrIGFpLmF1dG9QbGF5KCkpO1xuICAgICAgICAgICAgYWkudHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgcGxheWVyLnR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSkpO1xufVxuXG5jb25zdCBjaGVja0lmT3V0T2ZCb3VuZCA9IChzaGlwLGV2ZW50LGluY3JlbWVudCk9PntcbiAgICBsZXQgb3V0T2ZCb3VuZDUgPSBbNiw3LDgsOV07XG4gICAgIGxldCBvdXRPZkJvdW5kNCA9IFs3LDgsOV07XG4gICAgIGxldCBvdXRPZkJvdW5kMyA9IFs4LDldO1xuICAgICBsZXQgb3V0T2ZCb3VuZDIgPSBbOV07XG4gICAgXG4gICAgaWYoaW5jcmVtZW50ID09PTEpe1xuICAgICAgICBzd2l0Y2godHJ1ZSl7IFxuICAgICAgICAgICAgIGNhc2Ugc2hpcC5sZW5ndGg9PT01ICYmIG91dE9mQm91bmQ1LmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZSUxMCk6XG4gICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgIGNhc2Ugc2hpcC5sZW5ndGg9PT00ICYmIG91dE9mQm91bmQ0LmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZSUxMCk6XG4gICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgIGNhc2Ugc2hpcC5sZW5ndGg9PT0zICYmIG91dE9mQm91bmQzLmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZSUxMCk6XG4gICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgIGNhc2Ugc2hpcC5sZW5ndGg9PT0yICYmIG91dE9mQm91bmQyLmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZSUxMCk6XG4gICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBcbiAgICAgfVxuICAgICBpZihpbmNyZW1lbnQgPT09MTApe1xuICAgICAgICAgc3dpdGNoKHRydWUpeyBcbiAgICAgICAgICAgICAgY2FzZSBzaGlwLmxlbmd0aD09PTUgJiYgb3V0T2ZCb3VuZDUuaW5jbHVkZXMoTWF0aC5mbG9vcihldmVudC50YXJnZXQudmFsdWUvMTApKTpcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICBjYXNlIHNoaXAubGVuZ3RoPT09NCAmJiBvdXRPZkJvdW5kNC5pbmNsdWRlcyhNYXRoLmZsb29yKGV2ZW50LnRhcmdldC52YWx1ZS8xMCkpOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIGNhc2Ugc2hpcC5sZW5ndGg9PT0zICYmIG91dE9mQm91bmQzLmluY2x1ZGVzKE1hdGguZmxvb3IoZXZlbnQudGFyZ2V0LnZhbHVlLzEwKSk6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgY2FzZSBzaGlwLmxlbmd0aD09PTIgJiYgb3V0T2ZCb3VuZDIuaW5jbHVkZXMoTWF0aC5mbG9vcihldmVudC50YXJnZXQudmFsdWUvMTApKTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgfSBcbiAgICAgIH1cbn1cbmNvbnN0IGdldENvb3JkaW5hdGVzID0gKHNoaXAsZXZlbnQsY29sb3IsaW5jcmVtZW50KT0+e1xuICBcblxuICBsZXQgY29vcmRpbmF0ZSA9IFtdO1xuICBpZiAoc2hpcC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gKHNoaXAubGVuZ3RoIC0gMSkgKiBpbmNyZW1lbnQ7IGkgPSBpICsgaW5jcmVtZW50KSB7XG4gICAgIGlmKGNoZWNrSWZPdXRPZkJvdW5kKHNoaXAsZXZlbnQsaW5jcmVtZW50KSkgcmV0dXJuO1xuICAgXG4gICAgaWYgKHNoaXAubGVuZ3RoID09PSA1KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICUgMTAgPT09IDYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICsgaSA9PSBcIngwXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W3ZhbHVlPVwiJHtldmVudC50YXJnZXQudmFsdWUgKyBpfVwiXWApID09PSBudWxsXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQudmFsdWUgKyBpID09IFwieDBcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgZGl2W3ZhbHVlPVwiJHtldmVudC50YXJnZXQudmFsdWUgKyBpfVwiXWBcbiAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIGNvb3JkaW5hdGUucHVzaChldmVudC50YXJnZXQudmFsdWUgKyBpKTtcbiAgfVxuICByZXR1cm4gY29vcmRpbmF0ZTtcbn1cbmNvbnN0IGdldENvbHVtbnMgPSAoc2hpcCk9PntcbiAgICBsZXQgY29sdW1ucyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGk8PXNoaXAubGVuZ3RoLTE7IGkrKyl7XG4gICAgICAgIFxuICAgICAgICAgIGlmKHNoaXAucG9zaXRpb25baV0pe1xuICAgICAgICAgICAgIGNvbHVtbnMucHVzaChNYXRoLmZsb29yKChzaGlwLnBvc2l0aW9uW2ldKS8xMCkpO1xuICAgICAgICB9ICBcbiAgICAgICAgXG4gICAgICAgXG4gICAgfVxuICBcbiAgICByZXR1cm4gY29sdW1ucztcbn1cbmNvbnN0IGNoYW5nZUNvbG9yID0gKCkgPT57XG4gICAgY29uc3Qgc2VsZWN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWdyaWRzJykpO1xuICAgIHNlbGVjdC5maWx0ZXIoZWxlbWVudD0+ZWxlbWVudC52YWx1ZT09PSd4JykuZm9yRWFjaChlbGVtZW50PT5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCcpO1xuICAgIFxuICAgIFxufVxubGV0IGZsYWcgPSB0cnVlO1xuIGxldCBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gbGV0IGluY3JlbWVudCA9IDE7XG4gY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdGF0ZScpO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyUGxheWVyU2hpcHMgPSAgIChnYW1lYm9hcmQsbGVuZ3RoLGFpQm9hcmQpID0+e1xuICAgICBcbiAgICBcbiAgICBcbiAgICBsZXQgZ3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxheWVyLWdyaWRzLiR7ZGlyZWN0aW9ufWApO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgsWzAsMCwwXSxbMSwyLDNdKTtcbiAgICBcbiAgICBpZihsZW5ndGg9PT0zKXtcbiAgICAgICAgaWYoZmxhZyl7XG4gICAgICAgICAgIGxlbmd0aCs9MTsgXG4gICAgICAgICAgIGZsYWc9ZmFsc2U7XG4gICAgICAgIH0gXG4gICAgfVxuICAgIGlmKGxlbmd0aDw9MSl7XG4gICAgICAgIFxuICAgICAgXG4gICAgICAgXG4gICAgICAgcmVuZGVyQXR0YWNrKGdhbWVib2FyZCk7XG4gICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgIFxuICAgIGdyaWRzLmZvckVhY2goZWxlbWVudD0+ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLChlKT0+e1xuICAgICAgICAgICAgIGdldENvb3JkaW5hdGVzKHNoaXAsZSwnYmx1ZScsaW5jcmVtZW50KTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFpQm9hcmQpO1xuICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbiA9IGdldENvb3JkaW5hdGVzKHNoaXAsZSwnZ3JheScsaW5jcmVtZW50KTtcbiAgICAgICAgICAgICAgIHNoaXAuY29sdW1uID0gZ2V0Q29sdW1ucyhzaGlwKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwKTtcbiAgICAgICAgICAgICAgICAgdXBkYXRlQm9hcmQoZ2FtZWJvYXJkLCdwcmltYXJ5LWNvbnRhaW5lcicsXCJwbGF5ZXItZ3JpZHNcIixkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xvcigpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJlbmRlclBsYXllclNoaXBzKGdhbWVib2FyZCxsZW5ndGgtMSk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgIFxuICAgIH0pKTtcbiAgICBcblxuICAgIGdyaWRzLmZvckVhY2goZWxlbWVudD0+ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsKGUpPT57XG4gICAgICAgIGdldENvb3JkaW5hdGVzKHNoaXAsZSwnZ3JheScsaW5jcmVtZW50KTtcbiAgICB9KSk7ICBcbiAgICBcbiAgIFxuICAgXG59XG5cblxuZXhwb3J0IGNvbnN0IHJlbmRlckF0dGFjayA9IChwbGF5ZXJCb2FyZCkgPT57XG4gICBsZXQgYWlCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICBsZXQgYWk7XG4gICAgbGV0IHJhbmRvbWx5UGlja2VkR3JpZDtcbiAgICBsZXQgZ3JpZFZhbHVlO1xuICAgIGNvbnN0IHBsYXllckdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1ncmlkcycpO1xuICAgIGNvbnN0IGFpR3JpZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWktZ3JpZHMnKTtcbiAgIFxuICAgIFxuICAgIFxuICAgICAgICBcbiAgICAgICAgYWlHcmlkcy5mb3JFYWNoKGVsZW1lbnQ9PmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICAgICAgICBjb25zdCBlbGVtZW50VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGFpID0gbmV3IFBsYXllcigpO1xuICAgICAgICAgICAgICByYW5kb21seVBpY2tlZEdyaWQgPSBhaS5hdXRvUGxheShwbGF5ZXJHcmlkcyk7XG4gICAgICAgICAgICAgIGdyaWRWYWx1ZSA9IHJhbmRvbWx5UGlja2VkR3JpZC52YWx1ZTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoZWxlbWVudFZhbHVlID09PSAneCcpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGFpQm9hcmQucmVjaWV2ZUF0dGFjayhlbGVtZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIGNoZWNrSWZXb24oYWlCb2FyZCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICByZW5kZXJBaUF0dGFjayhyYW5kb21seVBpY2tlZEdyaWQsZ3JpZFZhbHVlLHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGl0czonKyBhaUJvYXJkLmhpdHMubGVuZ3RoKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgICAgICAgcmVuZGVyQWlBdHRhY2socmFuZG9tbHlQaWNrZWRHcmlkLGdyaWRWYWx1ZSxwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSkpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgXG4gICAgfVxuY29uc3QgcmVuZGVyQWlBdHRhY2sgPSAocmFuZG9tbHlQaWNrZWRHcmlkLGdyaWRWYWx1ZSxwbGF5ZXJCb2FyZCk9PntcbiAgICByYW5kb21seVBpY2tlZEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICBjb25zdCBlbGVtZW50VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgaWYoZ3JpZFZhbHVlPT09ICd4Jyl7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKGdyaWRWYWx1ZSk7XG4gICAgICAgICAgICBjaGVja0lmV29uKHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgIHJhbmRvbWx5UGlja2VkR3JpZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlY2lldmVBdHRhY2soZWxlbWVudFZhbHVlKVxuICAgICAgICAgICBcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgcmFuZG9tbHlQaWNrZWRHcmlkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgIH0pO1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2NsaWNrJyk7XG4gICAgIHJhbmRvbWx5UGlja2VkR3JpZC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclBsYXllckF0dGFjayA9IChib2FyZCk9PntcbiAgICBjb25zdCBhaUdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFpLWdyaWRzJyk7XG4gICAgYWlHcmlkcy5mb3JFYWNoKGVsZW1lbnQ9PmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICBpZihlLnRhcmdldC52YWx1ZSA9PT0gJ3gnKXtcbiAgICAgICAgICAgIGJvYXJkLnJlY2lldmVBdHRhY2soZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pKTtcbn1cblxuIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICBcbiAgICAgICAgaWYoZGlyZWN0aW9uID09PSdob3Jpem9udGFsJyl7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICAgICAgICAgICAgaW5jcmVtZW50ID0gMTA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09J3ZlcnRpY2FsJyl7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICBpbmNyZW1lbnQgPSAxO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9KTtcblxuXG5jb25zdCBjaGVja0lmV29uID0gKGJvYXJkKT0+e1xuICAgIGlmKGJvYXJkLmhpdHMubGVuZ3RoID09PTE3KXtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllciB3b24hJyk7XG4gICAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHJlbmRlckFpU2hpcHMgPSAgKGdhbWVib2FyZCkgPT57XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKDUsWzAsMCwwLDAsMF0sWzEwMSwxMDIsMTAzLDEwNCwxMDVdKTtcbiAgICBjb25zdCBzaGlwMiA9IG5ldyBTaGlwKDQsWzcsNyw3LDddLFsxNzMsMTc0LDE3NSwxNzZdKTtcbiAgICBjb25zdCBzaGlwMyA9IG5ldyBTaGlwKDMsWzIsMiwyXSxbMTIyLDEyMywxMjRdKTtcbiAgICBjb25zdCBzaGlwNCA9IG5ldyBTaGlwKDMsWzQsNCw0XSxbMTQ0LDE0NSwxNDZdKTtcbiAgICBjb25zdCBzaGlwNSA9IG5ldyBTaGlwKDIsWzgsOV0sWzE4MSwxOTFdKTtcbiAgICBcbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXApO1xuICAgIHVwZGF0ZUJvYXJkKGdhbWVib2FyZCwnc2Vjb25kYXJ5LWNvbnRhaW5lcicsXCJhaS1ncmlkc1wiLFwiaG9yaXpvbnRhbFwiKTtcbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAyKTtcbiAgICB1cGRhdGVCb2FyZChnYW1lYm9hcmQsJ3NlY29uZGFyeS1jb250YWluZXInLFwiYWktZ3JpZHNcIixcImhvcml6b250YWxcIik7XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwMyk7XG4gICAgdXBkYXRlQm9hcmQoZ2FtZWJvYXJkLCdzZWNvbmRhcnktY29udGFpbmVyJyxcImFpLWdyaWRzXCIsXCJob3Jpem9udGFsXCIpO1xuICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDQpO1xuICAgIHVwZGF0ZUJvYXJkKGdhbWVib2FyZCwnc2Vjb25kYXJ5LWNvbnRhaW5lcicsXCJhaS1ncmlkc1wiLFwiaG9yaXpvbnRhbFwiKTtcbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXA1KTtcbiAgICB1cGRhdGVCb2FyZChnYW1lYm9hcmQsJ3NlY29uZGFyeS1jb250YWluZXInLFwiYWktZ3JpZHNcIixcImhvcml6b250YWxcIik7XG4gICAgXG59XG5cblxuXG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuLi9mYWN0b3JpZXMvR2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vZmFjdG9yaWVzL1BsYXllclwiXG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vZmFjdG9yaWVzL1NoaXBcIjtcbmltcG9ydCB7IGNsaWNrRXZlbnQsIGNyZWF0ZUJvYXJkLCByZW1vdmVCb2FyZCwgcmVuZGVyQWlTaGlwcywgcmVuZGVyQXR0YWNrLCByZW5kZXJQbGF5ZXJTaGlwcywgdXBkYXRlQm9hcmQgLCByZW5kZXJBaUF0dGFja30gZnJvbSBcIi4vZG9tXCI7XG5cbmV4cG9ydCBjb25zdCBydW5HYW1lID0gKCk9PntcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgY29uc3QgYWkgPSBuZXcgUGxheWVyKCk7XG4gICBcblxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIGNvbnN0IGFpQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgcGxheWVyQm9hcmQuaW5pdGlhbGl6ZSgwKTtcbiAgICBhaUJvYXJkLmluaXRpYWxpemUoMTAwKTtcbiAgICBcbiAgICBjcmVhdGVCb2FyZChwbGF5ZXJCb2FyZCwnI3ByaW1hcnktY29udGFpbmVyJywncGxheWVyLWdyaWRzJywnaG9yaXpvbnRhbCcpO1xuICAgIGNyZWF0ZUJvYXJkKGFpQm9hcmQsJyNzZWNvbmRhcnktY29udGFpbmVyJywnYWktZ3JpZHMnLCdob3Jpem9udGFsJyk7XG4gICAgLy9jb25zb2xlLmxvZyhhaUJvYXJkKTtcbiAgICByZW5kZXJBaVNoaXBzKGFpQm9hcmQpO1xuICAgIC8vY29uc29sZS5sb2coYWlCb2FyZCk7XG4gICAgcmVuZGVyUGxheWVyU2hpcHMocGxheWVyQm9hcmQsNSxhaUJvYXJkKTsgXG4gIC8vICBjb25zb2xlLmxvZyhhaUJvYXJkKTtcbiAgICAgICBcbiAgICAvLyAgcmVuZGVyQXR0YWNrKGFpQm9hcmQscGxheWVyQm9hcmQpO1xuICAgIFxuICAgXG4gICAgXG4gICAgLy8gcmVuZGVyU2hpcHMoZ2FtZWJvYXJkLDQpO1xuICAgLy8gdXBkYXRlQm9hcmQoZ2FtZWJvYXJkLCdwcmltYXJ5LWNvbnRhaW5lcicsXCJwbGF5ZXItZ3JpZHNcIik7XG4gICAgIFxuICAgIC8vIGZvcihsZXQgaSA9MDtpPDQ7IGkrKyl7XG4gICAgICAgXG4gICAgLy8gICAgIHJlbmRlclNoaXBzKGdhbWVib2FyZCw0KTtcbiAgICAvLyB9XG4gICAgIFxuICAgIFxuXG4gICBcbiAgICAvLyAgY29uc29sZS5sb2coZ2FtZWJvYXJkLmJvYXJkKTtcbiAgICAvLyAgY2xpY2tFdmVudChwbGF5ZXIsYWkpO1xufVxucnVuR2FtZSgpOyJdLCJuYW1lcyI6WyJHYW1lQm9hcmQiLCJjb25zdHJ1Y3RvciIsImJvYXJkIiwidGhpcyIsIm1pc3NlZCIsImhpdHMiLCJhbGxvdyIsImluaXRpYWxpemUiLCJjb3VudCIsImkiLCJqIiwicGxhY2VTaGlwIiwic2hpcCIsImNvbHVtbiIsInBvc2l0aW9uIiwibGVuZ3RoIiwiaW5kZXhPZiIsInJlY2lldmVBdHRhY2siLCJwdXNoIiwiYWxsb3dBdHRhY2siLCJQbGF5ZXIiLCJ0dXJuIiwiYXV0b1BsYXkiLCJncmlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiU2hpcCIsImhpdCIsImhpdFBvc2l0aW9uIiwiYWxsU2hpcFN1bmsiLCJjcmVhdGVCb2FyZCIsIm5ld0JvYXJkIiwiaWQiLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwiZSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJ1cGRhdGVCb2FyZCIsImNvbnRhaW5lcklEIiwiZ3JpZElEIiwicmVtb3ZlQm9hcmQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInJlbW92ZUNoaWxkIiwiY2hlY2tJZk91dE9mQm91bmQiLCJldmVudCIsImluY3JlbWVudCIsIm91dE9mQm91bmQ1Iiwib3V0T2ZCb3VuZDQiLCJvdXRPZkJvdW5kMyIsIm91dE9mQm91bmQyIiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJnZXRDb29yZGluYXRlcyIsImNvbG9yIiwiY29vcmRpbmF0ZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZmxhZyIsInJvdGF0ZUJ1dHRvbiIsInJlbmRlclBsYXllclNoaXBzIiwiZ2FtZWJvYXJkIiwiYWlCb2FyZCIsImdyaWRzIiwicmVuZGVyQXR0YWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJjb2x1bW5zIiwiZ2V0Q29sdW1ucyIsIkFycmF5IiwiZnJvbSIsImZpbHRlciIsInBsYXllckJvYXJkIiwiYWkiLCJyYW5kb21seVBpY2tlZEdyaWQiLCJncmlkVmFsdWUiLCJwbGF5ZXJHcmlkcyIsImVsZW1lbnRWYWx1ZSIsImNoZWNrSWZXb24iLCJyZW5kZXJBaUF0dGFjayIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInNoaXAyIiwic2hpcDMiLCJzaGlwNCIsInNoaXA1IiwicmVuZGVyQWlTaGlwcyIsInJ1bkdhbWUiXSwic291cmNlUm9vdCI6IiJ9