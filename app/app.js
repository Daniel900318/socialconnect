angular.module('myApp', ['ui.router', 'ngScrollTo'])
	
	.config(function($stateProvider, $urlRouterProvider) {
	  
	    $stateProvider
	    // home routing
		  .state('moju', {
		      url: "/home",
		      templateUrl: "app/home/home.html",
		      controller: 'homeController',
		    })
		  // juice routing
		  .state('juice', {
		      url: "/juice",
		      templateUrl: "app/juice/juice.home.html",
		      controller: 'juiceController',
		    })
		  // buy routing
		  .state('buy', {
		      url: "/buy",
		      templateUrl: "app/buy/buy.home.html",
		      controller: 'buyController',
		    })
		  // basket routing
		  .state('basket', {
		      url: "/basket",
		      templateUrl: "app/basket/basket.home.html",
		      controller: 'basketController',
		    })
		  // PAPER routing
		  .state('paper', {
		      url: "/paper",
		      templateUrl: "app/paper/paper.home.html",
		      controller: 'paperController',
		    })
		  // blog1 routing
		  .state('blog1', {
		      url: "/blog1",
		      templateUrl: "app/blog/blog1.html",
		      controller: 'paperController',
		    })
		  // blog2 routing
		  .state('blog2', {
		      url: "/blog2",
		      templateUrl: "app/blog/blog2.html",
		      controller: 'paperController',
		    })
		  // blog3 routing
		  .state('blog3', {
		      url: "/blog3",
		      templateUrl: "app/blog/blog3.html",
		      controller: 'paperController',
		    })


		  .state('discover.main', {
		      url: "/discover.main",
		      templateUrl: "app/discover/discover.home.main.html",
		      controller: 'discoverController',
		    })
		  .state('discover.radar', {
		      url: "/discover.radar",
		      templateUrl: "app/discover/discover.home.radar.html",
		      controller: 'discoverController',
		    })

		  // photo routing
		  .state('photos', {
		      url: "/photos",
		      templateUrl: "app/photos/photos.home.html",
		      controller: 'photoController',
		    })
		  .state('photohomeeffectgrid', {
		      url: "/photohomeeffectgrid",
		      templateUrl: "app/photos/photo.home.effectgridshow.html",
		      controller: 'photoController',
		    })

		  // sub views
		  .state('photohomeeffectgrid.grid', {
		      url: "/photohomeeffectgrid.grid",
		      templateUrl: "app/photos/photo.home.effectgridshow.grid.html",
		      controller: 'photoController',
		    })
		  
		  // select slider
		  .state('photohomeeffectgrid.1', {
		      url: "/photohomeeffectgrid.1",
		      templateUrl: "assets/slider/1/slider1.html",
		      controller: 'photoController',
		    })
		  .state('photohomeeffectgrid.2', {
		      url: "/photohomeeffectgrid.2",
		      templateUrl: "assets/slider/2/slider2.html",
		      controller: 'photoController',
		    })
		  .state('photohomeeffectgrid.3', {
		      url: "/photohomeeffectgrid.3",
		      templateUrl: "assets/slider/3/slider3.html",
		      controller: 'photoController',
		    })
		  .state('photohomeeffectgrid.4', {
		      url: "/photohomeeffectgrid.4",
		      templateUrl: "assets/slider/4/slider4.html",
		      controller: 'photoController',
		    })
		  .state('photohomeeffectgrid.5', {
		      url: "/photohomeeffectgrid.5",
		      templateUrl: "assets/slider/5/slider5.html",
		      controller: 'photoController',
		    })
		  .state('photohomeeffectgrid.6', {
		      url: "/photohomeeffectgrid.6",
		      templateUrl: "assets/slider/6/slider6.html",
		      controller: 'photoController',
		    })

		  // slider routing end

		  // profile		  
		  .state('profilehome', {
		      url: "/profilehome",
		      templateUrl: "app/profile/profile.home.html",
		      controller: 'profileController',
		    })

		  .state('profilehome.About You', {
		      url: "/profilehome.aboutyou",
		      templateUrl: "app/profile/patials/profile.aboutyou.html",
		      controller: 'profileController',
		    })
		  .state('profilehome.Start page', {
		      url: "/profilehome.Start page",
		      templateUrl: "app/profile/patials/profile.startpage.html",
		      controller: 'profileController',
		    })
		  .state('profilehome.Message', {
		      url: "/profilehome.Message",
		      templateUrl: "app/profile/patials/profile.message.html",
		      controller: 'profileController',
		    })
		  .state('profilehome.Friends', {
		      url: "/profilehome.friends",
		      templateUrl: "app/profile/patials/profile.friends.html",
		      controller: 'profileController',
		    })
		  .state('profilehome.Your Contacts', {
		      url: "/profilehome.contacts",
		      templateUrl: "app/profile/patials/profile.contacts.html",
		      controller: 'profileController',
		    })
		  .state('profilehome.Favourits', {
		      url: "/profilehome.favourits",
		      templateUrl: "app/profile/patials/profile.favourits.html",
		      controller: 'profileController',
		    })
		  .state('profilehome.Visitor', {
		      url: "/profilehome.visitor",
		      templateUrl: "app/profile/patials/profile.visitor.html",
		      controller: 'profileController',
		    })
		  .state('profilehome.Who like you', {
		      url: "/profilehome.wholikeyou",
		      templateUrl: "app/profile/patials/profile.wholikeyou.html",
		      controller: 'profileController',
		    })
		  .state('profilehome.Who you pleasest', {
		      url: "/profilehome.whoyoupleasest",
		      templateUrl: "app/profile/patials/profile.whoyoupleasest.html",
		      controller: 'profileController',
		    })
		  .state('profilehome.Explained to favourits', {
		      url: "/profilehome.explainedtofavourits",
		      templateUrl: "app/profile/patials/profile.explainedtofavourits.html",
		      controller: 'profileController',
		    })
		  .state('profilehome.Match', {
		      url: "/profilehome.match",
		      templateUrl: "app/profile/patials/profile.match.html",
		      controller: 'profileController',
		    })
		  // event routing
		  .state('events', {
		      url: "/events",
		      templateUrl: "app/events/events.home.html",
		      controller: 'eventsController',
		    })
		  // location routing
		  .state('location', {
		      url: "/location",
		      templateUrl: "app/location/location.home.html",
		      controller: 'locationController',
		    })

		  // hotel routing
		  .state('hotel', {
		      url: "/hotel",
		      templateUrl: "app/hotel/hotel.home.html",
		      controller: 'hotelController',
		    })

		  // music routing
		  .state('music', {
		      url: "/music",
		      templateUrl: "app/music/music.home.html",
		      controller: 'musicController',
		    })

		  // restauraunt
		  .state('restauraunt', {
		      url: "/restauraunt",
		      templateUrl: "app/restauraunt/restauraunt.home.html",
		      controller: 'restaurauntController',
		    })
		    // 
		    .state('state2.list', {
		      url: "/list",
		        templateUrl: "partials/state2.list.html",
		        controller: function($scope) {
		          $scope.things = ["A", "Set", "Of", "Things"];
		        }
		      });

		    $urlRouterProvider.otherwise('/home');

		    })