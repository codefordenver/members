import React from 'react';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Markdown from '../shared-components/Markdown';

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
interface State {
  tabView: TabViews;
}

class EditableMarkdown extends React.PureComponent<Props, State> {
  state: State = {
    tabView: 'write'
  };

  render() {
    const { value, label, name, editing, onChange } = this.props;
    if (!editing) {
      return <Markdown text={value || ''} />;
    }

    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            indicatorColor="primary"
            value={this.state.tabView}
            onChange={this._changeTab}
          >
            <Tab value="write" label="Write" />
            <Tab value="preview" label="Preview" />
          </Tabs>
        </AppBar>
        {this.state.tabView === 'preview' ? (
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
          />
        )}
      </div>
    );
  }

  _changeTab = (event: React.ChangeEvent<{}>, tabView: TabViews) => {
    this.setState({ tabView });
  };
}
export default EditableMarkdown;
