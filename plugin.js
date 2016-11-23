/**
 * Copyright (c) 2016, LOVATA - Aleksandra Shinkevich (a.shinkevich@lovata.com). All rights reserved.
 * For licensing, see LICENSE.md
 *
 * A simple ruler plugin for CKEditor (http://ckeditor.com)
 * 
 * Require:
 * - nouislider (github.com/leongersen/noUiSlider) for ranging
 * - jquery (github.com/jquery/jquery) for DOM traversing
 */

window.noUiSlider = require('nouislider');
if (!window.$) {
    window.$ = require('jquery');
}

CKEDITOR.plugins.add('ruler', {
    init: function(editor) {
        let options = {
            values: 21,
            start: 2,
            end: 19,
            step: 0.25,
            width: 800
        };
        let padding = editor.config.padding;
        if (!padding) {
            padding = {
                left: 2,
                right: 19
            };
        }
        editor.addContentsCss(this.path + '../../../ckeditor-ruler/styles/editor-iframe-styles.css');
        editor.on('instanceReady', function() {
            let $ckeContent = $(editor.element.$).siblings('.cke').find('.cke_contents');
            $ckeContent.prepend('<div id="cke_ruler_wrap"></div>');
            let range = document.getElementById('cke_ruler_wrap');
            setPadding([padding.left, padding.right]);
            noUiSlider.create(range, {
                start: [padding.left, padding.right],
                margin: 2,
                connect: [true, false, true],
                behaviour: 'drag',
                step: options.step,
                range: {
                    'min': 0,
                    'max': options.values
                },
                pips: {
                    mode: 'count',
                    values: options.values,
                    density: 2
                }
            });
            range.noUiSlider.on('change', function(values) {
                setPadding(values);
            });
        });
        editor.on('change', function(evt) {
            setPadding();
        });

        function setPadding(values) {
            if (values) {
                padding.left = parseFloat(values[0]);
                padding.right = parseFloat(values[1]);
            }
            let left = (options.width / options.values) * padding.left;
            let right = (options.width / options.values) * (options.values - padding.right);
            editor.document.getBody().setStyle('padding', '20px ' + right + 'px 20px ' + left + 'px');
            editor.fire('updatePadding', padding);
        }
    }
});
