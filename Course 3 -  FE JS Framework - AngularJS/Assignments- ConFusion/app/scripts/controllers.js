'use strict'

angular.module('confusionApp')

 .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = true;

                  $scope.dishes= menuFactory.getDishes();


                  $scope.select = function(setTab) {
                      // variable set to what user selects
                      $scope.tab = setTab;

                      if (setTab == 2)
                          $scope.filtText = "appetizer";
                      else if (setTab == 3)
                          $scope.filtText = "mains";
                      else if (setTab == 4)
                          $scope.filtText = "dessert";
                      else
                          $scope.filtText = "";
                  }

                $scope.isSelected = function (checkTab) {
                    return ($scope.tab == checkTab);
                };

            $scope.toggleDetails = function() {
              $scope.showDetails = !$scope.showDetails;
            };
      }])

  .controller('ContactController', ['$scope', function($scope){

    $scope.feedback = {mychannel:"", firstname:"",
                       lastname:"", agree:false, email:""};

    var channels = [{value:"tel", label:"tel"}, 
                    {value:"Email", label:"Email"},
                     {value:"Whatsap", label:"Whatsap"}];

    $scope.channels = channels;
    $scope.invalidChannelSelection = false;


  }])

  .controller('FeedbackController', ['$scope', function($scope){


      console.log($scope.feedback);

        if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
              $scope.invalidChannelSelection = true;
              console.log('incorrect');
          }


    
  }])

  .controller('DetailController', ['$scope', function($scope) {

            $scope.searchText = '';

            $scope.dish={
                          name:'Uthapizza',
                          image: 'images/uthapizza.png',
                          category: 'mains',
                          label:'Hot',
                          price:'3.99',
                          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }

                           ]
                    };

         

            $scope.commentSearch = function(val)
                    {
                      $scope.searchText = val;
                    }

        var now = Date();
        console.log(now);

            $scope.newComment = {author:" ", rating:"5",
                       comment:"",  date:""};

                $scope.newComment.date = now;

            $scope.submitComment = function(text){
                console.log(text);
                $scope.dish.comments.push(text);
                $scope.newComment = {author:"", rating:"5",
                       comment:"",  date:""};
            }

  }])

;
