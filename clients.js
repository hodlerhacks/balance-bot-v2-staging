const _0x3aca43=_0x12da;(function(_0x38ab61,_0xb89945){const _0x4ca33f=_0x12da,_0xc0a11c=_0x38ab61();while(!![]){try{const _0x2c3dfc=-parseInt(_0x4ca33f(0x13c))/0x1+parseInt(_0x4ca33f(0x133))/0x2*(-parseInt(_0x4ca33f(0x12b))/0x3)+parseInt(_0x4ca33f(0x13a))/0x4+parseInt(_0x4ca33f(0x12d))/0x5*(-parseInt(_0x4ca33f(0x12f))/0x6)+-parseInt(_0x4ca33f(0x127))/0x7+-parseInt(_0x4ca33f(0x134))/0x8*(parseInt(_0x4ca33f(0x13d))/0x9)+parseInt(_0x4ca33f(0x13e))/0xa;if(_0x2c3dfc===_0xb89945)break;else _0xc0a11c['push'](_0xc0a11c['shift']());}catch(_0x1a0b7a){_0xc0a11c['push'](_0xc0a11c['shift']());}}}(_0x55b0,0xcf63e));const _0x67654b=function(){let _0x2c544d=!![];return function(_0x32697c,_0x404365){const _0x7242e3=_0x2c544d?function(){const _0xe28dfa=_0x12da;if(_0x404365){const _0x5ad68a=_0x404365[_0xe28dfa(0x12c)](_0x32697c,arguments);return _0x404365=null,_0x5ad68a;}}:function(){};return _0x2c544d=![],_0x7242e3;};}(),_0x32e023=_0x67654b(this,function(){const _0x2eafc8=_0x12da;return _0x32e023[_0x2eafc8(0x131)]()['search']('(((.+)+)+)+$')[_0x2eafc8(0x131)]()[_0x2eafc8(0x138)](_0x32e023)[_0x2eafc8(0x139)]('(((.+)+)+)+$');});function _0x12da(_0x138f23,_0xb1bc02){const _0x1e4267=_0x55b0();return _0x12da=function(_0x32e023,_0x67654b){_0x32e023=_0x32e023-0x127;let _0x55b0f1=_0x1e4267[_0x32e023];return _0x55b0f1;},_0x12da(_0x138f23,_0xb1bc02);}_0x32e023();function _0x55b0(){const _0x257eff=['190580wXCkGY','connected','1592601ZZIZTb','24399TNYaOZ','57754060bsoZhE','4197823IMJkja','server','filter','disconnected','1272342JHRDKY','apply','905uLSSvZ','forEach','13854xNFgrZ','exports','toString','find','8mPSCns','1968NOVAcR','uuid','bot','starting','constructor','search'];_0x55b0=function(){return _0x257eff;};return _0x55b0();}const clients=[],addClient=(_0x42a15f,_0x478215,_0x2a4293)=>{const _0xd149a6=_0x12da;let _0x143161;const _0xea0866=existsClient(_0x478215,_0x2a4293);return _0xea0866?_0x143161=updateClient(_0xea0866['id'],{'id':_0x42a15f,'server':_0xd149a6(0x13b)}):(_0x143161={'id':_0x42a15f,'uuid':_0x478215,'bot':_0x2a4293,'server':_0xd149a6(0x137)},clients['push'](_0x143161)),_0x143161;},updateClient=(_0x47daa1,_0x2d771a)=>{let _0x1a925a=clients['findIndex'](_0x2413b3=>_0x2413b3['id']==_0x47daa1);return _0x1a925a!=-0x1&&(clients[_0x1a925a]={...clients[_0x1a925a],..._0x2d771a}),clients[_0x1a925a];},existsClient=(_0x399bed,_0x60bdee)=>{const _0x42dc46=_0x12da;let _0x2bc70c=![];return clients[_0x42dc46(0x12e)](_0x5dd958=>{const _0x29d729=_0x42dc46;_0x5dd958['uuid']===_0x399bed&&_0x5dd958[_0x29d729(0x136)]===_0x60bdee&&(_0x2bc70c=_0x5dd958);}),_0x2bc70c;},removeClient=_0x40e97a=>{const _0x328377=_0x12da;let _0x1340ef=clients[_0x328377(0x132)](_0x2377b6=>_0x2377b6['id']===_0x40e97a);if(_0x1340ef)return _0x1340ef[_0x328377(0x128)]=_0x328377(0x12a),clients;},getClient=_0x41f7b5=>{const _0x4c8818=_0x12da;return clients[_0x4c8818(0x132)](_0x33e624=>_0x33e624['id']===_0x41f7b5&&_0x33e624['server']!==_0x4c8818(0x12a));},getAllClients=(_0x47529a=![])=>{const _0x5a1a26=_0x12da;if(_0x47529a)return clients;else return clients[_0x5a1a26(0x129)](_0x258da7=>_0x258da7['server']!==_0x5a1a26(0x12a));},getClientsWithBotID=_0x50355a=>{const _0x2830c6=_0x12da;return clients[_0x2830c6(0x129)](_0x5b5ed9=>_0x5b5ed9[_0x2830c6(0x136)]===_0x50355a&&_0x5b5ed9[_0x2830c6(0x128)]!==_0x2830c6(0x12a));},getClientsWithUuid=_0x17f683=>{const _0x1ac2a4=_0x12da;return clients[_0x1ac2a4(0x129)](_0x273d30=>_0x273d30[_0x1ac2a4(0x135)]===_0x17f683&&_0x273d30['server']!==_0x1ac2a4(0x12a));};module[_0x3aca43(0x130)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};