(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{JjdP:function(e,n,t){"use strict";t.r(n),n["default"]={}},Zs1V:function(e){e.exports=JSON.parse("{}")},"uz+c":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),s=t.n(a),o=t("dEAq"),l=t("ZpkN");t("JjdP");n["default"]=e=>(s.a.useEffect((()=>{null!==e&&void 0!==e&&e.location.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"markdown"},s.a.createElement("h1",{id:"sql\u4f20\u53c2"},s.a.createElement(o["AnchorLink"],{to:"#sql\u4f20\u53c2","aria-hidden":"true",tabIndex:-1},s.a.createElement("span",{className:"icon icon-link"})),"SQL\u4f20\u53c2"),s.a.createElement("h2",{id:"\u67e5\u8be2---select"},s.a.createElement(o["AnchorLink"],{to:"#\u67e5\u8be2---select","aria-hidden":"true",tabIndex:-1},s.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u8be2 - ",s.a.createElement("code",null,"<select>")),s.a.createElement(l["a"],{code:'<select id="selectById" parameterType="Integer" resultType="com.imooc.mybatis.entity.Goods">\n\tselect * from t_goods where goods_id = #{value}\n</select>',lang:"xml"}),s.a.createElement("p",null,"\u4f7f\u7528"),s.a.createElement(l["a"],{code:'public void testSelectById() throws Exception {\n  SqlSession session = null;\n  try {\n    session = MyBatisUtils.openSession();\n    Goods goods = session.selectOne("goods.selectById", 1602);\n    System.out.println(goods.getTitle());\n  } catch (Exception e) {\n    throw e;\n  } finally {\n    MyBatisUtils.closeSession(session);\n  }\n}',lang:"java"}),s.a.createElement("h2",{id:"\u67e5\u8be2\u591a\u4e2a\u6570\u503c"},s.a.createElement(o["AnchorLink"],{to:"#\u67e5\u8be2\u591a\u4e2a\u6570\u503c","aria-hidden":"true",tabIndex:-1},s.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u8be2\u591a\u4e2a\u6570\u503c"),s.a.createElement(l["a"],{code:'<select id="selectByPriceRange" parameterType="java.util.Map" resultType="com.imooc.mybatis.entity.Goods">\n\tselect * from t_goods \n  where \n  \tcurrent_price between #{min} and #{max}\n  order by current_price\n  limit 0, #{limit}\n</select>',lang:"xml"}),s.a.createElement("p",null,"\u4f7f\u7528"),s.a.createElement(l["a"],{code:'public void testSelectById() throws Exception {\n  SqlSession session = null;\n  try {\n    session = MyBatisUtils.openSession();\n    Map param = new HashMap();\n    param.put("min", 100);\n    param.put("max", 500);\n    param.put("limit", 10);\n    List<Goods> list = session.selectList("goods.selectByPriceRange", param);\n\t\tfor(Goods g:list) {\n      System.out.println(g.getTitle() + ":" + g.getCurrentPrice());\n    }\n  } catch (Exception e) {\n    throw e;\n  } finally {\n    MyBatisUtils.closeSession(session);\n  }\n}',lang:"java"}))))}}]);