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

            $scope.newComment = {name:"", stars:"",
                       comment:"",  date:""};

            var stars = [{label:"1", value:1},
                            {label:"2", value:2},
                            {label:"3", value:3},
                            {label:"4", value:4},
                            {label:"5", value:5},
                          ];

              $scope.stars = stars;

  }])

;
