import { Component } from 'react';
import PropTypes from 'prop-types';
import { VscEye } from 'react-icons/vsc';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {request: ''};

    handleRequest = evt => {
        this.setState({request: evt.currentTarget.value.toLowerCase().trim() });
    };

    handleSubmit = evt => {
        const { request } = this.state;
        evt.preventDefault();
        this.props.onSubmit(request);
      };


    render() {
        return(
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.SearchFormButton}>
                        <VscEye style={{ margin: '5px auto' }} />
                    </button>

                 <input
                    className={s.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handleRequest}
                />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default Searchbar;