/*
group: Eksempelgruppe
name: Landing Page
path: /landing-page
*/

import React from 'react';

import Page from '../../page';
import AdvancedForm from '../../../components/advanced-form';

import content from './landing-page.json';

const LandingPage = () => (
  <Page className="landing-page">
    <h1>{content.title}</h1>
    <AdvancedForm form={content.form} />
  </Page>
);

LandingPage.propTypes = {};

export default LandingPage;
