import React from 'react';
import { mount } from 'react-mounter';

import ResolutionsWrapper from './resolutions/ResolutionsWrapper';
import MainLayout from './layouts/MainLayout';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    });
  }
});
