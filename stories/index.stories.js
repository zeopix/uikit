/* global document */
import {storiesOf} from '@storybook/html';
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs/react';

const stories = storiesOf('UIkit', module);

const values = window.parent._storyBookUIkit;

function getStyleSheet() {
    const suffix = values.current && values.current.isRTL ? '-rtl' : '';
    return {
        UIkit: `https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.6/css/uikit${suffix}.min.css`,
        Theme: `https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.6/css/uikit-core${suffix}.min.css`
    };
}

const opts = Object.keys(getStyleSheet()).reduce((last, curr) => {
    last[curr] = curr;
    return last;
}, {});

if (!values.defaults) {
    values.defaults = {
        isRTL: false,
        style: Object.keys(opts)[0]
    };
    values.current = {};
    Object.assign(values.current, values.defaults);
}

stories.addDecorator(withKnobs);

stories.addDecorator(content => {

    const styleElement = UIkit.util.$('#UIkitStyle');

    values.current.isRTL = boolean('RTL', values.defaults.isRTL);
    values.current.style = select('Style', opts, values.defaults.style);

    window.document.dir = values.current.isRTL ? 'RTL' : 'LTR';
    styleElement.setAttribute('href', getStyleSheet()[values.current.style]);

    return content();
});

const req = require.context('../tests', true, /\.html$/)
req.keys().forEach(file => {
    const content = req(file);
    const scriptRe = /<script>(.*)<\/script>/s;
    const bodyRe = /<body>(.*)<\/body>/s;
    const styleRe = /<style>(.*)<\/style>/s;
    const styleRes = styleRe.exec(content);

    if (styleRes) {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = styleRes[1];
        document.head.appendChild(styleElement);
    }

    const res = bodyRe.exec(content);
    const scriptRes = scriptRe.exec(content);
    const script = '//debugger;\n' + (scriptRes && scriptRes[1].trim());
    const body = res && res[1].trim().replace(scriptRe, '');


    stories.add(file.replace('./', '').replace('.html', ''), () => {

        setImmediate(() => {
            script && eval(script);
            // UIkit.update();
        });

        return body;
    })
});

