'use strict';

angular.module('pocApp')
  .controller('MainCtrl', function ($scope, $http, $state, xtify) {
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

	  $scope.refresh = function() {
	  	$scope.getMessageCount();
	  	$scope.getLastMessages(5);
	  }

	  $scope.messageCount = 0;
	  $scope.getMessageCount = function () {
	  	$scope.messageCount = xtify.getMessageCount();
	  }
	  

	  $scope.messages = [];
	  $scope.getLastMessages = function (count) {
	  	$scope.messages = xtify.getLastMessages(count);
	  	console.log("messages: " + $scope.messages);
	  }
	  

	  $scope.reactorReset = function (argument) {
	  	xtify.resetEverything();
	  	$scope.refresh();
	  };

    $scope.refresh();

		// Reactor.onBeforeMessage(function(messageList){
		// 	var messagesToShow = [];
		// 	for (var i=0; i < messageList.length; i++) {
		// 		var message = messageList[i];
		// 		if(true){
		// 			messagesToShow.push(message);
		// 			console.log(message);

		// 			$scope.$apply(function () {
		// 				$scope.message = JSON.stringify(message);
		// 				$scope.messages.push($scope.message)
	 //        });
		// 		}
		// 	}
		// 	return messagesToShow;
		// });

  });
