function _0x5c45(_0x48d871,_0x7a2a6f){const _0x6bb010=_0x1de8();return _0x5c45=function(_0xe6528a,_0x3eb064){_0xe6528a=_0xe6528a-0x14c;let _0x1de8ec=_0x6bb010[_0xe6528a];return _0x1de8ec;},_0x5c45(_0x48d871,_0x7a2a6f);}function _0x1de8(){const _0x3d3908=['bot','275115yLFFtm','disconnected','(((.+)+)+)+$','push','58318aJwGUq','toString','50khYVvI','12PSSbAW','12sBvYOu','find','3606iNzMPa','440eSChmk','filter','search','18654SimfqO','11qENnSr','24gqLhoR','182VFlYll','server','476253RZQgFb','3662832tuPyFd','622181HImflb'];_0x1de8=function(){return _0x3d3908;};return _0x1de8();}(function(_0x3e62ed,_0x191e2b){const _0x4dccae=_0x5c45,_0x38009c=_0x3e62ed();while(!![]){try{const _0x3f6d74=parseInt(_0x4dccae(0x155))/0x1*(-parseInt(_0x4dccae(0x152))/0x2)+parseInt(_0x4dccae(0x162))/0x3*(parseInt(_0x4dccae(0x153))/0x4)+parseInt(_0x4dccae(0x156))/0x5*(parseInt(_0x4dccae(0x159))/0x6)+-parseInt(_0x4dccae(0x160))/0x7*(parseInt(_0x4dccae(0x15b))/0x8)+parseInt(_0x4dccae(0x15e))/0x9*(parseInt(_0x4dccae(0x151))/0xa)+parseInt(_0x4dccae(0x15a))/0xb*(-parseInt(_0x4dccae(0x15f))/0xc)+-parseInt(_0x4dccae(0x14f))/0xd*(parseInt(_0x4dccae(0x15c))/0xe);if(_0x3f6d74===_0x191e2b)break;else _0x38009c['push'](_0x38009c['shift']());}catch(_0x3cc574){_0x38009c['push'](_0x38009c['shift']());}}}(_0x1de8,0x276ad));const _0x3eb064=function(){let _0x513374=!![];return function(_0x39937b,_0x2fb61f){const _0x401cc3=_0x513374?function(){if(_0x2fb61f){const _0x56c129=_0x2fb61f['apply'](_0x39937b,arguments);return _0x2fb61f=null,_0x56c129;}}:function(){};return _0x513374=![],_0x401cc3;};}(),_0xe6528a=_0x3eb064(this,function(){const _0x3d9f4a=_0x5c45;return _0xe6528a['toString']()[_0x3d9f4a(0x158)](_0x3d9f4a(0x14d))[_0x3d9f4a(0x150)]()['constructor'](_0xe6528a)[_0x3d9f4a(0x158)]('(((.+)+)+)+$');});_0xe6528a();const clients=[],addClient=(_0x3be9a0,_0x5afe5d,_0x2f816f)=>{const _0x260cb2=_0x5c45;let _0x1550c6;const _0x1eeaee=existsClient(_0x5afe5d,_0x2f816f);return _0x1eeaee?_0x1550c6=updateClient(_0x1eeaee['id'],{'id':_0x3be9a0,'server':'connected'}):(_0x1550c6={'id':_0x3be9a0,'uuid':_0x5afe5d,'bot':_0x2f816f,'server':'starting'},clients[_0x260cb2(0x14e)](_0x1550c6)),_0x1550c6;},updateClient=(_0x1323d5,_0x334181)=>{let _0x543001=clients['findIndex'](_0x3b17d7=>_0x3b17d7['id']==_0x1323d5);return _0x543001!=-0x1&&(clients[_0x543001]={...clients[_0x543001],..._0x334181}),clients[_0x543001];},existsClient=(_0x561d89,_0x530ab6)=>{let _0x555c5d=![];return clients['forEach'](_0x348776=>{const _0x5d4eb4=_0x5c45;_0x348776['uuid']===_0x561d89&&_0x348776[_0x5d4eb4(0x161)]===_0x530ab6&&(_0x555c5d=_0x348776);}),_0x555c5d;},removeClient=_0x4e807a=>{const _0x13b791=_0x5c45;let _0x3fa72e=clients[_0x13b791(0x154)](_0x21eba2=>_0x21eba2['id']===_0x4e807a);if(_0x3fa72e)return _0x3fa72e[_0x13b791(0x15d)]=_0x13b791(0x14c),clients;},getClient=_0x38e27c=>{const _0x12da56=_0x5c45;return clients[_0x12da56(0x154)](_0xd70678=>_0xd70678['id']===_0x38e27c&&_0xd70678['server']!==_0x12da56(0x14c));},getAllClients=(_0x4b16ef=![])=>{const _0x1b11d2=_0x5c45;if(_0x4b16ef)return clients;else return clients['filter'](_0x1e0b54=>_0x1e0b54[_0x1b11d2(0x15d)]!==_0x1b11d2(0x14c));},getClientsWithBotID=_0x7fa05a=>{const _0x3e3749=_0x5c45;return clients['filter'](_0x430f2b=>_0x430f2b[_0x3e3749(0x161)]===_0x7fa05a&&_0x430f2b[_0x3e3749(0x15d)]!=='disconnected');},getClientsWithUuid=_0x2b3463=>{const _0x3f7ffd=_0x5c45;return clients[_0x3f7ffd(0x157)](_0x489382=>_0x489382['uuid']===_0x2b3463&&_0x489382[_0x3f7ffd(0x15d)]!==_0x3f7ffd(0x14c));};module['exports']={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};