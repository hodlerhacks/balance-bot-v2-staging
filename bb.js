const _0x23deae=_0xb27f;(function(_0x3d009d,_0x40e9a6){const _0x368f6f=_0xb27f,_0x42fd84=_0x3d009d();while(!![]){try{const _0x42fcc6=-parseInt(_0x368f6f(0xc9))/0x1*(parseInt(_0x368f6f(0xc1))/0x2)+parseInt(_0x368f6f(0xad))/0x3+-parseInt(_0x368f6f(0xb7))/0x4+parseInt(_0x368f6f(0xd0))/0x5*(-parseInt(_0x368f6f(0xbf))/0x6)+-parseInt(_0x368f6f(0xcf))/0x7*(parseInt(_0x368f6f(0xb8))/0x8)+-parseInt(_0x368f6f(0xc0))/0x9+parseInt(_0x368f6f(0xbb))/0xa;if(_0x42fcc6===_0x40e9a6)break;else _0x42fd84['push'](_0x42fd84['shift']());}catch(_0x2fb7c8){_0x42fd84['push'](_0x42fd84['shift']());}}}(_0x5b6b,0x9dfea));function _0xb27f(_0x590cde,_0x15cdb8){const _0x1f1351=_0x5b6b();return _0xb27f=function(_0x17da98,_0x44d65c){_0x17da98=_0x17da98-0xad;let _0x5b6b99=_0x1f1351[_0x17da98];return _0x5b6b99;},_0xb27f(_0x590cde,_0x15cdb8);}const fs=require('fs'),argv=require('yargs/yargs')(process[_0x23deae(0xb5)]['slice'](0x2))[_0x23deae(0xb5)],childProcess=require(_0x23deae(0xaf));if(argv[_0x23deae(0xc8)]){const pattern=/^[0-9]{2,4}$/;if(!pattern[_0x23deae(0xcc)](argv['port']))return console[_0x23deae(0xd1)](_0x23deae(0xb9)+argv[_0x23deae(0xc8)]+',\x20must\x20be\x20a\x204\x20digit\x20number'),process['exit'](0x1);}let args=[];argv[_0x23deae(0xc8)]&&(args['push'](_0x23deae(0xcb)),args['push'](argv[_0x23deae(0xc8)]));argv[_0x23deae(0xc4)]&&(args[_0x23deae(0xb0)](_0x23deae(0xb6)),args['push'](argv['host']));argv[_0x23deae(0xcd)]&&(args[_0x23deae(0xb0)](_0x23deae(0xae)),args[_0x23deae(0xb0)](argv[_0x23deae(0xcd)]));let bmpath=_0x23deae(0xc2);const bmfile=_0x23deae(0xba),updatefile=_0x23deae(0xb1);!fs[_0x23deae(0xce)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function _0x5b6b(){const _0x357a94=['test','user','existsSync','13111LvIRdM','3070iqCPtr','log','search','toString','update','3061704SxRtoG','--user','child_process','push','install.js','Error\x20while\x20updating\x20Balance\x20Bot:','kill','Unexpected\x20error:','argv','--host','92460TVDkAz','5240gegJGu','Error:\x20Invalid\x20argument\x20','bm.js','35671640KtYhgx','apply','ipc','Balance\x20Bot\x20>\x20','5352IxNEFE','11258334PVThfq','1154xHeWNr','bb/','inherit','host','exit','fork','error','port','1546EeDPgy','(((.+)+)+)+$','--port'];_0x5b6b=function(){return _0x357a94;};return _0x5b6b();}function startBM(){const _0x210494=_0x23deae,_0x25969f=function(){let _0x508430=!![];return function(_0x4c5d01,_0x28bf50){const _0x454e70=_0x508430?function(){const _0x3e6d3b=_0xb27f;if(_0x28bf50){const _0x245385=_0x28bf50[_0x3e6d3b(0xbc)](_0x4c5d01,arguments);return _0x28bf50=null,_0x245385;}}:function(){};return _0x508430=![],_0x454e70;};}(),_0x3d1588=_0x25969f(this,function(){const _0x590f99=_0xb27f;return _0x3d1588[_0x590f99(0xd3)]()[_0x590f99(0xd2)](_0x590f99(0xca))[_0x590f99(0xd3)]()['constructor'](_0x3d1588)['search']('(((.+)+)+)+$');});_0x3d1588();let _0x5f1be0=![];const _0x128b80={'cwd':'','stdio':[_0x210494(0xc3),_0x210494(0xc3),'inherit',_0x210494(0xbd)]};pid1=childProcess[_0x210494(0xc6)](bmpath+bmfile,args,_0x128b80),pid1['on']('message',_0x275f64=>{const _0x5595bb=_0x210494;switch(Object['keys'](_0x275f64)[0x0]){case _0x5595bb(0xd4):startUpdate();break;}}),pid1['on'](_0x210494(0xc7),function(_0x4dd255){const _0x31a3a1=_0x210494;if(_0x5f1be0)return;_0x5f1be0=!![],logging(_0x31a3a1(0xb4),_0x4dd255);}),pid1['on'](_0x210494(0xc5),function(_0xaf9ca6){if(_0x5f1be0)return;_0x5f1be0=!![];if(!updating)startBM();});}function startUpdate(){const _0x1a8655=_0x23deae;updating=!![];if(pid1)pid1[_0x1a8655(0xb3)]();let _0x13b941=![];const _0x74445a={'cwd':'','stdio':[_0x1a8655(0xc3),_0x1a8655(0xc3),_0x1a8655(0xc3),'ipc']};let _0x2286bc=[];if(argv['s'])_0x2286bc['push']('2s');else _0x2286bc[_0x1a8655(0xb0)]('2');pid2=childProcess['fork'](updatefile,_0x2286bc,_0x74445a),pid2['on'](_0x1a8655(0xc7),function(_0x22662b){const _0x108d9f=_0x1a8655;updating=![];if(_0x13b941)return;_0x13b941=!![],logging(_0x108d9f(0xb2),_0x22662b);}),pid2['on'](_0x1a8655(0xc5),function(_0x5d74b0){updating=![];if(_0x13b941)return;_0x13b941=!![],startBM();});}function logging(_0x430821){const _0x45769f=_0x23deae;console[_0x45769f(0xd1)](_0x45769f(0xbe)+_0x430821);}