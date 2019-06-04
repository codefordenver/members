import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Markdown from '../shared-components/Markdown';
import { useUniqueId } from '../utils/hooks';

interface Props {
  value: string | null;
  label: string;
  name: string;
  editing: boolean;
  onChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
  >;
}
type TabViews = 'write' | 'preview';

const EditableMarkdown: React.FC<Props> = ({
  value,
  label,
  name,
  editing,
  onChange
}) => {
  const [tabView, setTab] = useState('write');
  const changeTab = useCallback(
    (event: React.ChangeEvent<{}>, tabView: TabViews) => {
      setTab(tabView);
    },
    []
  );
  const textId = useUniqueId();

  if (!editing) {
    return <Markdown text={value || ''} />;
  }

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs indicatorColor="primary" value={tabView} onChange={changeTab}>
          <Tab value="write" label="Write" />
          <Tab value="preview" label="Preview" />
        </Tabs>
      </AppBar>
      {tabView === 'preview' ? (
        <Markdown text={value || ''} />
      ) : (
        <TextField
          name={name}
          label={label}
          value={value || ''}
          onChange={onChange}
          multiline
          rowsMax={100}
          fullWidth
          id={`editable-markdown-${textId}`}
        />
      )}
    </div>
  );
};
export default EditableMarkdown;
