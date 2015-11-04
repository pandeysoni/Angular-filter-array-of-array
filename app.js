console.clear();

var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {

  $scope.query = '';

  $scope.items = [{
     category: 'TV',
    data: [{
      title: 'title',
      path: 'some data1',
    }, {
      title: 'title-SD',
      path: 'some data2'
    }, {
      title: 'title-HD',
      path: 'some data3'
    }, {
      title: 'title-Trailer 1',
      path: "some data4"
    }, {
      title: 'title-Trailer 2',
      path: "some data5"
    }, {
      title: 'title-Trailer 3',
      path: "Ssome data6"
    }, {
      title: 'The Vampire Diaries ',
      path: 'some data7'
    }, {
      title: 'The Vampire Diaries -SD',
      path: 'some data8'
    }, {
      title: 'The Vampire Diaries -HD',
      path: 'some data9'
    }, {
      title: 'The Vampire Diaries -Trailer 1',
      path: 'some data10'
    }]
  }, {
    category: 'LIVE',
    data: [{
      title: 'title - Live Show',
      path: 'some data11'
    }, {
      title: 'title  - Live Show',
      path: 'some data11'
    }]
  }];

});
