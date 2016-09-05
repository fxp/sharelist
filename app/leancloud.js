/**
 * Created by fengxiaoping on 9/2/16.
 */

angular.module('leancloud', ['ngRoute'])

    .service('leanData', function ($http, $q) {

        var ClassQuery = {};
        var ClassRef = {
            createQuery: function () {
                // return ClassQuery.createNew(c);
            }
        };

        return {
            apiPath: 'https://api.leancloud.cn',
            ref: function (className) {
                return Object.create(ClassQuery, {
                    className: className
                })
            }
        }
    });