/* Replace with your SQL commands */

create table orders(
    order_id serial primary key,
    user_id integer references users(user_id),
    status varchar(20) CHECK (status = 'active' OR status = 'complete')
);