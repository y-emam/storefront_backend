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
- Show [token required]: POST (/api/user/show) with body of first_name and last_name
- Create N[token required]: POST (/api/user/create) with body of new user

#### Orders

- Current Order by user (args: user id)[token required]: GET (/api/order/userOrders?id=<user_id>)
- [OPTIONAL] Completed Orders by user (args: user id)[token required]: GET (/api/order/completedOrders?id=<user_id>)

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
