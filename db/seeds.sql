INSERT INTO departments (name)
VALUES
    ("Architecture"),
    ("Engineering"),
    ("Construction");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("Design Project Manager", 150000, 2),
    ("Architect", 100000, 1),
    ("Electrical Engineer", 120000, 2),
    ("Mechanical Engineer", 120000, 2),
    ("Process Engineer", 130000, 2),
    ("Electrical Superintendent", 140000, 3),
    ("Construction Project Manager", 180,000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Joey", "Fitzgerald", 1, NULL),
    ("Jared", "Wirth", 1, NULL),
    ("Zachary", "Denton", 2, 1),
    ("Bob", "Matthews", 2, 1),
    ("Kristin", "Gurley", 3, 1),
    ("Mike", "Talbot", 3, 1),
    ("John", "Gaito", 4, 2),
    ("Kyle", "Chadwick", 4, 2),
    ("Brenna", "Brazenski", 5, 1),
    ("Kevin", "Wellington", 5, 2),
    ("Rick", "Hatfield", 6, 7),
    ("Leah", "Baker", 7, NULL);