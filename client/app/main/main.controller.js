'use strict';

angular.module('pocApp')
  .controller('MainCtrl', function ($scope, $http, $state) {
    $scope.awesomeThings = [
		  {
		  name : 'Core Events: PAGE_VIEW',
		  link : 'https://developer.ibm.com/push/docs/ibm-mobile-web-push-inbox-documentation/4-core-events/page_view/',
		  target : '__blank'
		  }, {
		  name : 'Core Events: SESSION_START',
		  link : 'https://developer.ibm.com/push/docs/ibm-mobile-web-push-inbox-documentation/4-core-events/session_start/',
		  target : '__blank'
		  }, {
		  name : 'Viewing the notification: Simple Display',
		  link : 'https://developer.ibm.com/push/docs/ibm-mobile-web-push-inbox-documentation/2-basic-setup/simple-display-module/',
		  target : '__blank'
		  }, {
		  name : 'Viewing the notification: Simple Inbox',
		  link : 'https://developer.ibm.com/push/docs/ibm-mobile-web-push-inbox-documentation/2-basic-setup/simple-display-module/',
		  target : '__blank'
		  }, {
		  name : 'Resetting IBM Mobile Web Push',
		  link : 'https://developer.ibm.com/push/docs/ibm-mobile-web-push-inbox-documentation/resetting-ibm-mobile-web-push-inbox/',
		  target : '__blank'
		  }  
	  ];

	  $scope.reactorReset = function (argument) {
	  	console.log('Reactor.reset() initiated ...');	
	  	Reactor.reset();
	  	alert('The inbox has been cleared. Please reload the page to get the sample notification for first time viewers.');
	  };

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

  });
