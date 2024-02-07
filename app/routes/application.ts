import Route from '@ember/routing/route';

export type ApplicationRouteModel = ReturnType<ApplicationRoute['model']>;

export default class ApplicationRoute extends Route {
  model() {
    return {
      name: 'Jan Bobisud',
      city: 'Prague',
      project: {
        title: 'Zonky',
        url: 'https://zonky.cz',
      },
      company: {
        title: 'Air Bank',
        url: 'https://airbank.cz',
      },
      gravatar: '7a468faec3b45150e655fb60acd359d8',
      links: [
        {
          title: 'GitHub',
          url: 'https://github.com/bobisjan',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/bobisjan',
        },
        {
          title: 'LinkedIn',
          url: 'https://linkedin.com/in/bobisjan',
        },
      ],
    };
  }
}
