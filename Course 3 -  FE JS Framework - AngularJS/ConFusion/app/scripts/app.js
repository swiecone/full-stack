'use strict'

angular.module('confusionApp', [])

  .controller('MenuController', [ '$scope', function($scope){

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = true;

                 $scope.dishes=[
                 {
                   name:'Uthapizza',
                   image: 'images/uthapizza.png',
                   category: 'mains',
                   label:'Hot',
                   labeltype: 'danger',
                   price:'4.99',
                   description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                   comment: ''
                },
                {
                   name:'Zucchipakoda',
                   image: 'images/zucchipakoda.png',
                   category: 'appetizer',
                   label:'tasty!',
                   labeltype: 'info',
                   price:'1.99',
                   description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                   comment: ''
                },
                {
                   name:'Vadonut',
                   image: 'images/vadonut.png',
                   category: 'appetizer',
                   label:'recommended',
                   labeltype: 'primary',
                   price:'1.99',
                   description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                   comment: ''
                },
                {
                   name:'ElaiCheese Cake',
                   image: 'images/elaicheesecake.png',
                   category: 'dessert',
                   label:'1/2 price!',
                   labeltype: 'warning',
                   price:'2.99',
                   description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                   comment: ''
                },

                 {
                   name:'Paella Valenciana',
                   image: 'images/paella.jpg',
                   category: 'mains',
                   label:'healthy',
                   labeltype: 'success',
                   price:'8.99',
                   description:'A spanish dish that is the best in the world.  Highly recommended!',
                   comment: ''
                }
                ];


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

    $scope.feedback = {mychannel:"", firstName:"",
                       lastName:"", agree:false, email:""};


  }])

  .controller('FeedbackController', ['$scope', function($scope){

    
  }])

;