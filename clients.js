const _0x2f2ca1=_0x25b2;(function(_0x1d421a,_0x402131){const _0x304842=_0x25b2,_0x4a6e2d=_0x1d421a();while(!![]){try{const _0x4c08e7=-parseInt(_0x304842(0xd6))/0x1+-parseInt(_0x304842(0xce))/0x2+-parseInt(_0x304842(0xda))/0x3+parseInt(_0x304842(0xd0))/0x4+-parseInt(_0x304842(0xd5))/0x5*(-parseInt(_0x304842(0xc4))/0x6)+-parseInt(_0x304842(0xcd))/0x7*(parseInt(_0x304842(0xd8))/0x8)+parseInt(_0x304842(0xd2))/0x9;if(_0x4c08e7===_0x402131)break;else _0x4a6e2d['push'](_0x4a6e2d['shift']());}catch(_0x4b44e1){_0x4a6e2d['push'](_0x4a6e2d['shift']());}}}(_0x2cde,0x9ed36));const _0x1168c6=function(){let _0xe851bd=!![];return function(_0x24237c,_0x5db1c4){const _0x248c1a=_0xe851bd?function(){if(_0x5db1c4){const _0x27d539=_0x5db1c4['apply'](_0x24237c,arguments);return _0x5db1c4=null,_0x27d539;}}:function(){};return _0xe851bd=![],_0x248c1a;};}(),_0x228411=_0x1168c6(this,function(){const _0xacd7ca=_0x25b2;return _0x228411[_0xacd7ca(0xc5)]()[_0xacd7ca(0xc9)](_0xacd7ca(0xd1))[_0xacd7ca(0xc5)]()[_0xacd7ca(0xca)](_0x228411)[_0xacd7ca(0xc9)]('(((.+)+)+)+$');});function _0x25b2(_0x46f6e5,_0x1d5ab9){const _0x53ca37=_0x2cde();return _0x25b2=function(_0x228411,_0x1168c6){_0x228411=_0x228411-0xc3;let _0x2cde5d=_0x53ca37[_0x228411];return _0x2cde5d;},_0x25b2(_0x46f6e5,_0x1d5ab9);}function _0x2cde(){const _0xf2919c=['exports','40DngZcN','push','3581346AijHnm','bot','filter','12kdYyYp','toString','forEach','find','server','search','constructor','findIndex','disconnected','632282QBnrxr','1612392jKqRNf','uuid','3689600beTBMi','(((.+)+)+)+$','17447094VNyrDK','starting','connected','1913145HCyIZV','524066HMWyse'];_0x2cde=function(){return _0xf2919c;};return _0x2cde();}_0x228411();const clients=[],addClient=(_0x360edf,_0x48d2f4,_0x2851ca)=>{const _0x1d6d69=_0x25b2;let _0x20220b;const _0x5a025b=existsClient(_0x48d2f4,_0x2851ca);return _0x5a025b?_0x20220b=updateClient(_0x5a025b['id'],{'id':_0x360edf,'server':_0x1d6d69(0xd4)}):(_0x20220b={'id':_0x360edf,'uuid':_0x48d2f4,'bot':_0x2851ca,'server':_0x1d6d69(0xd3)},clients[_0x1d6d69(0xd9)](_0x20220b)),_0x20220b;},updateClient=(_0x5997d,_0x1917dd)=>{const _0x30e1cd=_0x25b2;let _0x5a86e5=clients[_0x30e1cd(0xcb)](_0x5677fd=>_0x5677fd['id']==_0x5997d);return _0x5a86e5!=-0x1&&(clients[_0x5a86e5]={...clients[_0x5a86e5],..._0x1917dd}),clients[_0x5a86e5];},existsClient=(_0x117ec8,_0x31f3af)=>{const _0x2a56e0=_0x25b2;let _0x67ae25=![];return clients[_0x2a56e0(0xc6)](_0x48f7ba=>{const _0x4aba87=_0x2a56e0;_0x48f7ba[_0x4aba87(0xcf)]===_0x117ec8&&_0x48f7ba[_0x4aba87(0xdb)]===_0x31f3af&&(_0x67ae25=_0x48f7ba);}),_0x67ae25;},removeClient=_0x20b4a3=>{const _0x1c4949=_0x25b2;let _0x45f862=clients[_0x1c4949(0xc7)](_0x3033b3=>_0x3033b3['id']===_0x20b4a3);if(_0x45f862)return _0x45f862[_0x1c4949(0xc8)]=_0x1c4949(0xcc),clients;},getClient=_0x468652=>{return clients['find'](_0x55503f=>_0x55503f['id']===_0x468652&&_0x55503f['server']!=='disconnected');},getAllClients=(_0x31db35=![])=>{const _0x462295=_0x25b2;if(_0x31db35)return clients;else return clients[_0x462295(0xc3)](_0x58744c=>_0x58744c[_0x462295(0xc8)]!==_0x462295(0xcc));},getClientsWithBotID=_0xdd1a1a=>{const _0x431b45=_0x25b2;return clients[_0x431b45(0xc3)](_0x47caca=>_0x47caca[_0x431b45(0xdb)]===_0xdd1a1a&&_0x47caca[_0x431b45(0xc8)]!==_0x431b45(0xcc));},getClientsWithUuid=_0x30cf10=>{const _0x5d0976=_0x25b2;return clients[_0x5d0976(0xc3)](_0x470d01=>_0x470d01[_0x5d0976(0xcf)]===_0x30cf10&&_0x470d01[_0x5d0976(0xc8)]!==_0x5d0976(0xcc));};module[_0x2f2ca1(0xd7)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};