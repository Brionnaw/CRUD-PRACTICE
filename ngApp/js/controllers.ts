namespace app.Controllers {
  export class HomeController {
    public movies;
    constructor(
    private movieService:app.Services.MovieService
    ) {
      this.movies = this.movieService.getAll();
      console.log(this.movies);
  }
}

  export class AddMovieController {
      public movie;
      public id;
      public save() {
        let params = {
          title: this.movie.title,
          genre: this.movie.genre
        }
          console.log(params)

      this.movieService.add(params).then(() => {
        this.$state.go('Home');
      })

    }
      constructor (
        private movieService: app.Services.MovieService,
        public $state:ng.ui.IStateService,
      ) {
    }
  }
    export class EditMovieController {
        public title;
        public genre;
        public id;
        public update() {
          let params = {
            title:this.title,
            genre:this.genre,
            id:this.id
      }
          console.log(params)
          this.movieService.edit(params).then(() => {
              this.$state.go('Home');

          })
  }
      constructor(
        private movieService: app.Services.MovieService,
        public $stateParams: ng.ui.IStateParamsService,
        public $state:ng.ui.IStateService,

      ) {
        if($stateParams)  {
          this.id = $stateParams["id"];
           console.log(this.id);
         }

    }
}
  export class DeleteMovieController {
          public id;
          public remove() {
            console.log(this.id)

            this.movieService.delete(this.id).then(() => {
                  this.$state.go('Home');
            })
        }

        constructor(
          public $stateParams: ng.ui.IStateParamsService,
          private movieService: app.Services.MovieService,
          public $state:ng.ui.IStateService,

        ) {
          if($stateParams)  {
            this.id = $stateParams["id"];
            console.log(this.id);
        }
       }
     }
  angular.module('app').controller('HomeController', HomeController);
  angular.module('app').controller('AddMovieController', AddMovieController);
  angular.module('app').controller('EditMovieController', EditMovieController);
  angular.module('app').controller('DeleteMovieController', DeleteMovieController);
}
