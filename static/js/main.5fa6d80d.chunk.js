(this["webpackJsonpburger-time"]=this["webpackJsonpburger-time"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={BreadBottom:"burgerIngredients_BreadBottom__3dbhE",BreadTop:"burgerIngredients_BreadTop__ZbeqD",Seeds1:"burgerIngredients_Seeds1__2f3sg",Seeds2:"burgerIngredients_Seeds2__3nll-",Meat:"burgerIngredients_Meat__2NHoz",Cheese:"burgerIngredients_Cheese__19hwe",Lettuce:"burgerIngredients_Lettuce__2UYD8",Bacon:"burgerIngredients_Bacon__3r1wK"}},function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2dehL",Open:"SideDrawer_Open__oWPRF",Close:"SideDrawer_Close__3ifcp",Logo:"SideDrawer_Logo__1ahmC"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__3PpQE",Label:"BuildControl_Label__khJ1z",Less:"BuildControl_Less__-P6HS",More:"BuildControl_More__3UkKJ"}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1dKL3",Logo:"Toolbar_Logo__3G_Zg",DesktopOnly:"Toolbar_DesktopOnly__2fn0Q"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2IGup",active:"NavigationItem_active__2qECp"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__pEoZv",OrderButton:"BuildControls_OrderButton__wtAQS",enable:"BuildControls_enable__2QUUI"}},function(e,t,n){e.exports={Button:"Button_Button__113nY",Success:"Button_Success__2eDyZ",Danger:"Button_Danger__3_L7A"}},,,,,,,,,,,function(e,t,n){e.exports={content:"Layout_content__2eFKy"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__2IlLu"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__2DKpw"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2qLjQ"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3O7J2"}},,function(e,t,n){e.exports={Burger:"Burger_Burger__cUT8f"}},function(e,t,n){e.exports={Modal:"Modal_Modal__2wcx1"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1GPR6",load8:"Spinner_load8__SD5nf"}},,,function(e,t,n){e.exports=n(59)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(23),i=n.n(o),l=(n(41),n(1)),c=n(2),s=n(4),u=n(3),d=n(5),m=function(e){return e.children},p=n(24),h=n.n(p),g=n(25),b=n.n(g),f=n(26),_=n.n(f),v=function(e){return a.a.createElement("div",{className:_.a.Logo},a.a.createElement("img",{src:b.a,alt:"Burger Time Logo"}))},E=n(27),O=n.n(E),y=n(11),k=n.n(y),w=function(e){return a.a.createElement("li",{className:k.a.NavigationItem},a.a.createElement("a",{href:e.link,className:e.active?k.a.active:null},e.children))},S=function(){return a.a.createElement("ul",{className:O.a.NavigationItems},a.a.createElement(w,{link:"/",active:!0},"Burger Builder"),a.a.createElement(w,{link:"/"},"Checkout"))},C=n(28),j=n.n(C),B=function(e){return a.a.createElement("div",{className:j.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},D=n(10),N=n.n(D),L=function(e){return a.a.createElement("header",{className:N.a.Toolbar},a.a.createElement(B,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:N.a.Logo},a.a.createElement(v,null)),a.a.createElement("nav",{className:N.a.DesktopOnly},a.a.createElement(S,null)))},I=n(29),P=n.n(I),T=function(e){return e.show?a.a.createElement("div",{className:P.a.Backdrop,onClick:e.backDropClicked}):null},x=n(8),H=n.n(x),M=function(e){var t=[H.a.SideDrawer,H.a.Close];return e.open&&(t=[H.a.SideDrawer,H.a.Open]),a.a.createElement(m,null,a.a.createElement(T,{show:e.open,backDropClicked:e.closed}),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("div",{className:H.a.Logo},a.a.createElement(v,null)),a.a.createElement("nav",null,a.a.createElement(S,null))))},U=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(m,null,a.a.createElement(L,{drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(M,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:h.a.content},this.props.children))}}]),t}(r.Component),A=n(30),R=n(35),W=n(31),J=n.n(W),K=n(7),Q=n.n(K),Y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=a.a.createElement("div",{className:Q.a.BreadBottom});break;case"bread-top":e=a.a.createElement("div",{className:Q.a.BreadTop},a.a.createElement("div",{className:Q.a.Seeds1}),a.a.createElement("div",{className:Q.a.Seeds2}));break;case"meat":e=a.a.createElement("div",{className:Q.a.Meat});break;case"cheese":e=a.a.createElement("div",{className:Q.a.Cheese});break;case"lettuce":e=a.a.createElement("div",{className:Q.a.Lettuce});break;case"bacon":e=a.a.createElement("div",{className:Q.a.Bacon});break;default:e=null}return e}}]),t}(r.Component),q=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(R.a)(Array(e.ingredients[t])).map((function(e,n){return a.a.createElement(Y,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=a.a.createElement("p",null,"Please add ingredients")),console.log(t),a.a.createElement("div",{className:J.a.Burger},a.a.createElement(Y,{type:"bread-top"}),t,a.a.createElement(Y,{type:"bread-bottom"}))},z=n(12),F=n.n(z),Z=n(9),G=n.n(Z),$=function(e){return a.a.createElement("div",{className:G.a.BuildControl},a.a.createElement("div",{className:G.a.Label},e.label),a.a.createElement("button",{className:G.a.Less,onClick:e.removeIngredient,disabled:e.disabled},"Less"),a.a.createElement("button",{className:G.a.More,onClick:e.addIngredient},"More"))},V=[{label:"Lettuce",type:"lettuce"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],X=function(e){return a.a.createElement("div",{className:F.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),V.map((function(t){return a.a.createElement($,{key:t.label,label:t.label,addIngredient:function(){return e.ingredientAdded(t.type)},removeIngredient:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:F.a.OrderButton,disabled:!e.purchasable,onClick:e.clickedOrderBtn},"ORDER NOW"))},ee=n(32),te=n.n(ee),ne=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentDidUpdate",value:function(){console.log("[Modal] DidUpdate")}},{key:"render",value:function(){return a.a.createElement(m,null,a.a.createElement(T,{show:this.props.show,backDropClicked:this.props.hideModal}),a.a.createElement("div",{className:te.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(r.Component),re=n(13),ae=n.n(re),oe=function(e){return a.a.createElement("button",{className:[ae.a.Button,ae.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ie=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){console.log("[OrderSummary] DidUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return a.a.createElement(m,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"Bam!! Here is your burger:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: $",this.props.price)),a.a.createElement("p",null,"Contine to Checkout?"),a.a.createElement(oe,{btnType:"Danger",clicked:this.props.cancelOrder},"CANCEL"),a.a.createElement(oe,{btnType:"Success",clicked:this.props.continueWithOrder},"CONTINUE"))}}]),t}(r.Component),le=n(33),ce=n.n(le),se=function(){return a.a.createElement("div",{className:ce.a.Loader},"Loading...")},ue=function(e,t){return function(n){function r(){var e,t;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(r)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(d.a)(r,n),Object(c.a)(r,[{key:"componentWillMount",value:function(){var e=this;t.interceptors.request.use((function(t){return e.setState({error:null}),t})),t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){return a.a.createElement(m,null,a.a.createElement(ne,{show:this.state.error,hideModal:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),a.a.createElement(e,this.props))}}]),r}(r.Component)},de=n(34),me=n.n(de).a.create({baseURL:"https://react-burger-builder-f68f8.firebaseio.com/"});function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge={lettuce:.3,cheese:.4,meat:1.3,bacon:.5},be=ue(function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={ingredients:null,totalPrice:4,purchasable:!1,orderStatus:!1,loading:!1,error:!1},n.addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,r=he({},n.state.ingredients);r[e]=t;var a=ge[e],o=n.state.totalPrice+a;n.setState({totalPrice:o,ingredients:r}),n.updatePurchaseState(r)},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e];if(!(t<=0)){var r=t-1,a=he({},n.state.ingredients);a[e]=r;var o=ge[e],i=n.state.totalPrice-o;n.setState({totalPrice:i,ingredients:a}),n.updatePurchaseState(a)}},n.orderHandler=function(){n.setState({orderStatus:!0})},n.cancelOrderHandler=function(){n.setState({orderStatus:!1})},n.orderContinueHandler=function(){n.setState({loading:!0});var e={ingredients:n.state.ingredients,price:n.state.totalPrice,customer:{name:"Capirucho",address:{street:"Somestreet Name",zipCode:"12345",country:"USA"},emailAddress:"username@domain.com"},deliveryMethod:"Speedy"};me.post("/orders.json",e).then((function(e){n.setState({loading:!1,orderStatus:!1})})).catch((function(e){n.setState({loading:!1,orderStatus:!1})}))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;me.get("https://react-burger-builder-f68f8.firebaseio.com/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=he({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.state.error?a.a.createElement("p",{Style:"Color:red;Text-Align:center;Padding:15px;"},"...Error loading ingredients"):a.a.createElement(se,null);return this.state.ingredients&&(r=a.a.createElement(m,null,a.a.createElement(q,{ingredients:this.state.ingredients}),a.a.createElement(X,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,clickedOrderBtn:this.orderHandler,price:this.state.totalPrice})),n=a.a.createElement(ie,{ingredients:this.state.ingredients,price:this.state.totalPrice.toFixed(2),cancelOrder:this.cancelOrderHandler,continueWithOrder:this.orderContinueHandler})),this.state.loading&&(n=a.a.createElement(se,null)),a.a.createElement(m,null,a.a.createElement(ne,{show:this.state.orderStatus,hideModal:this.cancelOrderHandler},n),r)}}]),t}(r.Component),me),fe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(U,null,a.a.createElement(be,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[36,1,2]]]);
//# sourceMappingURL=main.5fa6d80d.chunk.js.map