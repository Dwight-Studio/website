import {useEffect, useMemo} from 'react';
import {redirect, useLocation} from 'react-router-dom';

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
            if (element) {
                console.log(location.pathname)
                return {element: element, path: location.pathname};
            } else {
                return null;
            }
        } else {
            return null;
        }
    }, [location]);

    useEffect(() => {
        if (hashElement) {
            hashElement.element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
            redirect(hashElement.path);
        }
    }, [hashElement]);

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
}