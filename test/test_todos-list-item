import React from 'react';
import {mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy, stub} from 'sinon'
import TodosList from '../src/components/todos-list';
import CreateTodo from '../src/components/create-todo';
import TodosItem from '../src/components/todos-list-item';
import App from '../src/components/app';

describe('Test todos-list-item', function() {
  var isToggleTaskCalled,isDeleteTaskCalled,isSaveTaskCalled=false;
  let fakeToggleTask = function(task){isToggleTaskCalled=true;};
  let fakeDeleteTask = function(task){isDeleteTaskCalled=true;};
  let fakeSaveTask = function(task){isSaveTaskCalled=true;};
  let fakeTask = 'Hello';
  const fakeProps={toggleTask:fakeToggleTask , deleteTask: fakeDeleteTask, saveTask:fakeSaveTask};

  before('none', function() {
    // runs before all tests in this block
  });

  after('none', function() {
    // runs after all tests in this block
  });

  it('Constructor with state {isEditing: false}.', function () {
    const wrapper = shallow(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    expect(wrapper.instance().state['isEditing']).to.equal(false);
  });
  
  it('renderTaskSection():this.state.isEditing=false will return a <td> and style ={color:"red",cursor: "pointer"}, and onClick bind fakeToggleTask function.', function () {
    const wrapper = shallow(<TodosItem task={fakeTask} isCompleted={false} toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    let result = wrapper.instance().renderTaskSection();
    expect(result.type).to.equal('td');
    expect(result.props['style']).to.deep.equal({color:'red',cursor: 'pointer'});
    expect(result.props['onClick'].name).to.equal(fakeToggleTask.bind(this).name);
    expect(result.props['children']).to.equal(fakeTask);
  });

  it('renderTaskSection():this.state.isEditing=false, with a isCompleted={true} will return a <td> and style ={color:"green",cursor: "pointer"}, and onClick bind fakeToggleTask function.', function () {
    const wrapper = shallow(<TodosItem task={fakeTask} isCompleted={true} toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    let result = wrapper.instance().renderTaskSection();
    expect(result.type).to.equal('td');
    expect(result.props['style']).to.deep.equal({color:'green',cursor: 'pointer'});
    expect(result.props['onClick'].name).to.equal(fakeToggleTask.bind(this).name);
    expect(result.props['children']).to.equal(fakeTask);
  });

  it('renderTaskSection():this.state.isEditing=true, will return a <td> with a <form>', function () {
    const wrapper = shallow(<TodosItem task={fakeTask} toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    wrapper.instance().state.isEditing=true;
    let result = wrapper.instance().renderTaskSection();
    expect(result.type).to.equal('td');
    let form=result.props['children'];
    expect(form.type).to.equal('form');
    expect(form.props['onSubmit'].name).to.equal('bound onSaveClick');
    let input=form.props['children'];
    expect(input.type).to.equal('input');
    expect(input.props['type']).to.equal('text');
    expect(input.props['defaultValue']).to.equal(fakeTask);
    expect(input.ref).to.equal('editInput');
    
  });  
  
  it('renderActionsSection() with state.isEditing = false, will render Edit and Delete button.', function () {
    const wrapper = shallow(<TodosItem task={fakeTask} toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    let result = wrapper.instance().renderActionsSection();
    expect(result.type).to.equal('td');
    expect(result.props['children']).to.have.length(2);
    let editButton = result.props['children'][0];
    let delButton = result.props['children'][1];
    expect(editButton.type).to.equal('button');
    expect(editButton.props['children']).to.equal('Edit');
    expect(editButton.props['onClick'].name).to.equal('bound onEditClick');
    expect(delButton.type).to.equal('button');
    expect(delButton.props['children']).to.equal('Delete');
    expect(delButton.props['onClick'].name).to.equal('bound fakeDeleteTask');
  });

  it('renderActionsSection() with state.isEditing = true, will render Save and Cancel button.', function () {
    const wrapper = shallow(<TodosItem task={fakeTask} toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    wrapper.instance().state['isEditing']=true;
    let result = wrapper.instance().renderActionsSection();
    expect(result.type).to.equal('td');
    expect(result.props['children']).to.have.length(2);
    let saveButton = result.props['children'][0];
    let cancelButton = result.props['children'][1];
    expect(saveButton.type).to.equal('button');
    expect(saveButton.props['children']).to.equal('Save');
    expect(saveButton.props['onClick'].name).to.equal('bound onSaveClick');
    expect(cancelButton.type).to.equal('button');
    expect(cancelButton.props['children']).to.equal('Cancel');
    expect(cancelButton.props['onClick'].name).to.equal('bound onCancelClick');
   });
  
  it('render(): with a <tr> including renderTaskSection() and renderActionsSection() sections.', function () {
   
    //var spyTask = spy(TodosItem.prototype,'renderTaskSection');
    //var spyAction = spy(TodosItem.prototype,'renderActionsSection');
    const wrapper = shallow(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    var spyTask = spy(wrapper.instance(),'renderTaskSection');
    var spyAction = spy(wrapper.instance(),'renderActionsSection');
    var result = wrapper.instance().render();
    expect(result.type).to.equal('tr');
    expect(result.props['children']).to.have.length(2);
    expect(spyTask.calledOnce).to.equal(true);
    expect(spyAction.calledOnce).to.equal(true);
  });
  
  it('validateInput(task): with empty task will return "Please enter a task."', function () {
    const wrapper = mount(<CreateTodo />);
    let task=null;
    expect(wrapper.instance().validateInput(task)).to.equal("Please enter a task.");
  });
  
  it('onEditClick(): the state "isEditing" will be set to true.', function () {
    const wrapper = shallow(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    wrapper.instance().onEditClick();
    expect(wrapper.instance().state).to.deep.equal({isEditing:true});
   });

  it('onCancelClick(): the state "isEditing" will be set to false', function () {
    const wrapper = shallow(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} />);
    wrapper.instance().onCancelClick();
    expect(wrapper.instance().state).to.deep.equal({isEditing:false});
   });
   
  it('onSaveClick(event): setProps "saveTask" a fake function, then sumbit with input value "Hello", expect state will be {isEditing:false}, isFakeSaveCalled.', function () {
    var event = document.createEvent('Event');
    event.initEvent('fake', true, true);
    
    const tmpTable = global.document.createElement('table');
    const tmpTbody = global.document.createElement('tbody');
    tmpTable.appendChild(tmpTbody);

    const wrapper = mount(<TodosItem toggleTask={fakeToggleTask} deleteTask={fakeDeleteTask} saveTask={fakeSaveTask} />,{ attachTo:tmpTbody});
    wrapper.setState({isEditing:true});
    wrapper.instance().onSaveClick(event);
    expect(wrapper.instance().state).to.deep.equal({isEditing:false});
    expect(isSaveTaskCalled).to.equal(true);
  });

});


