import React from 'react';
import LoadingIndicator from '../sections/LoadingIndicator';

async function fetchData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
  // TODO: Figure out how we want to handle errors
}

/**
 * A Higher Order Component for getting data from a REST api url to a component.
 * Loosely inspired by heroku's react-refetch, but simpler
 * @param {*} mapFetchToPropsFn - a function that takes in props and returns an object where the
 * keys are the props to pass in, and the values are the urls to get the data for the corresponding prop
 * @returns (Component) => WrappedComponent
 */
const withRestData = mapFetchToPropsFn => Component => {
  return class WithRestData extends React.PureComponent {
    state = { loading: true, data: {} };
    fetchToPropsMap = {};

    componentWillMount() {
      this._fetchAllData(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this._fetchAllData(nextProps);
    }

    render() {
      if (this.state.loading) {
        return <LoadingIndicator />;
      }

      return <Component {...this.props} {...this.state.data} />;
    }

    async _fetchAllData(props) {
      const newFetchToPropsMap = mapFetchToPropsFn(props);
      const dataPromises = {};

      Object.entries(newFetchToPropsMap).forEach(([prop, url]) => {
        if (this.fetchToPropsMap[prop] !== url) {
          dataPromises[prop] = fetchData(url);
        }
      });
      this.fetchToPropsMap = newFetchToPropsMap;

      if (Object.values(dataPromises).length > 0) {
        const newData = await Object.entries(dataPromises).reduce(
          async (data, [prop, dataPromise]) => {
            data[prop] = await dataPromise;
            return data;
          },
          {}
        );
        this.setState(prevState => ({
          loading: false,
          data: {
            ...prevState.data,
            ...newData
          }
        }));
      }
    }
  };
};

export default withRestData;
