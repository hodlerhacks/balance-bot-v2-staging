const _0x54e62e=_0x256a;(function(_0xb5b840,_0x254587){const _0x2330d1=_0x256a,_0x227554=_0xb5b840();while(!![]){try{const _0x1bd184=-parseInt(_0x2330d1(0x17c))/0x1+-parseInt(_0x2330d1(0x16d))/0x2+parseInt(_0x2330d1(0x196))/0x3*(parseInt(_0x2330d1(0x17a))/0x4)+-parseInt(_0x2330d1(0x194))/0x5*(-parseInt(_0x2330d1(0x178))/0x6)+-parseInt(_0x2330d1(0x184))/0x7*(parseInt(_0x2330d1(0x16e))/0x8)+parseInt(_0x2330d1(0x174))/0x9+parseInt(_0x2330d1(0x193))/0xa;if(_0x1bd184===_0x254587)break;else _0x227554['push'](_0x227554['shift']());}catch(_0x43a59e){_0x227554['push'](_0x227554['shift']());}}}(_0x132a,0xbc241));const _0x45069b=function(){let _0x2ec7b0=!![];return function(_0x28171a,_0x5a0bd3){const _0x73b770=_0x2ec7b0?function(){const _0x554551=_0x256a;if(_0x5a0bd3){const _0x404424=_0x5a0bd3[_0x554551(0x19b)](_0x28171a,arguments);return _0x5a0bd3=null,_0x404424;}}:function(){};return _0x2ec7b0=![],_0x73b770;};}(),_0x1b28e1=_0x45069b(this,function(){const _0x533948=_0x256a;return _0x1b28e1[_0x533948(0x195)]()[_0x533948(0x18b)](_0x533948(0x197))['toString']()[_0x533948(0x180)](_0x1b28e1)[_0x533948(0x18b)]('(((.+)+)+)+$');});_0x1b28e1();const fs=require('fs'),argv=require('yargs/yargs')(process[_0x54e62e(0x185)][_0x54e62e(0x173)](0x2))[_0x54e62e(0x185)],childProcess=require(_0x54e62e(0x16c)),nodeversion=process[_0x54e62e(0x17b)][_0x54e62e(0x18e)],minversion=0x10;nodeversion['split']('.')[0x0]<minversion&&(console['log'](),console[_0x54e62e(0x199)](_0x54e62e(0x171)),console[_0x54e62e(0x199)]('The\x20installed\x20Node.js\x20version\x20is\x20'+nodeversion+_0x54e62e(0x18a)+minversion+'\x20or\x20above\x20is\x20required'),console[_0x54e62e(0x199)](_0x54e62e(0x188)),console[_0x54e62e(0x199)](_0x54e62e(0x171)),console['log'](),process[_0x54e62e(0x17f)](0x1));function _0x132a(){const _0x6f09e3=['log','SIGTERM','apply','child_process','748912fiwUkE','352vnnREH','Balance\x20Bot\x20>\x20','bb/','-----------------------------------------------------------------------------------','error','slice','122724iNanox','fork','install.js','update','433206JnNhGf','user','1367532lTtLMd','versions','1261189mgNzVE','test','reinstall','exit','constructor','terminate','Error\x20while\x20updating\x20Balance\x20Bot:','port','117278cHRGOy','argv','push','--host','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','ipc',',\x20but\x20version\x20','search','host','--port','node','values','bm.js','kill','inherit','23016420YcGLue','10WhsDlA','toString','6EIBsmQ','(((.+)+)+)+$','staging'];_0x132a=function(){return _0x6f09e3;};return _0x132a();}if(argv[_0x54e62e(0x183)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x54e62e(0x17d)](argv[_0x54e62e(0x183)])&&(console[_0x54e62e(0x199)]('Error:\x20Invalid\x20argument\x20'+argv[_0x54e62e(0x183)]+',\x20must\x20be\x20a\x204\x20digit\x20number'),process[_0x54e62e(0x17f)](0x1));}let args=[];argv['port']&&(args['push'](_0x54e62e(0x18d)),args['push'](argv[_0x54e62e(0x183)]));argv[_0x54e62e(0x18c)]&&(args['push'](_0x54e62e(0x187)),args[_0x54e62e(0x186)](argv[_0x54e62e(0x18c)]));argv[_0x54e62e(0x179)]&&(args[_0x54e62e(0x186)]('--user'),args[_0x54e62e(0x186)](argv[_0x54e62e(0x179)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x54e62e(0x186)]('-d');let bmpath=_0x54e62e(0x170);const bmfile=_0x54e62e(0x190),updatefile=_0x54e62e(0x176);!fs['existsSync'](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![],terminating=![];process['on']('exit',async()=>{handleTerminate();}),process['on'](_0x54e62e(0x19a),async()=>{handleTerminate();}),process['on']('SIGINT',async()=>{handleTerminate();}),startBM();function _0x256a(_0x552320,_0x100665){const _0x440cfd=_0x132a();return _0x256a=function(_0x1b28e1,_0x45069b){_0x1b28e1=_0x1b28e1-0x16c;let _0x132a7c=_0x440cfd[_0x1b28e1];return _0x132a7c;},_0x256a(_0x552320,_0x100665);}function startBM(){const _0x362f5c=_0x54e62e;let _0x149881=![];const _0x509f5d={'cwd':'','stdio':['inherit','inherit',_0x362f5c(0x192),_0x362f5c(0x189)]};pid1=childProcess[_0x362f5c(0x175)](bmpath+bmfile,args,_0x509f5d),pid1['on']('message',_0x3bbd36=>{const _0x5c33ca=_0x362f5c,_0x3d7930=Object[_0x5c33ca(0x18f)](_0x3bbd36)[0x1]==_0x5c33ca(0x198);switch(Object['keys'](_0x3bbd36)[0x0]){case _0x5c33ca(0x177):if(_0x3d7930)startUpdate('2s');else startUpdate('2');break;case _0x5c33ca(0x17e):if(_0x3d7930)startUpdate('3s');else startUpdate('3');break;case'restore':handleRestore();break;case _0x5c33ca(0x181):handleTerminate();break;}}),pid1['on'](_0x362f5c(0x172),function(_0x3e8eb3){if(_0x149881)return;_0x149881=!![],logging('Unexpected\x20error:',_0x3e8eb3);}),pid1['on'](_0x362f5c(0x17f),function(_0x418381){const _0x5906b4=_0x362f5c;if(terminating)return;if(updating)return;if(_0x149881)return;_0x149881=!![],console[_0x5906b4(0x199)]('Automatically\x20restarting\x20BM'),startBM();});}async function handleTerminate(){const _0x5636a9=_0x54e62e;stopBM(),await sleep(0x3e8),process[_0x5636a9(0x17f)](0x0);}function stopBM(){const _0x558ecc=_0x54e62e;terminating=!![];if(pid1)pid1[_0x558ecc(0x191)]();pid1=null;}function startUpdate(_0x112dfe){const _0x5aafcc=_0x54e62e;updating=!![],stopBM();let _0xb0e407=![];const _0x989734={'cwd':'','stdio':[_0x5aafcc(0x192),'inherit',_0x5aafcc(0x192),_0x5aafcc(0x189)]};let _0x3ad9d1=[];if(staging)_0x3ad9d1[_0x5aafcc(0x186)](_0x112dfe+'s');else _0x3ad9d1[_0x5aafcc(0x186)](_0x112dfe);pid2=childProcess['fork'](updatefile,_0x3ad9d1,_0x989734),pid2['on'](_0x5aafcc(0x172),function(_0x1f845f){const _0x493a75=_0x5aafcc;updating=![];if(_0xb0e407)return;_0xb0e407=!![],logging(_0x493a75(0x182),_0x1f845f);}),pid2['on'](_0x5aafcc(0x17f),function(_0x227199){updating=![];if(_0xb0e407)return;_0xb0e407=!![],terminating=![],startBM();});}function handleRestore(){const _0x3c7dbc=_0x54e62e;if(pid1)pid1[_0x3c7dbc(0x191)]();}function logging(_0x1048eb){const _0x3cb759=_0x54e62e;console[_0x3cb759(0x199)](_0x3cb759(0x16f)+_0x1048eb);}function sleep(_0x1d4a31){return new Promise(_0x1ebc2a=>setTimeout(_0x1ebc2a,_0x1d4a31));}