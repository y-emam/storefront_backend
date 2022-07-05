# Working with the API

## Endpoints

#### Products

- Index: GET (/api/products)
- Show: GET (/api/products/show?name=<product_name>)
- Create [token required]: POST (/api/products/create) with body of new product 
- [OPTIONAL] Top 5 most popular products : GET (/api/products/top5)
- [OPTIONAL] Products by category (args: product category): GET (/api/products/category?category=<product_category>)

#### Users

- Index [token required]: GET (/api/user)
- Show [token required]: Get (/api/user/show?firs_name=<enter the first name>&last_name=<enter the last name>)
- Create N[token required]: POST (/api/user/create) with body of new user

#### Orders

- Current Order by user (args: user id)[token required]: GET (/api/order/userOrders?id=<user_id>)
- [OPTIONAL] Completed Orders by user (args: user id)[token required]: GET (/api/order/completedOrders?id=<user_id>)
- create an order: POST (/api/order/createOrder/) with order object in the body of request

## Data Shapes

#### Product

- product_id: Integer/Primary/auto-increment
- name: varchar
- price: integer
- [OPTIONAL] category: carchar

#### User

- user_id: Integer/Primary/auto-increment 
- firstName: varchar
- lastName: varchar
- password: text

#### Orders

- order_id: Integer/Primary/auto-increment
- user_id: integer/ foregin key
- status (active or complete): varchar
  
####productsOrders
  
- order_id: Integer/Primary_key/ foreign key
- producgt_id: integer/ primar key/ foreign key
- quantity: integer
