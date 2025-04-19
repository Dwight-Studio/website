import RoundButton from "@/elem/buttons/round-button";
import "./jarmemu.css"
import {PiHandsClappingFill, PiMemory, PiAppWindowFill} from "react-icons/pi";
import {Section, Subtitle, Title} from "@/elem/base";
import {FeatureIconCard, FeatureImageCard} from "@/elem/grids/features-grid";
import {FaCode, FaWaveSquare} from "react-icons/fa6";
import {VerticalGrid} from "@/elem/grids/grid";

export default function JArmEmu() {
    // @ts-ignore
    return (<content>
        <Section accented>
            <Title>A Simple ARMv7 simulator written in Java, intended for educational purpose</Title>
            <Subtitle>JArmEmu is a simple simulator with a graphical interface that offers basic control and
                information about a simulated ARMv7 architecture.</Subtitle>
            <br/>
            <VerticalGrid n="3">
                <FeatureIconCard title="Custom Interpreter" description="Powered by an ARMv7 custom interpreter, with manual and automatic breakpoint system">
                    <FaWaveSquare size="100"/>
                </FeatureIconCard>
                <FeatureIconCard title="User Friendly" description="Designed for performance and ease of use, with extensive execution details">
                    <PiHandsClappingFill size="100"/>
                </FeatureIconCard>
                <FeatureIconCard title="Modern Interface" description="Features a modern customizable interface with high-contrast coloring, following WCAG standards">
                    <PiAppWindowFill size="100"/>
                </FeatureIconCard>
                <FeatureIconCard title="Smart Editor" description="Includes a code highlighting system with contextual auto-completion features">
                    <FaCode size="100"/>
                </FeatureIconCard>
                <FeatureIconCard title="Memory Analysis" description="Comes with a Memory and Stack viewer with value change highlighting">
                    <PiMemory size="100"/>
                </FeatureIconCard>
                <FeatureImageCard title="Free and Open Source" description="Made with ❤ in Open Source, as every other project of Dwight Studio" image="https://static.dwightstudio.fr/jarmemu/LOGO_MONO.svg" alt="JArmEmu Icon" hoverImage="https://static.dwightstudio.fr/jarmemu/LOGO.svg" hoverAlt="JArmEmu Icon" hoverBackground="https://static.dwightstudio.fr/jarmemu/SPLASH_BACKGROUND.svg"/>
            </VerticalGrid>
        </Section>
    </content>)
}