function _0x4094(_0x2c561b,_0x3196b2){const _0x1039fa=_0x1ef5();return _0x4094=function(_0x502bef,_0x102f59){_0x502bef=_0x502bef-0x17b;let _0x1ef54c=_0x1039fa[_0x502bef];return _0x1ef54c;},_0x4094(_0x2c561b,_0x3196b2);}function _0x1ef5(){const _0x45c82d=['toString','376eBmgdo','uuid','forEach','disconnected','server','24770mNuFIf','connected','1436470xukLcf','exports','(((.+)+)+)+$','find','11662iDgSkn','334224huziNX','3179yXTwSJ','6628DjeOrI','9CMVSFD','2649609pDVwHZ','search','58814DnBFWf','555vKJQaR','starting','filter','apply'];_0x1ef5=function(){return _0x45c82d;};return _0x1ef5();}const _0x1d1c22=_0x4094;(function(_0x33d395,_0x2ac99){const _0x69aaae=_0x4094,_0x2a0522=_0x33d395();while(!![]){try{const _0x29e280=-parseInt(_0x69aaae(0x181))/0x1*(parseInt(_0x69aaae(0x184))/0x2)+-parseInt(_0x69aaae(0x185))/0x3*(-parseInt(_0x69aaae(0x180))/0x4)+-parseInt(_0x69aaae(0x191))/0x5+parseInt(_0x69aaae(0x17e))/0x6+-parseInt(_0x69aaae(0x17d))/0x7*(-parseInt(_0x69aaae(0x18a))/0x8)+-parseInt(_0x69aaae(0x182))/0x9+-parseInt(_0x69aaae(0x18f))/0xa*(-parseInt(_0x69aaae(0x17f))/0xb);if(_0x29e280===_0x2ac99)break;else _0x2a0522['push'](_0x2a0522['shift']());}catch(_0x38c095){_0x2a0522['push'](_0x2a0522['shift']());}}}(_0x1ef5,0x4bb1e));const _0x102f59=function(){let _0x298cd8=!![];return function(_0x5b72b0,_0x6c6fad){const _0x175309=_0x298cd8?function(){const _0x32a88c=_0x4094;if(_0x6c6fad){const _0x1724ed=_0x6c6fad[_0x32a88c(0x188)](_0x5b72b0,arguments);return _0x6c6fad=null,_0x1724ed;}}:function(){};return _0x298cd8=![],_0x175309;};}(),_0x502bef=_0x102f59(this,function(){const _0x2de6c1=_0x4094;return _0x502bef[_0x2de6c1(0x189)]()[_0x2de6c1(0x183)]('(((.+)+)+)+$')[_0x2de6c1(0x189)]()['constructor'](_0x502bef)[_0x2de6c1(0x183)](_0x2de6c1(0x17b));});_0x502bef();const clients=[],addClient=(_0x500119,_0x39657f,_0x976e8e)=>{const _0x5e2d0a=_0x4094;let _0xcb132c;const _0x21573f=existsClient(_0x39657f,_0x976e8e);return _0x21573f?_0xcb132c=updateClient(_0x21573f['id'],{'id':_0x500119,'server':_0x5e2d0a(0x190)}):(_0xcb132c={'id':_0x500119,'uuid':_0x39657f,'bot':_0x976e8e,'server':_0x5e2d0a(0x186)},clients['push'](_0xcb132c)),_0xcb132c;},updateClient=(_0x3b211f,_0x58ce53)=>{let _0x359d8e=clients['findIndex'](_0x33b8d9=>_0x33b8d9['id']==_0x3b211f);return _0x359d8e!=-0x1&&(clients[_0x359d8e]={...clients[_0x359d8e],..._0x58ce53}),clients[_0x359d8e];},existsClient=(_0x4be0e1,_0x3310a5)=>{const _0x39d7ec=_0x4094;let _0x3c1b25=![];return clients[_0x39d7ec(0x18c)](_0x3b14ff=>{const _0x5ac6b8=_0x39d7ec;_0x3b14ff[_0x5ac6b8(0x18b)]===_0x4be0e1&&_0x3b14ff['bot']===_0x3310a5&&(_0x3c1b25=_0x3b14ff);}),_0x3c1b25;},removeClient=_0x10f5f7=>{const _0x2f97bc=_0x4094;let _0x1d9251=clients['find'](_0x3c4edb=>_0x3c4edb['id']===_0x10f5f7);if(_0x1d9251)return _0x1d9251[_0x2f97bc(0x18e)]=_0x2f97bc(0x18d),clients;},getClient=_0x4d92f0=>{const _0x197e50=_0x4094;return clients[_0x197e50(0x17c)](_0x4b0870=>_0x4b0870['id']===_0x4d92f0&&_0x4b0870[_0x197e50(0x18e)]!==_0x197e50(0x18d));},getAllClients=(_0x58bbfd=![])=>{const _0x4adb3d=_0x4094;if(_0x58bbfd)return clients;else return clients[_0x4adb3d(0x187)](_0x1db1a1=>_0x1db1a1[_0x4adb3d(0x18e)]!==_0x4adb3d(0x18d));},getClientsWithBotID=_0x50b3fb=>{const _0x3625c4=_0x4094;return clients[_0x3625c4(0x187)](_0x269cbc=>_0x269cbc['bot']===_0x50b3fb&&_0x269cbc[_0x3625c4(0x18e)]!==_0x3625c4(0x18d));},getClientsWithUuid=_0x6cb84f=>{const _0x1a9228=_0x4094;return clients['filter'](_0x26eb27=>_0x26eb27[_0x1a9228(0x18b)]===_0x6cb84f&&_0x26eb27[_0x1a9228(0x18e)]!==_0x1a9228(0x18d));};module[_0x1d1c22(0x192)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};