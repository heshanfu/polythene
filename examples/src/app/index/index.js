"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneIconIcon=require("polythene/icon/icon");var _polytheneIconIcon2=_interopRequireDefault(_polytheneIconIcon);var _polytheneListList=require("polythene/list/list");var _polytheneListList2=_interopRequireDefault(_polytheneListList);var _polytheneListTileListTile=require("polythene/list-tile/list-tile");var _polytheneListTileListTile2=_interopRequireDefault(_polytheneListTileListTile);var _polytheneHeaderPanelHeaderPanel=require("polythene/header-panel/header-panel");var _polytheneHeaderPanelHeaderPanel2=_interopRequireDefault(_polytheneHeaderPanelHeaderPanel);var _appAppNav=require("app/app/nav");var _appAppNav2=_interopRequireDefault(_appAppNav);var _appAppGithub=require("app/app/github");var _appAppGithub2=_interopRequireDefault(_appAppGithub);require("polythene-theme/theme");require("app/app/app.css!");require("./index.css!");var links=[{label:"Combined components",links:[{url:"header-panel.html",config:null,name:"Header Panel"},{url:"infinite.html",config:null,name:"Header Panel with infinite scroll"},{url:"/toolbar","import":"app/toolbar/toolbar",name:"Toolbar"},{url:"/list","import":"app/list/list",name:"List"},{url:"/dialog","import":"app/dialog/dialog",name:"Dialog"}]},{label:"Components",links:[{url:"/card","import":"app/card/card",name:"Card"},{url:"/tabs","import":"app/tabs/tabs",name:"Tabs"},{url:"/button","import":"app/button/button",name:"Button"},{url:"/icon-button","import":"app/icon-button/icon-button",name:"Icon Button"},{url:"/fab","import":"app/fab/fab",name:"Floating Action Button"},{url:"/item","import":"app/item/item",name:"Item"},{url:"/list-tile","import":"app/list-tile/list-tile",name:"List Tile"}]},{label:"Elementary components",links:[{url:"/svg","import":"app/svg/svg",name:"SVG"},{url:"/icon","import":"app/icon/icon",name:"Icon"},{url:"/ripple","import":"app/ripple/ripple",name:"Ripple"},{url:"/shadow","import":"app/shadow/shadow",name:"Shadow"},{url:"/element",name:"Element","import":"app/element/element",hidden:true}]}];var linkMap={};_lodash2["default"].forEach(_lodash2["default"].flatten(_lodash2["default"].pluck(links,"links")),function(link){linkMap[link.url]=link});var item=function item(link){return _mithril2["default"].component(_polytheneListTileListTile2["default"],{title:link.name,icon:{type:"medium","class":"index-cirle-icon",svg:{name:"arrow-right",iconSet:"mdi"}},url:{href:link.url,config:link.config!==undefined?link.config:_mithril2["default"].route}})};var content={view:function view(){var minScale=22/32;var onHeaderTransform=function onHeaderTransform(e){var titleStyle=document.querySelector(".title").style;var middle=e.height-e.condensedHeight;var scale=Math.max(minScale,(middle-e.y)/(middle/(1-minScale))+minScale);titleStyle.transform=titleStyle.webkitTransform="scale("+scale+") translateZ(0)"};return(0,_mithril2["default"])(".demo-content",_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],{"class":"app-header index-header",mode:"waterfall-tall",keepCondensedHeader:true,header:{toolbar:{bottomBar:(0,_mithril2["default"])(".indent.title",[_mithril2["default"].component(_polytheneIconIcon2["default"],{svg:{src:"app/images/recycle.svg"},"class":"logo"}),"Polythene Examples"])}},content:[(0,_mithril2["default"])(".index",(0,_mithril2["default"])(".index-list",links.map(function(linkGroup){return _mithril2["default"].component(_polytheneListList2["default"],{header:{title:linkGroup.label,indent:true},tiles:linkGroup.links.map(function(link){return link.hidden?null:item(link)})})}))),_appAppGithub2["default"]],transform:onHeaderTransform}))}};window.dialog=null;var app={};app.controller=function(){var module=_mithril2["default"].prop();var loading=_mithril2["default"].prop(false);var link=linkMap[_mithril2["default"].route()];if(link){var importPath=link["import"];if(importPath){loading(true);System["import"](importPath).then(function(imported){loading(false);module(imported);_mithril2["default"].redraw()})}}return{module:module,loading:loading}};app.view=function(ctrl){if(ctrl.loading()){return{subtree:"retain"}}var module=ctrl.module();if(module){var _name=linkMap[_mithril2["default"].route()].name;return[window.dialog?window.dialog.call():null,(0,_appAppNav2["default"])(_name,[(0,_mithril2["default"])(".demo-content",_mithril2["default"].component(module)),_appAppGithub2["default"]])]}else{return _mithril2["default"].component(content)}};_mithril2["default"].route.mode="hash";_mithril2["default"].route(document.body,"/",{"/:any...":app});