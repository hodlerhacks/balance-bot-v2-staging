const _0x3fc487=_0x2368;(function(_0x43641d,_0x5a7028){const _0x4c56c6=_0x2368,_0x413f5b=_0x43641d();while(!![]){try{const _0xe4eb51=parseInt(_0x4c56c6(0x85))/0x1+parseInt(_0x4c56c6(0x9c))/0x2+-parseInt(_0x4c56c6(0x88))/0x3+parseInt(_0x4c56c6(0x79))/0x4+-parseInt(_0x4c56c6(0x94))/0x5+parseInt(_0x4c56c6(0x98))/0x6*(parseInt(_0x4c56c6(0x7e))/0x7)+parseInt(_0x4c56c6(0x81))/0x8;if(_0xe4eb51===_0x5a7028)break;else _0x413f5b['push'](_0x413f5b['shift']());}catch(_0x158643){_0x413f5b['push'](_0x413f5b['shift']());}}}(_0x52aa,0x7094c));const _0x91698=function(){let _0xbfa090=!![];return function(_0x5c88ea,_0x124810){const _0x51e8c5=_0xbfa090?function(){const _0x12f889=_0x2368;if(_0x124810){const _0xcd53ec=_0x124810[_0x12f889(0x87)](_0x5c88ea,arguments);return _0x124810=null,_0xcd53ec;}}:function(){};return _0xbfa090=![],_0x51e8c5;};}(),_0x3d273c=_0x91698(this,function(){const _0x337d23=_0x2368;return _0x3d273c[_0x337d23(0x76)]()[_0x337d23(0xa4)]('(((.+)+)+)+$')[_0x337d23(0x76)]()[_0x337d23(0x8c)](_0x3d273c)[_0x337d23(0xa4)](_0x337d23(0x7f));});_0x3d273c();const fs=require('fs'),argv=require(_0x3fc487(0xa7))(process['argv']['slice'](0x2))[_0x3fc487(0x8f)],childProcess=require(_0x3fc487(0x8a)),nodeversion=process[_0x3fc487(0xa9)][_0x3fc487(0x90)],minversion=0x10;nodeversion[_0x3fc487(0x80)]('.')[0x0]<minversion&&(console[_0x3fc487(0x78)](),console[_0x3fc487(0x78)](_0x3fc487(0xac)),console[_0x3fc487(0x78)](_0x3fc487(0x9e)+nodeversion+_0x3fc487(0x8d)+minversion+'\x20or\x20above\x20is\x20required'),console[_0x3fc487(0x78)](_0x3fc487(0x7b)),console[_0x3fc487(0x78)](_0x3fc487(0xac)),console['log'](),process[_0x3fc487(0x8e)](0x1));if(argv[_0x3fc487(0x77)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x3fc487(0x89)](argv[_0x3fc487(0x77)])&&(console[_0x3fc487(0x78)](_0x3fc487(0x9f)+argv[_0x3fc487(0x77)]+_0x3fc487(0x95)),process['exit'](0x1));}let args=[];argv[_0x3fc487(0x77)]&&(args[_0x3fc487(0xab)](_0x3fc487(0x92)),args[_0x3fc487(0xab)](argv[_0x3fc487(0x77)]));argv[_0x3fc487(0xa8)]&&(args['push'](_0x3fc487(0x75)),args[_0x3fc487(0xab)](argv[_0x3fc487(0xa8)]));argv[_0x3fc487(0x9a)]&&(args['push'](_0x3fc487(0x9d)),args[_0x3fc487(0xab)](argv[_0x3fc487(0x9a)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x3fc487(0xab)]('-d');let bmpath=_0x3fc487(0x84);const bmfile=_0x3fc487(0xa6),updatefile=_0x3fc487(0xaa);!fs['existsSync'](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![],terminating=![];function _0x2368(_0xf54cd2,_0x22cbbe){const _0xd95df7=_0x52aa();return _0x2368=function(_0x3d273c,_0x91698){_0x3d273c=_0x3d273c-0x75;let _0x52aa75=_0xd95df7[_0x3d273c];return _0x52aa75;},_0x2368(_0xf54cd2,_0x22cbbe);}process['on'](_0x3fc487(0x8e),async()=>{handleTerminate();}),process['on']('SIGTERM',async()=>{handleTerminate();}),process['on'](_0x3fc487(0x97),async()=>{handleTerminate();}),startBM();function startBM(){const _0x21a45e=_0x3fc487;let _0x5ae8ee=![];const _0x1aca91={'cwd':'','stdio':[_0x21a45e(0x7c),_0x21a45e(0x7c),_0x21a45e(0x7c),_0x21a45e(0x93)]};pid1=childProcess[_0x21a45e(0x91)](bmpath+bmfile,args,_0x1aca91),pid1['on'](_0x21a45e(0x99),_0x434b86=>{const _0x5038b7=_0x21a45e,_0x23ab02=Object[_0x5038b7(0x8b)](_0x434b86)[0x1]==_0x5038b7(0xa5);switch(Object[_0x5038b7(0x82)](_0x434b86)[0x0]){case _0x5038b7(0xa0):if(_0x23ab02)startUpdate('2s');else startUpdate('2');break;case _0x5038b7(0x86):if(_0x23ab02)startUpdate('3s');else startUpdate('3');break;case _0x5038b7(0x83):handleRestore();break;case _0x5038b7(0xa1):handleTerminate();break;}}),pid1['on'](_0x21a45e(0x96),function(_0x57ab00){const _0x320e6b=_0x21a45e;if(_0x5ae8ee)return;_0x5ae8ee=!![],logging(_0x320e6b(0x9b),_0x57ab00);}),pid1['on']('exit',function(_0xab080c){const _0x465540=_0x21a45e;if(terminating)return;if(updating)return;if(_0x5ae8ee)return;_0x5ae8ee=!![],console[_0x465540(0x78)](_0x465540(0x7a)),startBM();});}async function handleTerminate(){const _0x4ebd26=_0x3fc487;stopBM(),await sleep(0x3e8),process[_0x4ebd26(0x8e)](0x0);}function _0x52aa(){const _0x552360=['Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','inherit','Balance\x20Bot\x20>\x20','327194GcApPI','(((.+)+)+)+$','split','5415856SZNPFd','keys','restore','bb/','212971VpdUrW','reinstall','apply','1779123LlOook','test','child_process','values','constructor',',\x20but\x20version\x20','exit','argv','node','fork','--port','ipc','3737180GnLWZG',',\x20must\x20be\x20a\x204\x20digit\x20number','error','SIGINT','84ZJAnUe','message','user','Unexpected\x20error:','41142qiEOEY','--user','The\x20installed\x20Node.js\x20version\x20is\x20','Error:\x20Invalid\x20argument\x20','update','terminate','Error\x20while\x20updating\x20Balance\x20Bot:','kill','search','staging','bm.js','yargs/yargs','host','versions','install.js','push','-----------------------------------------------------------------------------------','--host','toString','port','log','946788yrAhCm','Automatically\x20restarting\x20BM'];_0x52aa=function(){return _0x552360;};return _0x52aa();}function stopBM(){const _0x2d7234=_0x3fc487;terminating=!![];if(pid1)pid1[_0x2d7234(0xa3)]();pid1=null;}function startUpdate(_0xa6f11e){const _0x4a7a17=_0x3fc487;updating=!![],stopBM();let _0x54438a=![];const _0x51c00e={'cwd':'','stdio':[_0x4a7a17(0x7c),_0x4a7a17(0x7c),'inherit',_0x4a7a17(0x93)]};let _0x46a32d=[];if(staging)_0x46a32d[_0x4a7a17(0xab)](_0xa6f11e+'s');else _0x46a32d[_0x4a7a17(0xab)](_0xa6f11e);pid2=childProcess[_0x4a7a17(0x91)](updatefile,_0x46a32d,_0x51c00e),pid2['on']('error',function(_0x24eb5a){const _0x44deac=_0x4a7a17;updating=![];if(_0x54438a)return;_0x54438a=!![],logging(_0x44deac(0xa2),_0x24eb5a);}),pid2['on']('exit',function(_0x556680){updating=![];if(_0x54438a)return;_0x54438a=!![],terminating=![],startBM();});}function handleRestore(){const _0x156cf0=_0x3fc487;if(pid1)pid1[_0x156cf0(0xa3)]();}function logging(_0x53b346){const _0xd89641=_0x3fc487;console[_0xd89641(0x78)](_0xd89641(0x7d)+_0x53b346);}function sleep(_0x5d9335){return new Promise(_0x3db2aa=>setTimeout(_0x3db2aa,_0x5d9335));}