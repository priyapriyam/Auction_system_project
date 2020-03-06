const knex = require('../model/knex')
module.exports = (app)=> {
    app.post('/post_data',(req,res) => {
        table_details = {
            auction_id:req.body.auction_id,
            auction_name:req.body.auction_name,
            auction_price:req.body.auction_price
        }
        knex.post_data(details)
        .then((result) => {
            res.send(result)
            console.log("data_posted")
        })
        .catch((err) => {
            res.send(err)
            console.log("error")
        })
    });

    app.get('/data_read/:auction_id',(req,res) => {
        let auction_id = req.params.auction_id
        knex.get_data()
        .then((result) => {
            let prize = result[0]["auction_price"]
            // console.log(prize);
            let id = result[0]["auction_id"]
            // let max=knex('bid_price_Table').max('bid_value ').where("auction_id",id)
            //     console.log(max)
            if (prize < req.body.bid_value){
                var bidders_details = {
                    bidder_name:req.body.bidder_name,
                    bid_value :req.body.bid_value,
                    auction_id : id}
            }
            else{
                console.log('prize is less...')
            }
            knex.post_details()
            .then((result)=>{
                res.send(result)
            })
            .catch((err)=>{
                res.send(err)
            })
        })
        .catch((err)=>{
            res.send("error") 
        });
    })

    app.get('/fatch_data/:id',(req,res) => {
        let id = req.params.id;
        knex.read_data(id)
        .then((result) => {
            var max = (result[0]['max'])
            knex.max_value(max)
            .then((row_data)=>{
            var winners_data = {
                bidder_id : row_data[0]['bidder_id'],
                bidder_name : row_data[0]['bidder_name'],
                bid_value : row_data[0]['bid_value'],
                auction_id : row_data[0]['auction_id']
            } 
                knex.winners_data(winners_data)
                .then(()=>{
                    console.log('inserted');
                    
                })
            })
            }).catch((err)=>{
                res.send(err)
                console.log(err)
        })
    });

                                                        
            
                                         
}
