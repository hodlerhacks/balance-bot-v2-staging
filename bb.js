const _0x292078=_0x3f05;(function(_0x2f800e,_0x1b2c61){const _0x421a09=_0x3f05,_0x553112=_0x2f800e();while(!![]){try{const _0x30bfd5=-parseInt(_0x421a09(0x140))/0x1+-parseInt(_0x421a09(0x151))/0x2*(parseInt(_0x421a09(0x14f))/0x3)+-parseInt(_0x421a09(0x14b))/0x4*(-parseInt(_0x421a09(0x134))/0x5)+parseInt(_0x421a09(0x138))/0x6*(-parseInt(_0x421a09(0x150))/0x7)+parseInt(_0x421a09(0x161))/0x8*(-parseInt(_0x421a09(0x155))/0x9)+parseInt(_0x421a09(0x153))/0xa*(-parseInt(_0x421a09(0x145))/0xb)+-parseInt(_0x421a09(0x15d))/0xc*(-parseInt(_0x421a09(0x15e))/0xd);if(_0x30bfd5===_0x1b2c61)break;else _0x553112['push'](_0x553112['shift']());}catch(_0x2f0f09){_0x553112['push'](_0x553112['shift']());}}}(_0x15e8,0xec54e));function _0x15e8(){const _0x346203=['message','constructor','11554404cswxMp','65oUmjGp','reinstall','test','568ROtEzP','exit','port','--port','argv','yargs/yargs','2112925Ntubbc',',\x20but\x20version\x20','(((.+)+)+)+$','apply','6HDKsyY','log','bb/','node','host','-----------------------------------------------------------------------------------','install.js','keys','1326290HMTrFv','error','ipc','\x20or\x20above\x20is\x20required','Error:\x20Invalid\x20argument\x20','2354vvTiCg','fork','kill','push','Please\x20install\x20a\x20recent\x20version\x20of\x20Node.js\x20and\x20then\x20start\x20Balance\x20Bot\x20again','inherit','4RxpfQq','Balance\x20Bot\x20>\x20','restore','child_process','4236kNJfjp','5601120dzSUcK','886zqkGnN','existsSync','40010SAjUlV','toString','83754TkSBqx','Unexpected\x20error:',',\x20must\x20be\x20a\x204\x20digit\x20number','values','bm.js','--host'];_0x15e8=function(){return _0x346203;};return _0x15e8();}const fs=require('fs'),argv=require(_0x292078(0x166))(process[_0x292078(0x165)]['slice'](0x2))[_0x292078(0x165)],childProcess=require(_0x292078(0x14e)),nodeversion=process['versions'][_0x292078(0x13b)],minversion=0x10;nodeversion['split']('.')[0x0]<minversion&&(console[_0x292078(0x139)](),console[_0x292078(0x139)](_0x292078(0x13d)),console['log']('The\x20installed\x20Node.js\x20version\x20is\x20'+nodeversion+_0x292078(0x135)+minversion+_0x292078(0x143)),console[_0x292078(0x139)](_0x292078(0x149)),console[_0x292078(0x139)](_0x292078(0x13d)),console[_0x292078(0x139)](),process['exit'](0x1));if(argv[_0x292078(0x163)]){const pattern=/^[0-9]{2,4}$/;!pattern[_0x292078(0x160)](argv[_0x292078(0x163)])&&(console[_0x292078(0x139)](_0x292078(0x144)+argv[_0x292078(0x163)]+_0x292078(0x157)),process['exit'](0x1));}let args=[];argv[_0x292078(0x163)]&&(args[_0x292078(0x148)](_0x292078(0x164)),args[_0x292078(0x148)](argv['port']));argv[_0x292078(0x13c)]&&(args[_0x292078(0x148)](_0x292078(0x15a)),args['push'](argv['host']));argv['user']&&(args[_0x292078(0x148)]('--user'),args[_0x292078(0x148)](argv['user']));const staging=argv['s']||![],debugging=argv['d']||![];debugging&&args[_0x292078(0x148)]('-d');let bmpath=_0x292078(0x13a);const bmfile=_0x292078(0x159),updatefile=_0x292078(0x13e);!fs[_0x292078(0x152)](bmpath+bmfile)&&(bmpath='');let pid1,pid2,updating=![];startBM();function _0x3f05(_0x17bc07,_0x5cf3d7){const _0x252974=_0x15e8();return _0x3f05=function(_0x192caf,_0x12a1cd){_0x192caf=_0x192caf-0x134;let _0x15e878=_0x252974[_0x192caf];return _0x15e878;},_0x3f05(_0x17bc07,_0x5cf3d7);}function startBM(){const _0x408768=_0x292078,_0x166910=function(){let _0x25866b=!![];return function(_0x21b5ad,_0x13112d){const _0xadd200=_0x25866b?function(){const _0x1fcbcf=_0x3f05;if(_0x13112d){const _0x113002=_0x13112d[_0x1fcbcf(0x137)](_0x21b5ad,arguments);return _0x13112d=null,_0x113002;}}:function(){};return _0x25866b=![],_0xadd200;};}(),_0x368de=_0x166910(this,function(){const _0x25d08e=_0x3f05;return _0x368de[_0x25d08e(0x154)]()['search'](_0x25d08e(0x136))[_0x25d08e(0x154)]()[_0x25d08e(0x15c)](_0x368de)['search'](_0x25d08e(0x136));});_0x368de();let _0x35b4ea=![];const _0x53c09e={'cwd':'','stdio':[_0x408768(0x14a),_0x408768(0x14a),_0x408768(0x14a),_0x408768(0x142)]};pid1=childProcess[_0x408768(0x146)](bmpath+bmfile,args,_0x53c09e),pid1['on'](_0x408768(0x15b),_0x3a8c24=>{const _0x116b86=_0x408768,_0x4f3372=Object[_0x116b86(0x158)](_0x3a8c24)[0x1]=='staging';switch(Object[_0x116b86(0x13f)](_0x3a8c24)[0x0]){case'update':if(_0x4f3372)startUpdate('2s');else startUpdate('2');break;case _0x116b86(0x15f):if(_0x4f3372)startUpdate('3s');else startUpdate('3');break;case _0x116b86(0x14d):handleRestore();break;}}),pid1['on']('error',function(_0x125172){const _0x5cce48=_0x408768;if(_0x35b4ea)return;_0x35b4ea=!![],logging(_0x5cce48(0x156),_0x125172);}),pid1['on'](_0x408768(0x162),function(_0x50dff2){if(_0x35b4ea)return;_0x35b4ea=!![];if(!updating)startBM();});}function startUpdate(_0x143e8e){const _0x979a59=_0x292078;updating=!![];if(pid1)pid1[_0x979a59(0x147)]();let _0x4f156f=![];const _0x3ad2e5={'cwd':'','stdio':[_0x979a59(0x14a),_0x979a59(0x14a),_0x979a59(0x14a),_0x979a59(0x142)]};let _0x396d3b=[];if(staging)_0x396d3b[_0x979a59(0x148)](_0x143e8e+'s');else _0x396d3b[_0x979a59(0x148)](_0x143e8e);pid2=childProcess[_0x979a59(0x146)](updatefile,_0x396d3b,_0x3ad2e5),pid2['on'](_0x979a59(0x141),function(_0x5ea3bf){updating=![];if(_0x4f156f)return;_0x4f156f=!![],logging('Error\x20while\x20updating\x20Balance\x20Bot:',_0x5ea3bf);}),pid2['on'](_0x979a59(0x162),function(_0x4a2485){updating=![];if(_0x4f156f)return;_0x4f156f=!![],startBM();});}function handleRestore(){const _0x311a5b=_0x292078;if(pid1)pid1[_0x311a5b(0x147)]();}function logging(_0x160c8f){const _0xa8cc12=_0x292078;console[_0xa8cc12(0x139)](_0xa8cc12(0x14c)+_0x160c8f);}