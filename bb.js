const _0x12af4a=_0x26d8;(function(_0x21466d,_0xd5306){const _0x3ba80c=_0x26d8,_0x29cd6c=_0x21466d();while(!![]){try{const _0x2cea99=-parseInt(_0x3ba80c(0x129))/0x1+parseInt(_0x3ba80c(0x12a))/0x2*(-parseInt(_0x3ba80c(0x132))/0x3)+parseInt(_0x3ba80c(0x13d))/0x4*(-parseInt(_0x3ba80c(0x144))/0x5)+-parseInt(_0x3ba80c(0x146))/0x6+-parseInt(_0x3ba80c(0x134))/0x7+parseInt(_0x3ba80c(0x141))/0x8+parseInt(_0x3ba80c(0x143))/0x9*(parseInt(_0x3ba80c(0x137))/0xa);if(_0x2cea99===_0xd5306)break;else _0x29cd6c['push'](_0x29cd6c['shift']());}catch(_0x811c10){_0x29cd6c['push'](_0x29cd6c['shift']());}}}(_0x1616,0x612fa));const fs=require('fs'),argv=require(_0x12af4a(0x12b))(process[_0x12af4a(0x14f)][_0x12af4a(0x153)](0x2))[_0x12af4a(0x14f)],childProcess=require(_0x12af4a(0x14e)),nodeversion=process[_0x12af4a(0x147)][_0x12af4a(0x14c)],minversion=0x10;nodeversion[_0x12af4a(0x154)]('.')[0x0]<minversion&&(console[_0x12af4a(0x135)](),console['log'](_0x12af4a(0x131)),console[_0x12af4a(0x135)](_0x12af4a(0x13e)+nodeversion+',\x20but\x20version\x20'+minversion+'\x20or\x20above\x20is\x20required'),console[_0x12af4a(0x135)]('Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again'),console[_0x12af4a(0x135)](_0x12af4a(0x131)),console[_0x12af4a(0x135)](),process['exit'](0x1));if(argv[_0x12af4a(0x12c)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x12af4a(0x139)](argv[_0x12af4a(0x12c)])&&(console[_0x12af4a(0x135)](_0x12af4a(0x12d)+argv[_0x12af4a(0x12c)]+_0x12af4a(0x150)),process['exit'](0x1));}let args=[];argv[_0x12af4a(0x12c)]&&(args[_0x12af4a(0x13b)](_0x12af4a(0x130)),args[_0x12af4a(0x13b)](argv[_0x12af4a(0x12c)]));argv[_0x12af4a(0x12f)]&&(args[_0x12af4a(0x13b)](_0x12af4a(0x13c)),args[_0x12af4a(0x13b)](argv[_0x12af4a(0x12f)]));argv['user']&&(args[_0x12af4a(0x13b)](_0x12af4a(0x157)),args['push'](argv['user']));function _0x1616(){const _0x4fe1e7=['message','20nWAAoh','bb/','test','Unexpected\x20error:','push','--host','1492952RXynmk','The\x20installed\x20Node.js\x20version\x20is\x20','keys','kill','1772808WWTBBn','existsSync','12498903MjiMBl','5AMoqQM','search','2269080tXlNEu','versions','exit','fork','Balance\x20Bot\x20>\x20','(((.+)+)+)+$','node','bm.js','child_process','argv',',\x20must\x20be\x20a\x204\x20digit\x20number','reinstall','constructor','slice','split','apply','restore','--user','ipc','inherit','install.js','error','update','683401nZVzMZ','4ubOoHE','yargs/yargs','port','Error:\x20Invalid\x20argument\x20','Error\x20while\x20updating\x20Balance\x20Bot:','host','--port','-----------------------------------------------------------------------------------','1118643uTGpKx','toString','2943360rFZzFH','log'];_0x1616=function(){return _0x4fe1e7;};return _0x1616();}const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x12af4a(0x13b)]('-d');let bmpath=_0x12af4a(0x138);const bmfile=_0x12af4a(0x14d),updatefile=_0x12af4a(0x15a);!fs[_0x12af4a(0x142)](bmpath+bmfile)&&(bmpath='');function _0x26d8(_0x259aa0,_0x3b3ca0){const _0x30d0c1=_0x1616();return _0x26d8=function(_0x143b93,_0x391aed){_0x143b93=_0x143b93-0x129;let _0x161687=_0x30d0c1[_0x143b93];return _0x161687;},_0x26d8(_0x259aa0,_0x3b3ca0);}let pid1,pid2,updating=![];startBM();function startBM(){const _0x2923ce=_0x12af4a,_0x28d8e1=function(){let _0x3358bb=!![];return function(_0x479bad,_0x3a244a){const _0x316ffb=_0x3358bb?function(){const _0x3edd68=_0x26d8;if(_0x3a244a){const _0x3eda95=_0x3a244a[_0x3edd68(0x155)](_0x479bad,arguments);return _0x3a244a=null,_0x3eda95;}}:function(){};return _0x3358bb=![],_0x316ffb;};}(),_0x49e068=_0x28d8e1(this,function(){const _0x3a8a7d=_0x26d8;return _0x49e068[_0x3a8a7d(0x133)]()[_0x3a8a7d(0x145)](_0x3a8a7d(0x14b))[_0x3a8a7d(0x133)]()[_0x3a8a7d(0x152)](_0x49e068)[_0x3a8a7d(0x145)](_0x3a8a7d(0x14b));});_0x49e068();let _0xffa441=![];const _0x5e6698={'cwd':'','stdio':[_0x2923ce(0x159),_0x2923ce(0x159),_0x2923ce(0x159),'ipc']};pid1=childProcess[_0x2923ce(0x149)](bmpath+bmfile,args,_0x5e6698),pid1['on'](_0x2923ce(0x136),_0x561ca1=>{const _0x2762f7=_0x2923ce;switch(Object[_0x2762f7(0x13f)](_0x561ca1)[0x0]){case _0x2762f7(0x15c):startUpdate('2');break;case _0x2762f7(0x151):startUpdate('3');break;case _0x2762f7(0x156):handleRestore();break;}}),pid1['on'](_0x2923ce(0x15b),function(_0x53122f){const _0xab90c6=_0x2923ce;if(_0xffa441)return;_0xffa441=!![],logging(_0xab90c6(0x13a),_0x53122f);}),pid1['on'](_0x2923ce(0x148),function(_0x53409e){if(_0xffa441)return;_0xffa441=!![];if(!updating)startBM();});}function startUpdate(_0x28e87f){const _0x3807ef=_0x12af4a;updating=!![];if(pid1)pid1[_0x3807ef(0x140)]();let _0x1badc8=![];const _0x15787e={'cwd':'','stdio':[_0x3807ef(0x159),_0x3807ef(0x159),_0x3807ef(0x159),_0x3807ef(0x158)]};let _0x441e20=[];if(staging)_0x441e20['push'](_0x28e87f+'s');else _0x441e20['push'](_0x28e87f);pid2=childProcess[_0x3807ef(0x149)](updatefile,_0x441e20,_0x15787e),pid2['on'](_0x3807ef(0x15b),function(_0x30db69){const _0x5bc3eb=_0x3807ef;updating=![];if(_0x1badc8)return;_0x1badc8=!![],logging(_0x5bc3eb(0x12e),_0x30db69);}),pid2['on']('exit',function(_0x204d57){updating=![];if(_0x1badc8)return;_0x1badc8=!![],startBM();});}function handleRestore(){if(pid1)pid1['kill']();}function logging(_0x489660){const _0x35e671=_0x12af4a;console['log'](_0x35e671(0x14a)+_0x489660);}