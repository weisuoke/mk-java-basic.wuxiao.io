(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{JjdP:function(e,n,a){"use strict";a.r(n),n["default"]={}},MYZZ:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=a("dEAq"),r=a("ZpkN");a("JjdP");n["default"]=e=>(l.a.useEffect((()=>{null!==e&&void 0!==e&&e.location.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u5173\u4e8e\u63a5\u53e3\u5e94\u7528\u5e38\u89c1\u95ee\u9898"},l.a.createElement(c["AnchorLink"],{to:"#\u5173\u4e8e\u63a5\u53e3\u5e94\u7528\u5e38\u89c1\u95ee\u9898","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5173\u4e8e\u63a5\u53e3\u5e94\u7528\u5e38\u89c1\u95ee\u9898"),l.a.createElement("h2",{id:"\u5f53\u7236\u7c7b\u5b9e\u73b0\u63a5\u53e3\uff0c\u5b50\u7c7b\u7ee7\u627f\u7236\u7c7b\u540e\uff0c\u662f\u5426\u4e5f\u8981\u5b9e\u73b0\u63a5\u53e3\u91cc\u7684\u5168\u90e8\u65b9\u6cd5\u5462\uff1f"},l.a.createElement(c["AnchorLink"],{to:"#\u5f53\u7236\u7c7b\u5b9e\u73b0\u63a5\u53e3\uff0c\u5b50\u7c7b\u7ee7\u627f\u7236\u7c7b\u540e\uff0c\u662f\u5426\u4e5f\u8981\u5b9e\u73b0\u63a5\u53e3\u91cc\u7684\u5168\u90e8\u65b9\u6cd5\u5462\uff1f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5f53\u7236\u7c7b\u5b9e\u73b0\u63a5\u53e3\uff0c\u5b50\u7c7b\u7ee7\u627f\u7236\u7c7b\u540e\uff0c\u662f\u5426\u4e5f\u8981\u5b9e\u73b0\u63a5\u53e3\u91cc\u7684\u5168\u90e8\u65b9\u6cd5\u5462\uff1f"),l.a.createElement("p",null,"\u5b50\u7c7b\u662f\u5426\u9700\u8981\u5b9e\u73b0\u63a5\u53e3\u4e2d\u5168\u90e8\u65b9\u6cd5\uff0c\u9700\u8981\u7ed3\u5408\u4e0d\u540c\u60c5\u8fdb\u884c\u5206\u6790\uff0c\u4e0b\u9762\u5c06\u7ed3\u5408\u793a\u4f8b\u5206\u522b\u6f14\u793a\u3002"),l.a.createElement("p",null,"\u8b6c\u5982\uff1aA \u7c7b\u5b9e\u73b0\u4e86 B \u63a5\u53e3\uff0cC \u7c7b\u7ee7\u627f\u4e86 A \u7c7b"),l.a.createElement(r["a"],{code:"interface B {\n  void testOne();\n  void testTwo();\n}",lang:"java"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5982\u679c\u7236\u7c7b\u672a\u5b9e\u73b0\u63a5\u53e3\u4e2d\u5168\u90e8\u65b9\u6cd5\uff0c\u5219\u7236\u7c7b\u9700\u8981\u8bbe\u7f6e\u4e3a\u62bd\u8c61\u7c7b\uff0c\u5b50\u7c7b\u5982\u4e0d\u60f3\u7ee7\u7eed\u62bd\u8c61\uff0c\u5219\u9700\u8981\u5b9e\u73b0\u76f8\u5173\u672a\u5b9e\u73b0\u65b9\u6cd5\uff0c\u5426\u5219\u5c06\u7ee7\u7eed\u4e3a\u62bd\u8c61\u7c7b")),l.a.createElement(r["a"],{code:'abstract class A implements B {\n  // \u6b64\u65f6\u5e76\u672a\u5b9e\u73b0\u63a5\u53e3\u4e2d testTwo \u65b9\u6cd5\uff0c\u5219A\u7c7b\n  // \u9700\u8981\u8bbe\u7f6e\u4e3a\u62bd\u8c61\u7c7b\n  @Override\n  public void testOne() {\n    System.out.println("\u6211\u662f\u7236\u7c7b\u5b9e\u73b0\u7684testOne");\n  }\n}',lang:"java"}),l.a.createElement("img",{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2021-06-20-010530.png",alt:"image-20210620090525906",style:{zoom:"50%"}}),l.a.createElement(r["a"],{code:'class C exntends A {\n  // \u5f53\u5b8c\u6210\u63a5\u53e3\u4e2d testTwo \u65b9\u6cd5\u5b9e\u73b0\u540e\uff0c\u9519\u8bef\u63d0\u793a\u6d88\u5931\n  @Override\n  public void testTwo() {\n    System.out.println("\u6211\u662f\u5b50\u7c7b\u5b9e\u73b0\u7684testTwo");\n  }\n}',lang:"java"}),l.a.createElement(r["a"],{code:"abstract class C extends A {\n  // \u5f53\u8bbe\u7f6e\u4e3a\u62bd\u8c61\u7c7b\uff0c\u9519\u8bef\u63d0\u793a\u6d88\u5931\n}",lang:"java"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5982\u7236\u7c7b\u4e2d\u5df2\u7ecf\u5b9e\u73b0\u4e86\u63a5\u53e3\u4e2d\u6240\u6709\u65b9\u6cd5\uff0c\u5b50\u7c7b\u4e2d\u5982\u65e0\u7279\u6b8a\u9700\u8981\uff0c\u65e0\u9700\u91cd\u65b0\u5b9e\u73b0\u63a5\u53e3\u4e2d\u65b9\u6cd5")),l.a.createElement(r["a"],{code:'class A implements B {\n  @Override\n  public void testOne() {\n    System.out.println("\u6211\u662f\u7236\u7c7b\u5b9e\u73b0\u7684testOne");\n  }\n  \n  @Override\n  public void testTwo() {\n    System.out.println("\u6211\u662f\u7236\u7c7b\u5b9e\u73b0\u7684\u7684testTwo");\n  }\n}',lang:"java"}),l.a.createElement(r["a"],{code:"class C extends A {\n  // \u6b64\u65f6\u5e76\u65e0\u65b9\u6cd5\u672a\u5b9e\u73b0\u76f8\u5173\u9519\u8bef\u63d0\u793a\u3002\n}",lang:"java"}),l.a.createElement("h2",{id:"\u63a5\u53e3\u53ea\u80fd\u5728\u540c\u4e00\u4e2a\u5305\u91cc\u521b\u5efa\u5417\uff1f\u53ef\u4ee5\u5355\u72ec\u521b\u5efa\u4e00\u4e2a\u63a5\u53e3\u5305\u5417\uff1f\u5982\u679c\u5355\u72ec\u521b\u5efa\u4e86\u63a5\u53e3\u5305\uff0c\u600e\u4e48\u5b9e\u73b0\u8de8\u5305\u7684\u4f7f\u7528\u5462\uff1f"},l.a.createElement(c["AnchorLink"],{to:"#\u63a5\u53e3\u53ea\u80fd\u5728\u540c\u4e00\u4e2a\u5305\u91cc\u521b\u5efa\u5417\uff1f\u53ef\u4ee5\u5355\u72ec\u521b\u5efa\u4e00\u4e2a\u63a5\u53e3\u5305\u5417\uff1f\u5982\u679c\u5355\u72ec\u521b\u5efa\u4e86\u63a5\u53e3\u5305\uff0c\u600e\u4e48\u5b9e\u73b0\u8de8\u5305\u7684\u4f7f\u7528\u5462\uff1f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u63a5\u53e3\u53ea\u80fd\u5728\u540c\u4e00\u4e2a\u5305\u91cc\u521b\u5efa\u5417\uff1f\u53ef\u4ee5\u5355\u72ec\u521b\u5efa\u4e00\u4e2a\u63a5\u53e3\u5305\u5417\uff1f\u5982\u679c\u5355\u72ec\u521b\u5efa\u4e86\u63a5\u53e3\u5305\uff0c\u600e\u4e48\u5b9e\u73b0\u8de8\u5305\u7684\u4f7f\u7528\u5462\uff1f"),l.a.createElement("p",null,"\u63a5\u53e3\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u5305\u4e2d\u521b\u5efa\uff0c\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u8bbe\u8ba1\u9700\u8981\u5355\u72ec\u521b\u5efa\u63a5\u53e3\u5305"),l.a.createElement("p",null,"\u8de8\u5305\u8c03\u7528\u65f6\uff0c\u9700\u8bbe\u7f6e\u53ef\u8bbf\u53e3\u4e3a public\u8bbf\u53ef\u6743\u9650\uff0c\u6b64\u65f6\u53ea\u9700\u53c2\u7167\u4e4b\u524d\u7c7b\u8de8\u5305\u8c03\u7528\u7684\u65b9\u5f0f\uff0c",l.a.createElement("code",null,"import\u5305\u540d.*"),"\u6216\u8005 ",l.a.createElement("code",null,"import\u5305\u540d.\u63a5\u53e3\u540d"),"\uff1b"),l.a.createElement("p",null,"\u5373\u53ef\u3002"),l.a.createElement("h2",{id:"\u5982\u4e0b\u56fe\u6240\u793a"},l.a.createElement(c["AnchorLink"],{to:"#\u5982\u4e0b\u56fe\u6240\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4e0b\u56fe\u6240\u793a"),l.a.createElement(r["a"],{code:'interface IPhone {\n  void testOne();\n}\n\nclass Camera implements IPhone {\n  @Override\n  public void testOne() {\n    System.out.println("\u6211\u662f\u7236\u7c7b\u5b9e\u73b0\u7684testOne");\n  }\n  \n  public void add() {\n    System.out.println("\u6211\u662f\u7236\u7c7b\u5b9e\u73b0\u7684add");\n  }\n}\n\nclass Test {\n  public void test() {\n    IPhone ip2 = new Camera();\n  }\n}',lang:"java"}),l.a.createElement("p",null,"\u5176\u4e2d\uff0c"),l.a.createElement("p",null,l.a.createElement("code",null,"IPhone ip2 = new Camera()")),l.a.createElement("p",null,"Iphone, Camera \u662f IPhone\u5b9e\u73b0\u7c7b"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u4e3a\u4ec0\u4e48\u53ef\u4ee5\u8fd9\u4e48\u5199\uff1f"),l.a.createElement("li",null,"\u6b64\u65f6\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 camera \u72ec\u6301\u7684\u65b9\u6cd5\u4e48\uff1f")),l.a.createElement("p",null,'a. IPhone \u4f5c\u4e3a\u63a5\u53e3\uff0c\u4e0d\u80fd\u76f4\u63a5\u5b9e\u4f8b\u5316\u5bf9\u8c61\uff0c\u53ea\u80fd\u8bbe\u7f6e\u63a5\u53e3\u7684\u5f15\u7528\u6307\u5411\u5177\u4f53\u7684\u63a5\u53e3\u5b9e\u73b0\u7c7b\uff0c\u4e5f\u5c31\u662f\u4e0a\u9762\u4ee3\u7801\u793a\u4f8b\u4e2d\u770b\u5230\u7684\u90a3\u6837\u3002\u63a5\u53e3\u7684\u7075\u6d3b\u6027\u5c31\u5728\u4e8e\u201c\u89c4\u5b9a\u4e00\u4e2a\u7c7b\u5fc5\u987b\u505a\u4ec0\u4e48\uff0c\u800c\u4e0d\u7ba1\u4f60\u5982\u4f55\u505a"\u3002\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u63a5\u53e3\u7c7b\u578b\u7684\u5f15\u7528\u6765\u6307\u5411\u5b9e\u73b0\u63a5\u53e3\u7684\u7c7b\u7684\u5b9e\u4f8b\uff0c\u5f53\u8fd9\u4e2a\u5f15\u7528\u8c03\u7528\u65b9\u6cd5\u65f6\uff0c\u5b83\u4f1a\u6839\u636e\u5b9e\u9645\u5f15\u7528\u7684\u7c7b\u7684\u5b9e\u4f8b\u6765\u5224\u65ad\u5177\u4f53\u8c03\u7528\u54ea\u4e2a\u65b9\u6cd5\uff0c\u8fd9\u662f\u4e00\u79cd\u5178\u578b\u7684\u591a\u6001\u7684\u8868\u73b0\u3002'),l.a.createElement("p",null,"b. \u5f53\u4f7f\u7528\u63a5\u53e3\u5f15\u7528\u6307\u5411\u5b9e\u73b0\u7c7b\u65f6\uff0c\u4e0d\u80fd\u76f4\u63a5\u8c03\u7528\u5b9e\u73b0\u7c7b\u72ec\u6709\u7684\u65b9\u6cd5\uff0c\u9700\u8981\u8fdb\u884c\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u30aa\u53ef\u4ee5\u8c03\u7528\uff0c\u8b6c\u5982\u6d4b\u8bd5\u7c7b\u4e2d\u7684 test \u4ee3\u7801\u4fee\u6539\u4e3a"),l.a.createElement(r["a"],{code:"public void test() {\n  IPhone ip2 = new Camera();\n  ((Camera)ip2).add();\n}",lang:"java"}))))},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);