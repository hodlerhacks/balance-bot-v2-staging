const _0x52634b=_0x2555;function _0x2555(_0x10557a,_0x287260){const _0x21c3d1=_0x15d2();return _0x2555=function(_0x588401,_0xe5ca0){_0x588401=_0x588401-0x1a2;let _0x15d253=_0x21c3d1[_0x588401];return _0x15d253;},_0x2555(_0x10557a,_0x287260);}(function(_0x5b506b,_0x159bcc){const _0x2db4cc=_0x2555,_0x26573b=_0x5b506b();while(!![]){try{const _0x500c15=parseInt(_0x2db4cc(0x1b4))/0x1*(parseInt(_0x2db4cc(0x1a8))/0x2)+parseInt(_0x2db4cc(0x1b7))/0x3+-parseInt(_0x2db4cc(0x1a5))/0x4*(-parseInt(_0x2db4cc(0x1af))/0x5)+-parseInt(_0x2db4cc(0x1ac))/0x6+-parseInt(_0x2db4cc(0x1a9))/0x7+parseInt(_0x2db4cc(0x1a2))/0x8+parseInt(_0x2db4cc(0x1a6))/0x9*(-parseInt(_0x2db4cc(0x1b6))/0xa);if(_0x500c15===_0x159bcc)break;else _0x26573b['push'](_0x26573b['shift']());}catch(_0x424e90){_0x26573b['push'](_0x26573b['shift']());}}}(_0x15d2,0x478a4));const _0xe5ca0=function(){let _0x282013=!![];return function(_0x361434,_0x58c418){const _0x2d7dfc=_0x282013?function(){const _0x46319c=_0x2555;if(_0x58c418){const _0x107ff0=_0x58c418[_0x46319c(0x1b0)](_0x361434,arguments);return _0x58c418=null,_0x107ff0;}}:function(){};return _0x282013=![],_0x2d7dfc;};}(),_0x588401=_0xe5ca0(this,function(){const _0x2397ce=_0x2555;return _0x588401['toString']()[_0x2397ce(0x1b5)](_0x2397ce(0x1a7))[_0x2397ce(0x1ad)]()['constructor'](_0x588401)[_0x2397ce(0x1b5)](_0x2397ce(0x1a7));});_0x588401();function _0x15d2(){const _0x3da55d=['toString','forEach','5gKtBnZ','apply','find','findIndex','filter','1bcHeBv','search','220760lhmEZg','1677807Aoouib','exports','starting','server','3996808ZqibNr','uuid','connected','1850876COnkfq','333ZQLWmJ','(((.+)+)+)+$','450748RSUvmc','892612XmkJXY','disconnected','bot','3057642xIRGbR'];_0x15d2=function(){return _0x3da55d;};return _0x15d2();}const clients=[],addClient=(_0x104f95,_0x268c5b,_0x18910e)=>{const _0x1e8dad=_0x2555;let _0x121ec6;const _0x328aa5=existsClient(_0x268c5b,_0x18910e);return _0x328aa5?_0x121ec6=updateClient(_0x328aa5['id'],{'id':_0x104f95,'server':_0x1e8dad(0x1a4)}):(_0x121ec6={'id':_0x104f95,'uuid':_0x268c5b,'bot':_0x18910e,'server':_0x1e8dad(0x1b9)},clients['push'](_0x121ec6)),_0x121ec6;},updateClient=(_0x5af795,_0x5eeb46)=>{const _0x2a77e5=_0x2555;let _0x51d43d=clients[_0x2a77e5(0x1b2)](_0x259b03=>_0x259b03['id']==_0x5af795);return _0x51d43d!=-0x1&&(clients[_0x51d43d]={...clients[_0x51d43d],..._0x5eeb46}),clients[_0x51d43d];},existsClient=(_0x2b06b7,_0x44d13c)=>{const _0x5e487e=_0x2555;let _0x4db951=![];return clients[_0x5e487e(0x1ae)](_0x17dd00=>{_0x17dd00['uuid']===_0x2b06b7&&_0x17dd00['bot']===_0x44d13c&&(_0x4db951=_0x17dd00);}),_0x4db951;},removeClient=_0x358954=>{const _0x2526e6=_0x2555;let _0xd62949=clients[_0x2526e6(0x1b1)](_0x2f76f2=>_0x2f76f2['id']===_0x358954);if(_0xd62949)return _0xd62949[_0x2526e6(0x1ba)]=_0x2526e6(0x1aa),clients;},getClient=_0x24b71a=>{const _0x4e096a=_0x2555;return clients[_0x4e096a(0x1b1)](_0x48562e=>_0x48562e['id']===_0x24b71a&&_0x48562e[_0x4e096a(0x1ba)]!==_0x4e096a(0x1aa));},getAllClients=(_0x16bb3b=![])=>{const _0x4a436e=_0x2555;if(_0x16bb3b)return clients;else return clients[_0x4a436e(0x1b3)](_0x467f59=>_0x467f59[_0x4a436e(0x1ba)]!==_0x4a436e(0x1aa));},getClientsWithBotID=_0x526c27=>{const _0x4382da=_0x2555;return clients['filter'](_0x42852a=>_0x42852a[_0x4382da(0x1ab)]===_0x526c27&&_0x42852a['server']!==_0x4382da(0x1aa));},getClientsWithUuid=_0x1b619a=>{const _0x15713f=_0x2555;return clients[_0x15713f(0x1b3)](_0x4a3b11=>_0x4a3b11[_0x15713f(0x1a3)]===_0x1b619a&&_0x4a3b11[_0x15713f(0x1ba)]!==_0x15713f(0x1aa));};module[_0x52634b(0x1b8)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};