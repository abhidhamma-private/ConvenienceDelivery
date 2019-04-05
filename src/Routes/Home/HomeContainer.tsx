import React from 'react';
import { Query } from 'react-apollo';
import HomePresenter from './HomePresenter';
import withLayout from 'src/lib/withLayout';
import { HOME_QUERY } from './HomeQueries';

class HomeContainer extends React.Component<any, any, any> {
  public render() {
    return (
      <Query query={HOME_QUERY}>
        {({ loading, error, data }) => {
          console.log('homepresenterdata');

          console.log(data);

          return <HomePresenter data={data} category={this.props.category} />;
        }}
      </Query>
    );
  }
}

export default withLayout(HomeContainer);
