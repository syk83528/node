/**
 * Created by syk on 17/6/21.
 */
module.exports = [
    {
        method: 'get',
        path: '/a',
        controller:require('../controller/tools/a')
    },
    {
        method: 'get',
        path: '/b',
        controller:require('../controller/tools/b')
    },
    {
        method: 'get',
        path: '/trip_get3and1List.action',
        controller:require('../controller/tools/trip_get3and1List.action.js')
    },
    {
        method: 'all',
        path: '/loginHandle',
        controller:require('../controller/tools/loginHandle')
    }
];