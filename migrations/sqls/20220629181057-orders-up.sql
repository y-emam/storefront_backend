/* Replace with your SQL commands */

create table orders(
    order_id serial primary key,
    product_id integer references products(product_id),
    user_id integer references users(user_id),
    quantity INTEGER,
    status varchar(20) CHECK (status = 'active' OR status = 'complete')
);