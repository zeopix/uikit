import addonAPI from '@storybook/addons';

addonAPI.register('yootheme/uikit', storybookAPI => {

    const values = window.parent._storyBookUIkit = {
        defaults: null,
        current: null
    };
    storybookAPI.onStory((kind, story) => {
        if (values.defaults && values.current) {
            Object.assign(values.defaults, values.current)
        }
    });
});
