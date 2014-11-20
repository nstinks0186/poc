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
		       
		        // // Message in hand, we can now create HTML elements 
		        // // to populate our ordered list.
		        // var listItem = document.createElement('li');
		        // listItem.classList.add('msg');
		        
		        // var subject = document.createElement('div');
		        // subject.classList.add('msg-subject');
		        // subject.innerHTML = message.subject;
		        // listItem.appendChild(subject);
		        
		        // var body = document.createElement('div');
		        // body.classList.add('msg-body');
		        // body.innerHTML = message.body;
		        // listItem.appendChild(body);
		        
		        // var received = document.createElement('div');
		        // received.classList.add('msg-received');
		        // received.innerHTML = 'Received: ' + 
		        //     new Date(messageDetails.lastReceived).toString();
		        // listItem.appendChild(received);
		        
		        // var deleteButton = document.createElement('span');
		        // deleteButton.classList.add('msg-delete');
		        // deleteButton.innerHTML = '[delete]';
		        // // We need to make clicking the [delete] button
		        // // mark the message as deleted in our history and then
		        // // update the message display so that it's gone.
		        // // As programmed, if you re-receive the message after it's
		        // // been deleted, our saveMessage function from the beginning
		        // // of the demo will mark it as no longer being deleted.
		        // deleteButton.onclick = function(){
		        //     history.update(messageDetails.mid, {deleted:true});
		        //     updateMessageHistoryDisplay();
		        // };
		        // subject.appendChild(deleteButton);
		        
		        // messageHistoryList.appendChild(listItem);
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

			function updateMessageHistoryDisplay(){

		    // Clear the message history list
		    var messageHistoryList =
		        document.querySelector('#messageHistory');
		    messageHistoryList.innerHTML = '';
		    // Using our sorted view, grab the last five messageDetails
		    // objects from the list. Since we want the most recent
		    // message first, the slice is reversed.
		    var mostRecentFive = visibleMessages.getLast(5).reverse();
		    mostRecentFive.forEach(function(messageDetails){
		        
		        // Our history only keeps the message metadata, not the
		        // contents of the messages themselves. Fortunately,
		        // we can use the Reactor Message Archive to pull up the
		        // message object by its Message ID (mid).
		        var message = Reactor.MessageArchive.get(messageDetails.mid);
		       
		        // Message in hand, we can now create HTML elements 
		        // to populate our ordered list.
		        var listItem = document.createElement('li');
		        listItem.classList.add('msg');
		        
		        var subject = document.createElement('div');
		        subject.classList.add('msg-subject');
		        subject.innerHTML = message.subject;
		        listItem.appendChild(subject);
		        
		        var body = document.createElement('div');
		        body.classList.add('msg-body');
		        body.innerHTML = message.body;
		        listItem.appendChild(body);
		        
		        var received = document.createElement('div');
		        received.classList.add('msg-received');
		        received.innerHTML = 'Received: ' + 
		            new Date(messageDetails.lastReceived).toString();
		        listItem.appendChild(received);
		        
		        var deleteButton = document.createElement('span');
		        deleteButton.classList.add('msg-delete');
		        deleteButton.innerHTML = '[delete]';
		        // We need to make clicking the [delete] button
		        // mark the message as deleted in our history and then
		        // update the message display so that it's gone.
		        // As programmed, if you re-receive the message after it's
		        // been deleted, our saveMessage function from the beginning
		        // of the demo will mark it as no longer being deleted.
		        deleteButton.onclick = function(){
		            history.update(messageDetails.mid, {deleted:true});
		            updateMessageHistoryDisplay();
		        };
		        subject.appendChild(deleteButton);
		        
		        messageHistoryList.appendChild(listItem);
		    });
			}

			function resetEverything(){
			    Reactor.reset();
			}

	  }

})();


