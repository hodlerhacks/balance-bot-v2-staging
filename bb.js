const _0x4562f0=_0x8307;(function(_0x5d4af6,_0x8be67f){const _0x104865=_0x8307,_0xd391e5=_0x5d4af6();while(!![]){try{const _0x19c099=parseInt(_0x104865(0x80))/0x1+-parseInt(_0x104865(0x6d))/0x2+parseInt(_0x104865(0x7f))/0x3*(-parseInt(_0x104865(0x8f))/0x4)+parseInt(_0x104865(0x8d))/0x5+-parseInt(_0x104865(0x6f))/0x6*(-parseInt(_0x104865(0x75))/0x7)+-parseInt(_0x104865(0x77))/0x8+-parseInt(_0x104865(0x6e))/0x9*(parseInt(_0x104865(0x78))/0xa);if(_0x19c099===_0x8be67f)break;else _0xd391e5['push'](_0xd391e5['shift']());}catch(_0xf69df3){_0xd391e5['push'](_0xd391e5['shift']());}}}(_0x1551,0xdcfbe));const fs=require('fs'),argv=require(_0x4562f0(0x88))(process[_0x4562f0(0x72)]['slice'](0x2))[_0x4562f0(0x72)],childProcess=require(_0x4562f0(0x8e));if(argv[_0x4562f0(0x85)]){const pattern=/^[0-9]{2,4}$/;if(!pattern['test'](argv[_0x4562f0(0x85)]))return console[_0x4562f0(0x84)]('Error:\x20Invalid\x20argument\x20'+argv[_0x4562f0(0x85)]+_0x4562f0(0x71)),process[_0x4562f0(0x87)](0x1);}let args=[];argv[_0x4562f0(0x85)]&&(args[_0x4562f0(0x81)](_0x4562f0(0x89)),args[_0x4562f0(0x81)](argv[_0x4562f0(0x85)]));argv[_0x4562f0(0x82)]&&(args[_0x4562f0(0x81)](_0x4562f0(0x86)),args[_0x4562f0(0x81)](argv[_0x4562f0(0x82)]));argv[_0x4562f0(0x7d)]&&(args[_0x4562f0(0x81)](_0x4562f0(0x76)),args[_0x4562f0(0x81)](argv[_0x4562f0(0x7d)]));function _0x1551(){const _0x26b67a=['100ILTWHv','(((.+)+)+)+$','search','ipc','fork','user','update','777fjVsFa','1637030fNUIwX','push','host','install.js','log','port','--host','exit','yargs/yargs','--port','existsSync','constructor','message','7958255ccawvy','child_process','5604cJlOgB','1805298uoQmUw','706410XIPqTf','1068ZAuiBl','bb/',',\x20must\x20be\x20a\x204\x20digit\x20number','argv','bm.js','inherit','56413fHuyKT','--user','13661000gJwZVt'];_0x1551=function(){return _0x26b67a;};return _0x1551();}function _0x8307(_0x4b6862,_0x565b75){const _0x3fe199=_0x1551();return _0x8307=function(_0x50c4d5,_0x1af4d5){_0x50c4d5=_0x50c4d5-0x6d;let _0x155126=_0x3fe199[_0x50c4d5];return _0x155126;},_0x8307(_0x4b6862,_0x565b75);}let bmpath=_0x4562f0(0x70);const bmfile=_0x4562f0(0x73),updatefile=_0x4562f0(0x83);!fs[_0x4562f0(0x8a)](bmpath+bmfile)&&(bmpath='');let pid,updating=![];startBM({'cwd':''},function(_0x4c5fae){if(_0x4c5fae)logging(_0x4c5fae);});function startBM(_0x4839e6,_0x4e24c8){const _0x2ea791=_0x4562f0,_0x1de7e0=function(){let _0x5c805b=!![];return function(_0x1a5772,_0x23b737){const _0x3052eb=_0x5c805b?function(){if(_0x23b737){const _0x12e6a1=_0x23b737['apply'](_0x1a5772,arguments);return _0x23b737=null,_0x12e6a1;}}:function(){};return _0x5c805b=![],_0x3052eb;};}(),_0x5512ee=_0x1de7e0(this,function(){const _0x744d77=_0x8307;return _0x5512ee['toString']()['search'](_0x744d77(0x79))['toString']()[_0x744d77(0x8b)](_0x5512ee)[_0x744d77(0x7a)](_0x744d77(0x79));});_0x5512ee();let _0x36d496=![];_0x4839e6={..._0x4839e6,'stdio':[_0x2ea791(0x74),_0x2ea791(0x74),_0x2ea791(0x74),_0x2ea791(0x7b)]},pid=childProcess[_0x2ea791(0x7c)](bmpath+bmfile,args,_0x4839e6),pid['on'](_0x2ea791(0x8c),_0x364ee4=>{const _0x471be8=_0x2ea791;switch(Object['keys'](_0x364ee4)[0x0]){case _0x471be8(0x7e):startUpdate({'cwd':''},function(_0xd68f97){if(_0xd68f97)logging(_0xd68f97);});break;}}),pid['on']('error',function(_0xf2fd9c){if(_0x36d496)return;_0x36d496=!![],_0x4e24c8(_0xf2fd9c);}),pid['on'](_0x2ea791(0x87),function(_0x476cf1){if(_0x36d496)return;_0x36d496=!![],_0x4e24c8(null);if(!updating)startBM(args,{'cwd':''},function(_0x1bc3e9){if(_0x1bc3e9)logging(_0x1bc3e9);});});}function startUpdate(_0x2b1f5f,_0xa3a56){const _0x243726=_0x4562f0;updating=!![];if(pid)pid['kill']();let _0x359b2e=![];_0x2b1f5f={..._0x2b1f5f,'stdio':[_0x243726(0x74),_0x243726(0x74),'inherit',_0x243726(0x7b)]};let _0x4724dc=[];if(argv['s'])_0x4724dc[_0x243726(0x81)]('2s');else _0x4724dc[_0x243726(0x81)]('2');pid=childProcess[_0x243726(0x7c)](updatefile,_0x4724dc,_0x2b1f5f),pid['on']('error',function(_0x367213){updating=![];if(_0x359b2e)return;_0x359b2e=!![],_0xa3a56(_0x367213);}),pid['on'](_0x243726(0x87),function(_0x570d2b){updating=![];if(_0x359b2e)return;_0x359b2e=!![],_0xa3a56(null),startBM(args,{'cwd':''},function(_0x344849){if(_0x344849)logging(_0x344849);});});}