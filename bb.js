const _0x329940=_0x39d6;function _0x50b0(){const _0x6133ac=['toString','1889264lBthgp','existsSync','3955765zmJVUd','Error:\x20Invalid\x20argument\x20','inherit','kill','7616728IUWZQT','terminate',',\x20but\x20version\x20','532637aVKpQt','(((.+)+)+)+$','Unexpected\x20error:','Balance\x20Bot\x20>\x20','Automatically\x20restarting\x20BM','\x20or\x20above\x20is\x20required','user','error','host','Error\x20while\x20updating\x20Balance\x20Bot:','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','apply','bm.js','push','bb/','fork','versions','6UWGPYw','reinstall','restore','exit','--user','The\x20installed\x20Node.js\x20version\x20is\x20','-----------------------------------------------------------------------------------','install.js','--port','search','13619142sLmKQk','slice','52564ZNyttI','test','constructor','20JFSEhL','SIGTERM','log','argv','ipc','port','values',',\x20must\x20be\x20a\x204\x20digit\x20number','child_process','split','keys','87crBNoi','585691URvOki','message'];_0x50b0=function(){return _0x6133ac;};return _0x50b0();}(function(_0xdd536e,_0x6fa5f1){const _0x3e5331=_0x39d6,_0x6c146d=_0xdd536e();while(!![]){try{const _0x26fb24=parseInt(_0x3e5331(0x104))/0x1+-parseInt(_0x3e5331(0xcf))/0x2+-parseInt(_0x3e5331(0x103))/0x3*(parseInt(_0x3e5331(0xf5))/0x4)+-parseInt(_0x3e5331(0xd1))/0x5+parseInt(_0x3e5331(0xe9))/0x6*(parseInt(_0x3e5331(0xd8))/0x7)+-parseInt(_0x3e5331(0xd5))/0x8+parseInt(_0x3e5331(0xf3))/0x9*(parseInt(_0x3e5331(0xf8))/0xa);if(_0x26fb24===_0x6fa5f1)break;else _0x6c146d['push'](_0x6c146d['shift']());}catch(_0x4e9f76){_0x6c146d['push'](_0x6c146d['shift']());}}}(_0x50b0,0x9731d));const _0x584014=function(){let _0x1e81f0=!![];return function(_0x4e6b7d,_0x44f443){const _0x34da84=_0x1e81f0?function(){const _0x5b3d38=_0x39d6;if(_0x44f443){const _0xa90b4e=_0x44f443[_0x5b3d38(0xe3)](_0x4e6b7d,arguments);return _0x44f443=null,_0xa90b4e;}}:function(){};return _0x1e81f0=![],_0x34da84;};}(),_0x374d58=_0x584014(this,function(){const _0x3452df=_0x39d6;return _0x374d58[_0x3452df(0xce)]()[_0x3452df(0xf2)](_0x3452df(0xd9))[_0x3452df(0xce)]()[_0x3452df(0xf7)](_0x374d58)['search'](_0x3452df(0xd9));});_0x374d58();const fs=require('fs'),argv=require('yargs/yargs')(process[_0x329940(0xfb)][_0x329940(0xf4)](0x2))[_0x329940(0xfb)],childProcess=require(_0x329940(0x100)),nodeversion=process[_0x329940(0xe8)]['node'],minversion=0x10;nodeversion[_0x329940(0x101)]('.')[0x0]<minversion&&(console[_0x329940(0xfa)](),console[_0x329940(0xfa)](_0x329940(0xef)),console[_0x329940(0xfa)](_0x329940(0xee)+nodeversion+_0x329940(0xd7)+minversion+_0x329940(0xdd)),console[_0x329940(0xfa)](_0x329940(0xe2)),console[_0x329940(0xfa)]('-----------------------------------------------------------------------------------'),console[_0x329940(0xfa)](),process[_0x329940(0xec)](0x1));if(argv[_0x329940(0xfd)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x329940(0xf6)](argv[_0x329940(0xfd)])&&(console[_0x329940(0xfa)](_0x329940(0xd2)+argv['port']+_0x329940(0xff)),process[_0x329940(0xec)](0x1));}function _0x39d6(_0x248380,_0x277b3a){const _0x24fa2c=_0x50b0();return _0x39d6=function(_0x374d58,_0x584014){_0x374d58=_0x374d58-0xce;let _0x50b017=_0x24fa2c[_0x374d58];return _0x50b017;},_0x39d6(_0x248380,_0x277b3a);}let args=[];argv[_0x329940(0xfd)]&&(args['push'](_0x329940(0xf1)),args[_0x329940(0xe5)](argv[_0x329940(0xfd)]));argv[_0x329940(0xe0)]&&(args[_0x329940(0xe5)]('--host'),args[_0x329940(0xe5)](argv[_0x329940(0xe0)]));argv[_0x329940(0xde)]&&(args[_0x329940(0xe5)](_0x329940(0xed)),args[_0x329940(0xe5)](argv['user']));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x329940(0xe5)]('-d');let bmpath=_0x329940(0xe6);const bmfile=_0x329940(0xe4),updatefile=_0x329940(0xf0);!fs[_0x329940(0xd0)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![],terminating=![];process['on'](_0x329940(0xec),async()=>{handleTerminate();}),process['on'](_0x329940(0xf9),async()=>{handleTerminate();}),process['on']('SIGINT',async()=>{handleTerminate();}),startBM();function startBM(){const _0x135bef=_0x329940;let _0x2dd6af=![];const _0x28bab9={'cwd':'','stdio':[_0x135bef(0xd3),_0x135bef(0xd3),_0x135bef(0xd3),'ipc']};pid1=childProcess[_0x135bef(0xe7)](bmpath+bmfile,args,_0x28bab9),pid1['on'](_0x135bef(0x105),_0x40b9a9=>{const _0x43fc68=_0x135bef,_0x5b8484=Object[_0x43fc68(0xfe)](_0x40b9a9)[0x1]=='staging';switch(Object[_0x43fc68(0x102)](_0x40b9a9)[0x0]){case'update':if(_0x5b8484)startUpdate('2s');else startUpdate('2');break;case _0x43fc68(0xea):if(_0x5b8484)startUpdate('3s');else startUpdate('3');break;case _0x43fc68(0xeb):handleRestore();break;case _0x43fc68(0xd6):handleTerminate();break;}}),pid1['on']('error',function(_0x88864c){const _0x421923=_0x135bef;if(_0x2dd6af)return;_0x2dd6af=!![],logging(_0x421923(0xda),_0x88864c);}),pid1['on'](_0x135bef(0xec),function(_0x4a5491){const _0x178f66=_0x135bef;if(terminating)return;if(updating)return;if(_0x2dd6af)return;_0x2dd6af=!![],console['log'](_0x178f66(0xdc)),startBM();});}async function handleTerminate(){const _0x2e0452=_0x329940;stopBM(),await sleep(0x3e8),process[_0x2e0452(0xec)](0x0);}function stopBM(){const _0x53ec32=_0x329940;terminating=!![];if(pid1)pid1[_0x53ec32(0xd4)]();pid1=null;}function startUpdate(_0x48ad47){const _0x1c6161=_0x329940;updating=!![],stopBM();let _0x197ec8=![];const _0x4fe14e={'cwd':'','stdio':['inherit','inherit','inherit',_0x1c6161(0xfc)]};let _0x11ceeb=[];if(staging)_0x11ceeb[_0x1c6161(0xe5)](_0x48ad47+'s');else _0x11ceeb['push'](_0x48ad47);pid2=childProcess[_0x1c6161(0xe7)](updatefile,_0x11ceeb,_0x4fe14e),pid2['on'](_0x1c6161(0xdf),function(_0x589461){const _0x515ad2=_0x1c6161;updating=![];if(_0x197ec8)return;_0x197ec8=!![],logging(_0x515ad2(0xe1),_0x589461);}),pid2['on'](_0x1c6161(0xec),function(_0x282191){updating=![];if(_0x197ec8)return;_0x197ec8=!![],terminating=![],startBM();});}function handleRestore(){const _0x1da542=_0x329940;if(pid1)pid1[_0x1da542(0xd4)]();}function logging(_0x2e3bb2){const _0x1182a9=_0x329940;console[_0x1182a9(0xfa)](_0x1182a9(0xdb)+_0x2e3bb2);}function sleep(_0x355728){return new Promise(_0x547ccc=>setTimeout(_0x547ccc,_0x355728));}