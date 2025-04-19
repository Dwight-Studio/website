INSERT INTO members (id, display_name, first_name, last_name, logo_url, accent_color, socials, page_content)
VALUES ('deleranax',
        'Deleranax',
        'Alexandre',
        'Leconte',
        'https://static.dwightstudio.fr/dwightstudio/personal/Deleranax/logo.png',
        '#D8D8D8',
        '{"https://github.com/Deleranax",
        "https://www.youtube.com/@deleranax",
        "https://twitter.com/Deleranax"}',
        '<?xml version="1.0" encoding="utf-8" ?>
        <content/>');

INSERT INTO translations (key, locale, message)
VALUES ('member.deleranax.short_description', 'en', 'Student at INSA of Rennes'),
       ('member.deleranax.short_description', 'fr', 'Étudiant à l''INSA de Rennes'),
       ('member.deleranax.long_description', 'en', 'Portal 2 fanatic and bit of a Rust enjoyer. Currently a student at the INSA Engineering School of Rennes, specializing in Cyber-Security and Cloud Computing.'),
       ('member.deleranax.long_description', 'fr', 'Fanatique de Portal 2 et un peu amateur de Rust. Actuellement étudiant à l''INSA de Rennes, spécialisé dans la Cybersécurité et le Cloud Computing.');

INSERT INTO contributions (member_id, project_id)
VALUES ('deleranax', 'dont-play-together'),
       ('deleranax', 'jarmemu');

INSERT INTO translations (key, locale, message)
VALUES ('contribution.deleranax.dont-play-together', 'en', 'Full-Stack Developer'),
       ('contribution.deleranax.dont-play-together', 'fr', 'Développeur Full-Stack'),
       ('contribution.deleranax.jarmemu', 'en', 'UX/UI Designer'),
       ('contribution.deleranax.jarmemu', 'fr', 'Concepteur UX/UI');