import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { retrieveMenus } from '../../actions/menu';
import AddressBar from '../../components/search/AddressBar';
import SearchBar from '../../components/search/SearchBar';

class Search extends Component {
  handleFormSubmit({ search, address }) {
    const { criteria, geocoordinates } = this.props;
    this.props.retrieveMenus({ ...criteria, ...geocoordinates, search, address });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="input-group row">
          <Field className="col-md-5" label="Search" name="search" component={SearchBar} />
          <Field className="col-md-5" label="Address" name="address" component={AddressBar} />
          <div className="col-md-2">
            <button action="submit" className="btn btn-primary">
              <FontAwesomeIcon icon="search" /> Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    criteria: state.criteria,
    geocoordinates: state.geocoordinates,
  };
}

export default reduxForm({
  form: 'search',
})(connect(mapStateToProps, { retrieveMenus })(Search));
