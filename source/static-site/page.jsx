import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Layout from './layout';
import Header from '../components/header';
import Footer from '../components/footer';
import Message from '../components/message';

const Page = ({ children, theme, className }) => {
  return (
    <div className={cn('page', className)}>
      <Layout theme={theme}>
        <Header />
        <div className="page__content">{children}</div>
        <Footer />
        <Message />
      </Layout>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.oneOf(
    Object.keys(Layout.themes).map(key => Layout.themes[key])
  )
};

Page.defaultProps = {
  children: null,
  theme: Layout.themes.default
};

Page.themes = Layout.themes;

export default Page;
