const _0x81bec7=_0x2cd6;(function(_0x43bb66,_0x5c858b){const _0x2fcb6d=_0x2cd6,_0x4c11a6=_0x43bb66();while(!![]){try{const _0x11fa78=-parseInt(_0x2fcb6d(0x9a))/0x1*(-parseInt(_0x2fcb6d(0x91))/0x2)+-parseInt(_0x2fcb6d(0x98))/0x3*(-parseInt(_0x2fcb6d(0x99))/0x4)+-parseInt(_0x2fcb6d(0xa0))/0x5+-parseInt(_0x2fcb6d(0xa2))/0x6+parseInt(_0x2fcb6d(0xb7))/0x7*(-parseInt(_0x2fcb6d(0xaa))/0x8)+-parseInt(_0x2fcb6d(0x8d))/0x9*(-parseInt(_0x2fcb6d(0xa8))/0xa)+-parseInt(_0x2fcb6d(0x8c))/0xb;if(_0x11fa78===_0x5c858b)break;else _0x4c11a6['push'](_0x4c11a6['shift']());}catch(_0x2616a4){_0x4c11a6['push'](_0x4c11a6['shift']());}}}(_0x38d6,0x3a030));function _0x38d6(){const _0x3d0f7a=['keys','child_process','Balance\x20Bot\x20>\x20','port','constructor',',\x20but\x20version\x20','slice','message','-----------------------------------------------------------------------------------','log','691339CAQyZH','1504467qXUrdd','push','fork','install.js','167114FnVdJk','host','argv','test','staging','reinstall','\x20or\x20above\x20is\x20required','460344gFerQP','12GKfLbQ','4fRPdJR',',\x20must\x20be\x20a\x204\x20digit\x20number','search','values','The\x20installed\x20Node.js\x20version\x20is\x20','Automatically\x20restarting\x20BM','1351675bsERgt','--user','1440822AmtsQL','--host','exit','yargs/yargs','kill','SIGTERM','10XOYYQV','bb/','9808KgAmkw','user','node','Error:\x20Invalid\x20argument\x20','inherit','versions','Unexpected\x20error:','(((.+)+)+)+$','ipc','existsSync','split','SIGINT','error','861QHWIiR','toString','terminate'];_0x38d6=function(){return _0x3d0f7a;};return _0x38d6();}const _0x34b6cd=function(){let _0x2746d1=!![];return function(_0x1d8ae5,_0x4baf17){const _0x35e3d1=_0x2746d1?function(){if(_0x4baf17){const _0x5ec680=_0x4baf17['apply'](_0x1d8ae5,arguments);return _0x4baf17=null,_0x5ec680;}}:function(){};return _0x2746d1=![],_0x35e3d1;};}(),_0x1b42dd=_0x34b6cd(this,function(){const _0x42ca9c=_0x2cd6;return _0x1b42dd['toString']()[_0x42ca9c(0x9c)](_0x42ca9c(0xb1))[_0x42ca9c(0x80)]()[_0x42ca9c(0x86)](_0x1b42dd)[_0x42ca9c(0x9c)](_0x42ca9c(0xb1));});_0x1b42dd();const fs=require('fs'),argv=require(_0x81bec7(0xa5))(process['argv'][_0x81bec7(0x88)](0x2))[_0x81bec7(0x93)],childProcess=require(_0x81bec7(0x83)),nodeversion=process[_0x81bec7(0xaf)][_0x81bec7(0xac)],minversion=0x10;function _0x2cd6(_0x48e861,_0x234cfa){const _0x40960e=_0x38d6();return _0x2cd6=function(_0x1b42dd,_0x34b6cd){_0x1b42dd=_0x1b42dd-0x80;let _0x38d6e0=_0x40960e[_0x1b42dd];return _0x38d6e0;},_0x2cd6(_0x48e861,_0x234cfa);}nodeversion[_0x81bec7(0xb4)]('.')[0x0]<minversion&&(console[_0x81bec7(0x8b)](),console['log'](_0x81bec7(0x8a)),console[_0x81bec7(0x8b)](_0x81bec7(0x9e)+nodeversion+_0x81bec7(0x87)+minversion+_0x81bec7(0x97)),console[_0x81bec7(0x8b)]('Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again'),console[_0x81bec7(0x8b)](_0x81bec7(0x8a)),console[_0x81bec7(0x8b)](),process[_0x81bec7(0xa4)](0x1));if(argv[_0x81bec7(0x85)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x81bec7(0x94)](argv[_0x81bec7(0x85)])&&(console[_0x81bec7(0x8b)](_0x81bec7(0xad)+argv['port']+_0x81bec7(0x9b)),process[_0x81bec7(0xa4)](0x1));}let args=[];argv['port']&&(args[_0x81bec7(0x8e)]('--port'),args[_0x81bec7(0x8e)](argv[_0x81bec7(0x85)]));argv[_0x81bec7(0x92)]&&(args[_0x81bec7(0x8e)](_0x81bec7(0xa3)),args[_0x81bec7(0x8e)](argv[_0x81bec7(0x92)]));argv[_0x81bec7(0xab)]&&(args[_0x81bec7(0x8e)](_0x81bec7(0xa1)),args[_0x81bec7(0x8e)](argv[_0x81bec7(0xab)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args['push']('-d');let bmpath=_0x81bec7(0xa9);const bmfile='bm.js',updatefile=_0x81bec7(0x90);!fs[_0x81bec7(0xb3)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![],terminating=![];process['on'](_0x81bec7(0xa4),async()=>{handleTerminate();}),process['on'](_0x81bec7(0xa7),async()=>{handleTerminate();}),process['on'](_0x81bec7(0xb5),async()=>{handleTerminate();}),startBM();function startBM(){const _0x56f125=_0x81bec7;let _0x3ebbc2=![];const _0x426f66={'cwd':'','stdio':[_0x56f125(0xae),_0x56f125(0xae),'inherit','ipc']};pid1=childProcess[_0x56f125(0x8f)](bmpath+bmfile,args,_0x426f66),pid1['on'](_0x56f125(0x89),_0x5f2c96=>{const _0x49c5a0=_0x56f125,_0xe63d66=Object[_0x49c5a0(0x9d)](_0x5f2c96)[0x1]==_0x49c5a0(0x95);switch(Object[_0x49c5a0(0x82)](_0x5f2c96)[0x0]){case'update':if(_0xe63d66)startUpdate('2s');else startUpdate('2');break;case _0x49c5a0(0x96):if(_0xe63d66)startUpdate('3s');else startUpdate('3');break;case'restore':handleRestore();break;case _0x49c5a0(0x81):handleTerminate();break;}}),pid1['on'](_0x56f125(0xb6),function(_0x92e6ef){const _0x369049=_0x56f125;if(_0x3ebbc2)return;_0x3ebbc2=!![],logging(_0x369049(0xb0),_0x92e6ef);}),pid1['on'](_0x56f125(0xa4),function(_0x11ebd9){const _0x281ba7=_0x56f125;if(terminating)return;if(updating)return;if(_0x3ebbc2)return;_0x3ebbc2=!![],console[_0x281ba7(0x8b)](_0x281ba7(0x9f)),startBM();});}async function handleTerminate(){const _0x3bf804=_0x81bec7;stopBM(),await sleep(0x3e8),process[_0x3bf804(0xa4)](0x0);}function stopBM(){const _0x508e11=_0x81bec7;terminating=!![];if(pid1)pid1[_0x508e11(0xa6)]();pid1=null;}function startUpdate(_0x594e62){const _0x50dfab=_0x81bec7;updating=!![],stopBM();let _0x449e06=![];const _0x51ddd1={'cwd':'','stdio':[_0x50dfab(0xae),_0x50dfab(0xae),_0x50dfab(0xae),_0x50dfab(0xb2)]};let _0x1a7c2e=[];if(staging)_0x1a7c2e[_0x50dfab(0x8e)](_0x594e62+'s');else _0x1a7c2e[_0x50dfab(0x8e)](_0x594e62);pid2=childProcess[_0x50dfab(0x8f)](updatefile,_0x1a7c2e,_0x51ddd1),pid2['on']('error',function(_0x1e7517){updating=![];if(_0x449e06)return;_0x449e06=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x1e7517);}),pid2['on'](_0x50dfab(0xa4),function(_0x43ca28){updating=![];if(_0x449e06)return;_0x449e06=!![],terminating=![],startBM();});}function handleRestore(){const _0x4416e0=_0x81bec7;if(pid1)pid1[_0x4416e0(0xa6)]();}function logging(_0x571ef4){const _0x3234cb=_0x81bec7;console[_0x3234cb(0x8b)](_0x3234cb(0x84)+_0x571ef4);}function sleep(_0x1e91e1){return new Promise(_0x38b7a4=>setTimeout(_0x38b7a4,_0x1e91e1));}