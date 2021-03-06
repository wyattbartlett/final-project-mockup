import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/browse-clubs', {
  name: 'Browse_Clubs_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Browse_Clubs_Page' });
  },
});

FlowRouter.route('/add-club', {
  name: 'Add_Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Club_Page' });
  },
});

FlowRouter.route('/edit-club/123', {
  name: 'Edit_Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Club_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
