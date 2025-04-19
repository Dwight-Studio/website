INSERT INTO members (id, display_name, first_name, last_name, logo_url, accent_color, socials, page_content)
VALUES ('gamermine',
        'GamerMine',
        'Maxime',
        'Savary',
        'https://static.dwightstudio.fr/dwightstudio/personal/GamerMine/logo.png',
        '#D05539',
        '{"https://github.com/GamerMine",
        "https://www.youtube.com/channel/UCjtjzedWxrnQwRkdSRVccUg",
        "https://www.twitch.tv/gamermine55"}',
        '<?xml version="1.0" encoding="utf-8" ?>
        <content/>');

INSERT INTO translations (key, locale, message)
VALUES ('member.gamermine.short_description', 'en', 'Student at IUT of Le Havre'),
       ('member.gamermine.short_description', 'fr', 'Étudiant à l''IUT de Le Havre'),
       ('member.gamermine.long_description', 'en', 'Currently in work-study at Capgemini, I worked and still work on various projects. I am open to every type of projects and still want to improve my experiences and skills.'),
       ('member.gamermine.long_description', 'fr', 'Actuellement en alternance chez Capgemini, j''ai travaillé et je travaille encore sur différents projets. Je suis ouvert à tout type de projet et je souhaite toujours améliorer mes expériences et mes compétences.');

INSERT INTO contributions (member_id, project_id)
VALUES ('gamermine', 'dont-play-together'),
       ('gamermine', 'demug');

INSERT INTO translations (key, locale, message)
VALUES ('contribution.gamermine.dont-play-together', 'en', 'Full-Stack Developer'),
       ('contribution.gamermine.dont-play-together', 'fr', 'Développeur Full-Stack'),
       ('contribution.gamermine.demug', 'en', 'Developer'),
       ('contribution.gamermine.demug', 'fr', 'Développeur');