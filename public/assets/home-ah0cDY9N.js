import"./style-7vk4dpaG.js";const l=async(a,n={})=>{let e;try{const o=await fetch(a,n);if(!o.ok)throw new Error(`HTTP ${o.status} - ${o.statusText}`);e=await o.json()}catch(o){console.error("fetchData() error",o),e={}}return e},c=document.querySelector(".createuser");c.addEventListener("click",async a=>{a.preventDefault(),console.log("Nyt luodaan käyttäjä");const n="hyte-janne.northeurope.cloudapp.azure.com/api/users",e=document.querySelector(".create_user_form"),o={username:e.querySelector("input[name=username]").value,password:e.querySelector("input[name=password]").value,email:e.querySelector("input[name=email]").value};try{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)},r=await fetch(n,t);if(!r.ok){if(r.status===500)throw new Error("Database error");if(r.status===400)throw new Error("Invalid username, password or email")}const s=await r.json();console.log(s),alert("User created successfully!"),e.querySelector("input[name=username]").value="",e.querySelector("input[name=password]").value="",e.querySelector("input[name=email]").value=""}catch(t){console.error("Error creating user",t),t.message==="Database error"?alert("Database error occured. Please try again later."):t.message==="Invalid username/password or email"?alert("Invalid username/password or email."):alert("An unknown error occurred. Please try again later.")}});const u=document.querySelector(".loginuser");u.addEventListener("click",async a=>{a.preventDefault(),console.log("Nyt logataan sisään");const n="hyte-janne.northeurope.cloudapp.azure.com/api/auth/login",e=document.querySelector(".login_form"),o={username:e.querySelector("input[name=username]").value,password:e.querySelector("input[name=password]").value},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)};l(n,t).then(r=>{console.log(r),console.log(r.token),localStorage.setItem("token",r.token),r.token==null?alert("Unauthorized user: Username or password is incorrect"):(alert("Login succesful"),localStorage.setItem("name",r.user.username),window.location.href="index.html"),logResponse("loginResponse",`localStorage set with token value: ${r.token}`)})});
