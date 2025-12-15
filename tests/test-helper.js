import Application from '#src/app.js';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';
import { getGlobalConfig } from '@embroider/macros/src/addon/runtime';

export function start() {
  getGlobalConfig()['@embroider/macros'] =
    getGlobalConfig()['@embroider/macros'] ?? {};
  getGlobalConfig()['@embroider/macros'].isTesting = true;

  setApplication(
    Application.create({
      rootElement: '#ember-testing',
      autoboot: false,
    }),
  );

  setup(QUnit.assert);
  setupEmberOnerrorValidation();
  qunitStart();
}
