# app-builder


### How to create a business entity ?

Follow the below steps to create a Business Entity Schema:

1. Open the application on web
2. Login with an Admin a/c
3. Goto menu Developer > App Builder > Business Entity
4. In the Data Table component click on "+Business Entity"
5. In the create Business Entity form in the side pane of the table.
6. Choose the following fields
    1. Choose DB
    2. Choose Root Model and Options
    3. Choose Include Model and Options as required
7. Call Following API(s) 
    1. To get all data
[backend api base url]/business/all/<Business Entity Name>
    2. To get individual data
[backend api base url]/business/individual/<Business Entity Name>
    3. To get count
[backend api base url]/business/count/<Business Entity Schema>

