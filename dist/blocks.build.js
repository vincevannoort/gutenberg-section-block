!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,i){var n,o;!function(){"use strict";function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var r=i.apply(null,n);r&&e.push(r)}else if("object"===o)for(var a in n)s.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}var s={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(i.default=i,e.exports=i):(n=[],void 0!==(o=function(){return i}.apply(t,n))&&(e.exports=o))}()},function(e,t,i){"use strict";function n(e){var t=e.tagName,i=e.className,n=e.style,s=e.children;return o(t,{className:i,style:n},s)}t.a=n;var o=wp.element.createElement},function(e,t,i){"use strict";t.a={tagName:{type:"string",default:"section"},enableSpacing:{type:"boolean",default:!1},spacingTop:{type:"number",default:60},spacingBottom:{type:"number",default:60},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},customTextColor:{type:"string"},bgImage:{type:"object",default:null},bgOptions:{type:"object",default:{repeat:!1,stretch:!0,fixed:!1,opacity:.5}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(4)},function(e,t,i){"use strict";var n=i(5),o=(i.n(n),i(6)),s=(i.n(o),i(7)),r=i(10),a=i(11),l=i(2),p=wp.blocks.registerBlockType,c=wp.i18n.__,u=wp.components.withFallbackStyles,h=wp.compose.compose,d=wp.editor.withColors,g=window,f=g.getComputedStyle,m=u(function(e,t){var i=t.attributes.backgroundColor,n=e.querySelector('[contenteditable="true"]'),o=n?f(n):null;return{fallbackBackgroundColor:i||!o?void 0:o.backgroundColor}});p("debatunie/section-block",{title:c("Section"),icon:"align-center",category:"layout",keywords:[c("section"),c("container")],attributes:l.a,supports:{align:["full"]},edit:h([d("backgroundColor",{textColor:"color"}),m])(s.a),save:r.a,deprecated:a.a})},function(e,t){},function(e,t){},function(e,t,i){"use strict";var n=i(0),o=i.n(n),s=i(8),r=i(1),a=wp.i18n.__,l=wp.components,p=l.PanelBody,c=l.RangeControl,u=l.Button,h=l.ResponsiveWrapper,d=l.ToggleControl,g=l.SelectControl,f=wp.element.Fragment,m=wp.editor,b=m.InspectorControls,v=m.InspectorAdvancedControls,w=m.InnerBlocks,y=m.PanelColorSettings,z=m.MediaUpload;t.a=function(e){var t=e.attributes,i=e.setAttributes,n=e.setBackgroundColor,l=e.toggleSelection;"full"!=e.attributes.align&&e.setAttributes({align:"full"});var m=function(e){i({bgImage:{id:e.id,image:e.sizes.large||e.sizes.full}})},S=function(){i({bgImage:null})},x=t.tagName,k=t.customBackgroundColor,E=t.customTextColor,C=t.resizeTopIsActive,_=t.resizeBottomIsActive,R=t.bgImage,N=t.bgOptions,M=t.enableSpacing;return wp.element.createElement(f,null,wp.element.createElement(b,null,wp.element.createElement(p,{title:a("Spacing"),initialOpen:!1},wp.element.createElement(d,{label:a("Enable spacing"),checked:!!t.enableSpacing,onChange:function(e){i({enableSpacing:e})}}),!!M&&wp.element.createElement(c,{label:a("Spacing top"),value:t.spacingTop,onChange:function(e){i({spacingTop:e})},min:0,max:200,step:10}),!!M&&wp.element.createElement(c,{label:a("Spacing bottom"),value:t.spacingBottom,onChange:function(e){i({spacingBottom:e})},min:0,max:200,step:10})),wp.element.createElement(p,{title:a("Background image"),initialOpen:!1},!R&&wp.element.createElement("div",null,wp.element.createElement(z,{title:a("Set background image"),onSelect:m,allowedTypes:["image"],modalClass:"editor-post-featured-image__media-modal",render:function(e){var t=e.open;return wp.element.createElement(u,{className:"editor-post-featured-image__toggle",onClick:t},a("Set background image"))}})),!!R&&wp.element.createElement(z,{title:a("Set background image"),onSelect:m,allowedTypes:["image"],value:R.id,modalClass:"editor-post-featured-image__media-modal",render:function(e){var t=e.open;return wp.element.createElement("div",{className:"editor-bg-image"},wp.element.createElement(u,{className:"editor-post-featured-image__preview",onClick:t},wp.element.createElement(h,{naturalWidth:R.image.width,naturalHeight:R.image.height},wp.element.createElement("img",{src:R.image.url,alt:a("BG Image")}))),wp.element.createElement(u,{onClick:t,isDefault:!0,isLarge:!0},a("Replace image")),wp.element.createElement(u,{onClick:S,isLink:!0,isDestructive:!0},a("Remove background image")))}}),!!R&&wp.element.createElement("div",{className:"section-bg-settings"},wp.element.createElement(c,{label:a("Opacity"),value:100*N.opacity,onChange:function(e){i({bgOptions:Object.assign({},N,{opacity:e/100})})},min:0,max:100,step:10}),wp.element.createElement(d,{label:a("Fixed Background"),checked:!!N.fixed,onChange:function(e){i({bgOptions:Object.assign({},N,{fixed:e})})}}),!N.fixed&&wp.element.createElement(d,{label:a("Stretch Background"),checked:!!N.stretch,onChange:function(e){i({bgOptions:Object.assign({},N,{stretch:e})})}}),!N.fixed&&!N.stretch&&wp.element.createElement(d,{label:a("Repeat Background"),checked:!!N.repeat,onChange:function(e){i({bgOptions:Object.assign({},N,{repeat:e})})}}))),wp.element.createElement(y,{initialOpen:!1,title:a("Colors"),colorSettings:[{label:a("Background Color"),value:k,onChange:function(e){n(e),i({customBackgroundColor:e})}},{label:a("Text Color"),value:E,onChange:function(e){i({customTextColor:e})}}]})),wp.element.createElement(v,null,wp.element.createElement(g,{label:"Tag",value:x,options:[{label:"section",value:"section"},{label:"header",value:"header"},{label:"footer",value:"footer"},{label:"div",value:"div"}],onChange:function(e){i({tagName:e})}})),wp.element.createElement(r.a,{tagName:x,className:e.className,style:{backgroundColor:k,color:E}},!!R&&wp.element.createElement("div",{className:o()("section-bg",{bg__repeated:N.repeat,bg__stretched:N.stretch||N.fixed,bg__fixed:N.fixed}),style:{backgroundImage:R?"url("+R.image.url+")":void 0,opacity:N.opacity}}),!!M&&wp.element.createElement(s.a,{className:o()("spacing-box",{resizing:C}),size:{height:t.spacingTop},minHeight:"0",handleClasses:{top:"core-blocks-spacer__resize-handler-top",bottom:"core-blocks-spacer__resize-handler-bottom components-resizable-box__handle"},enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},onResizeStop:function(e,n,o,s){i({resizeTopIsActive:!1,spacingTop:parseInt(t.spacingTop+s.height,10)}),l(!0)},onResizeStart:function(){i({resizeTopIsActive:!0}),l(!1)}}),wp.element.createElement(w,null),!!M&&wp.element.createElement(s.a,{className:o()("spacing-box",{resizing:_}),size:{height:t.spacingBottom},minHeight:"0",handleClasses:{top:"core-blocks-spacer__resize-handler-top",bottom:"core-blocks-spacer__resize-handler-bottom components-resizable-box__handle"},enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},onResizeStop:function(e,n,o,s){i({spacingBottom:parseInt(t.spacingBottom+s.height,10),resizeBottomIsActive:!1}),l(!0)},onResizeStart:function(){l(!1),i({resizeBottomIsActive:!0})}})))}},function(e,t,i){"use strict";var n=i(9),o=(i.n(n),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},p={base:{position:"absolute",userSelect:"none",MsUserSelect:"none"},top:{width:"100%",height:"10px",top:"-5px",left:"0px",cursor:"row-resize"},right:{width:"10px",height:"100%",top:"0px",right:"-5px",cursor:"col-resize"},bottom:{width:"100%",height:"10px",bottom:"-5px",left:"0px",cursor:"row-resize"},left:{width:"10px",height:"100%",top:"0px",left:"-5px",cursor:"col-resize"},topRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",top:"-10px",cursor:"ne-resize"},bottomRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",bottom:"-10px",cursor:"se-resize"},bottomLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",bottom:"-10px",cursor:"sw-resize"},topLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",top:"-10px",cursor:"nw-resize"}},c=function(e){return Object(n.createElement)("div",{className:e.className,style:r({},p.base,p[e.direction],e.replaceStyles||{}),onMouseDown:function(t){e.onResizeStart(t,e.direction)},onTouchStart:function(t){e.onResizeStart(t,e.direction)}},e.children)},u={userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none"},h={userSelect:"auto",MozUserSelect:"auto",WebkitUserSelect:"auto",MsUserSelect:"auto"},d=function(e,t,i){return Math.max(Math.min(e,i),t)},g=function(e,t){return Math.round(e/t)*t},f=function(e,t){return t.reduce(function(t,i){return Math.abs(i-e)<Math.abs(t-e)?i:t})},m=function(e,t){return e.substr(e.length-t.length,t.length)===t},b=function(e){return"auto"===e.toString()?e.toString():m(e.toString(),"px")?e.toString():m(e.toString(),"%")?e.toString():m(e.toString(),"vh")?e.toString():m(e.toString(),"vw")?e.toString():m(e.toString(),"vmax")?e.toString():m(e.toString(),"vmin")?e.toString():e+"px"},v=["style","className","grid","snap","bounds","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio"],w=function(e){function t(e){o(this,t);var i=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.state={isResizing:!1,resizeCursor:"auto",width:"undefined"===typeof(i.propsSize&&i.propsSize.width)?"auto":i.propsSize&&i.propsSize.width,height:"undefined"===typeof(i.propsSize&&i.propsSize.height)?"auto":i.propsSize&&i.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0}},i.updateExtendsProps(e),i.onResizeStart=i.onResizeStart.bind(i),i.onMouseMove=i.onMouseMove.bind(i),i.onMouseUp=i.onMouseUp.bind(i),"undefined"!==typeof window&&(window.addEventListener("mouseup",i.onMouseUp),window.addEventListener("mousemove",i.onMouseMove),window.addEventListener("mouseleave",i.onMouseUp),window.addEventListener("touchmove",i.onMouseMove),window.addEventListener("touchend",i.onMouseUp)),i}return a(t,e),s(t,[{key:"updateExtendsProps",value:function(e){this.extendsProps=Object.keys(e).reduce(function(t,i){return-1!==v.indexOf(i)?t:(t[i]=e[i],t)},{})}},{key:"getParentSize",value:function(){var e=this.base;if(!e)return{width:window.innerWidth,height:window.innerHeight};var t=!1,i=this.parentNode.style.flexWrap,n=e.style.minWidth;"wrap"!==i&&(t=!0,this.parentNode.style.flexWrap="wrap"),e.style.position="relative",e.style.minWidth="100%";var o={width:e.offsetWidth,height:e.offsetHeight};return e.style.position="absolute",t&&(this.parentNode.style.flexWrap=i),e.style.minWidth=n,o}},{key:"componentDidMount",value:function(){var e=this.size;this.setState({width:this.state.width||e.width,height:this.state.height||e.height});var t=this.parentNode;if(t instanceof HTMLElement&&!this.base){var i=document.createElement("div");i.style.width="100%",i.style.height="100%",i.style.position="absolute",i.style.transform="scale(0, 0)",i.style.left="0",i.style.flex="0",i.classList?i.classList.add("__resizable_base__"):i.className+="__resizable_base__",t.appendChild(i)}}},{key:"componentWillReceiveProps",value:function(e){this.updateExtendsProps(e)}},{key:"componentWillUnmount",value:function(){if("undefined"!==typeof window){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseleave",this.onMouseUp),window.removeEventListener("touchmove",this.onMouseMove),window.removeEventListener("touchend",this.onMouseUp);var e=this.parentNode,t=this.base;if(!t||!e)return;if(!(e instanceof HTMLElement)||!(t instanceof Node))return;e.removeChild(t)}}},{key:"calculateNewSize",value:function(e,t){var i=this.propsSize&&this.propsSize[t];return"auto"!==this.state[t]||this.state.original[t]!==e||"undefined"!==typeof i&&"auto"!==i?e:"auto"}},{key:"onResizeStart",value:function(e,t){var i=0,n=0;if(e.nativeEvent instanceof MouseEvent){if(i=e.nativeEvent.clientX,n=e.nativeEvent.clientY,3===e.nativeEvent.which)return}else e.nativeEvent instanceof TouchEvent&&(i=e.nativeEvent.touches[0].clientX,n=e.nativeEvent.touches[0].clientY);this.props.onResizeStart&&this.props.onResizeStart(e,t,this.resizable),this.props.size&&("undefined"!==typeof this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),"undefined"!==typeof this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.setState({original:{x:i,y:n,width:this.size.width,height:this.size.height},isResizing:!0,resizeCursor:window.getComputedStyle(e.target).cursor,direction:t})}},{key:"onMouseMove",value:function(e){if(this.state.isResizing){var t=e instanceof MouseEvent?e.clientX:e.touches[0].clientX,i=e instanceof MouseEvent?e.clientY:e.touches[0].clientY,n=this.state,o=n.direction,s=n.original,r=n.width,a=n.height,l=this.props,p=l.lockAspectRatio,c=l.lockAspectRatioExtraHeight,u=l.lockAspectRatioExtraWidth,h=this.props.scale||1,b=this.props,v=b.maxWidth,w=b.maxHeight,y=b.minWidth,z=b.minHeight,S=this.props.resizeRatio||1,x=this.getParentSize();if(v&&"string"===typeof v&&m(v,"%")){var k=Number(v.replace("%",""))/100;v=x.width*k}if(w&&"string"===typeof w&&m(w,"%")){var E=Number(w.replace("%",""))/100;w=x.height*E}if(y&&"string"===typeof y&&m(y,"%")){var C=Number(y.replace("%",""))/100;y=x.width*C}if(z&&"string"===typeof z&&m(z,"%")){var _=Number(z.replace("%",""))/100;z=x.height*_}v="undefined"===typeof v?void 0:Number(v),w="undefined"===typeof w?void 0:Number(w),y="undefined"===typeof y?void 0:Number(y),z="undefined"===typeof z?void 0:Number(z);var R="number"===typeof p?p:s.width/s.height,N=s.width,M=s.height;if(/right/i.test(o)&&(N=s.width+(t-s.x)*S/h,p&&(M=(N-u)/R+c)),/left/i.test(o)&&(N=s.width-(t-s.x)*S/h,p&&(M=(N-u)/R+c)),/bottom/i.test(o)&&(M=s.height+(i-s.y)*S/h,p&&(N=(M-c)*R+u)),/top/i.test(o)&&(M=s.height-(i-s.y)*S/h,p&&(N=(M-c)*R+u)),"parent"===this.props.bounds){var O=this.parentNode;if(O instanceof HTMLElement){var B=O.getBoundingClientRect(),T=B.left,W=B.top,j=this.resizable.getBoundingClientRect(),L=j.left,H=j.top,I=O.offsetWidth+(T-L),P=O.offsetHeight+(W-H);v=v&&v<I?v:I,w=w&&w<P?w:P}}else if("window"===this.props.bounds){if("undefined"!==typeof window){var A=this.resizable.getBoundingClientRect(),U=A.left,D=A.top,X=window.innerWidth-U,Y=window.innerHeight-D;v=v&&v<X?v:X,w=w&&w<Y?w:Y}}else if(this.props.bounds instanceof HTMLElement){var F=this.props.bounds.getBoundingClientRect(),q=F.left,G=F.top,J=this.resizable.getBoundingClientRect(),K=J.left,Q=J.top;if(!(this.props.bounds instanceof HTMLElement))return;var V=this.props.bounds.offsetWidth+(q-K),Z=this.props.bounds.offsetHeight+(G-Q);v=v&&v<V?v:V,w=w&&w<Z?w:Z}var $="undefined"===typeof y?10:y,ee="undefined"===typeof v||v<0?N:v,te="undefined"===typeof z?10:z,ie="undefined"===typeof w||w<0?M:w;if(p){var ne=(te-c)*R+u,oe=(ie-c)*R+u,se=($-u)/R+c,re=(ee-u)/R+c,ae=Math.max($,ne),le=Math.min(ee,oe),pe=Math.max(te,se),ce=Math.min(ie,re);N=d(N,ae,le),M=d(M,pe,ce)}else N=d(N,$,ee),M=d(M,te,ie);this.props.grid&&(N=g(N,this.props.grid[0])),this.props.grid&&(M=g(M,this.props.grid[1])),this.props.snap&&this.props.snap.x&&(N=f(N,this.props.snap.x)),this.props.snap&&this.props.snap.y&&(M=f(M,this.props.snap.y));var ue={width:N-s.width,height:M-s.height};if(r&&"string"===typeof r&&m(r,"%")){N=N/x.width*100+"%"}if(a&&"string"===typeof a&&m(a,"%")){M=M/x.height*100+"%"}this.setState({width:this.calculateNewSize(N,"width"),height:this.calculateNewSize(M,"height")}),this.props.onResize&&this.props.onResize(e,o,this.resizable,ue)}}},{key:"onMouseUp",value:function(e){var t=this.state,i=t.isResizing,n=t.direction,o=t.original;if(i){var s={width:this.size.width-o.width,height:this.size.height-o.height};this.props.onResizeStop&&this.props.onResizeStop(e,n,this.resizable,s),this.props.size&&this.setState(this.props.size),this.setState({isResizing:!1,resizeCursor:"auto"})}}},{key:"updateSize",value:function(e){this.setState({width:e.width,height:e.height})}},{key:"renderResizer",value:function(){var e=this,t=this.props,i=t.enable,o=t.handleStyles,s=t.handleClasses,r=t.handleWrapperStyle,a=t.handleWrapperClass,l=t.handleComponent;if(!i)return null;var p=Object.keys(i).map(function(t){return!1!==i[t]?Object(n.createElement)(c,{key:t,direction:t,onResizeStart:e.onResizeStart,replaceStyles:o&&o[t],className:s&&s[t]},l&&l[t]?Object(n.createElement)(l[t]):null):null});return Object(n.createElement)("span",{className:a,style:r},p)}},{key:"render",value:function(){var e=this,t=this.state.isResizing?u:h;return Object(n.createElement)("div",r({ref:function(t){t&&(e.resizable=t)},style:r({position:"relative"},t,this.props.style,this.sizeStyle,{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box"}),className:this.props.className},this.extendsProps),this.state.isResizing&&Object(n.createElement)("div",{style:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:""+(this.state.resizeCursor||"auto"),opacity:"0",position:"fixed",zIndex:"9999",top:"0",left:"0",bottom:"0",right:"0"}}),this.props.children,this.renderResizer())}},{key:"parentNode",get:function(){return this.resizable.parentNode}},{key:"propsSize",get:function(){return this.props.size||this.props.defaultSize}},{key:"base",get:function(){var e=this.parentNode;if(e)for(var t=[].slice.call(e.children),i=0;i<t.length;i+=1){var n=t[i];if(n instanceof HTMLElement&&n.classList.contains("__resizable_base__"))return n}}},{key:"size",get:function(){var e=0,t=0;if("undefined"!==typeof window){var i=this.resizable.offsetWidth,n=this.resizable.offsetHeight,o=this.resizable.style.position;"relative"!==o&&(this.resizable.style.position="relative"),e="auto"!==this.resizable.style.width?this.resizable.offsetWidth:i,t="auto"!==this.resizable.style.height?this.resizable.offsetHeight:n,this.resizable.style.position=o}return{width:e,height:t}}},{key:"sizeStyle",get:function(){var e=this,t=this.props.size,i=function(t){if("undefined"===typeof e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&m(e.propsSize[t].toString(),"%")){if(m(e.state[t].toString(),"%"))return e.state[t].toString();var i=e.getParentSize();return Number(e.state[t].toString().replace("px",""))/i[t]*100+"%"}return b(e.state[t])};return{width:t&&"undefined"!==typeof t.width&&!this.state.isResizing?b(t.width):i("width"),height:t&&"undefined"!==typeof t.height&&!this.state.isResizing?b(t.height):i("height")}}}]),t}(n.Component);w.defaultProps={onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1},t.a=w},function(e,t){e.exports=React},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o=i(0),s=i.n(o),r=i(1),a=wp.editor,l=a.InnerBlocks,p=a.getColorClassName;t.a=function(e){var t=e.attributes,i=e.className,o=t.tagName,a=t.backgroundColor,c=t.customTextColor,u=t.customBackgroundColor,h=t.spacingBottom,d=t.spacingTop,g=t.bgImage,f=t.bgOptions,m=t.enableSpacing,b=p("background-color",a),v=s()(n({className:i},b,b)),w={backgroundColor:b?void 0:u,color:c||void 0,paddingBottom:m&&h?h:void 0,paddingTop:m&&d?d:void 0};return wp.element.createElement(r.a,{tagName:o,className:v||void 0,style:w},wp.element.createElement("div",{className:"container"},!!g&&wp.element.createElement("div",{className:s()("section-bg",{bg__repeated:f.repeat,bg__stretched:f.stretch||f.fixed,bg__fixed:f.fixed}),style:{backgroundImage:g?"url("+g.image.url+")":void 0,opacity:f.opacity}}),wp.element.createElement(l.Content,null)))}},function(e,t,i){"use strict";var n=i(12),o=i(2),s=i(13);i.n(s);t.a=[{attributes:Object(s.omit)(o.a,["tagName","enableSpacing","customTextColor"]),migrate:function(e,t){return[Object.assign({},e,{tagName:"section",enableSpacing:!0}),t]},save:n.a}]},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o=i(0),s=i.n(o),r=wp.editor,a=r.InnerBlocks,l=r.getColorClassName;t.a=function(e){var t=e.attributes,i=e.className,o=t.backgroundColor,r=t.customTextColor,p=t.customBackgroundColor,c=t.spacingBottom,u=t.spacingTop,h=t.bgImage,d=t.bgOptions,g=l("background-color",o),f=s()(n({className:i},g,g)),m={backgroundColor:g?void 0:p,color:r||void 0,paddingBottom:c||void 0,paddingTop:u||void 0};return wp.element.createElement("section",{className:f||void 0,style:m},!!h&&wp.element.createElement("div",{className:s()("section-bg",{bg__repeated:d.repeat,bg__stretched:d.stretch||d.fixed,bg__fixed:d.fixed}),style:{backgroundImage:h?"url("+h.image.url+")":void 0,opacity:d.opacity}}),wp.element.createElement(a.Content,null))}},function(e,t){e.exports=lodash}]);