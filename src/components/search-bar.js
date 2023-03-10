import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Field, reduxForm } from 'redux-form';


class SearchBar extends Component {
    handleSubmitForm = function({query}) {
        this.props.onSubmit(query);
    }

    renderInput(field) {
        return <input type="text" placeholder="&#xf002; Search DailySmarty" {...field.input} />
    }

    render() {
        const { handleSubmit } = this.props;
        return (    
            <form className={`search-bar search-bar__${this.props.page}`} onSubmit={handleSubmit(this.handleSubmitForm.bind(this))}>
                <div className='search-bar-wrapper'>
                    <Field name='query' component={this.renderInput} />
                    <p>Press return to search</p>
                </div>
            </form>
        )
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;