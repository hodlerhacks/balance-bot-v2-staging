(function(_0xbdd2cb,_0x31797a){const _0x23eedb=_0x4347,_0x3b7fbe=_0xbdd2cb();while(!![]){try{const _0x5f2314=parseInt(_0x23eedb(0x1a0))/0x1*(parseInt(_0x23eedb(0x198))/0x2)+-parseInt(_0x23eedb(0x19f))/0x3*(-parseInt(_0x23eedb(0x196))/0x4)+parseInt(_0x23eedb(0x195))/0x5+-parseInt(_0x23eedb(0x190))/0x6*(-parseInt(_0x23eedb(0x19d))/0x7)+parseInt(_0x23eedb(0x1a2))/0x8+-parseInt(_0x23eedb(0x199))/0x9+parseInt(_0x23eedb(0x192))/0xa*(-parseInt(_0x23eedb(0x1a4))/0xb);if(_0x5f2314===_0x31797a)break;else _0x3b7fbe['push'](_0x3b7fbe['shift']());}catch(_0x51f058){_0x3b7fbe['push'](_0x3b7fbe['shift']());}}}(_0x4226,0xe561a));function _0x4347(_0x1dd92b,_0x59dd8f){const _0x20210f=_0x4226();return _0x4347=function(_0x267ed2,_0x1d1776){_0x267ed2=_0x267ed2-0x18c;let _0x4226e3=_0x20210f[_0x267ed2];return _0x4226e3;},_0x4347(_0x1dd92b,_0x59dd8f);}const _0x1d1776=function(){let _0x3d5923=!![];return function(_0x15fa37,_0x4c7fbe){const _0x45ab31=_0x3d5923?function(){const _0x5cb56b=_0x4347;if(_0x4c7fbe){const _0xa10fff=_0x4c7fbe[_0x5cb56b(0x191)](_0x15fa37,arguments);return _0x4c7fbe=null,_0xa10fff;}}:function(){};return _0x3d5923=![],_0x45ab31;};}(),_0x267ed2=_0x1d1776(this,function(){const _0x30054a=_0x4347;return _0x267ed2[_0x30054a(0x19b)]()['search']('(((.+)+)+)+$')[_0x30054a(0x19b)]()[_0x30054a(0x18e)](_0x267ed2)[_0x30054a(0x19a)](_0x30054a(0x18c));});_0x267ed2();const clients=[],addClient=(_0x51682a,_0xd1b700,_0x175281)=>{const _0x172ca7=_0x4347;let _0x73145e;const _0x33c7a5=existsClient(_0xd1b700,_0x175281);return _0x33c7a5?_0x73145e=updateClient(_0x33c7a5['id'],{'id':_0x51682a,'server':_0x172ca7(0x1a3)}):(_0x73145e={'id':_0x51682a,'uuid':_0xd1b700,'bot':_0x175281,'server':'starting'},clients[_0x172ca7(0x19c)](_0x73145e)),_0x73145e;},updateClient=(_0x1d7a21,_0x1a6b21)=>{const _0x1e8b6c=_0x4347;let _0x391c4f=clients[_0x1e8b6c(0x19e)](_0x566369=>_0x566369['id']==_0x1d7a21);return _0x391c4f!=-0x1&&(clients[_0x391c4f]={...clients[_0x391c4f],..._0x1a6b21}),clients[_0x391c4f];},existsClient=(_0xf780c0,_0x3f5b65)=>{const _0x2d830b=_0x4347;let _0x3e4cbe=![];return clients[_0x2d830b(0x1a1)](_0x187de6=>{const _0x55ae33=_0x2d830b;_0x187de6[_0x55ae33(0x194)]===_0xf780c0&&_0x187de6[_0x55ae33(0x18d)]===_0x3f5b65&&(_0x3e4cbe=_0x187de6);}),_0x3e4cbe;},removeClient=_0x598d14=>{const _0xa33a6a=_0x4347;let _0x1260ba=clients['find'](_0x19fd02=>_0x19fd02['id']===_0x598d14);if(_0x1260ba)return _0x1260ba[_0xa33a6a(0x18f)]='disconnected',clients;},getClient=_0x2dc4cb=>{const _0x4f0239=_0x4347;return clients[_0x4f0239(0x197)](_0x10f98c=>_0x10f98c['id']===_0x2dc4cb&&_0x10f98c['server']!==_0x4f0239(0x1a5));},getAllClients=(_0x58a4be=![])=>{const _0x397004=_0x4347;if(_0x58a4be)return clients;else return clients[_0x397004(0x193)](_0x10bbab=>_0x10bbab['server']!==_0x397004(0x1a5));},getClientsWithBotID=_0x58eb11=>{const _0x7bedb1=_0x4347;return clients[_0x7bedb1(0x193)](_0x53a58d=>_0x53a58d['bot']===_0x58eb11&&_0x53a58d[_0x7bedb1(0x18f)]!=='disconnected');},getClientsWithUuid=_0x49b4c2=>{const _0x468bd0=_0x4347;return clients[_0x468bd0(0x193)](_0x147f10=>_0x147f10[_0x468bd0(0x194)]===_0x49b4c2&&_0x147f10[_0x468bd0(0x18f)]!=='disconnected');};function _0x4226(){const _0x485ca9=['14945843qrEhaM','disconnected','(((.+)+)+)+$','bot','constructor','server','51102ruCyNv','apply','10aJSTbZ','filter','uuid','7464865paXzee','24604RdSzFZ','find','10HvCMhg','11706381zMBrcs','search','toString','push','749HzDudv','findIndex','417icJjmF','67569xVOIgq','forEach','14736sKcGGE','connected'];_0x4226=function(){return _0x485ca9;};return _0x4226();}module['exports']={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};