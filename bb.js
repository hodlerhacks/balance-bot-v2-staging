const _0x65517c=_0x7d54;(function(_0x14f3c2,_0x35e097){const _0x37b765=_0x7d54,_0x20d48d=_0x14f3c2();while(!![]){try{const _0x2fdeff=parseInt(_0x37b765(0xb3))/0x1+parseInt(_0x37b765(0x9a))/0x2*(parseInt(_0x37b765(0x92))/0x3)+-parseInt(_0x37b765(0xaa))/0x4*(parseInt(_0x37b765(0xbc))/0x5)+parseInt(_0x37b765(0xae))/0x6+parseInt(_0x37b765(0xa4))/0x7+parseInt(_0x37b765(0xb6))/0x8*(-parseInt(_0x37b765(0x95))/0x9)+-parseInt(_0x37b765(0x93))/0xa;if(_0x2fdeff===_0x35e097)break;else _0x20d48d['push'](_0x20d48d['shift']());}catch(_0x56013f){_0x20d48d['push'](_0x20d48d['shift']());}}}(_0x3f48,0x28b15));const fs=require('fs'),argv=require('yargs/yargs')(process[_0x65517c(0xb1)][_0x65517c(0xb5)](0x2))['argv'],childProcess=require(_0x65517c(0xa3)),nodeversion=process[_0x65517c(0x96)][_0x65517c(0x9d)],minversion=0x10;nodeversion['split']('.')[0x0]<minversion&&(console['log'](),console[_0x65517c(0xa6)](_0x65517c(0x91)),console[_0x65517c(0xa6)](_0x65517c(0xb7)+nodeversion+_0x65517c(0xb4)+minversion+_0x65517c(0xbb)),console['log'](_0x65517c(0xa8)),console['log'](_0x65517c(0x91)),console[_0x65517c(0xa6)](),process[_0x65517c(0x9e)](0x1));if(argv['port']){const pattern=/^[0-9]{2,4}$/;!pattern[_0x65517c(0xa5)](argv[_0x65517c(0xb0)])&&(console[_0x65517c(0xa6)](_0x65517c(0x9f)+argv[_0x65517c(0xb0)]+_0x65517c(0x9b)),process[_0x65517c(0x9e)](0x1));}let args=[];argv[_0x65517c(0xb0)]&&(args[_0x65517c(0xad)](_0x65517c(0xaf)),args[_0x65517c(0xad)](argv[_0x65517c(0xb0)]));argv[_0x65517c(0xb9)]&&(args[_0x65517c(0xad)](_0x65517c(0x99)),args[_0x65517c(0xad)](argv[_0x65517c(0xb9)]));argv[_0x65517c(0x9c)]&&(args['push'](_0x65517c(0xc0)),args[_0x65517c(0xad)](argv[_0x65517c(0x9c)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x65517c(0xad)]('-d');let bmpath=_0x65517c(0xa2);const bmfile=_0x65517c(0x94),updatefile=_0x65517c(0xbd);!fs['existsSync'](bmpath+bmfile)&&(bmpath='');function _0x7d54(_0x2fb201,_0x48d2fe){const _0x41a21b=_0x3f48();return _0x7d54=function(_0x3b4af3,_0x478b69){_0x3b4af3=_0x3b4af3-0x90;let _0x3f483d=_0x41a21b[_0x3b4af3];return _0x3f483d;},_0x7d54(_0x2fb201,_0x48d2fe);}let pid1,pid2,updating=![];startBM();function _0x3f48(){const _0x30159f=['Balance\x20Bot\x20>\x20','\x20or\x20above\x20is\x20required','1362430KjuqUL','install.js','error','toString','--user','Error\x20while\x20updating\x20Balance\x20Bot:','(((.+)+)+)+$','-----------------------------------------------------------------------------------','3sLVHHj','1389100RfzmyI','bm.js','4581NzpYqo','versions','values','Unexpected\x20error:','--host','218702UOaFJy',',\x20must\x20be\x20a\x204\x20digit\x20number','user','node','exit','Error:\x20Invalid\x20argument\x20','restore','ipc','bb/','child_process','389431FLtflY','test','log','inherit','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','fork','4xlsmZf','keys','search','push','1612320fjsSki','--port','port','argv','staging','281290YlluMT',',\x20but\x20version\x20','slice','2152Ifyoyk','The\x20installed\x20Node.js\x20version\x20is\x20','kill','host'];_0x3f48=function(){return _0x30159f;};return _0x3f48();}function startBM(){const _0x329628=_0x65517c,_0x3dbcfa=function(){let _0x386bb1=!![];return function(_0x36050a,_0x22d664){const _0x451dc2=_0x386bb1?function(){if(_0x22d664){const _0xbdfb2a=_0x22d664['apply'](_0x36050a,arguments);return _0x22d664=null,_0xbdfb2a;}}:function(){};return _0x386bb1=![],_0x451dc2;};}(),_0x44f238=_0x3dbcfa(this,function(){const _0x2c7807=_0x7d54;return _0x44f238[_0x2c7807(0xbf)]()[_0x2c7807(0xac)]('(((.+)+)+)+$')['toString']()['constructor'](_0x44f238)[_0x2c7807(0xac)](_0x2c7807(0x90));});_0x44f238();let _0xbd01a2=![];const _0x1df821={'cwd':'','stdio':[_0x329628(0xa7),_0x329628(0xa7),_0x329628(0xa7),_0x329628(0xa1)]};pid1=childProcess['fork'](bmpath+bmfile,args,_0x1df821),pid1['on']('message',_0x15bb85=>{const _0x2a5c91=_0x329628,_0x68ef64=Object[_0x2a5c91(0x97)](_0x15bb85)[0x1]==_0x2a5c91(0xb2);switch(Object[_0x2a5c91(0xab)](_0x15bb85)[0x0]){case'update':if(_0x68ef64)startUpdate('2s');else startUpdate('2');break;case'reinstall':if(_0x68ef64)startUpdate('3s');else startUpdate('3');break;case _0x2a5c91(0xa0):handleRestore();break;}}),pid1['on'](_0x329628(0xbe),function(_0x2089cb){const _0x2965d5=_0x329628;if(_0xbd01a2)return;_0xbd01a2=!![],logging(_0x2965d5(0x98),_0x2089cb);}),pid1['on'](_0x329628(0x9e),function(_0x43f1bb){if(_0xbd01a2)return;_0xbd01a2=!![];if(!updating)startBM();});}function startUpdate(_0x42823c){const _0x24bbab=_0x65517c;updating=!![];if(pid1)pid1[_0x24bbab(0xb8)]();let _0x5ae868=![];const _0x3c5c59={'cwd':'','stdio':[_0x24bbab(0xa7),_0x24bbab(0xa7),'inherit',_0x24bbab(0xa1)]};let _0x1222b8=[];if(staging)_0x1222b8[_0x24bbab(0xad)](_0x42823c+'s');else _0x1222b8[_0x24bbab(0xad)](_0x42823c);pid2=childProcess[_0x24bbab(0xa9)](updatefile,_0x1222b8,_0x3c5c59),pid2['on'](_0x24bbab(0xbe),function(_0x4a5d63){const _0xdcd23a=_0x24bbab;updating=![];if(_0x5ae868)return;_0x5ae868=!![],logging(_0xdcd23a(0xc1),_0x4a5d63);}),pid2['on']('exit',function(_0x5c1fb6){updating=![];if(_0x5ae868)return;_0x5ae868=!![],startBM();});}function handleRestore(){if(pid1)pid1['kill']();}function logging(_0x26befa){const _0x308c98=_0x65517c;console[_0x308c98(0xa6)](_0x308c98(0xba)+_0x26befa);}