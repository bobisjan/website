import Application from '#src/app.js';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';
import { setTesting } from '@embroider/macros';

export function start() {
  setTesting(true);

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
