import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID || '');
};

export const logPageView = () => {
    // console.log(`Logging pageview for ${window.location.pathname}`);
    ReactGA.set({page: window.location.pathname});
    ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category: string, action: string, label?: string, value?: number) => {
    // console.log({category, action, label, value})
    ReactGA.event({
        category,
        action,
        label,
        value,
    });
};