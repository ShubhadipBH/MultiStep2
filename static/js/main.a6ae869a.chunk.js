(this["webpackJsonpmy-redux-app"]=this["webpackJsonpmy-redux-app"]||[]).push([[0],{44:function(e,t,a){},55:function(e,t,a){},80:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(27),r=a.n(s),l=(a(55),a(15)),i=a(24),o=(a(61),Object(i.b)({name:"register",initialState:{},reducers:{setUserData:function(e,t){e.register=t.payload;var a=e.register;console.log(a)},extraReducers:{}}})),j=(o.actions.setUserData,o.reducer),d=Object(i.b)({name:"register",initialState:{fname:null,lname:null,email:null,pass:null,phone:null,state:null,city:null,zip:null,message:null,error:null,formCounter:null},reducers:{setTestSliceData:function(e,t){e.fname=t.payload.fname,e.lname=t.payload.lname,e.email=t.payload.email,e.pass=t.payload.pass,e.phone=t.payload.phone,e.zip=t.payload.zip,e.state=t.payload.state,e.city=t.payload.city,e.formCounter=t.payload.formCounter}}}),b=d.actions.setTestSliceData,h=d.reducer,p=Object(i.a)({reducer:{userdata:j,TestReducer:h}}),m=(a.p,a(80),a(81),a(2)),u=a(16),O=a(89),x=a(90),C=a(50),g=a(93),y=a(91),N=a(7),S=a(23),f=(a(44),a(1));function v(){var e=Object(N.f)(),t=Object(n.useState)(0),a=Object(u.a)(t,2),c=a[0],s=a[1],r=Object(l.b)(),i=Object(n.useState)({data:{}}),o=Object(u.a)(i,2),j=o[0],d=o[1],h=Object(l.c)((function(e){return e.TestReducer})),p=Object(S.a)({initialValues:{fname:"",lname:"",email:"",phone:"",pass:"",state:"",city:"",zip:"",formCounter:"1"},validate:function(e){var t={};return e.fname||(t.fname="Name Can Not be Blank!"),e.lname||(t.lname="Name Can Not be Blank!"),e.email||(t.email="Email Can not be blank"),e.pass?e.pass.length<5&&(t.pass="password too short. should be at least 5 characters"):t.pass="Password Can not be blank",isNaN(e.phone)?t.phone="Phone number must be numerical":e.phone.length<10&&(t.phone="Phone number must at least 10 digits"),t},onSubmit:function(e){d(Object(m.a)({},j.data=e)),r(b(e))}}),v=Object(n.useState)("green"),k=Object(u.a)(v,2),R=k[0],_=k[1],w=Object(n.useState)(""),z=Object(u.a)(w,2),B=z[0],E=z[1],F=Object(n.useState)(""),L=Object(u.a)(F,2),G=L[0],P=L[1],T=Object(n.useState)("transparent"),I=Object(u.a)(T,2),H=I[0],D=I[1],Z=Object(n.useState)("transparent"),A=Object(u.a)(Z,2),V=A[0],J=A[1],M=Object(n.useState)("transparent"),U=Object(u.a)(M,2),K=U[0],W=U[1],X=Object(n.useState)("false"),q=Object(u.a)(X,2),Q=(q[0],q[1]),Y=function(e){s(e),p.setErrors({}),1==e?(E("green"),J(""),D(""),P(" "),W("transparent"),Q("false")):2==e?(P("green"),W("")):0==e&&(_("green"),D(""),E(""),J("transparent"),P(""),W("transparent"))};return Object(f.jsxs)("div",{className:"Registration",children:[Object(f.jsxs)(O.a,{style:{marginBottom:"0%"},children:[Object(f.jsxs)(x.a,{style:{marginTop:"50px",padding:"0px"},children:[Object(f.jsx)(C.a,{children:Object(f.jsx)(g.a,{onClick:function(){Y(0)},variant:"outline-secondary",style:{backgroundColor:"",borderColor:R},children:"Step 1"})}),Object(f.jsx)(C.a,{children:Object(f.jsx)(g.a,{onClick:function(){Y(1)},variant:"outline-secondary",style:{backgroundColor:"",borderColor:B},children:"Step 2"})}),Object(f.jsx)(C.a,{children:Object(f.jsx)(g.a,{onClick:function(){Y(3)},variant:"outline-secondary",style:{backgroundColor:"",borderColor:G},children:"Step 3"})})]}),Object(f.jsxs)(x.a,{children:[Object(f.jsx)(C.a,{children:Object(f.jsx)("div",{className:"Step2Step",style:{backgroundColor:H},children:" "})}),Object(f.jsx)(C.a,{children:Object(f.jsx)("div",{className:"Step2Step",style:{backgroundColor:V},children:" "})}),Object(f.jsx)(C.a,{children:Object(f.jsx)("div",{className:"Step2Step",style:{backgroundColor:K},children:" "})})]})]}),0==c?Object(f.jsx)(O.a,{className:"Registration_Container",children:Object(f.jsxs)(x.a,{className:"Registration_Container_Row",children:[Object(f.jsxs)(y.a,{onSubmit:p.handleSubmit,children:[Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"fname",children:[Object(f.jsx)(y.a.Label,{children:"Firstname"}),Object(f.jsx)(y.a.Control,{type:"text",placeholder:"Enter Firstname",onChange:p.handleChange,value:h.fname})]}),Object(f.jsx)("p",{className:"errorFontSize",children:p.touched.fname&&p.errors.fname?Object(f.jsx)("span",{children:p.errors.fname}):""}),Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"lname",children:[Object(f.jsx)(y.a.Label,{children:"Lastname"}),Object(f.jsx)(y.a.Control,{type:"text",placeholder:"Enter Lastname",onChange:p.handleChange,value:h.lname})]}),Object(f.jsx)("p",{className:"errorFontSize",children:p.touched.lname&&p.errors.lname?Object(f.jsx)("span",{children:p.errors.lname}):""}),Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"email",children:[Object(f.jsx)(y.a.Label,{children:"Email address"}),Object(f.jsx)(y.a.Control,{type:"email",placeholder:"name@example.com",onChange:p.handleChange,value:h.email})]}),Object(f.jsx)("p",{className:"errorFontSize",children:p.touched.email&&p.errors.email?Object(f.jsx)("span",{children:p.errors.email}):""}),Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"phone",children:[Object(f.jsx)(y.a.Label,{children:"Phone"}),Object(f.jsx)(y.a.Control,{type:"text",placeholder:"Enter Phone number",onChange:p.handleChange,value:h.phone})]}),Object(f.jsx)("p",{className:"errorFontSize",children:p.touched.phone&&p.errors.phone?Object(f.jsx)("span",{children:p.errors.phone}):""}),Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"pass",children:[Object(f.jsx)(y.a.Label,{children:"Password"}),Object(f.jsx)(y.a.Control,{type:"password",placeholder:"Password",onChange:p.handleChange,value:h.pass})]}),Object(f.jsx)("p",{className:"errorFontSize",children:p.touched.pass&&p.errors.pass?Object(f.jsx)("span",{children:p.errors.pass}):""}),Object(f.jsx)(g.a,{className:"BtnSubmit",variant:"outline-success",type:"submit",children:"Submit"})]}),Object(f.jsx)(g.a,{className:"BtnNext",variant:"outline-primary",type:"click",onClick:function(){Y(1)},children:"Next"}),Object(f.jsx)(g.a,{className:"BtnHome",variant:"outline-warning",type:"click",onClick:function(){e.push("/")},children:"Go Back To Home"})]})}):Object(f.jsx)(f.Fragment,{children:1==c?Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:Object(f.jsx)(O.a,{className:"Registration_Container",children:Object(f.jsxs)(x.a,{className:"Registration_Container_Row",children:[Object(f.jsx)("h1",{children:"Step 2"}),Object(f.jsxs)(y.a,{onSubmit:p.handleSubmit,children:[Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"state",children:[Object(f.jsx)(y.a.Label,{children:"State"}),Object(f.jsx)(y.a.Control,{type:"text",placeholder:"Enter State",onChange:p.handleChange})]}),Object(f.jsx)("p",{className:"errorFontSize",children:p.touched.state&&p.errors.state?Object(f.jsx)("span",{children:p.errors.state}):""}),Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"city",children:[Object(f.jsx)(y.a.Label,{children:"City"}),Object(f.jsx)(y.a.Control,{type:"text",placeholder:"Enter City",onChange:p.handleChange})]}),Object(f.jsx)("p",{className:"errorFontSize",children:p.touched.city&&p.errors.city?Object(f.jsx)("span",{children:p.errors.city}):""}),Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"zip",children:[Object(f.jsx)(y.a.Label,{children:"Zipcode"}),Object(f.jsx)(y.a.Control,{type:"text",placeholder:"Enter Zipcode",onChange:p.handleChange})]}),Object(f.jsx)("p",{className:"errorFontSize",children:p.touched.zip&&p.errors.zip?Object(f.jsx)("span",{children:p.errors.zip}):""}),Object(f.jsx)(g.a,{className:"BtnSubmit",variant:"outline-success",type:"submit",children:"Submit"})]}),Object(f.jsx)(g.a,{className:"BtnNext",variant:"outline-primary",type:"click",onClick:function(){Y(0)},children:"Prev"}),Object(f.jsx)(g.a,{className:"BtnNext",variant:"outline-primary",type:"click",onClick:function(){Y(2)},children:"Next"}),Object(f.jsx)(g.a,{className:"BtnHome",variant:"outline-warning",type:"click",onClick:function(){e.push("/")},children:"Go Back To Home"})]})})})}):Object(f.jsx)("div",{children:Object(f.jsxs)(O.a,{className:"Registration_Container",children:[Object(f.jsxs)("div",{className:"Registration_Container_ShowDetails",children:[Object(f.jsx)("span",{children:"Details Taken"}),Object(f.jsx)("p",{}),"   ",Object(f.jsx)(g.a,{variant:"outline-primary",onClick:function(){return alert("Data Saved"+h.fname)},children:" Submit"}),Object(f.jsxs)("div",{style:{marginTop:"40px"},children:[Object(f.jsxs)("p",{children:[" FirstName: ",h.fname]}),Object(f.jsxs)("p",{children:[" LastName: ",h.lname]}),Object(f.jsxs)("p",{children:[" Email: ",h.email]}),Object(f.jsxs)("p",{children:[" Phone: ",h.phone]}),Object(f.jsxs)("p",{children:[" City: ",h.city]}),Object(f.jsxs)("p",{children:[" State: ",h.state]}),Object(f.jsxs)("p",{children:[" Zipcode: ",h.zip]})]})]}),Object(f.jsx)(g.a,{className:"BtnNext",variant:"outline-primary",type:"click",onClick:function(){Y(1)},children:"Prev"}),Object(f.jsx)(g.a,{className:"BtnHome",variant:"outline-warning",type:"click",onClick:function(){e.push("/")},children:"Go Back To Home"})]})})})]})}a(86);var k=a(21),R=a(92);a(87);function _(){return Object(f.jsx)("div",{className:"Footer",children:Object(f.jsx)(R.a,{className:"Footer_Card",children:Object(f.jsx)(R.a.Body,{children:Object(f.jsx)(R.a.Text,{children:"Copyright Reserved @DEMO"})})})})}function w(){var e=RegExp("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"),t=(RegExp("[A-Z0-9a-z._%+-]{8,64}"),Object(N.f)(),Object(l.c)((function(e){return e.userdata})),Object(n.useState)({})),a=Object(u.a)(t,2),c=(a[0],a[1],Object(S.a)({initialValues:{email:"",pass:""},validate:function(t){var a={};return t.email?e.test(t.email)||(a.email="REGEXP ERR"):a.email="Email Can not be blank",t.pass?t.pass.length<5&&(a.pass="password too short. should be at least 5 characters"):a.pass="Password Can not be blank",a},onSubmit:function(e){console.log(e)}}));return Object(f.jsxs)("div",{style:{width:"100%"},children:[Object(f.jsxs)(x.a,{className:"Home_Row",children:[Object(f.jsx)(C.a,{className:"Home_Row_col1",sm:12,lg:4,md:4,children:" "}),Object(f.jsx)(C.a,{className:"Home_Row_col2",sm:12,lg:8,md:8,children:Object(f.jsxs)(O.a,{className:"Home_Row_col2_Container",children:["  ",Object(f.jsx)("h2",{children:" Welcome Back"}),Object(f.jsx)("p",{children:Object(f.jsx)("span",{className:"Home_Row_col2_Container_span",children:"Sign in to your account"})}),Object(f.jsxs)(y.a,{onSubmit:c.handleSubmit,children:[Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"email",children:[Object(f.jsx)(y.a.Label,{children:"Email address"}),Object(f.jsx)(y.a.Control,{type:"email",placeholder:"name@example.com",style:{height:"60px"},onChange:c.handleChange})]}),Object(f.jsx)("p",{children:c.touched.email&&c.errors.email?Object(f.jsx)("span",{children:c.errors.email}):""}),Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"pass",children:[Object(f.jsx)(y.a.Label,{children:"Password"}),Object(f.jsx)(y.a.Control,{type:"password",placeholder:"Password",style:{height:"60px"},onChange:c.handleChange})]}),Object(f.jsx)("p",{children:c.touched.pass&&c.errors.pass?Object(f.jsx)("span",{children:c.errors.pass}):""}),Object(f.jsx)(g.a,{variant:"outline-success",type:"submit",className:"Home_Row_col2_Container_Form_ButtonSubmit",children:"Submit"}),Object(f.jsx)("p",{})," Or, ",Object(f.jsx)(k.b,{to:"/Registration",style:{textDecoration:"none"},children:" Sign up here "})]})]})})]}),Object(f.jsx)(_,{})]})}function z(e){e.data;var t=Object(l.c)((function(e){return e.TestReducer}));return console.log(t),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Details Taken"}),Object(f.jsx)("p",{}),"   ",Object(f.jsx)(g.a,{variant:"outline-primary",children:" CLICK"}),Object(f.jsxs)("div",{style:{marginTop:"40px"},children:[Object(f.jsxs)("p",{children:[" FirstName: ",t.fname]}),Object(f.jsxs)("p",{children:[" LastName: ",t.lname]}),Object(f.jsxs)("p",{children:[" Email: ",t.email]}),Object(f.jsxs)("p",{children:[" Phone: ",t.phone]}),Object(f.jsxs)("p",{children:[" City: ",t.city]}),Object(f.jsxs)("p",{children:[" State: ",t.state]}),Object(f.jsxs)("p",{children:[" Zipcode: ",t.zip]})]})]})}function B(){var e=Object(N.f)(),t=function(){e.push("/RegForm2")},a=(Object(l.c)((function(e){return e.userdata})),Object(l.b)()),n=Object(S.a)({initialValues:{state:"",city:"",zip:"",formCounter:"2"},validate:"",onSubmit:function(e){console.log(e),a(b(e))}});return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(O.a,{className:"Registration_Container",children:Object(f.jsxs)(x.a,{className:"Registration_Container_Row",children:[Object(f.jsx)("h1",{children:"Step 2"}),Object(f.jsxs)(y.a,{onSubmit:n.handleSubmit,children:[Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"state",children:[Object(f.jsx)(y.a.Label,{children:"State"}),Object(f.jsx)(y.a.Control,{type:"text",placeholder:"Enter State",onChange:n.handleChange})]}),Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"city",children:[Object(f.jsx)(y.a.Label,{children:"City"}),Object(f.jsx)(y.a.Control,{type:"text",placeholder:"Enter City",onChange:n.handleChange})]}),Object(f.jsxs)(y.a.Group,{className:"mb-3",controlId:"zip",children:[Object(f.jsx)(y.a.Label,{children:"Zipcode"}),Object(f.jsx)(y.a.Control,{type:"text",placeholder:"Enter Zipcode",onChange:n.handleChange})]}),Object(f.jsx)(g.a,{className:"BtnSubmit",variant:"outline-success",type:"submit",children:"Submit"})]}),Object(f.jsx)(g.a,{className:"BtnNext",variant:"outline-primary",type:"click ",onClick:t,children:"Next"})]})}),Object(f.jsx)(g.a,{className:"BtnNext",variant:"outline-warning",type:"click",onClick:t,children:"Go Back To Home"})]})})}var E=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(k.a,{children:Object(f.jsxs)(N.c,{children:[Object(f.jsx)(N.a,{exact:!0,path:"/",component:w}),Object(f.jsx)(N.a,{path:"/Registration",component:v}),Object(f.jsx)(N.a,{path:"/RegForm1/",component:B}),Object(f.jsx)(N.a,{path:"/RegForm2",component:z})]})})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(l.a,{store:p,children:Object(f.jsx)(E,{})})}),document.getElementById("root")),F()}},[[88,1,2]]]);
//# sourceMappingURL=main.a6ae869a.chunk.js.map