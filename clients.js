(function(_0x1a9830,_0x2acee6){const _0x18631f=_0x4677,_0x5a153b=_0x1a9830();while(!![]){try{const _0x168052=-parseInt(_0x18631f(0x74))/0x1+-parseInt(_0x18631f(0x88))/0x2*(-parseInt(_0x18631f(0x83))/0x3)+parseInt(_0x18631f(0x7a))/0x4+parseInt(_0x18631f(0x7f))/0x5*(-parseInt(_0x18631f(0x72))/0x6)+-parseInt(_0x18631f(0x7d))/0x7*(parseInt(_0x18631f(0x78))/0x8)+parseInt(_0x18631f(0x73))/0x9*(-parseInt(_0x18631f(0x82))/0xa)+-parseInt(_0x18631f(0x77))/0xb*(-parseInt(_0x18631f(0x84))/0xc);if(_0x168052===_0x2acee6)break;else _0x5a153b['push'](_0x5a153b['shift']());}catch(_0x4f0d06){_0x5a153b['push'](_0x5a153b['shift']());}}}(_0x4f75,0x735a0));function _0x4677(_0x15d00c,_0x2639c6){const _0x54ae76=_0x4f75();return _0x4677=function(_0x20a62d,_0x32b5ea){_0x20a62d=_0x20a62d-0x70;let _0x4f75d4=_0x54ae76[_0x20a62d];return _0x4f75d4;},_0x4677(_0x15d00c,_0x2639c6);}const _0x32b5ea=function(){let _0x307914=!![];return function(_0x49ba6c,_0x534d3b){const _0x25d173=_0x307914?function(){const _0x501020=_0x4677;if(_0x534d3b){const _0x330cc3=_0x534d3b[_0x501020(0x86)](_0x49ba6c,arguments);return _0x534d3b=null,_0x330cc3;}}:function(){};return _0x307914=![],_0x25d173;};}(),_0x20a62d=_0x32b5ea(this,function(){const _0x5341b6=_0x4677;return _0x20a62d[_0x5341b6(0x7e)]()['search'](_0x5341b6(0x80))[_0x5341b6(0x7e)]()[_0x5341b6(0x75)](_0x20a62d)[_0x5341b6(0x7b)](_0x5341b6(0x80));});function _0x4f75(){const _0x5e5094=['24RnMUDH','uuid','apply','push','2054VZdaNl','find','findIndex','connected','bot','12hkYpoi','7247007VcYeYX','146685ShBZUO','constructor','disconnected','8678417obSWvE','24yCyscn','starting','2348116CDarYK','search','server','2023966TIyGOI','toString','1102630oSGLDU','(((.+)+)+)+$','filter','10yLHHdB','1659UquNnY'];_0x4f75=function(){return _0x5e5094;};return _0x4f75();}_0x20a62d();const clients=[],addClient=(_0x3e4184,_0x2e6186,_0x5b017f)=>{const _0x5e1b10=_0x4677;let _0x53d8d4;const _0x15e34e=existsClient(_0x2e6186,_0x5b017f);return _0x15e34e?_0x53d8d4=updateClient(_0x15e34e['id'],{'id':_0x3e4184,'server':_0x5e1b10(0x70)}):(_0x53d8d4={'id':_0x3e4184,'uuid':_0x2e6186,'bot':_0x5b017f,'server':_0x5e1b10(0x79)},clients[_0x5e1b10(0x87)](_0x53d8d4)),_0x53d8d4;},updateClient=(_0x1870e9,_0x4d0a2d)=>{const _0x44a59d=_0x4677;let _0x345b35=clients[_0x44a59d(0x8a)](_0x15c66e=>_0x15c66e['id']==_0x1870e9);return _0x345b35!=-0x1&&(clients[_0x345b35]={...clients[_0x345b35],..._0x4d0a2d}),clients[_0x345b35];},existsClient=(_0x2cb419,_0x1b540e)=>{let _0xbebee1=![];return clients['forEach'](_0x4189f1=>{const _0x1ca5a2=_0x4677;_0x4189f1[_0x1ca5a2(0x85)]===_0x2cb419&&_0x4189f1[_0x1ca5a2(0x71)]===_0x1b540e&&(_0xbebee1=_0x4189f1);}),_0xbebee1;},removeClient=_0x4f55c4=>{const _0x3a8650=_0x4677;let _0x125371=clients[_0x3a8650(0x89)](_0x12eb89=>_0x12eb89['id']===_0x4f55c4);if(_0x125371)return _0x125371['server']=_0x3a8650(0x76),clients;},getClient=_0x49d58e=>{const _0x353472=_0x4677;return clients['find'](_0x21f7ab=>_0x21f7ab['id']===_0x49d58e&&_0x21f7ab[_0x353472(0x7c)]!==_0x353472(0x76));},getAllClients=(_0x30b796=![])=>{const _0x5c7145=_0x4677;if(_0x30b796)return clients;else return clients['filter'](_0x1013b8=>_0x1013b8[_0x5c7145(0x7c)]!==_0x5c7145(0x76));},getClientsWithBotID=_0xeee739=>{const _0x496c2c=_0x4677;return clients[_0x496c2c(0x81)](_0x4c5834=>_0x4c5834[_0x496c2c(0x71)]===_0xeee739&&_0x4c5834['server']!=='disconnected');},getClientsWithUuid=_0xabc718=>{const _0x2baac8=_0x4677;return clients[_0x2baac8(0x81)](_0x111fd5=>_0x111fd5[_0x2baac8(0x85)]===_0xabc718&&_0x111fd5['server']!==_0x2baac8(0x76));};module['exports']={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};