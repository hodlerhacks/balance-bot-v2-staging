const _0xaffb19=_0x4edd;(function(_0x2756f8,_0x4f1401){const _0x2d0636=_0x4edd,_0x2b75a2=_0x2756f8();while(!![]){try{const _0x413988=parseInt(_0x2d0636(0xad))/0x1+-parseInt(_0x2d0636(0x9c))/0x2+-parseInt(_0x2d0636(0xa4))/0x3+-parseInt(_0x2d0636(0xb0))/0x4*(parseInt(_0x2d0636(0xaf))/0x5)+-parseInt(_0x2d0636(0xa3))/0x6*(parseInt(_0x2d0636(0xb6))/0x7)+parseInt(_0x2d0636(0xb7))/0x8+parseInt(_0x2d0636(0x92))/0x9;if(_0x413988===_0x4f1401)break;else _0x2b75a2['push'](_0x2b75a2['shift']());}catch(_0x4437aa){_0x2b75a2['push'](_0x2b75a2['shift']());}}}(_0x300c,0x4c40c));const fs=require('fs'),argv=require('yargs/yargs')(process[_0xaffb19(0x8f)][_0xaffb19(0xb9)](0x2))[_0xaffb19(0x8f)],childProcess=require('child_process'),nodeversion=process[_0xaffb19(0xb4)][_0xaffb19(0x93)],minversion=0x10;nodeversion[_0xaffb19(0xba)]('.')[0x0]<minversion&&(console[_0xaffb19(0xa9)](),console[_0xaffb19(0xa9)](_0xaffb19(0x95)),console['log'](_0xaffb19(0xb1)+nodeversion+_0xaffb19(0xb5)+minversion+'\x20or\x20above\x20is\x20required'),console[_0xaffb19(0xa9)]('Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again'),console[_0xaffb19(0xa9)]('-----------------------------------------------------------------------------------'),console[_0xaffb19(0xa9)](),process['exit'](0x1));if(argv[_0xaffb19(0xa7)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0xaffb19(0x9b)](argv[_0xaffb19(0xa7)])&&(console[_0xaffb19(0xa9)](_0xaffb19(0x8b)+argv[_0xaffb19(0xa7)]+_0xaffb19(0xb2)),process[_0xaffb19(0x9e)](0x1));}let args=[];argv[_0xaffb19(0xa7)]&&(args['push'](_0xaffb19(0x97)),args['push'](argv[_0xaffb19(0xa7)]));function _0x300c(){const _0x2f5219=['155804VniAUE','reinstall','15oIGgmn','605456HvKyge','The\x20installed\x20Node.js\x20version\x20is\x20',',\x20must\x20be\x20a\x204\x20digit\x20number','install.js','versions',',\x20but\x20version\x20','91LLENaZ','563688rYKlpn','bb/','slice','split','Error:\x20Invalid\x20argument\x20','search','--user','host','argv','Balance\x20Bot\x20>\x20','keys','14469912YVuCSG','node','inherit','-----------------------------------------------------------------------------------','user','--port','bm.js','kill','message','test','1043594AyzGtk','--host','exit','toString','apply','(((.+)+)+)+$','update','183462eqsWdN','444933MGnrSb','push','constructor','port','error','log','fork','values','restore'];_0x300c=function(){return _0x2f5219;};return _0x300c();}argv[_0xaffb19(0x8e)]&&(args['push'](_0xaffb19(0x9d)),args[_0xaffb19(0xa5)](argv[_0xaffb19(0x8e)]));argv[_0xaffb19(0x96)]&&(args[_0xaffb19(0xa5)](_0xaffb19(0x8d)),args[_0xaffb19(0xa5)](argv[_0xaffb19(0x96)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0xaffb19(0xa5)]('-d');let bmpath=_0xaffb19(0xb8);function _0x4edd(_0x258f39,_0x5e7fbc){const _0x2ab700=_0x300c();return _0x4edd=function(_0x258c1f,_0x45395f){_0x258c1f=_0x258c1f-0x8b;let _0x300cdc=_0x2ab700[_0x258c1f];return _0x300cdc;},_0x4edd(_0x258f39,_0x5e7fbc);}const bmfile=_0xaffb19(0x98),updatefile=_0xaffb19(0xb3);!fs['existsSync'](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0x4d6273=_0xaffb19,_0x28a443=function(){let _0x24778a=!![];return function(_0x4d7ea2,_0x59bc36){const _0x5f3298=_0x24778a?function(){const _0x37eb0e=_0x4edd;if(_0x59bc36){const _0x1491bd=_0x59bc36[_0x37eb0e(0xa0)](_0x4d7ea2,arguments);return _0x59bc36=null,_0x1491bd;}}:function(){};return _0x24778a=![],_0x5f3298;};}(),_0x3ac4b0=_0x28a443(this,function(){const _0xb9e411=_0x4edd;return _0x3ac4b0[_0xb9e411(0x9f)]()[_0xb9e411(0x8c)](_0xb9e411(0xa1))['toString']()[_0xb9e411(0xa6)](_0x3ac4b0)[_0xb9e411(0x8c)]('(((.+)+)+)+$');});_0x3ac4b0();let _0x3ac5d4=![];const _0x45a980={'cwd':'','stdio':[_0x4d6273(0x94),'inherit',_0x4d6273(0x94),'ipc']};pid1=childProcess[_0x4d6273(0xaa)](bmpath+bmfile,args,_0x45a980),pid1['on'](_0x4d6273(0x9a),_0x52cea0=>{const _0x3de76d=_0x4d6273,_0x175610=Object[_0x3de76d(0xab)](_0x52cea0)[0x1]=='staging';switch(Object[_0x3de76d(0x91)](_0x52cea0)[0x0]){case _0x3de76d(0xa2):if(_0x175610)startUpdate('2s');else startUpdate('2');break;case _0x3de76d(0xae):if(_0x175610)startUpdate('3s');else startUpdate('3');break;case _0x3de76d(0xac):handleRestore();break;}}),pid1['on'](_0x4d6273(0xa8),function(_0x2b2af5){if(_0x3ac5d4)return;_0x3ac5d4=!![],logging('Unexpected\x20error:',_0x2b2af5);}),pid1['on'](_0x4d6273(0x9e),function(_0x17e18b){if(_0x3ac5d4)return;_0x3ac5d4=!![];if(!updating)startBM();});}function startUpdate(_0x2253f7){const _0x4ab154=_0xaffb19;updating=!![];if(pid1)pid1[_0x4ab154(0x99)]();let _0x2343d4=![];const _0x259370={'cwd':'','stdio':[_0x4ab154(0x94),_0x4ab154(0x94),_0x4ab154(0x94),'ipc']};let _0x1c2b51=[];if(staging)_0x1c2b51[_0x4ab154(0xa5)](_0x2253f7+'s');else _0x1c2b51[_0x4ab154(0xa5)](_0x2253f7);pid2=childProcess['fork'](updatefile,_0x1c2b51,_0x259370),pid2['on'](_0x4ab154(0xa8),function(_0x1eacf6){updating=![];if(_0x2343d4)return;_0x2343d4=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x1eacf6);}),pid2['on']('exit',function(_0x39fe3c){updating=![];if(_0x2343d4)return;_0x2343d4=!![],startBM();});}function handleRestore(){const _0x389ff2=_0xaffb19;if(pid1)pid1[_0x389ff2(0x99)]();}function logging(_0x1679ae){const _0x180f38=_0xaffb19;console[_0x180f38(0xa9)](_0x180f38(0x90)+_0x1679ae);}