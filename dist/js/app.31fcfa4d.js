(function(){"use strict";var e={778:function(e,t,r){var s=r(144),a=r(998),n=r(2928),o=function(){var e=this,t=e._self._c;return t(a.Z,[t(n.Z,["/"===e.$route.path?t("h1",{staticStyle:{"text-align":"center","margin-top":"2%","font-size":"350%"}},[e._v(" CGPA CALCULATOR ")]):e._e(),t("router-view")],1)],1)},c=[],d={name:"App",data:()=>({})},i=d,m=r(1001),u=(0,m.Z)(i,o,c,!1,null,null,null),A=u.exports,l=r(8345),C=r(9582),S=r(4886),T=r(2765),O=r(437),g=function(){var e=this,t=e._self._c;return t("div",[t(T.Z,[t(C.Z,{staticClass:"mx-auto mt-16",attrs:{width:"500"}},[t(S.EB,{staticStyle:{"margin-left":"34%"}},[e._v(" Course Name ")]),t(O.Z,{staticStyle:{width:"50%","margin-left":"24%"},attrs:{label:"Select Course Name",items:["CS","IT"]},model:{value:e.course,callback:function(t){e.course=t},expression:"course"}}),t(S.Qq,{staticStyle:{color:"crimson","margin-left":"22%"}},[e._v("NOTE : Only for MSc Integrated 5yrs!")])],1),t("NextButton",{attrs:{nextsite:"1",course:e.course}})],1)],1)},N=[],f=r(6190),E=function(){var e=this,t=e._self._c;return t("router-link",{attrs:{to:`/sem${e.nextsite}`}},[t(f.Z,{attrs:{rounded:"",right:"",color:"primary"},on:{click:e.courseName}},[e._v("Next")])],1)},p=[],R={name:"CgpaCalciNextButton",props:{nextsite:String,course:String},methods:{courseName(){"1"===this.nextsite&&this.$store.dispatch("updateCourse",this.course)}}},P=R,I=(0,m.Z)(P,E,p,!1,null,null,null),G=I.exports,M={components:{NextButton:G},name:"HomePage",data(){return{course:""}}},h=M,v=(0,m.Z)(h,g,N,!1,null,null,null),_=v.exports,x=r(9449),D=function(){var e=this,t=e._self._c;return t("div",[t(T.Z,[t("h1",{staticClass:"mt-5",staticStyle:{"text-align":"center"}},[e._v(" Semester "+e._s(e.$route.params.sem[e.$route.params.sem.length-1])+" ")]),t("br"),t(x.Z,{attrs:{dark:""},scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",{staticClass:"text-center"},[e._v("S.No")]),t("th",{staticClass:"text-center"},[e._v("CourseName")]),t("th",{staticClass:"text-center"},[e._v("CourseCode")]),t("th",{staticClass:"text-center"},[e._v("Credits")]),t("th",{staticClass:"text-center"},[e._v("Grade")])])]),t("tbody",e._l(e.current(e.$route.params.sem),(function(r,s){return t("tr",{key:r.code},[t("td",{staticClass:"text-center"},[e._v(e._s(s+1))]),t("td",{staticClass:"text-center"},[e._v(e._s(r.name))]),t("td",{staticClass:"text-center"},[e._v(e._s(r.code))]),t("td",{staticClass:"text-center"},[e._v(e._s(r.credits))]),t("td",{staticClass:"text-center",staticStyle:{width:"7%"}},[t(O.Z,{attrs:{items:e.grades},model:{value:r.grade,callback:function(t){e.$set(r,"grade",t)},expression:"item.grade"}})],1)])})),0)]},proxy:!0}])}),t("br"),t("h2",{staticStyle:{"text-align":"center"}},[e._v(" GPA : "+e._s(e.$store.state.GPA[parseInt(e.$route.params.sem[e.$route.params.sem.length-1])])+" ")]),t(f.Z,{attrs:{rounded:"",color:"success"},on:{click:function(t){return e.$store.dispatch("addGPA",e.semData[e.$route.params.sem])}}},[e._v("Calculate GPA")]),t(f.Z,{attrs:{rounded:"",color:"grey"},on:{click:e.calculateCGPA}},[e._v("Calculate CGPA")]),t("NextButton",{attrs:{nextsite:(parseInt(e.$route.params.sem[e.$route.params.sem.length-1])+1).toString()}})],1),t("br")],1)},U=[],L=JSON.parse('[{"sem":1,"name":"COMMUNICATIVE ENGLISH","code":"HS5152","credits":"3","grade":""},{"name":"COMMUNICATION SKILL LABORATORY (LANGUAGE)","code":"HS5161","credits":"2","sem":1,"grade":""},{"name":"CALCULUS","code":"MA5151","credits":"4","sem":1,"grade":""},{"name":"APPLIED PHYSICS","code":"PH5152","credits":"4","sem":1,"grade":""},{"name":"DIGITAL SYSTEMS","code":"XC5151","sem":1,"credits":"4","grade":""},{"name":"PROBLEM SOLVING AND C PROGRAMMING","code":"XC5152","sem":1,"credits":"3","grade":""},{"name":"C PROGRAMMING LABORATORY","code":"XC5161","sem":1,"credits":"2","grade":""}]'),y=JSON.parse('[{"sem":2,"name":"CHEMISTRY OF MATERIALS","code":"CY5253","credits":"4","grade":""},{"name":"TECHNICAL COMMUNICATION","code":"HS5252","credits":"3","sem":2,"grade":""},{"name":"TRANSFORM TECHNIQUES AND PARTIAL DIFFERENTIAL EQUATIONS","code":"MA5251","credits":"4","sem":2,"grade":""},{"name":"OBJECT ORIENTED PROGRAMMING IN C++","code":"XC5251","credits":"4","sem":2,"grade":""},{"name":"DATA STRUCTURES","code":"XC5252","sem":2,"credits":"3","grade":""},{"name":"COMPUTER ARCHITECTURE","code":"XC5253","sem":2,"credits":"3","grade":""},{"name":"DATA STRUCTURES LABORATORY","code":"XC5261","sem":2,"credits":"2","grade":""}]'),B=JSON.parse('[{"sem":3,"name":"LOGIC AND ABSTRACT ALGEBRA","code":"MA5351","credits":"4","grade":""},{"name":"COMBINATORICS AND GRAPH THEORY","code":"XC5351","credits":"4","sem":3,"grade":""},{"name":"MICROPROCESSOR AND APPLICATIONS","code":"XC5352","credits":"4","sem":3,"grade":""},{"name":"OPERATING SYSTEMS","code":"XC5353","credits":"3","sem":3,"grade":""},{"name":"SIGNALS AND SYSTEMS","code":"XC5354","sem":3,"credits":"4","grade":""},{"name":"OPERATING SYSTEMS LABORATORY","code":"XC5361","sem":3,"credits":"2","grade":""},{"name":"PYTHON PROGRAMMING LABORATORY","code":"XC5362","sem":3,"credits":"2","grade":""}]'),X=JSON.parse('[{"sem":4,"name":"PROBABILITY AND STATISTICS","code":"MA5451","credits":"4","grade":""},{"name":"THEORY OF COMPUTATION","code":"XC5451","credits":"4","sem":4,"grade":""},{"name":"DATABASE MANAGEMENT SYSTEMS","code":"XC5452","credits":"3","sem":4,"grade":""},{"name":"JAVA AND INTERNET PROGRAMMING","code":"XC5453","credits":"3","sem":4,"grade":""},{"name":"COMPUTER NETWORKS","code":"XC5454","sem":4,"credits":"4","grade":""},{"name":"JAVA AND INTERNET PROGRAMMING LABORATORY","code":"XC5461","sem":4,"credits":"2","grade":""},{"name":"DATABASE MANAGEMENT SYSTEMS LABORATORY","code":"XC5462","sem":4,"credits":"2","grade":""},{"name":"COMPUTATIONAL LABORATORY USING R","code":"XC5463","sem":4,"credits":"2","grade":""}]'),Y=JSON.parse('[{"sem":5,"name":"CRYPTOGRAPHY AND DATA SECURITY (or) ADVANCED DATABASE MANAGEMENT SYSTEMS","code":"XC5501/XT5501","credits":"4","grade":""},{"name":"SOFTWARE ENGINEERING","code":"XC5551","credits":"3","sem":5,"grade":""},{"name":"DESIGN AND ANALYSIS OF ALGORITHMS","code":"XC5552","credits":"4","sem":5,"grade":""},{"name":"SOFTWARE DEVELOPMENT LABORATORY","code":"XC5561","credits":"2","sem":5,"grade":""},{"name":"OPEN SOURCE SYSTEMS","code":"XT5074","sem":5,"credits":"3","grade":""},{"name":"SOFTWARE PROJECT MANAGEMENT / UNIX INTERNALS","code":"XT5076","sem":5,"credits":"3","grade":""},{"name":"DATA WAREHOUSING AND MINING","code":"XT5551","sem":5,"credits":"4","grade":""}]'),b={name:"CgpaCalciSemesterPage",components:{NextButton:G},data(){return{grades:["O","A+","A","B+","B","C","U"],semData:{sem1:L,sem2:y,sem3:B,sem4:X,sem5:Y}}},mounted(){},methods:{current:function(e){return this.semData[e]},calculateCGPA:function(){this.$store.dispatch("calCGPA",this.semData),window.alert("Your CGPA for the considering only the semesters you have entered and calculated GPAs for is calculated!\n\nCGPA : "+this.$store.getters.CGPAGetter)}}},Z=b,w=(0,m.Z)(Z,D,U,!1,null,null,null),H=w.exports;s.ZP.use(l.ZP);const $=[{path:"/",name:"Course",component:_},{path:"/:sem",name:"SemPage",component:H}],k=new l.ZP({mode:"history",base:"/",routes:$});var F=k,J=r(1705);s.ZP.use(J.Z);var j=new J.Z({}),V=r(629);s.ZP.use(V.ZP);var W=new V.ZP.Store({state:{CGPA:0,course:"",GPA:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},credits:{1:22,2:23,3:23,4:24,5:23,6:21,7:16,8:23}},getters:{CGPAGetter:e=>e.CGPA,courseGetter:e=>e.course},mutations:{UPDATE_GPA(e,t){e.GPA[parseInt(t.sem)]=t.gpa},UPDATE_CGPA(e,t){e.CGPA=t},UPDATE_COURSE(e,t){e.course=t}},actions:{addGPA(e,t){let r={O:10,"A+":9,A:8,"B+":7,B:6,C:5,U:0},s=0,a=0;for(let n of t)"U"!==n.grade&&(a+=parseInt(n.credits),s+=parseInt(n.credits)*parseFloat(r[n.grade]));e.commit("UPDATE_GPA",{gpa:s/a,sem:t[0].sem})},calCGPA(e,t){let r={O:10,"A+":9,A:8,"B+":7,B:6,C:5,U:0},s=0,a=0,n=!0;for(let o in t)for(let e of t[o]){if(""===e.grade){n=!1;break}if(!n)break;"U"!==e.grade&&(a+=parseInt(e.credits),s+=parseFloat(r[e.grade])*parseInt(e.credits))}console.log(a),console.log(s),e.commit("UPDATE_CGPA",s/a)},updateCourse(e,t){e.commit("UPDATE_COURSE",t)}}});s.ZP.config.productionTip=!1,new s.ZP({router:F,vuetify:j,store:W,render:e=>e(A)}).$mount("#app")}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,s,a,n){if(!s){var o=1/0;for(m=0;m<e.length;m++){s=e[m][0],a=e[m][1],n=e[m][2];for(var c=!0,d=0;d<s.length;d++)(!1&n||o>=n)&&Object.keys(r.O).every((function(e){return r.O[e](s[d])}))?s.splice(d--,1):(c=!1,n<o&&(o=n));if(c){e.splice(m--,1);var i=a();void 0!==i&&(t=i)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[s,a,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,n,o=s[0],c=s[1],d=s[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(d)var m=d(r)}for(t&&t(s);i<o.length;i++)n=o[i],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(m)},s=self["webpackChunkcgpa_calci"]=self["webpackChunkcgpa_calci"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(778)}));s=r.O(s)})();
//# sourceMappingURL=app.31fcfa4d.js.map