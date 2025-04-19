INSERT INTO projects (id, display_name, flag, logo_url, banner_url, background_url, github_id, repositories, page_content)
VALUES ('jarmemu',
        'JArmEmu',
        'none',
        'https://static.dwightstudio.fr/jarmemu/base/svg/logo_text.svg',
        'https://static.dwightstudio.fr/jarmemu/base/svg/splash_background.svg',
        'https://static.dwightstudio.fr/jarmemu/showcase/showcase.webm',
        'Dwight-Studio/JArmEmu',
        '{"https://community.chocolatey.org/packages/JArmEmu",
         "https://flathub.org/fr/apps/fr.dwightstudio.JArmEmu",
         "https://copr.fedorainfracloud.org/coprs/dwight-studio/JArmEmu/",
         "https://aur.archlinux.org/packages/jarmemu",
         "https://deb.dwightstudio.fr/?install=jarmemu"}',
        '<content>
        <Section accented>
            <Title>A Simple ARMv7 simulator written in Java, intended for educational purpose</Title>
            <Subtitle>JArmEmu is a simple simulator with a graphical interface that offers basic control and
                information about a simulated ARMv7 architecture.</Subtitle>
            <br/>
            <VerticalGrid n="3">
                <FeatureCard title="Custom Interpreter" description="Powered by an ARMv7 custom interpreter, with manual and automatic breakpoint system">
                    <FaWaveSquare size="100"/>
                </FeatureCard>
                <FeatureCard title="User Friendly" description="Designed for performance and ease of use, with extensive execution details">
                    <PiHandsClappingFill size="100"/>
                </FeatureCard>
                <FeatureCard title="Modern Interface" description="Features a modern customizable interface with high-contrast coloring, following WCAG standards">
                    <PiAppWindowFill size="100"/>
                </FeatureCard>
                <FeatureCard title="Smart Editor" description="Includes a code highlighting system with contextual auto-completion features">
                    <FaCode size="100"/>
                </FeatureCard>
                <FeatureCard title="Memory Analysis" description="Comes with a Memory and Stack viewer with value change highlighting">
                    <PiMemory size="100"/>
                </FeatureCard>
                <FeatureImageCard title="Free and Open Source" description="Made with ❤ in Open Source, as every other project of Dwight Studio" image="https://static.dwightstudio.fr/jarmemu/LOGO_MONO.svg" alt="JArmEmu Icon" hoverImage="https://static.dwightstudio.fr/jarmemu/LOGO.svg" hoverAlt="JArmEmu Icon" hoverBackground="https://static.dwightstudio.fr/jarmemu/SPLASH_BACKGROUND.svg"/>
            </VerticalGrid>
        </Section>
        <Section>
            <Video src="https://static.dwightstudio.fr/jarmemu/showcase/autocompletion.webm" align="left">
                <CenteredCover>
                    <Title>Context aware editor</Title>
                    <Center>
                        JArmEmu has a context-aware auto-completion and dynamic highlighting system that helps
                        you to write syntactically correct code efficiently
                    </Center>
                </CenteredCover>
            </Video>
        </Section>
        <Section>
            <Video src="https://static.dwightstudio.fr/jarmemu/showcase/showcase.webm" align="left">
                <CenteredCover>
                    <Title>Extensive execution details</Title>
                    <Center>
                        Follow all the details of the execution, with altered values highlighting along with
                        stack and memory monitoring
                    </Center>
                </CenteredCover>
            </Video>
        </Section>
        <Section>
            <Image src="https://static.dwightstudio.fr/jarmemu/showcase/editor.png" alt="JArmEmu Editor">
                <CenteredCover>
                    <Title>Learn by doing</Title>
                    <Center>
                        With JArmEmu, you can discover and learn the basics of ARMv7 Assembly by writing and
                        testing your code directly in the software
                    </Center>
                    <RoundButton text="See instructions"
                                 link="https://github.com/Dwight-Studio/JArmEmu/blob/main/Instructions.md"/>
                </CenteredCover>
            </Image>
        </Section>
    </content>');

INSERT INTO translations (key, locale, message)
VALUES ('project.jarmemu.short_description', 'en', 'Simple ARMv7 simulator written in Java, intended for educational purpose'),
       ('project.jarmemu.short_description', 'fr', 'Simulateur ARMv7 écrit en Java, pensé pour l''enseignement');