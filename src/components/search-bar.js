import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {
    handleSubmitForm = function({query}) {
        console.log('trying to handle submit for query', query);
        this.props.history.push('/results');
    }

    renderInput(field) {
        return <input type="text" placeholder='Search DailySmarty' {...field.input} />
    }

    render() {
        const { handleSubmit } = this.props;
        return (    
            <form className='search-bar' onSubmit={handleSubmit(this.handleSubmitForm.bind(this))}>
                <Field name='query' component={this.renderInput} />
            </form>
        )
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;