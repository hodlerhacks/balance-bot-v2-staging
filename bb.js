const _0x49fdda=_0x16b8;(function(_0x52e855,_0x4111d8){const _0x214d54=_0x16b8,_0x48820c=_0x52e855();while(!![]){try{const _0x59eca7=-parseInt(_0x214d54(0x79))/0x1*(parseInt(_0x214d54(0x6d))/0x2)+-parseInt(_0x214d54(0x8c))/0x3+-parseInt(_0x214d54(0x65))/0x4+-parseInt(_0x214d54(0x89))/0x5*(-parseInt(_0x214d54(0x86))/0x6)+parseInt(_0x214d54(0x78))/0x7+-parseInt(_0x214d54(0x6f))/0x8*(parseInt(_0x214d54(0x8a))/0x9)+parseInt(_0x214d54(0x8b))/0xa;if(_0x59eca7===_0x4111d8)break;else _0x48820c['push'](_0x48820c['shift']());}catch(_0x4bf2ee){_0x48820c['push'](_0x48820c['shift']());}}}(_0x3e8b,0x2ed58));const fs=require('fs'),argv=require(_0x49fdda(0x84))(process[_0x49fdda(0x88)]['slice'](0x2))['argv'],childProcess=require('child_process'),nodeversion=process[_0x49fdda(0x83)][_0x49fdda(0x90)],minversion=0xe;nodeversion[_0x49fdda(0x6e)]('.')[0x0]<minversion&&(console[_0x49fdda(0x76)](),console[_0x49fdda(0x76)](_0x49fdda(0x80)),console[_0x49fdda(0x76)]('The\x20installed\x20Node.js\x20version\x20is\x20'+nodeversion+_0x49fdda(0x6b)+minversion+_0x49fdda(0x92)),console[_0x49fdda(0x76)]('Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again'),console['log'](_0x49fdda(0x80)),console['log'](),process[_0x49fdda(0x74)](0x1));if(argv[_0x49fdda(0x75)]){const pattern=/^[0-9]{2,4}$/;!pattern['test'](argv[_0x49fdda(0x75)])&&(console[_0x49fdda(0x76)](_0x49fdda(0x66)+argv[_0x49fdda(0x75)]+',\x20must\x20be\x20a\x204\x20digit\x20number'),process[_0x49fdda(0x74)](0x1));}let args=[];argv[_0x49fdda(0x75)]&&(args[_0x49fdda(0x8d)]('--port'),args[_0x49fdda(0x8d)](argv[_0x49fdda(0x75)]));argv['host']&&(args[_0x49fdda(0x8d)](_0x49fdda(0x8f)),args[_0x49fdda(0x8d)](argv[_0x49fdda(0x6c)]));argv['user']&&(args[_0x49fdda(0x8d)](_0x49fdda(0x71)),args['push'](argv[_0x49fdda(0x68)]));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args['push']('-d');let bmpath=_0x49fdda(0x7d);const bmfile=_0x49fdda(0x7e),updatefile=_0x49fdda(0x7c);!fs[_0x49fdda(0x8e)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function startBM(){const _0xf61560=_0x49fdda,_0x2928f8=function(){let _0x269b16=!![];return function(_0x19e306,_0xf799fb){const _0x36e1e7=_0x269b16?function(){const _0xa7bac4=_0x16b8;if(_0xf799fb){const _0x37eca9=_0xf799fb[_0xa7bac4(0x77)](_0x19e306,arguments);return _0xf799fb=null,_0x37eca9;}}:function(){};return _0x269b16=![],_0x36e1e7;};}(),_0x3b0ea0=_0x2928f8(this,function(){const _0x341f8a=_0x16b8;return _0x3b0ea0[_0x341f8a(0x87)]()[_0x341f8a(0x64)]('(((.+)+)+)+$')[_0x341f8a(0x87)]()[_0x341f8a(0x70)](_0x3b0ea0)['search'](_0x341f8a(0x91));});_0x3b0ea0();let _0x46c274=![];const _0x21cb7b={'cwd':'','stdio':['inherit',_0xf61560(0x69),_0xf61560(0x69),_0xf61560(0x73)]};pid1=childProcess[_0xf61560(0x7f)](bmpath+bmfile,args,_0x21cb7b),pid1['on'](_0xf61560(0x72),_0x44a496=>{const _0x32c70c=_0xf61560;switch(Object[_0x32c70c(0x85)](_0x44a496)[0x0]){case'update':startUpdate('2');break;case _0x32c70c(0x82):startUpdate('3');break;case _0x32c70c(0x6a):handleRestore();break;}}),pid1['on'](_0xf61560(0x67),function(_0x199527){if(_0x46c274)return;_0x46c274=!![],logging('Unexpected\x20error:',_0x199527);}),pid1['on'](_0xf61560(0x74),function(_0x1157e1){if(_0x46c274)return;_0x46c274=!![];if(!updating)startBM();});}function startUpdate(_0x138e49){const _0xdbc9c2=_0x49fdda;updating=!![];if(pid1)pid1[_0xdbc9c2(0x7a)]();let _0x5df49b=![];const _0x1e596e={'cwd':'','stdio':[_0xdbc9c2(0x69),_0xdbc9c2(0x69),'inherit',_0xdbc9c2(0x73)]};let _0x32db66=[];if(staging)_0x32db66['push'](_0x138e49+'s');else _0x32db66[_0xdbc9c2(0x8d)](_0x138e49);pid2=childProcess[_0xdbc9c2(0x7f)](updatefile,_0x32db66,_0x1e596e),pid2['on']('error',function(_0x32d4b9){const _0x1b9460=_0xdbc9c2;updating=![];if(_0x5df49b)return;_0x5df49b=!![],logging(_0x1b9460(0x81),_0x32d4b9);}),pid2['on'](_0xdbc9c2(0x74),function(_0x4e0da6){updating=![];if(_0x5df49b)return;_0x5df49b=!![],startBM();});}function _0x3e8b(){const _0x5a9f23=['constructor','--user','message','ipc','exit','port','log','apply','1033550qVIrJY','2jYjVBN','kill','Balance\x20Bot\x20>\x20','install.js','bb/','bm.js','fork','-----------------------------------------------------------------------------------','Error\x20while\x20updating\x20Balance\x20Bot:','reinstall','versions','yargs/yargs','keys','1032ACGFhs','toString','argv','7955drHZom','85149YpIWfA','5529900fbrKaF','582180xvfMkp','push','existsSync','--host','node','(((.+)+)+)+$','\x20or\x20above\x20is\x20required','search','527204RtnMqu','Error:\x20Invalid\x20argument\x20','error','user','inherit','restore',',\x20but\x20version\x20','host','257918wlSVPm','split','168xKZwKc'];_0x3e8b=function(){return _0x5a9f23;};return _0x3e8b();}function _0x16b8(_0xda2229,_0x5a0286){const _0x8a230=_0x3e8b();return _0x16b8=function(_0x57d344,_0x4848c2){_0x57d344=_0x57d344-0x64;let _0x3e8bc2=_0x8a230[_0x57d344];return _0x3e8bc2;},_0x16b8(_0xda2229,_0x5a0286);}function handleRestore(){const _0x26d794=_0x49fdda;if(pid1)pid1[_0x26d794(0x7a)]();}function logging(_0x54b27b){const _0x24cc53=_0x49fdda;console[_0x24cc53(0x76)](_0x24cc53(0x7b)+_0x54b27b);}