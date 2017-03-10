import React from 'react';
import {mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy, stub} from 'sinon'
import ListHeader from '../src/components/todos-list-header';

describe('Test todos-list-header', function() {

  it('render(): <thead><tr><th>Task</th><th>Action</th></tr></thead>', function () {
    const wrapper = shallow(<ListHeader />);
    expect(wrapper.html()).to.equal('<thead><tr><th>Task</th><th>Action</th></tr></thead>');
  });
  
});


