const _0x406775=_0x3e1b;(function(_0x1edfac,_0x102bab){const _0x434ad9=_0x3e1b,_0x2951fb=_0x1edfac();while(!![]){try{const _0x3e2cbe=-parseInt(_0x434ad9(0x1d8))/0x1+parseInt(_0x434ad9(0x1f5))/0x2+parseInt(_0x434ad9(0x1e3))/0x3*(parseInt(_0x434ad9(0x1f3))/0x4)+parseInt(_0x434ad9(0x1f0))/0x5*(parseInt(_0x434ad9(0x1fd))/0x6)+-parseInt(_0x434ad9(0x1f6))/0x7*(parseInt(_0x434ad9(0x1de))/0x8)+parseInt(_0x434ad9(0x1dd))/0x9+parseInt(_0x434ad9(0x1ea))/0xa*(-parseInt(_0x434ad9(0x1d9))/0xb);if(_0x3e2cbe===_0x102bab)break;else _0x2951fb['push'](_0x2951fb['shift']());}catch(_0x3d1644){_0x2951fb['push'](_0x2951fb['shift']());}}}(_0x5953,0x75720));const _0x5990b9=function(){let _0x1e63cb=!![];return function(_0x19dfbe,_0xcdd54a){const _0x426828=_0x1e63cb?function(){if(_0xcdd54a){const _0x48a3cb=_0xcdd54a['apply'](_0x19dfbe,arguments);return _0xcdd54a=null,_0x48a3cb;}}:function(){};return _0x1e63cb=![],_0x426828;};}(),_0x4f8796=_0x5990b9(this,function(){const _0x5c36e8=_0x3e1b;return _0x4f8796[_0x5c36e8(0x1e8)]()[_0x5c36e8(0x208)](_0x5c36e8(0x1da))[_0x5c36e8(0x1e8)]()[_0x5c36e8(0x1ec)](_0x4f8796)[_0x5c36e8(0x208)](_0x5c36e8(0x1da));});_0x4f8796();const fs=require('fs'),argv=require(_0x406775(0x1e1))(process[_0x406775(0x1fa)]['slice'](0x2))[_0x406775(0x1fa)],childProcess=require('child_process'),nodeversion=process[_0x406775(0x1f2)][_0x406775(0x20b)],minversion=0x10;nodeversion[_0x406775(0x20a)]('.')[0x0]<minversion&&(console[_0x406775(0x1e0)](),console[_0x406775(0x1e0)]('-----------------------------------------------------------------------------------'),console[_0x406775(0x1e0)](_0x406775(0x209)+nodeversion+_0x406775(0x1e2)+minversion+_0x406775(0x1ef)),console[_0x406775(0x1e0)](_0x406775(0x1e9)),console[_0x406775(0x1e0)](_0x406775(0x1fc)),console['log'](),process[_0x406775(0x1e4)](0x1));if(argv[_0x406775(0x1ff)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x406775(0x204)](argv['port'])&&(console['log'](_0x406775(0x1f9)+argv[_0x406775(0x1ff)]+',\x20must\x20be\x20a\x204\x20digit\x20number'),process[_0x406775(0x1e4)](0x1));}let args=[];argv[_0x406775(0x1ff)]&&(args[_0x406775(0x1f1)](_0x406775(0x203)),args['push'](argv[_0x406775(0x1ff)]));argv['host']&&(args['push'](_0x406775(0x1eb)),args[_0x406775(0x1f1)](argv[_0x406775(0x20d)]));argv[_0x406775(0x1fb)]&&(args[_0x406775(0x1f1)](_0x406775(0x20c)),args[_0x406775(0x1f1)](argv['user']));const staging=argv['s']||![],debugging=argv['d']||![],recreate=argv['r']||![];if(debugging)args[_0x406775(0x1f1)]('-d');if(recreate)args[_0x406775(0x1f1)]('-r');function _0x5953(){const _0x66b4d7=['650456btrYSE','error','log','yargs/yargs',',\x20but\x20version\x20','8538rFgusX','exit','restore','terminate','Balance\x20Bot\x20>\x20','toString','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','152110zOOYSE','--host','constructor','fork','keys','\x20or\x20above\x20is\x20required','738770AAzSIr','push','versions','692mYDOKH','existsSync','778678lKpNce','49jeZAMa','inherit','values','Error:\x20Invalid\x20argument\x20','argv','user','-----------------------------------------------------------------------------------','30SfrKQJ','bb/','port','install.js','message','ipc','--port','test','Automatically\x20restarting\x20BM','SIGTERM','Unexpected\x20error:','search','The\x20installed\x20Node.js\x20version\x20is\x20','split','node','--user','host','314308HiftVu','451OEcvlk','(((.+)+)+)+$','SIGINT','kill','3309273FOGinf'];_0x5953=function(){return _0x66b4d7;};return _0x5953();}let bmpath=_0x406775(0x1fe);const bmfile='bm.js',updatefile=_0x406775(0x200);!fs[_0x406775(0x1f4)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![],terminating=![];process['on'](_0x406775(0x1e4),async()=>{handleTerminate();}),process['on'](_0x406775(0x206),async()=>{handleTerminate();}),process['on'](_0x406775(0x1db),async()=>{handleTerminate();}),startBM();function startBM(){const _0x4f107c=_0x406775;let _0x143430=![];const _0x530ef1={'cwd':'','stdio':['inherit',_0x4f107c(0x1f7),'inherit',_0x4f107c(0x202)]};pid1=childProcess[_0x4f107c(0x1ed)](bmpath+bmfile,args,_0x530ef1),pid1['on'](_0x4f107c(0x201),_0x5705c8=>{const _0x32a933=_0x4f107c,_0x169427=Object[_0x32a933(0x1f8)](_0x5705c8)[0x1]=='staging';switch(Object[_0x32a933(0x1ee)](_0x5705c8)[0x0]){case'update':if(_0x169427)startUpdate('2s');else startUpdate('2');break;case'reinstall':if(_0x169427)startUpdate('3s');else startUpdate('3');break;case _0x32a933(0x1e5):handleRestore();break;case _0x32a933(0x1e6):handleTerminate();break;}}),pid1['on'](_0x4f107c(0x1df),function(_0x146037){const _0x3320bf=_0x4f107c;if(_0x143430)return;_0x143430=!![],logging(_0x3320bf(0x207),_0x146037);}),pid1['on'](_0x4f107c(0x1e4),function(_0x39bd24){const _0x195a96=_0x4f107c;if(terminating)return;if(updating)return;if(_0x143430)return;_0x143430=!![],console['log'](_0x195a96(0x205)),startBM();});}async function handleTerminate(){const _0x2e60e4=_0x406775;stopBM(),await sleep(0x3e8),process[_0x2e60e4(0x1e4)](0x0);}function _0x3e1b(_0x2c6440,_0x175e74){const _0x2483bb=_0x5953();return _0x3e1b=function(_0x4f8796,_0x5990b9){_0x4f8796=_0x4f8796-0x1d8;let _0x595368=_0x2483bb[_0x4f8796];return _0x595368;},_0x3e1b(_0x2c6440,_0x175e74);}function stopBM(){const _0x36bcbd=_0x406775;terminating=!![];if(pid1)pid1[_0x36bcbd(0x1dc)]();pid1=null;}function startUpdate(_0x3a56ac){const _0x2336d0=_0x406775;updating=!![],stopBM();let _0x5112f4=![];const _0x47291e={'cwd':'','stdio':[_0x2336d0(0x1f7),_0x2336d0(0x1f7),_0x2336d0(0x1f7),_0x2336d0(0x202)]};let _0x3540d7=[];if(staging)_0x3540d7[_0x2336d0(0x1f1)](_0x3a56ac+'s');else _0x3540d7[_0x2336d0(0x1f1)](_0x3a56ac);pid2=childProcess[_0x2336d0(0x1ed)](updatefile,_0x3540d7,_0x47291e),pid2['on'](_0x2336d0(0x1df),function(_0x57fd49){updating=![];if(_0x5112f4)return;_0x5112f4=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x57fd49);}),pid2['on'](_0x2336d0(0x1e4),function(_0x6efa7b){updating=![];if(_0x5112f4)return;_0x5112f4=!![],terminating=![],startBM();});}function handleRestore(){const _0x5772dd=_0x406775;if(pid1)pid1[_0x5772dd(0x1dc)]();}function logging(_0x564f5d){const _0x19ee05=_0x406775;console['log'](_0x19ee05(0x1e7)+_0x564f5d);}function sleep(_0x429306){return new Promise(_0x384538=>setTimeout(_0x384538,_0x429306));}