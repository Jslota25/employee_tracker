USE employee_tracker_db;

INSERT INTO departments (dept_name)
VALUES ("Accounting");

INSERT INTO roles (title, salary, dept_id)
VALUES ("Manager", 10000, 123);

INSERT INTO roles (title, salary, dept_id)
VALUES ("Bookkeeper", 5000, 456);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Lennon", 1, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Paul", "McCartney", 2, null);