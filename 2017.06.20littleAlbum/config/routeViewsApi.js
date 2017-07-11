/**
 * Created by syk on 17/6/21.
 */
module.exports = [
    {
        method: 'get',
        path: '/my',
        controller:require('../controller/views/my')
    },
    {
        method: 'get',
        path: '/about',
        controller:require('../controller/views/about')
    },
    {
        method: 'get',
        path: '/login',
        controller:require('../controller/views/login')
    }
];