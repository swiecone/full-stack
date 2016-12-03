angular.module('conFusion.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

    .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;


            $scope.showMenu = false;
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
             $scope.newComment = {author:"", rating:"5",
                       comment:"",  date:""};
            $scope.newComment.date = new Date().toISOString();

             $scope.message="Loading Dish....";

             $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})
              .$promise.then(
                            function(response){
                                $scope.dish = response;
                                var dish = $scope.dish;
                                console.log(dish);
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                                $scope.showDish = false;
                            }
            );

            
        }])

         .controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            
            $scope.submitComment = function () {
                
                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                
                $scope.dish.comments.push($scope.mycomment);

                menuFactory.getDishes().update({id:$scope.dish.id}, $scope.dish);
                
                $scope.commentForm.$setPristine();
                
                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            }
        }])

       // implement the IndexController and About Controller here


        .controller('AboutController', ['$scope', 'corporateFactory', function($scope,corporateFactory) {

          $scope.leadership = corporateFactory.getLeaders();
          console.log($scope.leadership);


        }])

        .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', 'baseURL',function($scope, menuFactory,  corporateFactory, baseURL) {
            
            //$scope.leader = corporateFactory.get({id:3});
            $scope.baseURL = baseURL;
            console.log(baseURL);
            $scope.dishes= menuFactory.getDishes();

           $scope.showDish = false;
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
            console.log(promo);
            $scope.promo = promo;            
          //  console.log(dish);

           $scope.leader = corporateFactory.getLeader(parseInt('0',10));
           console.log($scope.leader);


        }])


        

;
