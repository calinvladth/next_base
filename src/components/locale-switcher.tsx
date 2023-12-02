import {useRouter} from 'next/router';

export default function LocaleSwitcher() {
    const {locales, locale, route, push} = useRouter();

    return (
        <select value={locale}  name="language" onChange={e => push(route, route,{locale: e.target.value})}>
            {locales?.map(language => <option value={language} key={language}>{language}</option>)}
        </select>
    );
}