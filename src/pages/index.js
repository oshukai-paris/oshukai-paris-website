import React from 'react';
import OneColumnLayout from '../components/layout';
import Access from '../components/access';
import Blog from '../components/blog';

const IndexPage = () =>
<OneColumnLayout>
    <Access/>
    <Blog/>
</OneColumnLayout>;

export default IndexPage;
