const _0x50686a=_0x1507;function _0x1466(){const _0x1a087f=['7193570FFVGZv','24ihgEAN','24264262JglllD','slice','user','yargs/yargs','apply','log','--user','ipc','existsSync',',\x20must\x20be\x20a\x204\x20digit\x20number','2061848sDAyAZ','error','exit','76391cxMupn','port','2799790halHWH','install.js','bm.js','message','879SYsuhg','fork','1038HbOZwL','host','push','Balance\x20Bot\x20>\x20','--port','Error:\x20Invalid\x20argument\x20','kill','194264cquJIx','argv','keys','update','search','3162ksRnrG','(((.+)+)+)+$','105vsWuax','9GniiRn','inherit','child_process'];_0x1466=function(){return _0x1a087f;};return _0x1466();}(function(_0x403cbe,_0x1ce921){const _0x272b09=_0x1507,_0x4cf518=_0x403cbe();while(!![]){try{const _0x2471db=parseInt(_0x272b09(0x18b))/0x1*(parseInt(_0x272b09(0x199))/0x2)+-parseInt(_0x272b09(0x19b))/0x3*(-parseInt(_0x272b09(0x194))/0x4)+-parseInt(_0x272b09(0x187))/0x5+parseInt(_0x272b09(0x18d))/0x6*(parseInt(_0x272b09(0x185))/0x7)+parseInt(_0x272b09(0x182))/0x8+parseInt(_0x272b09(0x19c))/0x9*(parseInt(_0x272b09(0x19f))/0xa)+-parseInt(_0x272b09(0x1a1))/0xb*(parseInt(_0x272b09(0x1a0))/0xc);if(_0x2471db===_0x1ce921)break;else _0x4cf518['push'](_0x4cf518['shift']());}catch(_0x555c69){_0x4cf518['push'](_0x4cf518['shift']());}}}(_0x1466,0xeff78));const fs=require('fs'),argv=require(_0x50686a(0x1a4))(process[_0x50686a(0x195)][_0x50686a(0x1a2)](0x2))['argv'],childProcess=require(_0x50686a(0x19e));if(argv[_0x50686a(0x186)]){const pattern=/^[0-9]{2,4}$/;!pattern['test'](argv[_0x50686a(0x186)])&&(console[_0x50686a(0x1a6)](_0x50686a(0x192)+argv[_0x50686a(0x186)]+_0x50686a(0x181)),process[_0x50686a(0x184)](0x1));}let args=[];argv[_0x50686a(0x186)]&&(args[_0x50686a(0x18f)](_0x50686a(0x191)),args['push'](argv['port']));argv['host']&&(args[_0x50686a(0x18f)]('--host'),args[_0x50686a(0x18f)](argv[_0x50686a(0x18e)]));argv[_0x50686a(0x1a3)]&&(args['push'](_0x50686a(0x1a7)),args[_0x50686a(0x18f)](argv[_0x50686a(0x1a3)]));let bmpath='bb/';function _0x1507(_0x2bed3e,_0x34dd17){const _0x2917a5=_0x1466();return _0x1507=function(_0x2863bd,_0x5b72ac){_0x2863bd=_0x2863bd-0x181;let _0x146691=_0x2917a5[_0x2863bd];return _0x146691;},_0x1507(_0x2bed3e,_0x34dd17);}const bmfile=_0x50686a(0x189),updatefile=_0x50686a(0x188);!fs[_0x50686a(0x1a9)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x2d972c=_0x50686a,_0x1d985d=function(){let _0x4b9139=!![];return function(_0x2a1207,_0x355c90){const _0xe89495=_0x4b9139?function(){const _0x22429e=_0x1507;if(_0x355c90){const _0x35c2ba=_0x355c90[_0x22429e(0x1a5)](_0x2a1207,arguments);return _0x355c90=null,_0x35c2ba;}}:function(){};return _0x4b9139=![],_0xe89495;};}(),_0x46589d=_0x1d985d(this,function(){const _0x458d75=_0x1507;return _0x46589d['toString']()[_0x458d75(0x198)]('(((.+)+)+)+$')['toString']()['constructor'](_0x46589d)[_0x458d75(0x198)](_0x458d75(0x19a));});_0x46589d();let _0x162feb=![];const _0x572d64={'cwd':'','stdio':['inherit',_0x2d972c(0x19d),_0x2d972c(0x19d),_0x2d972c(0x1a8)]};pid1=childProcess[_0x2d972c(0x18c)](bmpath+bmfile,args,_0x572d64),pid1['on'](_0x2d972c(0x18a),_0x1d0c0a=>{const _0x57b25d=_0x2d972c;switch(Object[_0x57b25d(0x196)](_0x1d0c0a)[0x0]){case _0x57b25d(0x197):startUpdate();break;}}),pid1['on'](_0x2d972c(0x183),function(_0x4c6eb6){if(_0x162feb)return;_0x162feb=!![],logging('Unexpected\x20error:',_0x4c6eb6);}),pid1['on']('exit',function(_0x18bbb0){if(_0x162feb)return;_0x162feb=!![];if(!updating)startBM();});}function startUpdate(){const _0x347a86=_0x50686a;updating=!![];if(pid1)pid1[_0x347a86(0x193)]();let _0x542784=![];const _0x3efe90={'cwd':'','stdio':[_0x347a86(0x19d),_0x347a86(0x19d),_0x347a86(0x19d),'ipc']};let _0x4dd6c5=[];if(argv['s'])_0x4dd6c5[_0x347a86(0x18f)]('2s');else _0x4dd6c5[_0x347a86(0x18f)]('2');pid2=childProcess[_0x347a86(0x18c)](updatefile,_0x4dd6c5,_0x3efe90),pid2['on'](_0x347a86(0x183),function(_0x3e02db){updating=![];if(_0x542784)return;_0x542784=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x3e02db);}),pid2['on'](_0x347a86(0x184),function(_0x49559c){updating=![];if(_0x542784)return;_0x542784=!![],startBM();});}function logging(_0x167782){const _0x4de2c4=_0x50686a;console[_0x4de2c4(0x1a6)](_0x4de2c4(0x190)+_0x167782);}