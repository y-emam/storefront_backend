/* Replace with your SQL commands */

create table productsOrders(
    order_id integer references orders(order_id),
    product_id integer references products(product_id),
    quantity INTEGER,
    primary key (order_id, product_id)
);