const _0x2f0604=_0x58ce;(function(_0x199905,_0x10fe5d){const _0x2097f9=_0x58ce,_0x20333c=_0x199905();while(!![]){try{const _0x69d297=-parseInt(_0x2097f9(0xca))/0x1+-parseInt(_0x2097f9(0xe0))/0x2+-parseInt(_0x2097f9(0xbe))/0x3+parseInt(_0x2097f9(0xc5))/0x4*(-parseInt(_0x2097f9(0xd9))/0x5)+-parseInt(_0x2097f9(0xe9))/0x6*(-parseInt(_0x2097f9(0xc1))/0x7)+parseInt(_0x2097f9(0xe1))/0x8*(parseInt(_0x2097f9(0xc3))/0x9)+-parseInt(_0x2097f9(0xda))/0xa*(-parseInt(_0x2097f9(0xbf))/0xb);if(_0x69d297===_0x10fe5d)break;else _0x20333c['push'](_0x20333c['shift']());}catch(_0xae61b5){_0x20333c['push'](_0x20333c['shift']());}}}(_0x4a41,0xb5124));const fs=require('fs'),argv=require('yargs/yargs')(process['argv'][_0x2f0604(0xdc)](0x2))[_0x2f0604(0xbd)],childProcess=require(_0x2f0604(0xd0)),nodeversion=process[_0x2f0604(0xc7)]['node'],minversion=0x10;nodeversion[_0x2f0604(0xe6)]('.')[0x0]<minversion&&(console[_0x2f0604(0xe2)](),console[_0x2f0604(0xe2)](_0x2f0604(0xe7)),console[_0x2f0604(0xe2)](_0x2f0604(0xd6)+nodeversion+_0x2f0604(0xc2)+minversion+_0x2f0604(0xdd)),console[_0x2f0604(0xe2)](_0x2f0604(0xc0)),console[_0x2f0604(0xe2)]('-----------------------------------------------------------------------------------'),console[_0x2f0604(0xe2)](),process[_0x2f0604(0xd1)](0x1));if(argv[_0x2f0604(0xdb)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x2f0604(0xeb)](argv[_0x2f0604(0xdb)])&&(console[_0x2f0604(0xe2)](_0x2f0604(0xb9)+argv[_0x2f0604(0xdb)]+_0x2f0604(0xdf)),process[_0x2f0604(0xd1)](0x1));}let args=[];argv[_0x2f0604(0xdb)]&&(args[_0x2f0604(0xd7)](_0x2f0604(0xc8)),args[_0x2f0604(0xd7)](argv[_0x2f0604(0xdb)]));argv['host']&&(args[_0x2f0604(0xd7)](_0x2f0604(0xce)),args[_0x2f0604(0xd7)](argv['host']));function _0x4a41(){const _0x50fc79=['--host','staging','child_process','exit','restore','error','--user','Balance\x20Bot\x20>\x20','The\x20installed\x20Node.js\x20version\x20is\x20','push','values','195joNlsy','10pvDKmq','port','slice','\x20or\x20above\x20is\x20required','Error\x20while\x20updating\x20Balance\x20Bot:',',\x20must\x20be\x20a\x204\x20digit\x20number','264822fgUbji','8hBucOU','log','user','bm.js','apply','split','-----------------------------------------------------------------------------------','message','1286736fyuxYV','(((.+)+)+)+$','test','update','toString','Error:\x20Invalid\x20argument\x20','ipc','install.js','existsSync','argv','3326646DCZMTT','7046908jpCXoX','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','42hvYoxM',',\x20but\x20version\x20','7612659WariRC','kill','18660IUqupe','inherit','versions','--port','reinstall','608319YJQowj','bb/','keys','search'];_0x4a41=function(){return _0x50fc79;};return _0x4a41();}function _0x58ce(_0x4ade3c,_0x1b05fc){const _0x298cfc=_0x4a41();return _0x58ce=function(_0x538692,_0x5171d5){_0x538692=_0x538692-0xb8;let _0x4a4196=_0x298cfc[_0x538692];return _0x4a4196;},_0x58ce(_0x4ade3c,_0x1b05fc);}argv[_0x2f0604(0xe3)]&&(args[_0x2f0604(0xd7)](_0x2f0604(0xd4)),args[_0x2f0604(0xd7)](argv[_0x2f0604(0xe3)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args['push']('-d');let bmpath=_0x2f0604(0xcb);const bmfile=_0x2f0604(0xe4),updatefile=_0x2f0604(0xbb);!fs[_0x2f0604(0xbc)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x48e0e8=_0x2f0604,_0x48f3e9=function(){let _0x2e9f58=!![];return function(_0x356652,_0x3ac7f7){const _0x28b694=_0x2e9f58?function(){const _0x1058ea=_0x58ce;if(_0x3ac7f7){const _0x2ada61=_0x3ac7f7[_0x1058ea(0xe5)](_0x356652,arguments);return _0x3ac7f7=null,_0x2ada61;}}:function(){};return _0x2e9f58=![],_0x28b694;};}(),_0x264dff=_0x48f3e9(this,function(){const _0x5bdd19=_0x58ce;return _0x264dff['toString']()['search'](_0x5bdd19(0xea))[_0x5bdd19(0xb8)]()['constructor'](_0x264dff)[_0x5bdd19(0xcd)](_0x5bdd19(0xea));});_0x264dff();let _0x3da96d=![];const _0x196da9={'cwd':'','stdio':[_0x48e0e8(0xc6),'inherit',_0x48e0e8(0xc6),_0x48e0e8(0xba)]};pid1=childProcess['fork'](bmpath+bmfile,args,_0x196da9),pid1['on'](_0x48e0e8(0xe8),_0x28d8a6=>{const _0x2c41c5=_0x48e0e8,_0x575eb4=Object[_0x2c41c5(0xd8)](_0x28d8a6)[0x1]==_0x2c41c5(0xcf);switch(Object[_0x2c41c5(0xcc)](_0x28d8a6)[0x0]){case _0x2c41c5(0xec):if(_0x575eb4)startUpdate('2s');else startUpdate('2');break;case _0x2c41c5(0xc9):if(_0x575eb4)startUpdate('3s');else startUpdate('3');break;case _0x2c41c5(0xd2):handleRestore();break;}}),pid1['on'](_0x48e0e8(0xd3),function(_0x2e0867){if(_0x3da96d)return;_0x3da96d=!![],logging('Unexpected\x20error:',_0x2e0867);}),pid1['on'](_0x48e0e8(0xd1),function(_0x1ca9f6){if(_0x3da96d)return;_0x3da96d=!![];if(!updating)startBM();});}function startUpdate(_0x300161){const _0x5881e2=_0x2f0604;updating=!![];if(pid1)pid1[_0x5881e2(0xc4)]();let _0x71f4e=![];const _0x4bd7fa={'cwd':'','stdio':[_0x5881e2(0xc6),_0x5881e2(0xc6),_0x5881e2(0xc6),'ipc']};let _0x29b526=[];if(staging)_0x29b526[_0x5881e2(0xd7)](_0x300161+'s');else _0x29b526[_0x5881e2(0xd7)](_0x300161);pid2=childProcess['fork'](updatefile,_0x29b526,_0x4bd7fa),pid2['on']('error',function(_0x16c03f){const _0x5ac010=_0x5881e2;updating=![];if(_0x71f4e)return;_0x71f4e=!![],logging(_0x5ac010(0xde),_0x16c03f);}),pid2['on'](_0x5881e2(0xd1),function(_0x25a716){updating=![];if(_0x71f4e)return;_0x71f4e=!![],startBM();});}function handleRestore(){const _0x2597f4=_0x2f0604;if(pid1)pid1[_0x2597f4(0xc4)]();}function logging(_0x4f9fe3){const _0x202647=_0x2f0604;console['log'](_0x202647(0xd5)+_0x4f9fe3);}