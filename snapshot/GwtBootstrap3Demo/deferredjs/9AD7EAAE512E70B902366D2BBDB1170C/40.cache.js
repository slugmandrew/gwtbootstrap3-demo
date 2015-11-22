$wnd.GwtBootstrap3Demo.runAsyncCallback40("function cKc(){}\nfunction gKc(){}\nfunction iKc(){}\nfunction jKc(){jKc=kbb;fKc=new iKc}\nfunction Ipc(a){Jsb.call(this,a);Hpc(this)}\nfunction bKc(){$Db.call(this);YDb(this,dKc(new eKc))}\nfunction XJc(a,b,c){kDb();IDb.call(this,a,b,c,(bqc(),aqc))}\nfunction eKc(){this.a=(new gKc,jKc(),fKc);hKc(this.a)}\nfunction iOc(a){var b;if(!a.M){b=new bKc(new cKc);a.M=b}return a.M}\nfunction hOc(a){var b;if(!a.L){b=new XJc(LCb(nEb(a.a)),iOc(a),gOc(a));cDb((qEb(a.a),b),CEb(qEb(a.a)));a.L=b}return a.L}\nfunction hKc(a){if(!a.a){a.a=true;Vu((OA(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction dKc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new x_b;aVb(a,(b=new sXb(Zrd),aVb(b,(c=new j$b,c.a='Offline',i$b(c),c)),aVb(b,(d=new fWb,aVb(d,(e=new eYb((m8b(),j8b)),rfb((Qmb(),e.eb),'GPBYFDECM',true),Vpc(e.b,ayd),bVb(e,e.b,0),e)),aVb(d,new Ppc((j=new pKb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new idb(j.a)).a)),aVb(d,(f=new kUc,m_b(f,(k=new pKb,k.a+=byd,new idb(k.a)).a),rfb(f.eb,csd,true),f)),aVb(d,new Ppc((l=new pKb,l.a+=cyd,new idb(l.a)).a)),aVb(d,(g=new kUc,m_b(g,(m=new pKb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new idb(m.a)).a),rfb(g.eb,csd,true),g)),rfb(d.eb,'GPBYFDEBM',true),d)),aVb(b,(h=new w$b,aVb(h,(n=new L$b,aVb(n,(o=new eYb(i8b),Vpc(o.b,'What is Offline?'),bVb(o,o.b,0),o)),n)),aVb(h,(p=new y$b,aVb(p,new Ipc((q=new pKb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new idb(q.a)).a)),p)),aVb(h,new I$b),h)),aVb(b,(i=new w$b,aVb(i,(r=new L$b,aVb(r,(s=new eYb(i8b),Vpc(s.b,'How to configure?'),bVb(s,s.b,0),s)),r)),aVb(i,(t=new y$b,aVb(t,new Ppc((u=new pKb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new idb(u.a)).a)),aVb(t,(v=new kUc,m_b(v,(w=new pKb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new idb(w.a)).a),rfb(v.eb,csd,true),v)),aVb(t,new Ppc((A=new pKb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new idb(A.a)).a)),aVb(t,(B=new kUc,m_b(B,(C=new pKb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new idb(C.a)).a),rfb(B.eb,csd,true),B)),aVb(t,new Ppc((D=new pKb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new idb(D.a)).a)),aVb(t,(F=new kUc,m_b(F,(G=new pKb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new idb(G.a)).a),rfb(F.eb,csd,true),F)),t)),aVb(i,new I$b),i)),b));return a}\njbb(397,226,jqd,Ipc);jbb(917,48,Tod,XJc);var Y1=GIb(Mrd,'OfflinePresenter',917);jbb(1156,51,Uod,bKc);var b2=GIb(Mrd,'OfflineView',1156);jbb(1391,1,{},cKc);var a2=GIb(Mrd,'OfflineView_BinderImpl',1391);jbb(1392,1,{},eKc);var Z1=GIb(Mrd,'OfflineView_BinderImpl/Widgets',1392);jbb(1724,1,{},gKc);var fKc;var _1=GIb(Mrd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1724);jbb(1725,1,{},iKc);_.a=false;var $1=GIb(Mrd,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1725);jbb(841,1,hrd);_.Sb=function GOc(){UFb(this.b,hOc(this.a.a))};zmd(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")