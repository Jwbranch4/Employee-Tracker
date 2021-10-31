INSERT INTO department (id, department_name)
VALUES
    (1, "Billing"),
    (2, "Sales"),
    (3, "IT");

INSERT INTO roles (id, title, salary, department_id)
VALUES
    (1, "Accountant", "50000", 1),
    (2, "VP of Sales", "65000", 2),
    (3, "Technician", "35000", 3);

INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES
    (1, "Jmaes", "Branch", 3, 1),
    (2, "Jimmy", "John", 1, 2),
    (3, "Chandra", "Branch", 2, 3);
    