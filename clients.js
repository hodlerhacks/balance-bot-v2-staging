const _0x4c85e2=_0x5a8d;function _0x5a8d(_0x5ef691,_0x46b050){const _0x23effe=_0x562d();return _0x5a8d=function(_0x3a789b,_0x5e2676){_0x3a789b=_0x3a789b-0x7d;let _0x562dac=_0x23effe[_0x3a789b];return _0x562dac;},_0x5a8d(_0x5ef691,_0x46b050);}(function(_0x2b2a7e,_0x3d9a82){const _0x5b66fa=_0x5a8d,_0x43bae0=_0x2b2a7e();while(!![]){try{const _0x446b6e=-parseInt(_0x5b66fa(0x93))/0x1*(parseInt(_0x5b66fa(0x83))/0x2)+parseInt(_0x5b66fa(0x84))/0x3+-parseInt(_0x5b66fa(0x96))/0x4*(-parseInt(_0x5b66fa(0x92))/0x5)+-parseInt(_0x5b66fa(0x85))/0x6+-parseInt(_0x5b66fa(0x90))/0x7+parseInt(_0x5b66fa(0x94))/0x8*(-parseInt(_0x5b66fa(0x8c))/0x9)+parseInt(_0x5b66fa(0x82))/0xa;if(_0x446b6e===_0x3d9a82)break;else _0x43bae0['push'](_0x43bae0['shift']());}catch(_0x400951){_0x43bae0['push'](_0x43bae0['shift']());}}}(_0x562d,0x7d1b0));const _0x5e2676=function(){let _0x1449f1=!![];return function(_0x1507ca,_0xe811b4){const _0x2e24fa=_0x1449f1?function(){const _0x543e7f=_0x5a8d;if(_0xe811b4){const _0x45232e=_0xe811b4[_0x543e7f(0x89)](_0x1507ca,arguments);return _0xe811b4=null,_0x45232e;}}:function(){};return _0x1449f1=![],_0x2e24fa;};}(),_0x3a789b=_0x5e2676(this,function(){const _0x290c56=_0x5a8d;return _0x3a789b[_0x290c56(0x7e)]()[_0x290c56(0x95)](_0x290c56(0x97))[_0x290c56(0x7e)]()[_0x290c56(0x87)](_0x3a789b)[_0x290c56(0x95)](_0x290c56(0x97));});_0x3a789b();function _0x562d(){const _0x1c201e=['117yKRbdH','findIndex','push','disconnected','1596140fsrwFI','filter','4187510cwgCFn','132rfjpPZ','84904neqxYz','search','4cQiwAk','(((.+)+)+)+$','uuid','toString','find','forEach','exports','4567460dmVepN','8734VQYhbx','1366056HlcdRP','1768410nlftLc','starting','constructor','bot','apply','connected','server'];_0x562d=function(){return _0x1c201e;};return _0x562d();}const clients=[],addClient=(_0x161f3d,_0x23e9e1,_0x11eea5)=>{const _0x57270b=_0x5a8d;let _0x2b9b5c;const _0x5589fe=existsClient(_0x23e9e1,_0x11eea5);return _0x5589fe?_0x2b9b5c=updateClient(_0x5589fe['id'],{'id':_0x161f3d,'server':_0x57270b(0x8a)}):(_0x2b9b5c={'id':_0x161f3d,'uuid':_0x23e9e1,'bot':_0x11eea5,'server':_0x57270b(0x86)},clients[_0x57270b(0x8e)](_0x2b9b5c)),_0x2b9b5c;},updateClient=(_0x6a1d52,_0x2672ca)=>{const _0xe265a9=_0x5a8d;let _0xcd9a6d=clients[_0xe265a9(0x8d)](_0x2d9767=>_0x2d9767['id']==_0x6a1d52);return _0xcd9a6d!=-0x1&&(clients[_0xcd9a6d]={...clients[_0xcd9a6d],..._0x2672ca}),clients[_0xcd9a6d];},existsClient=(_0x42d00b,_0x5ee20e)=>{const _0x524edb=_0x5a8d;let _0x591061=![];return clients[_0x524edb(0x80)](_0x9a3cfb=>{const _0x231ca8=_0x524edb;_0x9a3cfb[_0x231ca8(0x7d)]===_0x42d00b&&_0x9a3cfb[_0x231ca8(0x88)]===_0x5ee20e&&(_0x591061=_0x9a3cfb);}),_0x591061;},removeClient=_0x5a7b3c=>{let _0x560591=clients['find'](_0x226512=>_0x226512['id']===_0x5a7b3c);if(_0x560591)return _0x560591['server']='disconnected',clients;},getClient=_0x40408f=>{const _0x391e66=_0x5a8d;return clients[_0x391e66(0x7f)](_0x4e7dd6=>_0x4e7dd6['id']===_0x40408f&&_0x4e7dd6['server']!==_0x391e66(0x8f));},getAllClients=(_0xa54e78=![])=>{const _0x38b313=_0x5a8d;if(_0xa54e78)return clients;else return clients[_0x38b313(0x91)](_0x5ee578=>_0x5ee578[_0x38b313(0x8b)]!==_0x38b313(0x8f));},getClientsWithBotID=_0x340c33=>{const _0x83aa69=_0x5a8d;return clients[_0x83aa69(0x91)](_0x356895=>_0x356895[_0x83aa69(0x88)]===_0x340c33&&_0x356895[_0x83aa69(0x8b)]!==_0x83aa69(0x8f));},getClientsWithUuid=_0x4b4426=>{const _0x3e4fc9=_0x5a8d;return clients[_0x3e4fc9(0x91)](_0x3ad208=>_0x3ad208[_0x3e4fc9(0x7d)]===_0x4b4426&&_0x3ad208[_0x3e4fc9(0x8b)]!==_0x3e4fc9(0x8f));};module[_0x4c85e2(0x81)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};