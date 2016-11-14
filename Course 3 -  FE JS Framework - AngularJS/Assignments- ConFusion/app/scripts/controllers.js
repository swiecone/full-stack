'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;


            $scope.showMenu = true;
            $scope.message = "Loading the menu...";

            $scope.dishes = menuFactory.getDishes().query(
                function(response) {
                    $scope.dishes = response;
                    $scope.showMenu  = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status+" "+response.statusText;
                    console.log($scope.message);
                    $scope.showMenu  = false;

                });
                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.showDetails = true;
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };

             $scope.showPrices = true;
            $scope.togglePrices = function() {
                $scope.showPrices = !$scope.showPrices;
            }

        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

             $scope.showDish = true;
             $scope.message="Loading Dish....";

             $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})
              .$promise.then(
                            function(response){
                                $scope.dish = response;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                                $scope.showDish = false;
                            }
            );     
           
           $scope.newcomment = {rating:5, comment:"", author:"", date:""};

           $scope.submitComment = function () {
                                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                                $scope.dish.comments.push($scope.mycomment);

                menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
                                $scope.commentForm.$setPristine();
                                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            }

        }])

        

       // implement the IndexController and About Controller here


        .controller('AboutController', ['$scope', 'corporateFactory', function($scope,corporateFactory) {

          $scope.leadership = corporateFactory.getLeaders();
          console.log($scope.leadership);


        }])

        .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {
            $scope.dishes= menuFactory.getDishes();

           $scope.showDish = true;
           $scope.message = "Special Dish loading...";  
           
           $scope.dish = menuFactory.getDishes().get({id:0})
             .$promise.then(
                            function(response){
                                $scope.dish = response;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                                $scope.showDish = false;
                            });

            var promo = menuFactory.getPromotion(parseInt('0',10));
            $scope.promo = promo;            
          //  console.log(dish);

           $scope.leader = corporateFactory.getLeader(parseInt('0',10));
           console.log($scope.leader);


        }])


        

;
