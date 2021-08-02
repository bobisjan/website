import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';

setup(QUnit.assert);

setApplication(Application.create(config.APP));

start();
