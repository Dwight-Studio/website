INSERT INTO members (id, display_name, first_name, last_name, logo_url, accent_color, socials, page_content)
VALUES ('yinx',
        'Yinx',
        'Kévin',
        'Tollemer',
        'https://static.dwightstudio.fr/dwightstudio/personal/Yinx/logo.png',
        '#6E39D0',
        '{"https://github.com/FoxYinx",
        "https://www.reddit.com/user/WhiteR3d"}',
        '<?xml version="1.0" encoding="utf-8" ?>
        <content/>');

INSERT INTO translations (key, locale, message)
VALUES ('member.yinx.short_description', 'en', 'Student at INSA of Rennes'),
       ('member.yinx.short_description', 'fr', 'Étudiant à l''INSA de Rennes'),
       ('member.yinx.long_description', 'en', 'Earthling since 2003, I escape reality with my computer so I decided to become great in it. I love to solve puzzles and programming is a neat way to do so, so I''m thriving in it. PS: You should check out Advent of Code. PPS: I use Java by the way.'),
       ('member.yinx.long_description', 'fr', 'Terrien depuis 2003, j''échappe à la réalité grâce à mon ordinateur et j''ai donc décidé de devenir un expert en la matière. J''adore résoudre des énigmes et la programmation est un bon moyen de le faire, c''est pourquoi je m''épanouis dans ce domaine. PS : Vous devriez jeter un coup d''œil à Advent of Code. PPS : Au fait, j''utilise Java.');

INSERT INTO contributions (member_id, project_id)
VALUES ('yinx', 'dont-play-together'),
       ('yinx', 'jarmemu');

INSERT INTO translations (key, locale, message)
VALUES ('contribution.yinx.dont-play-together', 'en', 'Full-Stack Developer'),
       ('contribution.yinx.dont-play-together', 'fr', 'Développeur Full-Stack'),
       ('contribution.yinx.jarmemu', 'en', 'Backend Developer'),
       ('contribution.yinx.jarmemu', 'fr', 'Développeur Backend');