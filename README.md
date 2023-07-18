# app-builder


### How to create a business entity ?

Follow the below steps to create a Business Entity Schema:

1. Open the application on web
2. Login with an Admin a/c
3. Goto menu Developer > App Builder > Business Entity
4. In the Data Table component click on "+Business Entity"
5. In the create Business Entity form in the side pane of the table.
6. Choose the following fields
  a. Choose DB
  b. Choose Root Model and Options
  c. Choose Include Model and Options as required
7. Call Following API(s) 
  a. To get all data
[backend api base url]/business/all/<Business Entity Name>
  b. To get individual data
[backend api base url]/business/individual/<Business Entity Name>
  c. To get count
[backend api base url]/business/count/<Business Entity Schema>

