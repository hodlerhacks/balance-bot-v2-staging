const _0x4e6cbf=_0x3b80;(function(_0x54222e,_0x371194){const _0x347418=_0x3b80,_0x1a8594=_0x54222e();while(!![]){try{const _0xe89b8c=parseInt(_0x347418(0x140))/0x1*(parseInt(_0x347418(0x13b))/0x2)+parseInt(_0x347418(0x130))/0x3+-parseInt(_0x347418(0x134))/0x4*(-parseInt(_0x347418(0x151))/0x5)+-parseInt(_0x347418(0x13e))/0x6*(parseInt(_0x347418(0x136))/0x7)+parseInt(_0x347418(0x142))/0x8*(parseInt(_0x347418(0x145))/0x9)+parseInt(_0x347418(0x14a))/0xa*(-parseInt(_0x347418(0x13f))/0xb)+parseInt(_0x347418(0x13a))/0xc*(-parseInt(_0x347418(0x12b))/0xd);if(_0xe89b8c===_0x371194)break;else _0x1a8594['push'](_0x1a8594['shift']());}catch(_0x20d761){_0x1a8594['push'](_0x1a8594['shift']());}}}(_0x12ed,0xb72ce));const fs=require('fs'),argv=require('yargs/yargs')(process[_0x4e6cbf(0x144)][_0x4e6cbf(0x13d)](0x2))[_0x4e6cbf(0x144)],childProcess=require(_0x4e6cbf(0x141));function _0x3b80(_0x771f43,_0x506a9d){const _0x24151f=_0x12ed();return _0x3b80=function(_0x130cd9,_0x4d94f9){_0x130cd9=_0x130cd9-0x12a;let _0x12edd6=_0x24151f[_0x130cd9];return _0x12edd6;},_0x3b80(_0x771f43,_0x506a9d);}if(argv[_0x4e6cbf(0x137)]){const pattern=/^[0-9]{2,4}$/;if(!pattern[_0x4e6cbf(0x14b)](argv[_0x4e6cbf(0x137)]))return console[_0x4e6cbf(0x149)](_0x4e6cbf(0x153)+argv[_0x4e6cbf(0x137)]+_0x4e6cbf(0x13c)),process[_0x4e6cbf(0x131)](0x1);}let args=[];argv['port']&&(args['push'](_0x4e6cbf(0x12d)),args[_0x4e6cbf(0x154)](argv['port']));argv[_0x4e6cbf(0x152)]&&(args[_0x4e6cbf(0x154)](_0x4e6cbf(0x12f)),args[_0x4e6cbf(0x154)](argv['host']));argv[_0x4e6cbf(0x147)]&&(args['push'](_0x4e6cbf(0x14e)),args['push'](argv[_0x4e6cbf(0x147)]));let bmpath=_0x4e6cbf(0x12a);const bmfile='bm.js',updatefile=_0x4e6cbf(0x150);!fs[_0x4e6cbf(0x12c)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x19f142=_0x4e6cbf,_0x222359=function(){let _0x7a8826=!![];return function(_0x12b75e,_0x4a8feb){const _0x3e426f=_0x7a8826?function(){if(_0x4a8feb){const _0x53da21=_0x4a8feb['apply'](_0x12b75e,arguments);return _0x4a8feb=null,_0x53da21;}}:function(){};return _0x7a8826=![],_0x3e426f;};}(),_0xf35954=_0x222359(this,function(){const _0x33365f=_0x3b80;return _0xf35954[_0x33365f(0x14d)]()['search']('(((.+)+)+)+$')['toString']()[_0x33365f(0x132)](_0xf35954)[_0x33365f(0x12e)](_0x33365f(0x138));});_0xf35954();let _0x4ce828=![];const _0x24a46d={'cwd':'','stdio':[_0x19f142(0x146),_0x19f142(0x146),_0x19f142(0x146),_0x19f142(0x133)]};pid1=childProcess[_0x19f142(0x148)](bmpath+bmfile,args,_0x24a46d),pid1['on'](_0x19f142(0x139),_0x1dce4f=>{const _0x46eddf=_0x19f142;switch(Object[_0x46eddf(0x143)](_0x1dce4f)[0x0]){case _0x46eddf(0x135):startUpdate();break;}}),pid1['on'](_0x19f142(0x14f),function(_0x433834){if(_0x4ce828)return;_0x4ce828=!![],logging('Unexpected\x20error:',_0x433834);}),pid1['on'](_0x19f142(0x131),function(_0x558a63){if(_0x4ce828)return;_0x4ce828=!![];if(!updating)startBM();});}function startUpdate(){const _0x2f864d=_0x4e6cbf;updating=!![];if(pid1)pid1['kill']();let _0x4453dd=![];const _0x3420a0={'cwd':'','stdio':[_0x2f864d(0x146),_0x2f864d(0x146),_0x2f864d(0x146),_0x2f864d(0x133)]};let _0x1c4c09=[];if(argv['s'])_0x1c4c09[_0x2f864d(0x154)]('2s');else _0x1c4c09[_0x2f864d(0x154)]('2');pid2=childProcess[_0x2f864d(0x148)](updatefile,_0x1c4c09,_0x3420a0),pid2['on'](_0x2f864d(0x14f),function(_0x3604b3){const _0x10b6c6=_0x2f864d;updating=![];if(_0x4453dd)return;_0x4453dd=!![],logging(_0x10b6c6(0x14c),_0x3604b3);}),pid2['on'](_0x2f864d(0x131),function(_0x537ac9){updating=![];if(_0x4453dd)return;_0x4453dd=!![],startBM();});}function _0x12ed(){const _0x2d7c0b=['keys','argv','5088222pBNwpl','inherit','user','fork','log','947250lASndB','test','Error\x20while\x20updating\x20Balance\x20Bot:','toString','--user','error','install.js','705kijgzo','host','Error:\x20Invalid\x20argument\x20','push','bb/','13ecBGXd','existsSync','--port','search','--host','4462242gnqUQV','exit','constructor','ipc','26916pKSzNm','update','217jtYSXP','port','(((.+)+)+)+$','message','16731276TPiXTG','343732qcLWHf',',\x20must\x20be\x20a\x204\x20digit\x20number','slice','290226VGIPhH','11yELnDr','1RHzSjU','child_process','16ngZEkX'];_0x12ed=function(){return _0x2d7c0b;};return _0x12ed();}function logging(_0x5dac6a){const _0x15542e=_0x4e6cbf;console[_0x15542e(0x149)]('Balance\x20Bot\x20>\x20'+_0x5dac6a);}