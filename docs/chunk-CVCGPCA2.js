import{a as M,c as w,d as P,f as F,h as O,i as T,n as h,o as D,q as y}from"./chunk-LCZDQYKJ.js";import"./chunk-22KOPLQH.js";import{Ea as m,Oa as C,X as u,Y as _,bb as l,cb as d,gb as x,hb as o,ib as n,jb as f,kb as b,mb as v,nb as g,tb as r,wb as a}from"./chunk-JPNOK5HP.js";function N(e,i){e&1&&(o(0,"p",10),a(1,"email is required"),n())}function q(e,i){e&1&&(o(0,"p",10),a(1,"email is invalid"),n())}function V(e,i){if(e&1&&(l(0,N,2,0,"p",10),l(1,q,2,0,"p",10)),e&2){g();let t=r(6);d(t.getError("required")?0:-1),m(),d(t.getError("pattern")?1:-1)}}function z(e,i){e&1&&(o(0,"p",10),a(1,"password is required"),n())}function A(e,i){if(e&1&&l(0,z,2,0,"p",10),e&2){g();let t=r(12);d(t.getError("required")?0:-1)}}var S=class e{submitForm(i){console.log(i.value)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-template-driven-form"]],decls:16,vars:3,consts:[["drivenform","ngForm"],["email","ngModel"],["password","ngModel"],[3,"ngSubmit"],[1,"form-item"],["for","email"],["type","text","id","email","placeholder","type your email","ngModel","","name","email","required","","pattern","[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\\.[a-zA-Z]{2,}"],["for","password"],["type","password","id","password","placeholder","type your password","ngModel","","name","password","required",""],[3,"disabled"],[1,"error"]],template:function(t,E){if(t&1){let p=b();o(0,"form",3,0),v("ngSubmit",function(){u(p);let c=r(1);return _(E.submitForm(c))}),o(2,"div",4)(3,"label",5),a(4,"email"),n(),f(5,"input",6,1),l(7,V,2,2),n(),o(8,"div",4)(9,"label",7),a(10,"password"),n(),f(11,"input",8,2),l(13,A,1,1),n(),o(14,"button",9),a(15,"login"),n()()}if(t&2){let p=r(1),s=r(6),c=r(12);m(7),d(s.touched&&s.errors?7:-1),m(6),d(c.touched&&c.errors?13:-1),m(),x("disabled",!p.valid)}},dependencies:[y,T,M,w,P,h,D,O,F],styles:["form[_ngcontent-%COMP%]{margin-top:100px!important;width:70%;margin:auto;border:2px solid #94c5ef;background-color:#fcfbfb;padding:20px;border-radius:10px;text-transform:capitalize}form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]{height:80px}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:5px}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:10px;border:1px solid #94c5ef;border-radius:5px}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}form[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid #dc5b5b}form[_ngcontent-%COMP%]   input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:1px solid #5bdcb1}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#94c5ef;border:1px solid #94c5ef;color:#fff;padding:10px 20px;border-radius:5px;text-transform:capitalize;font-weight:700;cursor:pointer;width:100%}form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:#dc5b5b;font-size:12px;margin:0}"]})};export{S as TemplateDrivenForm};
