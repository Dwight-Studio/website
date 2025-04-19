INSERT INTO projects (id, display_name, flag, logo_url, banner_url, background_url, github_id, repositories, page_content)
VALUES ('demug',
        'DeMuG',
        'preview',
        'https://static.dwightstudio.fr/demug/showcase/logo.png',
        'https://static.dwightstudio.fr/demug/showcase/splash_background.svg',
        'https://static.dwightstudio.fr/demug/showcase/showcase.webm',
        'Gamermine/DeMuG',
        '{}',
        '<content>
            <Section accented>
                <Title>A Cross platform GameBoy emulator written in C++</Title>
                <Subtitle>DeMug is a GameBoy emulator, allowing you to play your favorite GameBoy games on all
                    platforms.</Subtitle>
            </Section>
        </content');

INSERT INTO translations (key, locale, message)
VALUES ('project.demug.short_description', 'en', 'Cross platform GameBoy emulator written in C++'),
       ('project.demug.short_description', 'fr', 'Émulateur multiplateforme pour GameBoy écrit en C++');