import{_ as d,c,a as e,w as u,b as i,v as l,o as m}from"./index--sq5RJqm.js";var p={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"2023autumnhexschoolann328",BASE_URL:"/2023winter_HexSchool_Week02/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:_}=p,h={data(){return{user:{username:"",password:""}}},methods:{login(){this.axios.post(`${_}/admin/signin`,this.user).then(t=>{const{token:s,expired:n}=t.data;document.cookie=`hexschool=${s};expires=${new Date(n)};`,this.$router.push("/product")}).catch(t=>{alert(t.data.message)})}}},f={class:"container"},w={class:"row justify-content-center align-self-center"},v=e("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),x={class:"col-8"},b={class:"form-floating mb-3"},g=e("label",{for:"username"},"Email address",-1),E={class:"form-floating"},V=e("label",{for:"password"},"Password",-1),P=e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"},"登入",-1),k=e("p",{class:"mt-5 mb-3 text-muted"},"© 2021~∞ - 六角學院",-1);function y(t,s,n,D,r,a){return m(),c("div",f,[e("div",w,[v,e("div",x,[e("form",{id:"form",class:"form-signin",onSubmit:s[2]||(s[2]=u((...o)=>a.login&&a.login(...o),["prevent"]))},[e("div",b,[i(e("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=o=>r.user.username=o)},null,512),[[l,r.user.username]]),g]),e("div",E,[i(e("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":s[1]||(s[1]=o=>r.user.password=o)},null,512),[[l,r.user.password]]),V]),P],32)])]),k])}const S=d(h,[["render",y]]);export{S as default};