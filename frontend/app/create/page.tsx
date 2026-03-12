"use client";

import Form from '@/components/Form/Form';
import css from './page.module.css'

const CreateSnippet = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Create Snippet</h1>
      <Form mode='create'/>
    </div>
  );
};

export default CreateSnippet;