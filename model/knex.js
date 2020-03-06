const knex = require('./data_base_connection')

let post_data = (table_details)=>{
    return  knex("Product_table").insert(table_details)
}

let get_data = ()=>{
    return knex.select ("*").from('Product_table').where("auction_id",auction_id)
}

let post_details = (bidders_details)=>{
    return knex("bid_price_Table").insert(bidders_details)

}

let read_data =(id)=>{
    return knex('bid_price_Table').max('bid_value as max').where("auction_id",id)
}

let max_value = (max)=>{
    return knex('bid_price_Table').select('*').where('bid_value',max)
}
let winners_data = (winners_data) =>{
    return knex('Bidders_winners_table').insert(winners_data)

}

module.exports = { post_data, get_data, post_details, read_data , max_value, winners_data}