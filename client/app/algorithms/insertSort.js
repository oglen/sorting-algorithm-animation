/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    function insertSort(list) {
        var steps = [];

        function _insertSort_(list) {
            var next,
                len = list.length;

            for (var i = 1; i < len; i++) {
                next = list[i];

                for (var j = i - 1; j >= 0 && next < list[j]; j--) {
                    steps.push({
                        list: list.slice(),
                        compare: [j, i]
                    });
                    list[j + 1] = list[j];
                    steps.push({
                        list: list.slice(),
                        swap: [j + 1]
                    });
                }
                list[j + 1] = next;
                steps.push({
                    list: list.slice(),
                    swap: [j + 1]
                });
            }
        }

        _insertSort_(list);
        return steps;
    }

    return insertSort;
});