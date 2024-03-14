import"./style-7vk4dpaG.js";let f=localStorage.getItem("name");document.getElementById("name").innerHTML=f;document.addEventListener("DOMContentLoaded",function(){document.getElementById("logout").addEventListener("click",function(e){e.preventDefault(),w()})});async function w(){localStorage.clear(),window.alert("Logout succesfully"),window.location.href="home.html"}const I=document.querySelector(".get_users");I.addEventListener("click",y);async function y(){console.log("Button clicked!");try{const t=localStorage.getItem("token"),r=await(await fetch("/api/users",{headers:{Authorization:"Bearer: "+t}})).json();console.log(r);const n=document.querySelector(".tbody");n.innerHTML="",r.forEach(o=>{console.log(o.username);let a=document.createElement("tr"),i=document.createElement("td");i.innerText=o.username;let c=document.createElement("td");c.innerText=o.user_level;let d=document.createElement("td"),l=document.createElement("button");l.className="check",l.setAttribute("data-id","1"),l.innerText="Info",l.addEventListener("click",()=>B(o.user_id)),d.appendChild(l);let u=document.createElement("td"),s=document.createElement("button");s.className="del",s.setAttribute("data-id","1"),s.innerText="Delete",s.innerText="Delete",s.addEventListener("click",()=>v(o.user_id)),u.appendChild(s);let m=document.createElement("td");m.innerText=o.user_id,a.appendChild(i),a.appendChild(c),a.appendChild(d),a.appendChild(u),a.appendChild(m),n.appendChild(a)})}catch(t){console.log(t)}}async function B(t){try{const e=localStorage.getItem("token"),n=await(await fetch(`/api/users/${t}`,{method:"GET",headers:{Authorization:"Bearer: "+e}})).json();console.log(n),k(n)}catch(e){console.error("Error fetching user data:",e)}}function k(t){const e=document.querySelector(".info_dialog"),r=e.querySelectorAll("span");r[0].innerText=t.user_id,r[1].innerText=t.username,r[2].innerText=t.email,r[3].innerText=t.user_level,e.showModal(),e.querySelector("button[autofocus]").addEventListener("click",()=>{e.close()})}async function v(t){try{const e=localStorage.getItem("token");if(!confirm(`Are you sure you want to delete the user with ID: ${t}?`))return;const n=await fetch(`/api/users/${t}`,{method:"DELETE",headers:{Authorization:"Bearer "+e}});if(n.ok)alert("User deleted successfully");else if(n.status===403)alert("Unauthorized: Only admins can delete users");else if(n.error&&n.error===409)alert("Cannot delete user: user has diary entries, need to be deleted first.");else throw new Error("Failed to delete user");await y()}catch(e){alert("Error deleting user: "+e.message)}}async function T(t){try{const e=localStorage.getItem("token");if(!confirm(`Are you sure you want to delete entry with ID: ${t}?`))return;if(!(await fetch(`/api/entries/${t}`,{method:"DELETE",headers:{Authorization:"Bearer: "+e}})).ok)throw new Error("Failed to delete entry");console.log("Entry deleted successfully"),await E()}catch(e){console.error("Error deleting entry:",e)}}const C=document.getElementById("putUserButton");C.addEventListener("click",async()=>{const t=localStorage.getItem("token"),e=document.getElementById("username").value,r=document.getElementById("password").value,n=document.getElementById("email").value,o={username:e,password:r,email:n};try{if(!(await fetch("/api/users/",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify(o)})).ok)throw new Error("Failed to update user");window.alert("User updated successfully"),document.getElementById("username").value="",document.getElementById("password").value="",document.getElementById("email").value=""}catch{window.alert("Error updating user: Input information is not valid or doesnt meet requirements.")}});const S=document.querySelector(".get_entry");S.addEventListener("click",E);async function E(){console.log("Button clicked!");try{const t=localStorage.getItem("token"),r=await(await fetch("/api/entries/",{headers:{Authorization:"Bearer "+t}})).json();if(console.log(r),r.length==0){alert("No diaryentries found!!");return}const n=document.querySelector(".tbody1");n.innerHTML="",r.forEach(o=>{let a=document.createElement("tr"),i=document.createElement("td");i.innerText=o.entry_id;let c=document.createElement("td");c.innerText=o.entry_date;let d=document.createElement("td");d.innerText=o.mood;let l=document.createElement("td");l.innerText=parseFloat(o.weight).toFixed(2);let u=document.createElement("td");u.innerText=parseInt(o.sleep_hours);let s=document.createElement("td");s.innerText=o.notes;let m=document.createElement("td");m.innerText=o.created_at;let g=document.createElement("td"),p=document.createElement("button");p.className="del",p.setAttribute("data-id","1"),p.innerText="Delete",p.addEventListener("click",()=>T(o.entry_id)),g.appendChild(p),a.appendChild(i),a.appendChild(c),a.appendChild(d),a.appendChild(l),a.appendChild(u),a.appendChild(s),a.appendChild(m),a.appendChild(g),n.appendChild(a)})}catch(t){console.log(t)}}const h=document.getElementById("addEntry");document.querySelector(".addform1");h.addEventListener("click",async t=>{t.preventDefault(),console.log(h);const e=document.getElementById("entry_date").value,r=b(e),n=document.getElementById("mood").value,o=parseFloat(document.getElementById("weight").value),a=parseInt(document.getElementById("sleep_hours").value),i=document.getElementById("notes").value,c={entry_date:r,mood:n,weight:o,sleep_hours:a,notes:i};console.log(c);try{const d=localStorage.getItem("token");if(!(await fetch("/api/entries",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+d},body:JSON.stringify(c)})).ok)throw new Error("Failed to add entry");alert("Entry added successfully"),document.getElementById("entry_date").value="",document.getElementById("mood").value="",document.getElementById("weight").value="",document.getElementById("sleep_hours").value="",document.getElementById("notes").value=""}catch(d){console.error("Error adding entry:",d),alert("Error adding entry: "+d.message)}});function b(t){const e=new Date(t),r=e.getFullYear(),n=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0");return`${r}-${n}-${o}`}
