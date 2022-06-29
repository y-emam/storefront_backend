/* Replace with your SQL commands */

create table products (
    product_id serial primary key,
    name varchar(100),
    price decimal,
    category varchar(100) default NULL
);