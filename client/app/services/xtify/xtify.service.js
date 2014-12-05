'use strict';

(function (argument) {

	angular.module('pocApp')
	  .service('xtify', xtifyService);

	function xtifyService($q) {
			var history = Reactor.MessageDetails;
			var customComparators = null;

      var self = this;
			self.resetEverything = resetEverything;
			self.getMessageCount = getMessageCount;
			self.getLastMessages = getLastMessages;

			var eventUnoValueSource = function () { return "Event data here ..." };
			var eventUno = new Reactor.Event("EVENT_UNO", eventUnoValueSource);
			var eventUnoType = 'click';
			var eventUnoCSSSelector = ".xtify-event-uno";
			Reactor.EventManager.registerEvent(eventUnoCSSSelector, eventUnoType, eventUno);

			function getMessageCount () {
				return $q(function(resolve, reject) {
					var visibleMessages = history.getSortedView(["lastReceived"],
			                                               customComparators,
			                                      _filterOutDeletedAndExpired);
			    resolve(visibleMessages.count());
			  });
			}

			function getLastMessages(count) {
				var visibleMessages = history.getSortedView(["lastReceived"],
		                                               customComparators,
		                                      _filterOutDeletedAndExpired);
				var mostRecent = visibleMessages.getLast(count).reverse();
				console.log('xtify.getLastMessages.mostRecent: ' + mostRecent);
				var lastMessages = [];
				mostRecent.forEach(function(messageDetails){
		        var message = Reactor.MessageArchive.get(messageDetails.mid);
		        lastMessages.push(message);
		    });

				return lastMessages;
			}

			function _filterOutDeletedAndExpired(messageDetails){
			    var expired = false;
			    if(messageDetails.expirationDate != null) {
			        var now = new Date().getTime();
			        expired = now > messageDetails.expirationDate;
			    }
			    return (!expired) && (!messageDetails.deleted);
			}

			function resetEverything(){
			    Reactor.reset();
			}

	  }

})();


