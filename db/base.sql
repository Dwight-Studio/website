CREATE TYPE locale AS ENUM ('en', 'fr');

CREATE TABLE members
(
    id           VARCHAR(32) PRIMARY KEY CHECK (id ~* '[a-z0-9-]+'),
    display_name VARCHAR(32) NOT NULL,
    first_name   VARCHAR(32) NOT NULL,
    last_name    VARCHAR(32) NOT NULL,
    logo_url     TEXT        NOT NULL,
    accent_color VARCHAR(7) CHECK (accent_color ~* '^#[a-f0-9]{6}$'),
    socials      TEXT[]      NOT NULL,
    page_content TEXT        NOT NULL
);

CREATE TYPE project_flag AS ENUM ('none', 'outdated', 'preview');

CREATE TABLE projects
(
    id             VARCHAR(32) PRIMARY KEY CHECK (id ~* '[a-z0-9-]+'),
    display_name   VARCHAR(32)  NOT NULL,
    flag           project_flag NOT NULL,
    logo_url       TEXT         NOT NULL,
    banner_url     TEXT         NOT NULL,
    background_url TEXT         NOT NULL,
    github_id      TEXT         NOT NULL,
    repositories   TEXT[]       NOT NULL,
    page_content   TEXT         NOT NULL
);

CREATE TABLE contributions
(
    member_id  VARCHAR(32) REFERENCES members (id),
    project_id VARCHAR(32) REFERENCES projects (id),
    PRIMARY KEY (project_id, member_id)
);

CREATE TABLE translations
(
    key     VARCHAR(64) NOT NULL,
    locale  locale      NOT NULL,
    message TEXT        NOT NULL,
    PRIMARY KEY (key, locale)
)