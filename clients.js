(function(_0xd714c,_0x4dc6d4){const _0x194030=_0x1312,_0x12eda1=_0xd714c();while(!![]){try{const _0x33df7a=-parseInt(_0x194030(0x1ac))/0x1*(parseInt(_0x194030(0x1be))/0x2)+-parseInt(_0x194030(0x1b5))/0x3+-parseInt(_0x194030(0x1ae))/0x4+-parseInt(_0x194030(0x1b2))/0x5+-parseInt(_0x194030(0x1b8))/0x6*(parseInt(_0x194030(0x1c3))/0x7)+parseInt(_0x194030(0x1bb))/0x8*(-parseInt(_0x194030(0x1b0))/0x9)+parseInt(_0x194030(0x1ba))/0xa*(parseInt(_0x194030(0x1af))/0xb);if(_0x33df7a===_0x4dc6d4)break;else _0x12eda1['push'](_0x12eda1['shift']());}catch(_0x5f5351){_0x12eda1['push'](_0x12eda1['shift']());}}}(_0xf516,0x18d86));const _0xe4ff7f=function(){let _0x542186=!![];return function(_0x4a1ed2,_0x576c56){const _0x170b53=_0x542186?function(){const _0x34c4b1=_0x1312;if(_0x576c56){const _0x11ba68=_0x576c56[_0x34c4b1(0x1bf)](_0x4a1ed2,arguments);return _0x576c56=null,_0x11ba68;}}:function(){};return _0x542186=![],_0x170b53;};}(),_0x3e5304=_0xe4ff7f(this,function(){const _0x59d4c3=_0x1312;return _0x3e5304[_0x59d4c3(0x1c1)]()[_0x59d4c3(0x1b6)](_0x59d4c3(0x1b9))[_0x59d4c3(0x1c1)]()['constructor'](_0x3e5304)[_0x59d4c3(0x1b6)](_0x59d4c3(0x1b9));});function _0xf516(){const _0x21bdf4=['110NlApOj','7569TfpHLA','uuid','798865moVVEG','disconnected','findIndex','598950QJvJmf','search','push','48grrsJT','(((.+)+)+)+$','901480IjrERO','1048pPYdVM','bot','server','388402VWTDow','apply','filter','toString','connected','8960qITUxm','1bONnbK','find','502716qdFgTt'];_0xf516=function(){return _0x21bdf4;};return _0xf516();}function _0x1312(_0x5c472e,_0x583881){const _0x1195b1=_0xf516();return _0x1312=function(_0x3e5304,_0xe4ff7f){_0x3e5304=_0x3e5304-0x1ac;let _0xf5164a=_0x1195b1[_0x3e5304];return _0xf5164a;},_0x1312(_0x5c472e,_0x583881);}_0x3e5304();const clients=[],addClient=(_0x5dcc3f,_0x7cdc22,_0xb31849)=>{const _0x2bf12d=_0x1312;let _0x29c778;const _0x3a1b7a=existsClient(_0x7cdc22,_0xb31849);return _0x3a1b7a?_0x29c778=updateClient(_0x3a1b7a['id'],{'id':_0x5dcc3f,'server':_0x2bf12d(0x1c2)}):(_0x29c778={'id':_0x5dcc3f,'uuid':_0x7cdc22,'bot':_0xb31849,'server':'starting'},clients[_0x2bf12d(0x1b7)](_0x29c778)),_0x29c778;},updateClient=(_0x144f45,_0xf5d559)=>{const _0x496d78=_0x1312;let _0xb0333e=clients[_0x496d78(0x1b4)](_0x9e5a02=>_0x9e5a02['id']==_0x144f45);return _0xb0333e!=-0x1&&(clients[_0xb0333e]={...clients[_0xb0333e],..._0xf5d559}),clients[_0xb0333e];},existsClient=(_0x3d5ce5,_0x79e65e)=>{let _0x40f835=![];return clients['forEach'](_0x3a5389=>{const _0x539686=_0x1312;_0x3a5389[_0x539686(0x1b1)]===_0x3d5ce5&&_0x3a5389['bot']===_0x79e65e&&(_0x40f835=_0x3a5389);}),_0x40f835;},removeClient=_0x2783a4=>{const _0x5662ef=_0x1312;let _0x811a9=clients[_0x5662ef(0x1ad)](_0x36f70e=>_0x36f70e['id']===_0x2783a4);if(_0x811a9)return _0x811a9[_0x5662ef(0x1bd)]=_0x5662ef(0x1b3),clients;},getClient=_0x5d41ac=>{const _0x452639=_0x1312;return clients[_0x452639(0x1ad)](_0x1019b1=>_0x1019b1['id']===_0x5d41ac&&_0x1019b1['server']!==_0x452639(0x1b3));},getAllClients=(_0x5e3d7a=![])=>{const _0x818e76=_0x1312;if(_0x5e3d7a)return clients;else return clients[_0x818e76(0x1c0)](_0x162233=>_0x162233[_0x818e76(0x1bd)]!==_0x818e76(0x1b3));},getClientsWithBotID=_0x573061=>{const _0x93b814=_0x1312;return clients['filter'](_0x128095=>_0x128095[_0x93b814(0x1bc)]===_0x573061&&_0x128095['server']!=='disconnected');},getClientsWithUuid=_0x480b5e=>{const _0x580b90=_0x1312;return clients[_0x580b90(0x1c0)](_0x28750a=>_0x28750a[_0x580b90(0x1b1)]===_0x480b5e&&_0x28750a[_0x580b90(0x1bd)]!==_0x580b90(0x1b3));};module['exports']={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};