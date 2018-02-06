import angular from 'angular';
import ngRoute from 'angular-route';
import MainController from './controllers/MainController';
import routes from './routes';


export default angular.module('main', ['ngRoute'])
.controller('MainController', MainController)
.config(routes)
.name;
