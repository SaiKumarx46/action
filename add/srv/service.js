const cds = require('@sap/cds');
const { parseArgs } = require('util');
module.exports = cds.service.impl(async function () {
    let {
        add   
    } = this.entities;
    // const c5re = await cds.connect.to('iflow1');
  

this.on('READ', add.drafts, async (req,next) => {
     debugger;
    if(!req){
    // var data1 = await SELECT.from(stud.drafts);
        const sum = req.data.firstnumber + req.data.secondnumber;
    console.log(req);
    await cds.update(add.drafts)
    .set({result:sum }) // Update with new dat a
    .where({ id: req.data.id});
}
    return next();
});

        //debugger

      
});



// const cds = require('@sap/cds');
// const { log } = require('console');
// debugger
// module.exports = cds.service.impl(async function () {
//     let {
//         add
//     } = this.entities;
//     const c5re = await cds.connect.to('iflow1');
   
//     var data_recieved = true;
//         debugger;    
//         this.before('READ', cust, async (req) => {
//             debugger;
//             if (data_recieved == true) {
//             try {
//                 const resp = await c5re.get('/odata/v4/banksrv/cust');
//                 debugger;
//                 console.log(resp);//check resp
//                 const read_api = resp.value;
//                 var arr = [];

//                 // read_api.forEach(element => {
//                 //     arr.push({
//                 //         cust_id: resp.value[0].cust_id,
//                 //         cust_name: resp.value[1].cust_name
//                 //     })
//                 // });

//                 await INSERT.into(cust).entries(read_api);
//                 console.log(read_api);
//                 data_recieved = false;
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         })
//     })


