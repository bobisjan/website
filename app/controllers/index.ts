import Controller from '@ember/controller';
import type { ApplicationRouteModel } from '../routes/application';

export default class IndexController extends Controller {
  declare model: ApplicationRouteModel;
}
