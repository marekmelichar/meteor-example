import React from 'react';
import { mount } from 'react-mounter';

import App from './App';
import MainLayout from './layouts/MainLayout';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<App />)
    });
  }
});
