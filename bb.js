const _0x491dfb=_0x4380;(function(_0x3afe43,_0x2b860d){const _0x17ae35=_0x4380,_0x3aa166=_0x3afe43();while(!![]){try{const _0x5f5245=-parseInt(_0x17ae35(0x9b))/0x1*(parseInt(_0x17ae35(0x87))/0x2)+-parseInt(_0x17ae35(0xb2))/0x3*(parseInt(_0x17ae35(0x8d))/0x4)+-parseInt(_0x17ae35(0xa3))/0x5+parseInt(_0x17ae35(0x9e))/0x6+-parseInt(_0x17ae35(0xa9))/0x7*(-parseInt(_0x17ae35(0x9c))/0x8)+-parseInt(_0x17ae35(0xac))/0x9+-parseInt(_0x17ae35(0xa6))/0xa*(-parseInt(_0x17ae35(0x99))/0xb);if(_0x5f5245===_0x2b860d)break;else _0x3aa166['push'](_0x3aa166['shift']());}catch(_0xd2af97){_0x3aa166['push'](_0x3aa166['shift']());}}}(_0xf0c9,0x2e281));const _0x48ddfe=function(){let _0xd45e02=!![];return function(_0x15b640,_0x7ca624){const _0x57b779=_0xd45e02?function(){const _0x3ddf4e=_0x4380;if(_0x7ca624){const _0x485dad=_0x7ca624[_0x3ddf4e(0x9a)](_0x15b640,arguments);return _0x7ca624=null,_0x485dad;}}:function(){};return _0xd45e02=![],_0x57b779;};}(),_0x3650b7=_0x48ddfe(this,function(){const _0x432d39=_0x4380;return _0x3650b7[_0x432d39(0xaf)]()[_0x432d39(0xa0)](_0x432d39(0x7f))['toString']()[_0x432d39(0x7e)](_0x3650b7)[_0x432d39(0xa0)]('(((.+)+)+)+$');});function _0x4380(_0x2ab07f,_0x3fe9b4){const _0x3904fe=_0xf0c9();return _0x4380=function(_0x3650b7,_0x48ddfe){_0x3650b7=_0x3650b7-0x7d;let _0xf0c9bd=_0x3904fe[_0x3650b7];return _0xf0c9bd;},_0x4380(_0x2ab07f,_0x3fe9b4);}_0x3650b7();const fs=require('fs'),argv=require('yargs/yargs')(process[_0x491dfb(0x9f)][_0x491dfb(0x80)](0x2))[_0x491dfb(0x9f)],childProcess=require(_0x491dfb(0x98)),nodeversion=process[_0x491dfb(0xa4)][_0x491dfb(0xa7)],minversion=0x10;nodeversion['split']('.')[0x0]<minversion&&(console[_0x491dfb(0x8a)](),console[_0x491dfb(0x8a)]('-----------------------------------------------------------------------------------'),console[_0x491dfb(0x8a)](_0x491dfb(0x7d)+nodeversion+_0x491dfb(0x90)+minversion+_0x491dfb(0xae)),console[_0x491dfb(0x8a)](_0x491dfb(0xa2)),console[_0x491dfb(0x8a)](_0x491dfb(0x88)),console[_0x491dfb(0x8a)](),process[_0x491dfb(0xa8)](0x1));function _0xf0c9(){const _0x4dccfc=['terminate','\x20or\x20above\x20is\x20required','toString','install.js','fork','564429Gjsprq','error','bm.js','The\x20installed\x20Node.js\x20version\x20is\x20','constructor','(((.+)+)+)+$','slice','update','push','Automatically\x20restarting\x20BM','user','message','Error\x20while\x20updating\x20Balance\x20Bot:','2cxuLpo','-----------------------------------------------------------------------------------','--user','log','--port','test','4epIJLb','SIGINT','host',',\x20but\x20version\x20','Unexpected\x20error:','staging','kill','ipc','inherit','restore','port','child_process','50237NUsoot','apply','11513oZqlHd','911888kNIomC','bb/','1848144dpkgiD','argv','search','--host','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','715420xxcFOF','versions','Error:\x20Invalid\x20argument\x20','390rBHmtm','node','exit','7wIIIoJ',',\x20must\x20be\x20a\x204\x20digit\x20number','existsSync','614934uEjCLC'];_0xf0c9=function(){return _0x4dccfc;};return _0xf0c9();}if(argv[_0x491dfb(0x97)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x491dfb(0x8c)](argv[_0x491dfb(0x97)])&&(console[_0x491dfb(0x8a)](_0x491dfb(0xa5)+argv[_0x491dfb(0x97)]+_0x491dfb(0xaa)),process[_0x491dfb(0xa8)](0x1));}let args=[];argv[_0x491dfb(0x97)]&&(args[_0x491dfb(0x82)](_0x491dfb(0x8b)),args[_0x491dfb(0x82)](argv[_0x491dfb(0x97)]));argv[_0x491dfb(0x8f)]&&(args['push'](_0x491dfb(0xa1)),args['push'](argv['host']));argv[_0x491dfb(0x84)]&&(args['push'](_0x491dfb(0x89)),args[_0x491dfb(0x82)](argv[_0x491dfb(0x84)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x491dfb(0x82)]('-d');let bmpath=_0x491dfb(0x9d);const bmfile=_0x491dfb(0xb4),updatefile=_0x491dfb(0xb0);!fs[_0x491dfb(0xab)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![],terminating=![];process['on'](_0x491dfb(0xa8),async()=>{handleTerminate();}),process['on']('SIGTERM',async()=>{handleTerminate();}),process['on'](_0x491dfb(0x8e),async()=>{handleTerminate();}),startBM();function startBM(){const _0x471b84=_0x491dfb;let _0xc49c96=![];const _0x2d52f2={'cwd':'','stdio':[_0x471b84(0x95),_0x471b84(0x95),_0x471b84(0x95),_0x471b84(0x94)]};pid1=childProcess[_0x471b84(0xb1)](bmpath+bmfile,args,_0x2d52f2),pid1['on'](_0x471b84(0x85),_0x4ead18=>{const _0xf0025a=_0x471b84,_0x54db06=Object['values'](_0x4ead18)[0x1]==_0xf0025a(0x92);switch(Object['keys'](_0x4ead18)[0x0]){case _0xf0025a(0x81):if(_0x54db06)startUpdate('2s');else startUpdate('2');break;case'reinstall':if(_0x54db06)startUpdate('3s');else startUpdate('3');break;case _0xf0025a(0x96):handleRestore();break;case _0xf0025a(0xad):handleTerminate();break;}}),pid1['on']('error',function(_0x109e5a){const _0x31e3b8=_0x471b84;if(_0xc49c96)return;_0xc49c96=!![],logging(_0x31e3b8(0x91),_0x109e5a);}),pid1['on'](_0x471b84(0xa8),function(_0x4539a4){const _0x7bf22c=_0x471b84;if(terminating)return;if(updating)return;if(_0xc49c96)return;_0xc49c96=!![],console[_0x7bf22c(0x8a)](_0x7bf22c(0x83)),startBM();});}async function handleTerminate(){const _0x287ea3=_0x491dfb;stopBM(),await sleep(0x3e8),process[_0x287ea3(0xa8)](0x0);}function stopBM(){const _0xda5336=_0x491dfb;terminating=!![];if(pid1)pid1[_0xda5336(0x93)]();pid1=null;}function startUpdate(_0xa0a804){const _0x441fdb=_0x491dfb;updating=!![],stopBM();let _0x3a92af=![];const _0x457b9e={'cwd':'','stdio':[_0x441fdb(0x95),'inherit','inherit',_0x441fdb(0x94)]};let _0x28665b=[];if(staging)_0x28665b[_0x441fdb(0x82)](_0xa0a804+'s');else _0x28665b[_0x441fdb(0x82)](_0xa0a804);pid2=childProcess[_0x441fdb(0xb1)](updatefile,_0x28665b,_0x457b9e),pid2['on'](_0x441fdb(0xb3),function(_0x5d8001){const _0xa1d754=_0x441fdb;updating=![];if(_0x3a92af)return;_0x3a92af=!![],logging(_0xa1d754(0x86),_0x5d8001);}),pid2['on'](_0x441fdb(0xa8),function(_0x30c21e){updating=![];if(_0x3a92af)return;_0x3a92af=!![],terminating=![],startBM();});}function handleRestore(){const _0x3e34c8=_0x491dfb;if(pid1)pid1[_0x3e34c8(0x93)]();}function logging(_0x54e2fc){console['log']('Balance\x20Bot\x20>\x20'+_0x54e2fc);}function sleep(_0x58be51){return new Promise(_0x384bb7=>setTimeout(_0x384bb7,_0x58be51));}