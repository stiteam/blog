require.config({
    paths: {
        'bootstrap': 'node_modules/bootstrap/dist/js/bootstrap.min',
        'jQuery': 'node_modules/jquery/dist/jquery.min',
    },
    shim: {
        'jQuery': {
            exports: 'jQuery'
        },
        'bootstrap': {
            deps: ['jQuery']
        }
    },
    packages: [{
        name: 'vue',
        location: 'node_modules/vue',
        main: 'dist/vue.min'
    }, {
        name: 'text',
        location: 'node_modules/text',
        main: 'text'
    }, {
        name: 'css',
        location: 'node_modules/require-css',
        main: 'css.min'
    }, {
        name: 'vue-router',
        location: 'node_modules/vue-router',
        main: 'dist/vue-router.min'
    }, {
        name: 'vuex',
        location: 'node_modules/vuex',
        main: 'dist/vuex.min'
    }, {
        name: 'marked',
        location: 'node_modules/marked',
        main: 'marked.min'
    }, {
        name: 'simplemde',
        location: 'node_modules/simplemde',
        main: 'dist/simplemde.min'
    }, {
        name: 'moment',
        location: 'node_modules/moment',
        main: 'min/moment-with-locales.min'
    }]
});

require(['amd/index']);