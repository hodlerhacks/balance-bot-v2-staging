const _0x364fc2=_0x4c97;(function(_0x3de6cd,_0x3331ab){const _0x2252a4=_0x4c97,_0x5a45e6=_0x3de6cd();while(!![]){try{const _0x2fbc31=-parseInt(_0x2252a4(0x112))/0x1*(-parseInt(_0x2252a4(0x111))/0x2)+-parseInt(_0x2252a4(0x106))/0x3+-parseInt(_0x2252a4(0x113))/0x4+parseInt(_0x2252a4(0x107))/0x5*(parseInt(_0x2252a4(0x110))/0x6)+-parseInt(_0x2252a4(0x108))/0x7+-parseInt(_0x2252a4(0x10b))/0x8*(-parseInt(_0x2252a4(0x105))/0x9)+-parseInt(_0x2252a4(0x104))/0xa*(-parseInt(_0x2252a4(0x10d))/0xb);if(_0x2fbc31===_0x3331ab)break;else _0x5a45e6['push'](_0x5a45e6['shift']());}catch(_0xa91b27){_0x5a45e6['push'](_0x5a45e6['shift']());}}}(_0x49b4,0x209d0));const _0x1e4caf=function(){let _0x440ca3=!![];return function(_0x189094,_0x4cf0f7){const _0x37dd46=_0x440ca3?function(){const _0x1cb084=_0x4c97;if(_0x4cf0f7){const _0x4f4679=_0x4cf0f7[_0x1cb084(0x115)](_0x189094,arguments);return _0x4cf0f7=null,_0x4f4679;}}:function(){};return _0x440ca3=![],_0x37dd46;};}(),_0x583875=_0x1e4caf(this,function(){const _0x10fd76=_0x4c97;return _0x583875[_0x10fd76(0x11a)]()[_0x10fd76(0x10a)](_0x10fd76(0x10f))['toString']()[_0x10fd76(0x114)](_0x583875)[_0x10fd76(0x10a)](_0x10fd76(0x10f));});function _0x4c97(_0x186816,_0x55bd31){const _0x5c9a34=_0x49b4();return _0x4c97=function(_0x583875,_0x1e4caf){_0x583875=_0x583875-0x103;let _0x49b426=_0x5c9a34[_0x583875];return _0x49b426;},_0x4c97(_0x186816,_0x55bd31);}_0x583875();const clients=[],addClient=(_0x3c34f1,_0x35cacb,_0x3d7601)=>{const _0x2dba4f=_0x4c97;let _0x2d66dd;const _0xfa0c08=existsClient(_0x35cacb,_0x3d7601);return _0xfa0c08?_0x2d66dd=updateClient(_0xfa0c08['id'],{'id':_0x3c34f1,'server':'connected'}):(_0x2d66dd={'id':_0x3c34f1,'uuid':_0x35cacb,'bot':_0x3d7601,'server':_0x2dba4f(0x10c)},clients['push'](_0x2d66dd)),_0x2d66dd;},updateClient=(_0x56da29,_0x354603)=>{let _0x543fe5=clients['findIndex'](_0x5d330b=>_0x5d330b['id']==_0x56da29);return _0x543fe5!=-0x1&&(clients[_0x543fe5]={...clients[_0x543fe5],..._0x354603}),clients[_0x543fe5];},existsClient=(_0x32d096,_0x39bb6c)=>{const _0x5152bf=_0x4c97;let _0x15dcd8=![];return clients[_0x5152bf(0x117)](_0x1ebba3=>{const _0x482541=_0x5152bf;_0x1ebba3[_0x482541(0x103)]===_0x32d096&&_0x1ebba3[_0x482541(0x116)]===_0x39bb6c&&(_0x15dcd8=_0x1ebba3);}),_0x15dcd8;},removeClient=_0x276f4a=>{const _0x153df1=_0x4c97;let _0x2d12bf=clients[_0x153df1(0x118)](_0x250a95=>_0x250a95['id']===_0x276f4a);if(_0x2d12bf)return _0x2d12bf[_0x153df1(0x119)]='disconnected',clients;},getClient=_0x57954f=>{const _0x1d037c=_0x4c97;return clients[_0x1d037c(0x118)](_0x42ca93=>_0x42ca93['id']===_0x57954f&&_0x42ca93['server']!==_0x1d037c(0x10e));},getAllClients=(_0x1a1660=![])=>{const _0x44e4f1=_0x4c97;if(_0x1a1660)return clients;else return clients[_0x44e4f1(0x109)](_0x48551b=>_0x48551b[_0x44e4f1(0x119)]!==_0x44e4f1(0x10e));},getClientsWithBotID=_0x6ca728=>{const _0xa12ac6=_0x4c97;return clients['filter'](_0x2fde35=>_0x2fde35[_0xa12ac6(0x116)]===_0x6ca728&&_0x2fde35[_0xa12ac6(0x119)]!==_0xa12ac6(0x10e));},getClientsWithUuid=_0x31e580=>{const _0x257d1f=_0x4c97;return clients[_0x257d1f(0x109)](_0x2f1ed2=>_0x2f1ed2['uuid']===_0x31e580&&_0x2f1ed2[_0x257d1f(0x119)]!=='disconnected');};module[_0x364fc2(0x11b)]={'addClient':addClient,'getAllClients':getAllClients,'removeClient':removeClient,'getClient':getClient,'getClientsWithBotID':getClientsWithBotID,'getClientsWithUuid':getClientsWithUuid};function _0x49b4(){const _0xd7e1dd=['toString','exports','uuid','133090BefZNU','393543dirrqO','613899ZeqMYF','5NlpyNE','1666721YsngBv','filter','search','16fgOEow','starting','407IBqJsH','disconnected','(((.+)+)+)+$','136146FDFebU','30bUqCrq','4346QYifuj','365792hvDOwC','constructor','apply','bot','forEach','find','server'];_0x49b4=function(){return _0xd7e1dd;};return _0x49b4();}