"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneListList=require("polythene/list/list");var _polytheneListList2=_interopRequireDefault(_polytheneListList);var _polytheneListTileListTile=require("polythene/list-tile/list-tile");var _polytheneListTileListTile2=_interopRequireDefault(_polytheneListTileListTile);var _polytheneHeaderPanelHeaderPanel=require("polythene/header-panel/header-panel");var _polytheneHeaderPanelHeaderPanel2=_interopRequireDefault(_polytheneHeaderPanelHeaderPanel);var _polytheneIconButtonIconButton=require("polythene/icon-button/icon-button");var _polytheneIconButtonIconButton2=_interopRequireDefault(_polytheneIconButtonIconButton);var _kitchensink=require("./kitchensink");var _kitchensink2=_interopRequireDefault(_kitchensink);var _appAppNav=require("app/app/nav");var _appAppNav2=_interopRequireDefault(_appAppNav);var _appAppGithub=require("app/app/github");var _appAppGithub2=_interopRequireDefault(_appAppGithub);require("polythene-theme/theme");require("app/app/app.css!");require("./header-panel.css!");var NAME="Header Panel";var links=[{label:"Small header panels",links:[{url:"kitchensink",name:"Kitchen sink of small panels",sub:"waterfall transitions and toolbar components"}]},{label:"Page wide header panels",links:[{url:"demo1",name:"Condenses variant 1",sub:'mode "waterfall-tall"'},{url:"demo2",name:"Condenses variant 2",sub:'mode "waterfall-tall", tallClass "medium-tall"'},{url:"demo3",name:"Animated"},{url:"demo4",name:"No reveal"},{url:"demo5",name:"Fixed header"},{url:"demo6",name:"Keep condensed header"}]},{label:"Header background images",links:[{url:"background1",name:"Image background variant 1",sub:"No dissolve, still image"},{url:"background2",name:"Image background variant 2",sub:"Dissolve"},{url:"background3",name:"Image background variant 3",sub:"Keep condensed header"},{url:"background4",name:"Image background variant 4",sub:"Mixing images"}]}];var linkMap={};_lodash2["default"].forEach(_lodash2["default"].flatten(_lodash2["default"].pluck(links,"links")),function(link){linkMap[link.url]=link});var item=function item(link){return _mithril2["default"].component(_polytheneListTileListTile2["default"],{title:link.name,icon:{type:"medium","class":"index-cirle-icon",svg:link.icon?{src:link.icon}:{name:"arrow-right",iconSet:"mdi"}},url:{href:link.url,config:_mithril2["default"].route}})};var repeatText=function repeatText(text,count){var out="";while(count>0){out+=text;count--}return out};var template=['<div class="demo-content">',repeatText("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",16),"</div>"].join("");var createBottomBarTemplate=function createBottomBarTemplate(currentLink){var text="";if(currentLink.name){text+=currentLink.name}if(currentLink.sub){text+=" - ";text+=currentLink.sub}return _mithril2["default"].trust('<div class="bottom indent title">'+text+"</div>")};var btn=function btn(group,name,url){return _mithril2["default"].component(_polytheneIconButtonIconButton2["default"],{url:url?{href:url,config:null}:null,icon:{svg:{group:group,name:name}}})};var toolbarRow=function toolbarRow(title){return[btn("navigation","arrow-back","#"),(0,_mithril2["default"])("span.flex",title),btn("action","search")]};var index={};index.controller=function(){};index.view=function(){return(0,_appAppNav2["default"])(NAME,[(0,_mithril2["default"])("div",{"class":"index"},(0,_mithril2["default"])(".index-list",links.map(function(linkGroup){return _mithril2["default"].component(_polytheneListList2["default"],{header:{title:linkGroup.label,indent:true},tiles:linkGroup.links.map(function(link){return item(link)})})}))),_appAppGithub2["default"]],{urlConfig:null})};var kitchensink={};kitchensink.view=function(){var currentLink=linkMap[_mithril2["default"].route()];return(0,_mithril2["default"])("."+currentLink.url,_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],{tag:"div.fit","class":"dark-theme",mode:"waterfall-tall",tallClass:"medium-tall",condenses:true,keepCondensedHeader:true,header:{toolbar:{topBar:toolbarRow(""),bottomBar:createBottomBarTemplate(currentLink)}},content:[_kitchensink2["default"],_appAppGithub2["default"]]}))};var demo1={};demo1.view=function(){var panel=undefined,currentLink=undefined,onHeaderTransform=undefined,minScale=undefined;currentLink=linkMap[_mithril2["default"].route()];minScale=.65;onHeaderTransform=function(e){var titleStyle=document.querySelector(".title").style;var h=e.height-e.condensedHeight;var scale=Math.max(minScale,(h-e.y)/(h/(1-minScale))+minScale);titleStyle.transform=titleStyle.webkitTransform="scale("+scale+") translateZ(0)"};panel=_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],{tag:"div.fit","class":"dark-theme",mode:"waterfall-tall",condenses:true,header:{toolbar:{topBar:toolbarRow(""),bottomBar:createBottomBarTemplate(currentLink)}},content:[_mithril2["default"].trust(template),_appAppGithub2["default"]],transform:onHeaderTransform});return(0,_mithril2["default"])("."+currentLink.url,panel)};var demo2={};demo2.view=function(){var currentLink=linkMap[_mithril2["default"].route()];return(0,_mithril2["default"])("."+currentLink.url,_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],{tag:"div.fit","class":"dark-theme",mode:"waterfall-tall",tallClass:"medium-tall",condenses:true,header:{toolbar:{topBar:toolbarRow(""),bottomBar:createBottomBarTemplate(currentLink)}},content:[_mithril2["default"].trust(template),_appAppGithub2["default"]]}))};var demo3={};demo3.view=function(){var currentLink=linkMap[_mithril2["default"].route()];return(0,_mithril2["default"])("."+currentLink.url,_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],{tag:"div.fit","class":"dark-theme animate",mode:"waterfall-tall",animated:true,fixed:true,header:{toolbar:{topBar:toolbarRow(""),bottomBar:createBottomBarTemplate(currentLink)}},content:[_mithril2["default"].trust(template),_appAppGithub2["default"]]}))};var demo4={};demo4.view=function(){var currentLink=linkMap[_mithril2["default"].route()];return(0,_mithril2["default"])("."+currentLink.url,_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],{tag:"div.fit","class":"dark-theme noReveal",mode:"tall",condenses:true,noReveal:true,header:{toolbar:{topBar:toolbarRow(""),bottomBar:createBottomBarTemplate(currentLink)}},content:[_mithril2["default"].trust(template),_appAppGithub2["default"]]}))};var demo5={};demo5.view=function(){var currentLink=linkMap[_mithril2["default"].route()];return(0,_mithril2["default"])("."+currentLink.url,_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],{tag:"div.fit","class":"dark-theme",fixed:true,header:{toolbar:{topBar:toolbarRow(""),bottomBar:createBottomBarTemplate(currentLink)}},content:[_mithril2["default"].trust(template),_appAppGithub2["default"]]}))};var demo6={};demo6.view=function(){var currentLink=linkMap[_mithril2["default"].route()];return(0,_mithril2["default"])("."+currentLink.url,_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],{tag:"div.fit","class":"dark-theme keepCondensed",mode:"waterfall-tall",condenses:true,keepCondensedHeader:true,headerHeight:256,condensedHeaderHeight:140,header:{toolbar:{topBar:toolbarRow(""),bottomBar:createBottomBarTemplate(currentLink)}},content:[_mithril2["default"].trust(template),_appAppGithub2["default"]]}))};var background1={};background1.view=function(){var currentLink=linkMap[_mithril2["default"].route()];return(0,_mithril2["default"])("."+currentLink.url,_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],{tag:"div.fit","class":"dark-theme background1",mode:"waterfall-tall",condenses:true,noDissolve:true,noReveal:true,backgroundScrollSpeed:0,header:{toolbar:{topBar:toolbarRow(""),bottomBar:createBottomBarTemplate(currentLink)}},content:[_mithril2["default"].trust(template),_appAppGithub2["default"]]}))};var background2={};background2.view=function(){var currentLink=linkMap[_mithril2["default"].route()];return(0,_mithril2["default"])("."+currentLink.url,_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],{tag:"div.fit","class":"dark-theme background2",mode:"waterfall-tall",condenses:true,noReveal:true,header:{toolbar:{topBar:toolbarRow(""),bottomBar:createBottomBarTemplate(currentLink)}},content:[_mithril2["default"].trust(template),_appAppGithub2["default"]]}))};var background3={};background3.view=function(){var currentLink=linkMap[_mithril2["default"].route()];return(0,_mithril2["default"])("."+currentLink.url,_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],{tag:"div.fit","class":"dark-theme background3",mode:"waterfall-tall",condenses:true,keepCondensedHeader:true,headerHeight:256,condensedHeaderHeight:140,header:{toolbar:{topBar:toolbarRow(""),bottomBar:createBottomBarTemplate(currentLink)}},content:[_mithril2["default"].trust(template),_appAppGithub2["default"]]}))};var background4={};background4.view=function(){var currentLink=linkMap[_mithril2["default"].route()];return(0,_mithril2["default"])("."+currentLink.url,_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],{tag:"div.fit","class":"dark-theme background4",mode:"waterfall-tall",condenses:true,shadow:false,keepCondensedHeader:true,headerHeight:256,condensedHeaderHeight:140,header:{toolbar:{topBar:toolbarRow(""),bottomBar:createBottomBarTemplate(currentLink)}},content:[_mithril2["default"].trust(template),_appAppGithub2["default"]]}))};var routeMap={"/":index};_lodash2["default"].forEach(_lodash2["default"].flatten(_lodash2["default"].pluck(links,"links")),function(link){routeMap[link.url]=eval(link.url)});_mithril2["default"].route.mode="hash";_mithril2["default"].route(document.body,"/",routeMap);