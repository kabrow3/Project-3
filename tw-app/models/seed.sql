insert into movies (title, imdbID)
values ('A Clockwork Orange','tt0066921'),
('Butch Cassidy and the Sundance Kid','tt0064115'), ('The Girl with the Dragon Tattoo','tt1568346'),
('The Girl with the Dragon Tattoo','tt1132620'), ('The Kite Runner','tt0419887'),
('Splice','tt1017460'), ('Mysterious Skin','tt0370986'), 
('Silent House','tt1767382'), ('Bates Motel','tt2188671'),
('Boys Don''t Cry','tt0171804'), ('Kick-Ass 2','tt1650554'),
('Kill Bill: Vol. 1', 'tt0266697'),('Chocolat','tt0241303'),
('Black Swan','tt0947798'), ('American Psycho','tt0144084'), ('Law Abiding Citizen','tt1197624'),
('Criminal Minds','tt0452046'),
('Hick','tt1205558'), ('Law & Order: Special Victims Unit','tt0203259'),
('American Horror Story','tt1844624');


 insert into users (id, username, email, password)
 values (1, 'rherd', 'rob.a.herd@gmail.com', '$2b$12$wBmqPpvmBpqLYFMgq7oUM.CqT8zzkmue2H3AITMwBoek8est749Xe');

 insert into triggers (name)
values('Eating Disorders'), ('Police Brutality'), ('R*pe'), ('Su*c*de/Self-H*rm'), ('Flashing Lights/Strobe Effect'), ('Sexism'), ('Racism/Prejudice'), ('Domestic Violence'), 
('Gunfire/Gun Violence'), ('Racism/Prejudice'), ('Warfare');

 insert into blurbs (blurb, UserId, MovieImdbID, TriggerId)
values ('multiple graphic depictions of rape', 1, 'tt0066921', 3),
('sexual violence and coercian treated in a joking manner', 1, 'tt0064115', 6),
('graphic and long rape scene', 1, 'tt1568346', 3),
('rape scene, similar to the english movie of the same name',1, 'tt1132620', 3),
('rape and victim shaming', 1, 'tt0419887', 3),
('graphic rape scene', 1, 'tt1017460', 3),
('child sexual abuse', 1, 'tt0370986', 3),
('sexual abuse', 1, 'tt1767382', 3),
('graphic rape scene in pilot', 1, 'tt2188671', 3),
('graphic rape scene', 1, 'tt0171804', 3),
('attempted rape', 1, 'tt1650554', 3),
('rape, extreme violence', 1, 'tt0266697', 3),
('domestic violence', 1, 'tt0241303', 8),
('self-harm, suicide, sexual assault', 1, 'tt0947798',4),
('gore, sexualized violence', 1, 'tt0144084', 8),
('rape, torture, gore', 1, 'tt1197624', 3),
('just about everything', 1, 'tt0452046', 9),
('implied rape scene, kidnapping, sexualized violence', 1, 'tt1205558', 3),
('rape - the show is centered on it', 1, 'tt0203259', 3),
('rape', 1, 'tt1844624', 3);
