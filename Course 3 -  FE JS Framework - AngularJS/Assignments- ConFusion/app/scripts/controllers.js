'use strict'

angular.module('confusionApp')

  .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = true;

                 $scope.dishes = menuFactory.getDishes();


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

  .controller('DishDetailController', ['$scope', 'menuFactory', function($scope, menuFactory) {

            $scope.searchText = '';
            $scope.dish= menuFactory.getDish(3);


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

  }]);