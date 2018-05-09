/* @flow */

import { send } from 'post-robot/src';

import { generateECToken } from '../../tests/common';

window.paypal.Button.render({

    payment() : string {
        return generateECToken();
    },

    onAuthorize() {
        send(window.top.frames[0], 'onAuthorize');
    }

}, document.body).then(button => {

    button.window.paypal.Checkout.contexts.iframe = (window.location.hash === '#iframe');
    button.window.document.querySelector('button').click();
});
