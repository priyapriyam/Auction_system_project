var knex = require ("knex")({
    client : 'mysql',
    connection:{
        host :"127.0.0.1",
        user:"root",
        password:"password",
        database: "auction_system"
    },
    useNullAsDefault: true
})
module.exports = knex;

knex.schema.hasTable("Product_table").then((exists)=>{
    if (!exists){
        return knex.schema.createTable("Product_table",(table)=>{
            table.increments ('auction_id'),
            table.string('auction_name'),
            table.integer('auction_price')
        })
    .catch((err)=>{
        console.log(err)
        })
    }
    // return console.log("table has created")
})


knex.schema.hasTable("bid_price_Table").then((exists)=>{
    if (!exists){
        return knex.schema.createTable("bid_price_Table",(table)=>{
            table.increments ('bidder_id'),
            table.string('bidder_name'),
            table.integer('bid_value')
            table.integer("auction_id").unsigned()
            table.foreign('auction_id').references("Product_table.auction_id")

        })
    .catch((err)=>{
        console.log(err)
    })
    }
//     return console.log("table has created")
});

knex.schema.hasTable("Bidders_winners_table").then((exists)=>{
    if (!exists){
    return knex.schema.createTable("Bidders_winners_table",(table)=>{
            table.increments ('bidder_id'),
            table.string('bidder_name'),
            table.integer('bid_value'),
            table.integer("auction_id")
            
        })
    .catch((err)=>{
        console.log(err)
    })
    }
});
