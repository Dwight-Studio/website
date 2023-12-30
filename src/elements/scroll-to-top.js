import {useEffect, useMemo} from 'react';
import {useLocation} from 'react-router-dom';

export default function ScrollToTop() {
    let location = useLocation();

    let hashElement = useMemo(() => {
        let hash = location.hash;
        const removeHashCharacter = (str) => {
            const result = str.slice(1);
            return result;
        };

        if (hash) {
            let element = document.getElementById(removeHashCharacter(hash));
            return element;
        } else {
            return null;
        }
    }, [location]);

    useEffect(() => {
        if (hashElement) {
            hashElement.scrollIntoView({
                behavior: "smooth",
                // block: "end",
                inline: "nearest",
            });
        }
    }, [hashElement]);

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
}