const _0x12dabb=_0x48c9;(function(_0x9ba232,_0x251e7f){const _0x3ec9a5=_0x48c9,_0x44d3b3=_0x9ba232();while(!![]){try{const _0x505653=parseInt(_0x3ec9a5(0xb2))/0x1*(-parseInt(_0x3ec9a5(0xa3))/0x2)+-parseInt(_0x3ec9a5(0xc3))/0x3+-parseInt(_0x3ec9a5(0xb4))/0x4+-parseInt(_0x3ec9a5(0xc4))/0x5+-parseInt(_0x3ec9a5(0xbf))/0x6*(-parseInt(_0x3ec9a5(0xb7))/0x7)+-parseInt(_0x3ec9a5(0xae))/0x8+parseInt(_0x3ec9a5(0xba))/0x9;if(_0x505653===_0x251e7f)break;else _0x44d3b3['push'](_0x44d3b3['shift']());}catch(_0x5b1d63){_0x44d3b3['push'](_0x44d3b3['shift']());}}}(_0x4d2d,0x8d1a1));const fs=require('fs'),argv=require(_0x12dabb(0xa6))(process['argv'][_0x12dabb(0xa5)](0x2))[_0x12dabb(0xa8)],childProcess=require(_0x12dabb(0xa0));function _0x4d2d(){const _0x535925=['bb/','host','182434ILnRuj','inherit','1126124hnLtyp','push','port','273gJEnbU','search','log','24466320ArDNcx','(((.+)+)+)+$','--port','fork','install.js','89814wUwgiW','Error:\x20Invalid\x20argument\x20','--host','message','2713554ukuVpb','1510895EfMXMC','test','error','Unexpected\x20error:','child_process','exit','kill','12oVbRND','update','slice','yargs/yargs','user','argv','ipc','Balance\x20Bot\x20>\x20','bm.js',',\x20must\x20be\x20a\x204\x20digit\x20number','toString','1131888ufNNaU','apply'];_0x4d2d=function(){return _0x535925;};return _0x4d2d();}if(argv[_0x12dabb(0xb6)]){const pattern=/^[0-9]{2,4}$/;if(!pattern[_0x12dabb(0xc5)](argv['port']))return console[_0x12dabb(0xb9)](_0x12dabb(0xc0)+argv['port']+_0x12dabb(0xac)),process[_0x12dabb(0xa1)](0x1);}let args=[];argv['port']&&(args['push'](_0x12dabb(0xbc)),args['push'](argv['port']));function _0x48c9(_0x5969dd,_0xc566f2){const _0x3bf96f=_0x4d2d();return _0x48c9=function(_0x4731bb,_0x262297){_0x4731bb=_0x4731bb-0xa0;let _0x4d2d0b=_0x3bf96f[_0x4731bb];return _0x4d2d0b;},_0x48c9(_0x5969dd,_0xc566f2);}argv[_0x12dabb(0xb1)]&&(args[_0x12dabb(0xb5)](_0x12dabb(0xc1)),args[_0x12dabb(0xb5)](argv[_0x12dabb(0xb1)]));argv[_0x12dabb(0xa7)]&&(args[_0x12dabb(0xb5)]('--user'),args['push'](argv[_0x12dabb(0xa7)]));let bmpath=_0x12dabb(0xb0);const bmfile=_0x12dabb(0xab),updatefile=_0x12dabb(0xbe);!fs['existsSync'](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x2a2409=_0x12dabb,_0x35c5b9=function(){let _0x30f752=!![];return function(_0x52e06a,_0x3a8ecb){const _0xaa5853=_0x30f752?function(){const _0xb91061=_0x48c9;if(_0x3a8ecb){const _0x482cc0=_0x3a8ecb[_0xb91061(0xaf)](_0x52e06a,arguments);return _0x3a8ecb=null,_0x482cc0;}}:function(){};return _0x30f752=![],_0xaa5853;};}(),_0x1d2cca=_0x35c5b9(this,function(){const _0x4cc5a1=_0x48c9;return _0x1d2cca['toString']()[_0x4cc5a1(0xb8)](_0x4cc5a1(0xbb))[_0x4cc5a1(0xad)]()['constructor'](_0x1d2cca)['search']('(((.+)+)+)+$');});_0x1d2cca();let _0xe16423=![];const _0x59fdbc={'cwd':'','stdio':[_0x2a2409(0xb3),_0x2a2409(0xb3),'inherit',_0x2a2409(0xa9)]};pid1=childProcess[_0x2a2409(0xbd)](bmpath+bmfile,args,_0x59fdbc),pid1['on'](_0x2a2409(0xc2),_0x300a32=>{const _0x307d71=_0x2a2409;switch(Object['keys'](_0x300a32)[0x0]){case _0x307d71(0xa4):startUpdate();break;}}),pid1['on'](_0x2a2409(0xc6),function(_0x5a30df){const _0x5725a7=_0x2a2409;if(_0xe16423)return;_0xe16423=!![],logging(_0x5725a7(0xc7),_0x5a30df);}),pid1['on'](_0x2a2409(0xa1),function(_0x3fb79c){if(_0xe16423)return;_0xe16423=!![];if(!updating)startBM();});}function startUpdate(){const _0x41727b=_0x12dabb;updating=!![];if(pid1)pid1[_0x41727b(0xa2)]();let _0x2aa5dc=![];const _0x24b87e={'cwd':'','stdio':['inherit','inherit',_0x41727b(0xb3),'ipc']};let _0x312f44=[];if(argv['s'])_0x312f44[_0x41727b(0xb5)]('2s');else _0x312f44[_0x41727b(0xb5)]('2');pid2=childProcess[_0x41727b(0xbd)](updatefile,_0x312f44,_0x24b87e),pid2['on'](_0x41727b(0xc6),function(_0x9a8949){updating=![];if(_0x2aa5dc)return;_0x2aa5dc=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x9a8949);}),pid2['on'](_0x41727b(0xa1),function(_0x189aec){updating=![];if(_0x2aa5dc)return;_0x2aa5dc=!![],startBM();});}function logging(_0x35871e){const _0x370022=_0x12dabb;console[_0x370022(0xb9)](_0x370022(0xaa)+_0x35871e);}