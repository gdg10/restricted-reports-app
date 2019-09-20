import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, LandingLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import ReportWizard from "./views/ReportWizard";
import Landing from "./views/Landing";
import PropertyLookup from "./views/PropertyLookup";
import Create from './views/Create'

export default [
  {
    path: "/",
    exact: true,
    layout: LandingLayout,
    component: () => <Redirect to="/landing" />
  },
  {
    path: "/landing",
    exact: true,
    layout: LandingLayout,
    component: Landing
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/create",
    layout: DefaultLayout,
    component: Create
  },
  {
    path: "/property-lookup",
    layout: DefaultLayout,
    component: PropertyLookup
  },
  // {
  //   path: "/add-new-post",
  //   layout: DefaultLayout,
  //   component: AddNewPost
  // },
  // {
  //   path: "/errors",
  //   layout: DefaultLayout,
  //   component: Errors
  // },
  // {
  //   path: "/components-overview",
  //   layout: DefaultLayout,
  //   component: ComponentsOverview
  // },
  // {
  //   path: "/tables",
  //   layout: DefaultLayout,
  //   component: Tables
  // },
  {
    path: "/reports",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
