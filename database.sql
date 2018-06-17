CREATE TABLE projects(
    id serial primary key,
    project VARCHAR(200)
);

CREATE TABLE entries(
entry VARCHAR(200) NOT NULL,
project_id INT REFERENCES projects,
date DATE DEFAULT CURRENT_DATE,
hours DECIMAL
);

INSERT INTO projects (project)
VALUES 
('Cut the Grass'),
('Fight the Bulls'),
('Kill the Monsters'),
('Help out at the Clinic');

SELECT * FROM entries JOIN projects on project_id = projects.id;

SELECT entry, date, hours, project, entries.id FROM entries JOIN projects on project_id = projects.id;

SELECT projects.id, project, SUM(hours) FROM projects LEFT JOIN entries on project_id = projects.id GROUP BY projects.id ORDER BY projects.id ASC; 

SELECT project, projects.id, SUM(hours) as hours FROM projects LEFT JOIN entries on project_id = projects.id GROUP BY projects.id ORDER BY projects.id ASC ;