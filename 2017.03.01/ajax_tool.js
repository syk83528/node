/**
 * Created by syk on 17/4/22.
 */
function ajax_get(url, data, success) {
    //老五步
    if (data) {
        url += data;
    } else {

    }
    var ajax = new XMLHttpRequest();

    ajax.open('get', url);

    ajax.send();

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            success(ajax.responseText);
        }
    }

}

function ajax_tool(options) {
    //判断
    var ajax = new XMLHttpRequest();

    if (options.method == 'get') {
        if (options.data) {
            options.url += '?';
            options.url += options.data;
        }else {

        }
        ajax.open('get',options.url);

        ajax.send();
    }else {
        //post
        if (options.data) {
            ajax.open('post',options.url);
            ajax.send(options.data);
        }else {
            ajax.open('post',options.url);
            ajax.send();
        }
    }

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            options.success(ajax.responseText);
        }
    }
}
