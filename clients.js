(function(_0x4301f6,_0x1f02cd){const _0x2eae13=_0x1bc4,_0x1fb930=_0x4301f6();while(!![]){try{const _0x54621d=parseInt(_0x2eae13(0x1ef))/0x1*(parseInt(_0x2eae13(0x1f7))/0x2)+-parseInt(_0x2eae13(0x1f6))/0x3+parseInt(_0x2eae13(0x1ea))/0x4*(parseInt(_0x2eae13(0x1ec))/0x5)+-parseInt(_0x2eae13(0x1ed))/0x6+-parseInt(_0x2eae13(0x1ee))/0x7+parseInt(_0x2eae13(0x1e9))/0x8*(parseInt(_0x2eae13(0x1eb))/0x9)+parseInt(_0x2eae13(0x1f1))/0xa*(parseInt(_0x2eae13(0x1e1))/0xb);if(_0x54621d===_0x1f02cd)break;else _0x1fb930['push'](_0x1fb930['shift']());}catch(_0x46db64){_0x1fb930['push'](_0x1fb930['shift']());}}}(_0x5981,0x93f24));const _0x53d1b8=function(){let _0x5f3446=!![];return function(_0xf5ad4f,_0x4148ea){const _0x4fb8e4=_0x5f3446?function(){const _0x3775d8=_0x1bc4;if(_0x4148ea){const _0x111bb1=_0x4148ea[_0x3775d8(0x1e2)](_0xf5ad4f,arguments);return _0x4148ea=null,_0x111bb1;}}:function(){};return _0x5f3446=![],_0x4fb8e4;};}(),_0x14c3ce=_0x53d1b8(this,function(){const _0x505c32=_0x1bc4;return _0x14c3ce['toString']()[_0x505c32(0x1e6)](_0x505c32(0x1e3))[_0x505c32(0x1f0)]()['constructor'](_0x14c3ce)[_0x505c32(0x1e6)](_0x505c32(0x1e3));});function _0x5981(){const _0x17d1ce=['search','uuid','filter','1127048VbqBtc','4kkkNUj','9tBTpyv','3798185nZZHEV','3731724BJNMNd','5326524IOncXP','227005dtIwmT','toString','100990NLKkQd','disconnected','server','bot','forEach','1839309hahYhP','2jyTAbI','1606VadlsJ','apply','(((.+)+)+)+$','connected','find'];_0x5981=function(){return _0x17d1ce;};return _0x5981();}_0x14c3ce();function _0x1bc4(_0x34b29d,_0x40c718){const _0x5e889b=_0x5981();return _0x1bc4=function(_0x14c3ce,_0x53d1b8){_0x14c3ce=_0x14c3ce-0x1e1;let _0x59817c=_0x5e889b[_0x14c3ce];return _0x59817c;},_0x1bc4(_0x34b29d,_0x40c718);}const clients=[],addClient=(_0x317dda,_0x4cb793,_0x54f308)=>{const _0x2e5410=_0x1bc4;let _0x402b6b;const _0x18863c=existsClient(_0x4cb793,_0x54f308);return _0x18863c?_0x402b6b=updateClient(_0x18863c['id'],{'id':_0x317dda,'server':_0x2e5410(0x1e4)}):(_0x402b6b={'id':_0x317dda,'uuid':_0x4cb793,'bot':_0x54f308,'server':'starting'},clients['push'](_0x402b6b)),_0x402b6b;},updateClient=(_0x38a957,_0x5916da)=>{let _0x3457e6=clients['findIndex'](_0x30710a=>_0x30710a['id']==_0x38a957);return _0x3457e6!=-0x1&&(clients[_0x3457e6]={...clients[_0x3457e6],..._0x5916da}),clients[_0x3457e6];},existsClient=(_0x542b0f,_0x4244ab)=>{const _0x17f094=_0x1bc4;let _0x24d760=![];return clients[_0x17f094(0x1f5)](_0x12d9ae=>{const _0x51c211=_0x17f094;_0x12d9ae[_0x51c211(0x1e7)]===_0x542b0f&&_0x12d9ae[_0x51c211(0x1f4)]===_0x4244ab&&(_0x24d760=_0x12d9ae);}),_0x24d760;},removeClient=_0x3fe345=>{const _0x3012ae=_0x1bc4;let _0x2cff05=clients['find'](_0x166fa9=>_0x166fa9['id']===_0x3fe345);if(_0x2cff05)return _0x2cff05[_0x3012ae(0x1f3)]=_0x3012ae(0x1f2),clients;},getClient=_0x48b35b=>{const _0x35c5b6=_0x1bc4;return clients[_0x35c5b6(0x1e5)](_0x14a6b2=>_0x14a6b2['id']===_0x48b35b&&_0x14a6b2['server']!==_0x35c5b6(0x1f2));},getAllClients=(_0x1ce210=![])=>{const _0x5b0ccf=_0x1bc4;if(_0x1ce210)return clients;else return clients[_0x5b0ccf(0x1e8)](_0x3f0724=>_0x3f0724[_0x5b0ccf(0x1f3)]!==_0x5b0ccf(0x1f2));},getClientsWithBotID=_0x1176c2=>{const _0x1ec206=_0x1bc4;return clients[_0x1ec206(0x1e8)](_0x4c8b02=>_0x4c8b02['bot']===_0x1176c2&&_0x4c8b02[_0x1ec206(0x1f3)]!=='disconnected');},getClientsWithUuid=_0x1ff1de=>{const _0x4f2398=_0x1bc4;return clients[_0x4f2398(0x1e8)](_0x254de0=>_0x254de0[_0x4f2398(0x1e7)]===_0x1ff1de&&_0x254de0[_0x4f2398(0x1f3)]!=='disconnected');};module['exports']={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};