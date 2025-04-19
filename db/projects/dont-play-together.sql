INSERT INTO projects (id, display_name, flag, logo_url, banner_url, background_url, github_id, repositories,
                      page_content)
VALUES ('dont-play-together',
        'Don''t Play Together',
        'outdated',
        'https://static.dwightstudio.fr/dont-play-together/base/png/logo.png',
        'https://static.dwightstudio.fr/dont-play-together/showcase/banner.jpg',
        'https://static.dwightstudio.fr/dont-play-together/showcase/showcase.webm',
        'Dwight-Studio/DPT-Client',
        '{}',
        '<content>
            <Section>
                <Title>Discover Don''t Play Together</Title>
                <Justify>
                    <p>Don''t Play Together is a vote-based interactive game in which you have to complete various
                        platform
                        level while tackling the obstacles that other players put in your way. It''s free,
                        open-source
                        and
                        made using the Pygame library on Python. The game was developed in 2.5 months, back in
                        2020.
                    </p>
                </Justify>
            </Section>
            <Section accented>
                <img src="https://static.dwightstudio.fr/dont-play-together/showcase/editor.jpg" alt="DPT Editor"/>
                <Title>Create your own levels!</Title>
                <p>With our built-in editor, you can create an infinite number of custom levels!</p>
            </Section>
            <Section>
                <img src="https://static.dwightstudio.fr/dont-play-together/showcase/save.jpg"
                     alt="DPT Editor saving"/>
                <Title>Save your creations!</Title>
                <p>Once you''ve edited your level, you can save it using the shortcut CTRL+S, so you can play it
                    again
                    and again, or edit it over and over again...
                </p>
            </Section>
            <Section accented>
                <img src="https://static.dwightstudio.fr/dont-play-together/showcase/play.jpg"
                     alt="DPT Level playing"/>
                <Title>Play now!</Title>
                <Justify>
                    <p>The rules of the game are simple: get to the flag at the end of the level before the set time
                        without
                        dying. However, players can vote between 2 choices to prevent you from winning the game so
                        quickly.
                        You only have 2 life points, so be careful!
                    </p>
                    <p>The game is limitless: you can create your own addons to add content to the game! You can
                        also
                        create
                        your own levels with ease, thanks to the easy-to-use level editor!
                    </p>
                    <p>Please note that the game is still in development, so bugs and crashes are to be expected! If
                        this
                        happens, please let us know on the Dwight Studio Discord.
                    </p>
                </Justify>
            </Section>
        </content>');

INSERT INTO translations (key, locale, message)
VALUES ('project.dont-play-together.short_description', 'en', 'Anti-collaborative '),
       ('project.dont-play-together.short_description', 'fr', 'Jeu Anti-Collaboratif');