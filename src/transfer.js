import $ from 'jquery';
window.$ = $;
import {parseParamsFromField, registerTxForm} from './utils';

function buildData() {
    return {
        params: parseParamsFromField("#params")
    }
}
registerTxForm($('#form'), buildData);
