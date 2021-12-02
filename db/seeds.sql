INSERT INTO departments (name)
VALUES
    ("Management"),
    ("Architecture"),
    ("Engineering");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("Manager", 150,00, 1),
    ("Architect", 100,000, 2),
    ("Electrical Engineer", 120,000, 3),
    ("Mechanical Engineer", 120,000, 3),
    ("Process Engineer", 130,000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Joey", "Fitzgerald", 1, NULL),
    ("Zachary", "Denton", 2, NULL),
    ("Kristin", "Gurley", 3, 1),
    ("John", "Gaito", 4, NULL),
    ("Brenna", "Brazenski", 5, 1);