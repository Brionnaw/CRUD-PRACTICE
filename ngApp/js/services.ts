namespace app.Services {

export class MovieService{
    public MovieResource;
    public EditResource;
    public DeleteResource;
    public add(movie) {
    console.log(movie)
      return this.MovieResource.save(movie).$promise
      }
      public getAll(){
        return this.MovieResource.query();
      }
      public edit(movie){
          console.log(movie)
          return this.EditResource.save(movie).$promise

      }
      public delete(movie){
        console.log(movie)
      return this.DeleteResource.remove({id:movie}).$promise
      }

      constructor(
        private $resource: ng.resource.IResourceService)
        {
          this.EditResource = $resource('/api/movies/edit')
          this.MovieResource = $resource('/api/movies/:id')
          this.DeleteResource = $resource('/api/movies/delete/:id')
          }
  }

  angular.module('app').service('movieService', MovieService);

}
