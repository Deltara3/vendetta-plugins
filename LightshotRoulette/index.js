(function(o,u){"use strict";var i;(function(e){e[e.SUB_COMMAND=1]="SUB_COMMAND",e[e.SUB_COMMAND_GROUP=2]="SUB_COMMAND_GROUP",e[e.STRING=3]="STRING",e[e.INTEGER=4]="INTEGER",e[e.BOOLEAN=5]="BOOLEAN",e[e.USER6=6]="USER6",e[e.CHANNEL=7]="CHANNEL",e[e.ROLE=8]="ROLE",e[e.MENTIONABLE=9]="MENTIONABLE",e[e.NUMBER=10]="NUMBER",e[e.ATTACHMENT=11]="ATTACHMENT"})(i||(i={}));let a=[];function s(){var e="https://prnt.sc/",n="abcdefghijklmnoprstuxwyz0123456789";for(let t=0;t<6;t++)e=e+n.charAt(Math.floor(Math.random()*n.length));return e}function c(e){var n="";for(let t=0;t<e;t++)n=n+`${s()}
`;return n}var N={onLoad:function(){a=u.registerCommand({name:"lightette",displayName:"lightette",description:"Try your luck to see if you can find something interesting",displayDescription:"Try your luck to see if you can find something interesting",options:[{name:"count",displayName:"count",description:"Note: Discord doesn't embed more than 5 URLs",displayDescription:"Note: Discord doesn't embed more than 5 URLs",required:!1,type:i.INTEGER}],applicationId:-1,inputType:1,type:1,execute:function(e,n){var t=1;return e[0]!=null&&(t=e[0].value),{content:c(t)}}})},onUnload:function(){a()}};return o.default=N,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta.commands);
