const _0x5323da=_0x4095;(function(_0x27f33c,_0x3e8550){const _0xe9a9e9=_0x4095,_0x2ea964=_0x27f33c();while(!![]){try{const _0x3695de=parseInt(_0xe9a9e9(0x1d9))/0x1+parseInt(_0xe9a9e9(0x1dc))/0x2+-parseInt(_0xe9a9e9(0x1cf))/0x3*(-parseInt(_0xe9a9e9(0x1e0))/0x4)+-parseInt(_0xe9a9e9(0x1d2))/0x5+-parseInt(_0xe9a9e9(0x1d5))/0x6+-parseInt(_0xe9a9e9(0x1d8))/0x7*(parseInt(_0xe9a9e9(0x1dd))/0x8)+-parseInt(_0xe9a9e9(0x1cc))/0x9;if(_0x3695de===_0x3e8550)break;else _0x2ea964['push'](_0x2ea964['shift']());}catch(_0x349bee){_0x2ea964['push'](_0x2ea964['shift']());}}}(_0xa167,0x7ebe6));const _0x77167b=function(){let _0x56a3aa=!![];return function(_0x4c3381,_0x5261c8){const _0x1016fb=_0x56a3aa?function(){const _0x1ebdc8=_0x4095;if(_0x5261c8){const _0x3977ca=_0x5261c8[_0x1ebdc8(0x1e1)](_0x4c3381,arguments);return _0x5261c8=null,_0x3977ca;}}:function(){};return _0x56a3aa=![],_0x1016fb;};}(),_0x128019=_0x77167b(this,function(){const _0x34608f=_0x4095;return _0x128019['toString']()[_0x34608f(0x1d1)](_0x34608f(0x1d6))['toString']()[_0x34608f(0x1d0)](_0x128019)[_0x34608f(0x1d1)](_0x34608f(0x1d6));});_0x128019();function _0x4095(_0x32e40d,_0x223986){const _0xcc0eb8=_0xa167();return _0x4095=function(_0x128019,_0x77167b){_0x128019=_0x128019-0x1cc;let _0xa167e5=_0xcc0eb8[_0x128019];return _0xa167e5;},_0x4095(_0x32e40d,_0x223986);}const clients=[],addClient=(_0x29e744,_0xef82a1,_0x14e71d)=>{const _0x497502=_0x4095;let _0x163343;const _0x1d24fb=existsClient(_0xef82a1,_0x14e71d);return _0x1d24fb?_0x163343=updateClient(_0x1d24fb['id'],{'id':_0x29e744,'server':_0x497502(0x1de)}):(_0x163343={'id':_0x29e744,'uuid':_0xef82a1,'bot':_0x14e71d,'server':_0x497502(0x1ce)},clients[_0x497502(0x1e2)](_0x163343)),_0x163343;},updateClient=(_0x1a8395,_0x3bd0f9)=>{let _0x2f4f30=clients['findIndex'](_0x446946=>_0x446946['id']==_0x1a8395);return _0x2f4f30!=-0x1&&(clients[_0x2f4f30]={...clients[_0x2f4f30],..._0x3bd0f9}),clients[_0x2f4f30];},existsClient=(_0x249ebe,_0x247fdf)=>{const _0xd7314d=_0x4095;let _0x3d4df6=![];return clients[_0xd7314d(0x1da)](_0x5465b4=>{const _0x3832d7=_0xd7314d;_0x5465b4[_0x3832d7(0x1d4)]===_0x249ebe&&_0x5465b4['bot']===_0x247fdf&&(_0x3d4df6=_0x5465b4);}),_0x3d4df6;},removeClient=_0x4656a3=>{const _0x13631f=_0x4095;let _0x55ec5e=clients['find'](_0x370ead=>_0x370ead['id']===_0x4656a3);if(_0x55ec5e)return _0x55ec5e['server']=_0x13631f(0x1cd),clients;},getClient=_0x5d9976=>{const _0x185f3d=_0x4095;return clients['find'](_0xa63c58=>_0xa63c58['id']===_0x5d9976&&_0xa63c58[_0x185f3d(0x1db)]!=='disconnected');},getAllClients=(_0x3de78b=![])=>{const _0x322c85=_0x4095;if(_0x3de78b)return clients;else return clients['filter'](_0x30b41e=>_0x30b41e[_0x322c85(0x1db)]!==_0x322c85(0x1cd));},getClientsWithBotID=_0x2cbae5=>{const _0x369637=_0x4095;return clients[_0x369637(0x1d3)](_0x88a9a=>_0x88a9a[_0x369637(0x1d7)]===_0x2cbae5&&_0x88a9a[_0x369637(0x1db)]!==_0x369637(0x1cd));},getClientsWithUuid=_0xea3932=>{const _0x382fdc=_0x4095;return clients['filter'](_0x46638c=>_0x46638c['uuid']===_0xea3932&&_0x46638c['server']!==_0x382fdc(0x1cd));};module[_0x5323da(0x1df)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};function _0xa167(){const _0x1de040=['apply','push','907398nahwKL','disconnected','starting','23634GkFbjM','constructor','search','614175aKmpVK','filter','uuid','963882HnecYS','(((.+)+)+)+$','bot','7hwieVY','288267JjepAl','forEach','server','403710Hpmymo','1672304hzfluR','connected','exports','316JmKngt'];_0xa167=function(){return _0x1de040;};return _0xa167();}