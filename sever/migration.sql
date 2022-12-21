DROP TABLE IF EXISTS menu CASCADE;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS address;




CREATE TABLE menu (
    id serial,
    PRIMARY KEY (id),
    name text

);
CREATE TABLE items (
    id serial,
    name text,
    price text,
    img text ,
    menu_id int,
    FOREIGN KEY (menu_id)
    REFERENCES menu(id) ON DELETE CASCADE
);

CREATE TABLE cart (
    id serial,
    name text,
    price text,
    img text 
);
CREATE TABLE address (
    id serial,
    firstName text,
    lastName text,
    street text,
    state text,
    zipcode int,
    phoneNumber int

);